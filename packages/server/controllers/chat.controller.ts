import type { Request, Response } from 'express';
import z from 'zod';
import { chatService } from '../services/chat.service';

// Input validation schema for the /chat endpoint.
// Keeps the controller robust by rejecting malformed requests early.
const chatSchema = z.object({
   // User message to send to the chat service/provider.
   // trim(): avoids accepting whitespace-only prompts.
   // min/max: basic guardrails to prevent empty or excessively large payloads.
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required.')
      .max(1000, 'Prompt is too long (max 1000 characters'),
   // Client-provided conversation identifier (UUID) used to continue context.
   conversationId: z.string().uuid(),
});

// Controller methods are the HTTP boundary:
// - validate/shape inputs
// - delegate business logic to services
// - translate outcomes into HTTP responses
export const chatController = {
   async sendMessage(req: Request, res: Response) {
      // Validate request body without throwing (safeParse returns a result object).
      const parseResult = chatSchema.safeParse(req.body);
      if (!parseResult.success) {
         // 400 = client error (invalid input). Send structured Zod errors.
         res.status(400).json(parseResult.error.format());
         return;
      }

      try {
         // NOTE: We could use `parseResult.data` (already validated/typed by Zod),
         // but we keep `req.body` to avoid changing existing runtime behavior.
         const { prompt, conversationId } = req.body;

         // Delegate to the service layer (e.g., LLM/provider + persistence).
         const response = await chatService.sendMessage(prompt, conversationId);

         // API intentionally returns only the assistant message (not the provider response id).
         // (The id is used server-side to maintain continuity.)
         res.json({ message: response.message });
      } catch (error) {
         // 500 = unexpected server error. Avoid leaking internal details to clients.
         res.status(500).json({ error: 'Failed to generate a response.' });
      }
   },
};
