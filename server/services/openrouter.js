export const sendOpenRouterChat = async ({ apiKey, messages }) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "AI Travel Concierge"
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages,
      temperature: 0.7,
      max_tokens: 1000
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail =
      data?.error?.message ||
      `OpenRouter request failed with status ${response.status}.`;
    throw new Error(detail);
  }

  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("No response content returned.");
  }

  return reply;
};
