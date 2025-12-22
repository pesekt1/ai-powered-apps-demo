import fs from 'fs';
import path from 'path';
import { llmClient } from '../llm/client';
import template from '../llm/prompts/chatbot.txt';
import { conversationRepository } from '../repositories/conversation.repository';

// Domain/context knowledge loaded from a markdown file and injected into the prompt template.
// This keeps the “park facts” editable without changing code.
const parkInfo = fs.readFileSync(
   path.join(__dirname, '..', 'llm', 'prompts', 'WonderWorld.md'),
   'utf-8'
);

// Final system/instructions text sent to the model, composed from:
// - a reusable template (chatbot.txt)
// - the current parkInfo content (WonderWorld.md)
const instructions = template.replace('{{parkInfo}}', parkInfo);

// Service-level response shape returned to controllers.
// `id` is the provider response id; `message` is the user-facing text.
type ChatResponse = {
   id: string;
   message: string;
};

// Public interface
export const chatService = {
   /**
    * Sends a user prompt to the LLM and returns the generated message.
    * The service is responsible for:
    * - composing the model instructions
    * - maintaining conversation continuity (via stored previous response id)
    * - mapping provider output into a stable app-facing shape
    */
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await llmClient.generateText({
         // Chosen model for this use case (cost/latency/quality tradeoff).
         model: 'gpt-4o-mini',

         // System-like instructions that include park context and behavior rules.
         instructions,

         // The current user message.
         prompt,

         // Lower temperature = more deterministic/consistent responses.
         temperature: 0.2,

         // Hard cap on response length to control cost and verbosity.
         maxTokens: 200,

         // Links this request to the prior model response for the same conversation,
         // enabling multi-turn continuity without resending full history.
         previousResponseId:
            conversationRepository.getLastResponseId(conversationId),
      });

      // Store the latest response id so the next call can continue the conversation.
      conversationRepository.setLastResponseId(conversationId, response.id);

      // Normalize provider response into our app's return type.
      return {
         id: response.id,
         message: response.text,
      };
   },
};
