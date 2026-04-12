import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { SYSTEM_PROMPT } from "./config/systemPrompt.js";
import { buildChatRouter } from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 3000;
const IS_VERCEL = process.env.VERCEL === "1" || process.env.VERCEL === "true";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, "..", "client");
dotenv.config({ path: path.join(__dirname, "..", ".env") });
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.use(express.json({ limit: "1mb" }));
app.use(buildChatRouter({
  apiKey: OPENROUTER_API_KEY,
  systemPrompt: SYSTEM_PROMPT
}));

app.use(express.static(clientPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

if (!IS_VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
