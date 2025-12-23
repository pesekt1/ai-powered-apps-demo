import { InferenceClient } from '@huggingface/inference';
import { Ollama } from 'ollama';
import OpenAI from 'openai';
import summarizePrompt from '../llm/prompts/summarize-reviews-ollama.txt';

// OpenAI client used for the main "generateText" path (Responses API).
// Requires OPENAI_API_KEY in the environment.
const openAIClient = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

// Hugging Face inference client (kept for alternative/back-up models or experiments).
// NOTE: currently unused in this module.
const inferenceClient = new InferenceClient(process.env.HF_TOKEN);

// Ollama client used for local/offline model calls (e.g., quick summaries).
// In Docker: set OLLAMA_HOST=http://ollama:11434
// On host:  set OLLAMA_HOST=http://127.0.0.1:11434 (default fallback below)
const ollamaClient = new Ollama({
   host:
      process.env.OLLAMA_HOST ??
      process.env.OLLAMA_BASE_URL ??
      'http://127.0.0.1:11434',
});

type GenerateTextOptions = {
   model?: string;
   prompt: string;
   instructions?: string;
   temperature?: number;
   maxTokens?: number;
   /**
    * Provider-specific conversation continuation token.
    * For OpenAI Responses API this maps to `previous_response_id` and allows multi-turn
    * continuity without resending full message history.
    */
   previousResponseId?: string;
};

type GenerateTextResult = {
   id: string;
   text: string;
};

export const llmClient = {
   async generateText({
      model = 'gpt-4.1',
      prompt,
      instructions,
      temperature = 0.2,
      maxTokens = 300,
      previousResponseId,
   }: GenerateTextOptions): Promise<GenerateTextResult> {
      // OpenAI Responses API:
      // - `input` is the user prompt
      // - `instructions` behaves like a system/developer message
      // - `max_output_tokens` caps output length
      // - `previous_response_id` links to the prior response for continuity
      const response = await openAIClient.responses.create({
         model,
         input: prompt,
         instructions,
         temperature,
         max_output_tokens: maxTokens,
         previous_response_id: previousResponseId,
      });

      // Normalize provider response to `{ id, text }` for callers.
      return {
         id: response.id,
         text: response.output_text,
      };
   },

   async summarizeReviews(reviews: string, model: string) {
      // Uses a small local model via Ollama for cheap/fast summarization.
      // `summarizePrompt` is the system instruction; `reviews` is user content.
      const response = await ollamaClient.chat({
         model: model,
         messages: [
            {
               role: 'system',
               content: summarizePrompt,
            },
            {
               role: 'user',
               content: reviews,
            },
         ],
      });

      return response.message.content;
   },
};
