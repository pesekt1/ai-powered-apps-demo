import { llmClient } from '../llm/client';
import template from '../llm/prompts/summarize-reviews.txt';
import { reviewRepository } from '../repositories/review.repository';

/**
 * Review domain service.
 *
 * Responsibilities:
 * - Orchestrate cache lookup -> data fetch -> LLM call -> persistence.
 * - Keep controller thin (HTTP concerns only) and repository storage-focused.
 */
export const reviewService = {
   /**
    * Produce a short summary for the given product’s reviews.
    *
    * Cache-first behavior:
    * - Returns an existing non-expired summary when available.
    * - Otherwise generates a new summary from recent reviews and stores it with a TTL.
    *
    * @param productId - Product primary key.
    * @returns Summary text.
    */
   async summarizeReviews(productId: number): Promise<string> {
      // Cache-first: avoid calling the LLM if we already have a fresh summary.
      const existingSummary =
         await reviewRepository.getReviewSummary(productId);
      if (existingSummary) {
         return existingSummary;
      }

      // Pull a bounded number of recent reviews to control cost/latency and context size.
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      // Prompt templating keeps prompt text centralized and versionable.
      const prompt = template.replace('{{reviews}}', joinedReviews);

      const { text: summary } = await llmClient.generateText({
         model: 'gpt-4.1',
         prompt: prompt,
         // Lower temperature for more stable, less “creative” summaries.
         temperature: 0.2,
         // Hard cap to prevent unexpectedly large responses.
         maxTokens: 500,
      });

      // Persist the generated summary so subsequent requests don’t re-call the LLM.
      await reviewRepository.storeReviewSummary(productId, summary);

      return summary;
   },
};
