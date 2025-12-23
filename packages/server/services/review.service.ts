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
    * @param summaryKey - Summary model key ('openai' or 'opensource').
    * @returns Summary text.
    */
   async summarizeReviews(
      productId: number,
      summaryKey: string
   ): Promise<string> {
      // Cache-first: avoid calling the LLM if we already have a fresh summary in the database.
      const existingSummary = await reviewRepository.getReviewSummary(
         productId,
         summaryKey
      );
      if (existingSummary) {
         return existingSummary;
      }

      // Pull a bounded number of recent reviews to control cost/latency and context size.
      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      // Generate a new summary via the LLM client based on the specified model key.
      const summary = await this.getSummary(joinedReviews, summaryKey);

      // Persist the generated summary in the database, so subsequent requests don’t re-call the LLM.
      await reviewRepository.storeReviewSummary(productId, summary, summaryKey);

      return summary;
   },
   /**
    *
    * Generate a summary for the given joined reviews string using the specified model key.
    * @param joinedReviews
    * @param summaryKey
    * @returns
    */
   async getSummary(
      joinedReviews: string,
      summaryKey: string
   ): Promise<string> {
      if (summaryKey === 'opensource')
         return await llmClient.summarizeReviews(joinedReviews, 'tinyllama');

      // else default to OpenAI summarization.
      const prompt = templatePrompt.replace('{{reviews}}', joinedReviews);
      const { text: summary } = await llmClient.generateText({
         model: 'gpt-4.1',
         prompt: prompt,
         // Lower temperature for more stable, less “creative” summaries.
         temperature: 0.2,
         // Hard cap to prevent unexpectedly large responses.
         maxTokens: 500,
      });
      return summary;
   },
};
