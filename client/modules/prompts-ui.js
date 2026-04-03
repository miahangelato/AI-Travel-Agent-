import { getPromptText } from "./i18n.js";

export const renderPrompts = (dom, prompts, translations, onSelect) => {
  if (!dom.promptList) return;
  dom.promptList.innerHTML = "";
  prompts.forEach((prompt, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "prompt-card";

    const { title, content } = getPromptText(translations, prompt);
    card.innerHTML = `
      <span>✨ ${title}</span>
      <p>${content}</p>
    `;

    card.addEventListener("click", () => onSelect(content));
    card.style.animationDelay = `${index * 80}ms`;
    dom.promptList.appendChild(card);
  });
};
