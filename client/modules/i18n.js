import { UI_TRANSLATIONS } from "./constants.js";

export const normalizeUiLanguage = (value) => {
  if (value && value !== "auto") return value;
  const browserLang = (navigator.language || "en").toLowerCase();
  if (browserLang.startsWith("zh")) {
    return browserLang.includes("tw") || browserLang.includes("hk")
      ? "zh-tw"
      : "zh-cn";
  }
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("fil") || browserLang.startsWith("tl")) return "fil";
  return "en";
};

export const getUiTranslations = (languageValue) => {
  const lang = normalizeUiLanguage(languageValue || "auto");
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
};

export const applyUiTranslations = (root, translations) => {
  const i18nElements = root.querySelectorAll("[data-i18n]");
  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && translations[key]) {
      el.textContent = translations[key];
    }
  });

  const placeholderTargets = root.querySelectorAll("[data-i18n-placeholder]");
  placeholderTargets.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && translations[key]) {
      el.setAttribute("placeholder", translations[key]);
    }
  });

  const titleEl = root.querySelector("title");
  if (titleEl && translations.title) {
    titleEl.textContent = translations.title;
  }
};

export const getPromptText = (translations, prompt) => {
  const title = translations.promptTitles?.[prompt.key] || prompt.title;
  const content = translations.promptContents?.[prompt.key] || prompt.content;
  return { title, content };
};
