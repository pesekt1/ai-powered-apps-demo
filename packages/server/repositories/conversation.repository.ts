// Implementation detail

/**
 * In-memory store keyed by conversationId -> lastResponseId.
 * NOTE: This is process-local and non-persistent:
 * - cleared on server restart
 * - not shared across multiple server instances
 * Use a DB/redis-backed implementation if you need durability or horizontal scaling.
 */
const conversations = new Map<string, string>();

export const conversationRepository = {
   /**
    * Returns the last known responseId for a given conversation.
    * Use this to resume/continue a conversation with an upstream provider that
    * expects a "previous response" identifier.
    */
   getLastResponseId(conversationId: string) {
      // Undefined means we have no stored response id for this conversation yet.
      return conversations.get(conversationId);
   },

   /**
    * Persists (in-memory) the most recent responseId for a conversation.
    * Call this after successfully receiving a new response from the provider.
    */
   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
