import { PROMPTS } from "./modules/constants.js";
import { dom } from "./modules/dom.js";
import { applyUiTranslations, getUiTranslations } from "./modules/i18n.js";
import { buildSystemMessage } from "./modules/systemMessage.js";
import { renderPrompts } from "./modules/prompts-ui.js";
import { createChatController } from "./modules/chat.js";

const autoGrow = () => {
  if (!dom.promptInput) return;
  dom.promptInput.style.height = "auto";
  dom.promptInput.style.height = dom.promptInput.scrollHeight + "px";
};

const updateButtonState = () => {
  if (!dom.promptInput || !dom.submitBtn) return;
  if (dom.promptInput.value.trim().length > 0) {
    dom.submitBtn.classList.add("active");
  } else {
    dom.submitBtn.classList.remove("active");
  }
};

const getSystemMessage = () => {
  return buildSystemMessage(dom.languageSelect?.value || "auto");
};

const chat = createChatController(dom, getSystemMessage);

const renderUi = () => {
  const translations = getUiTranslations(dom.languageSelect?.value || "auto");
  applyUiTranslations(document, translations);
  renderPrompts(dom, PROMPTS, translations, (content) => {
    if (!dom.promptInput) return;
    dom.promptInput.value = content;
    autoGrow();
    dom.promptInput.focus();
    updateButtonState();
  });
};

dom.promptInput?.addEventListener("input", () => {
  autoGrow();
  updateButtonState();
});

dom.languageSelect?.addEventListener("change", () => {
  chat.updateSystemMessage();
  renderUi();
});

renderUi();
chat.setStatus("Ready", "ready");
