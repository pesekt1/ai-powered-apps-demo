import { PrismaClient, type Review } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

/**
 * Review persistence + summary cache access.
 *
 * Notes:
 * - Reviews are treated as immutable content entries.
 * - Summaries are treated as a cache with TTL (time-to-live).
 */
export const reviewRepository = {
   /**
    * Get reviews for a product, newest-first.
    *
    * @param productId - Product primary key.
    * @param limit - Optional maximum number of reviews to return.
    * @returns Reviews ordered by `createdAt` descending.
    */
   async getReviews(productId: number, limit?: number): Promise<Review[]> {
      return prisma.review.findMany({
         where: { productId },
         // Newest-first so we summarize the most recent sentiment/feedback.
         orderBy: { createdAt: 'desc' },
         // Optional cap to bound payload size and downstream LLM context.
         take: limit,
      });
   },

   /**
    * Store (or replace) the cached summary for a product.
    *
    * Uses upsert to guarantee a single summary row per product.
    * The stored summary is assigned an expiry time to enable regeneration.
    *
    * @param productId - Product primary key.
    * @param summary - Generated summary text.
    */
   storeReviewSummary(productId: number, summary: string, model: string) {
      const now = new Date();
      const expiresAt = dayjs().add(7, 'days').toDate();

      const createData = {
         content: summary,
         expiresAt,
         // Track when the summary was generated (useful for debugging/analytics).
         generatedAt: now,
         productId,
         model,
      };

      // Upsert ensures exactly one summary row per (productId, model).
      // Requires schema: @@unique([productId, model]) on Summary.
      return prisma.summary.upsert({
         where: { productId_model: { productId, model } },
         create: createData,
         update: {
            content: summary,
            expiresAt,
            generatedAt: now,
            model, // ensure existing rows get normalized too
         },
      });
   },

   /**
    * Read the cached summary for a product+model if it is still fresh.
    *
    * NOTE: With `productId @unique` in the schema, there can only be one summary per product total,
    * so writing a different `model` will overwrite the previous one.
    */
   async getReviewSummary(
      productId: number,
      model: string
   ): Promise<string | null> {
      const summary = await prisma.summary.findFirst({
         where: {
            productId,
            model,
            expiresAt: { gt: new Date() },
         },
         select: { content: true },
      });

      return summary ? summary.content : null;
   },
};
