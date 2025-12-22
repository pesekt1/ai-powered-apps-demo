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
   storeReviewSummary(productId: number, summary: string) {
      const now = new Date();
      // TTL-based caching: summary is considered stale after 7 days.
      const expiresAt = dayjs().add(7, 'days').toDate();
      const data = {
         content: summary,
         expiresAt,
         // Track when the summary was generated (useful for debugging/analytics).
         generatedAt: now,
         productId,
      };

      // Upsert ensures exactly one summary row per product (create if missing, update if present).
      return prisma.summary.upsert({
         where: { productId },
         create: data,
         update: data,
      });
   },

   /**
    * Read the cached summary for a product if it is still fresh.
    *
    * @param productId - Product primary key.
    * @returns Summary text if a non-expired cached entry exists; otherwise `null`.
    */
   async getReviewSummary(productId: number): Promise<string | null> {
      const summary = await prisma.summary.findFirst({
         where: {
            // Only return summaries that haven't expired (fresh cache entry).
            AND: [{ productId }, { expiresAt: { gt: new Date() } }],
         },
      });

      return summary ? summary.content : null;
   },
};
