import type { Request, Response } from 'express';
import { productRepository } from '../repositories/product.repository';
import { reviewRepository } from '../repositories/review.repository';
import { reviewService } from '../services/review.service';

/**
 * Review HTTP controller.
 *
 * Responsibilities:
 * - Validate/parse request inputs.
 * - Enforce resource existence at the HTTP boundary.
 * - Delegate business logic to services and persistence to repositories.
 */
export const reviewController = {
   /**
    * GET handler: return reviews and any existing cached summary (if present).
    *
    * Does not generate a new summary; consumers can call the summarize endpoint explicitly.
    */
   async getReviews(req: Request, res: Response) {
      const productId = Number(req.params.id);
      const model = req.query.model as 'openai' | 'opensource';

      // Validate path param early to avoid unnecessary DB work.
      if (isNaN(productId)) {
         res.status(400).json({ error: 'Invalid product ID.' });
         return;
      }

      // Ensure the resource exists before fetching dependent data.
      const product = await productRepository.getProduct(productId);
      if (!product) {
         res.status(404).json({ error: 'Product does not exist.' });
         return;
      }

      // This endpoint is read-only: return reviews plus any *cached* summary if available.
      const reviews = await reviewRepository.getReviews(productId);
      const summary = await reviewRepository.getReviewSummary(productId, model);

      res.json({
         summary,
         reviews,
      });
   },

   /**
    * POST handler: generate (or reuse) a summary for reviews.
    *
    * Note: This is only a GET handler if you explicitly wire it as GET in routes.
    *
    * Guardrails:
    * - Validates product existence.
    * - Requires at least one review before attempting summarization.
    */
   async summarizeReviews(req: Request, res: Response) {
      const productId = Number(req.params.id);
      const summaryKey = req.query.model as 'openai' | 'opensource' | undefined;

      // Validate path param early to avoid unnecessary DB/LLM work.
      if (isNaN(productId)) {
         res.status(400).json({ error: 'Invalid product ID.' });
         return;
      }

      // Avoid generating summaries for non-existent products.
      const product = await productRepository.getProduct(productId);
      if (!product) {
         res.status(400).json({ error: 'Invalid product' });
         return;
      }

      // Don't call the LLM if there's nothing to summarize.
      const reviews = await reviewRepository.getReviews(productId, 1);
      if (!reviews.length) {
         res.status(400).json({ error: 'There are no reviews to summarize.' });
         return;
      }

      // Service encapsulates cache lookup + LLM generation + persistence.

      const summary = await reviewService.summarizeReviews(
         productId,
         summaryKey || 'openai'
      );
      res.json({ summary });
   },
};
