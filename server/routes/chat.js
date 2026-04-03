import express from "express";
import { sendOpenRouterChat } from "../services/openrouter.js";

const normalizeConversation = (conversation, systemPrompt) => {
  if (!Array.isArray(conversation) || conversation.length === 0) {
    return {
      error: "conversation must be a non-empty array.",
      status: 400
    };
  }

  const normalized = conversation
    .filter(
      (item) =>
        item &&
        typeof item.role === "string" &&
        typeof item.content === "string"
    )
    .map((item) => ({
      role: item.role,
      content: item.content
    }));

  if (normalized.length === 0) {
    return {
      error: "conversation must include role/content strings.",
      status: 400
    };
  }

  if (normalized[0].role !== "system") {
    normalized.unshift({ role: "system", content: systemPrompt });
  }

  return { messages: normalized };
};

export const buildChatRouter = ({ apiKey, systemPrompt }) => {
  const router = express.Router();

  router.post("/api/chat", async (req, res) => {
    if (!apiKey) {
      return res.status(500).json({
        error: "Missing OPENROUTER_API_KEY in environment."
      });
    }

    const { conversation } = req.body || {};
    const { messages, error, status } = normalizeConversation(
      conversation,
      systemPrompt
    );

    if (error) {
      return res.status(status).json({ error });
    }

    try {
      const reply = await sendOpenRouterChat({ apiKey, messages });
      return res.json({ reply });
    } catch (err) {
      return res.status(502).json({
        error: err?.message || "Network error while contacting OpenRouter."
      });
    }
  });

  return router;
};
