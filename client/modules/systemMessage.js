import { LANGUAGE_LABELS, SYSTEM_MESSAGE_BASE } from "./constants.js";

export const getLanguageInstruction = (selected) => {
  const language = selected || "auto";
  if (language === "auto") {
    return "LANGUAGE OVERRIDE: Auto-detect the user's language.";
  }
  return `LANGUAGE OVERRIDE: Reply in ${LANGUAGE_LABELS[language] || "English"}.`;
};

export const buildSystemMessage = (selected) => {
  return `${SYSTEM_MESSAGE_BASE} ${getLanguageInstruction(selected)}`;
};
