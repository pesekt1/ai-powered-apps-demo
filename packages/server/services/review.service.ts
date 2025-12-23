import { llmClient } from '../llm/client';
import templatePrompt from '../llm/prompts/summarize-reviews.txt';
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
      // Cache-first: avoid calling the LLM if we already have a fresh summary in the database.
      const existingSummary =
         await reviewRepository.getReviewSummary(productId);
      if (existingSummary) {
         return existingSummary;
      }

      // Pull a bounded number of recent reviews to control cost/latency and context size.
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      // Add the reviews string into the prompt template.
      const prompt = templatePrompt.replace('{{reviews}}', joinedReviews);

      // Call the LLM to generate a new summary.
      const { text: summary } = await llmClient.generateText({
         model: 'gpt-4.1',
         prompt: prompt,
         // Lower temperature for more stable, less “creative” summaries.
         temperature: 0.2,
         // Hard cap to prevent unexpectedly large responses.
         maxTokens: 500,
      });

      // Persist the generated summary in the database, so subsequent requests don’t re-call the LLM.
      await reviewRepository.storeReviewSummary(productId, summary);

      return summary;
   },

   /**
    * Produce a short summary for the given product’s reviews using the open-source model.
    *
    * Cache-first behavior:
    * - Returns an existing non-expired summary when available.
    * - Otherwise generates a new summary from recent reviews and stores it with a TTL.
    *
    * @param productId - Product primary key.
    * @returns Summary text.
    */
   async summarizeReviewsOpensource(productId: number): Promise<string> {
      // Cache-first: avoid calling the LLM if we already have a fresh summary in the database.
      const existingSummary =
         await reviewRepository.getReviewSummary(productId);
      if (existingSummary) {
         return existingSummary;
      }

      // Pull a bounded number of recent reviews to control cost/latency and context size.
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      // Call the open-source LLM to generate a new summary.
      const summary = await llmClient.summarizeReviews(joinedReviews);

      // Persist the generated summary in the database, so subsequent requests don’t re-call the LLM.
      await reviewRepository.storeReviewSummary(productId, summary);

      return summary;
   },
};
