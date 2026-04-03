export const createChatController = (dom, buildSystemMessage) => {
  let conversation = [{ role: "system", content: buildSystemMessage() }];

  const scrollToBottom = () => {
    if (!dom.chatWindow) return;
    dom.chatWindow.scrollTop = dom.chatWindow.scrollHeight;
  };

  const addMessage = (role, content) => {
    if (!dom.chatWindow) return;
    if (dom.promptCenter && dom.promptCenter.style.display !== "none") {
      dom.promptCenter.style.display = "none";
      dom.chatWindow.classList.add("active");
    }

    const bubble = document.createElement("div");
    bubble.className = `message ${role}`;

    if (content === "...") {
      bubble.innerHTML = `
        <div class="thinking-loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      `;
      bubble.id = "thinking-bubble";
    } else {
      bubble.textContent = content;
    }

    dom.chatWindow.appendChild(bubble);
    scrollToBottom();
  };

  const setStatus = (text, state = "idle") => {
    if (!dom.statusEl) return;
    dom.statusEl.textContent = text;
    dom.statusEl.dataset.state = state;
  };

  const updateSystemMessage = () => {
    conversation[0] = { role: "system", content: buildSystemMessage() };
  };

  const sendConversation = async () => {
    updateSystemMessage();
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversation })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data?.error || "Request failed.");
    }

    return data.reply || "No response returned.";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userPrompt = dom.promptInput?.value.trim();
    if (!userPrompt) return;

    dom.promptInput.value = "";
    dom.promptInput.style.height = "auto";

    conversation.push({ role: "user", content: userPrompt });
    addMessage("user", userPrompt);
    addMessage("assistant", "...");

    try {
      const reply = await sendConversation();
      const thinkingBubble = document.getElementById("thinking-bubble");
      if (thinkingBubble) thinkingBubble.remove();

      conversation.push({ role: "assistant", content: reply });
      addMessage("assistant", reply);
    } catch (error) {
      const thinkingBubble = document.getElementById("thinking-bubble");
      if (thinkingBubble) thinkingBubble.remove();

      addMessage(
        "assistant",
        error?.message || "Something went wrong. Please try again."
      );
    }
  };

  const clearChat = () => {
    conversation = [{ role: "system", content: buildSystemMessage() }];
    if (dom.chatWindow) {
      dom.chatWindow.innerHTML = "";
      dom.chatWindow.classList.remove("active");
    }
    if (dom.promptCenter) {
      dom.promptCenter.style.display = "flex";
    }
    setStatus("Ready", "ready");
  };

  if (dom.chatForm) {
    dom.chatForm.addEventListener("submit", handleSubmit);
  }

  if (dom.clearChatButton) {
    dom.clearChatButton.addEventListener("click", clearChat);
  }

  return {
    setStatus,
    updateSystemMessage
  };
};
