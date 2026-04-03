export const SYSTEM_MESSAGE_BASE =
  "You are a specialized Travel Assistant. Your SOLE purpose is to help with travel planning, itineraries, destination advice, budgets, and travel logistics. " +
  "LANGUAGE: Detect the user's language and respond in that language. If the user mixes languages, respond in the dominant language. If the user asks for a specific language, follow that request. " +
  "GUARDRAILS: 1. If the user asks about topics unrelated to travel, politely decline and steer back to travel. " +
  "2. Stay professional, concise, and helpful.";

export const PROMPTS = [
  {
    key: "Itinerary",
    title: "Itinerary",
    content: "Plan a 5-day Japan trip for a foodie on a mid-range budget."
  },
  {
    key: "Comparison",
    title: "Comparison",
    content: "Compare Bali, Vietnam, and Japan for a 7-day budget trip."
  },
  {
    key: "Curated",
    title: "Curated",
    content: "Build a 3-day Rome itinerary focused on art and food."
  },
  {
    key: "Booking",
    title: "Booking",
    content: "How should I book a multi-city Europe trip in the right order?"
  },
  {
    key: "Destination",
    title: "Destination",
    content: "Can you tell me about Palawan?"
  },
  {
    key: "Hotels",
    title: "Hotels",
    content: "Recommend hotels and areas to stay for a Palawan trip."
  }
];

export const LANGUAGE_LABELS = {
  auto: "auto-detected",
  en: "English",
  fil: "Filipino",
  ja: "Japanese",
  "zh-cn": "Chinese (Simplified)",
  "zh-tw": "Chinese (Traditional)",
  ko: "Korean",
  es: "Spanish"
};

export const UI_TRANSLATIONS = {
  en: {
    title: "Travel Assistant",
    welcomePrefix: "Welcome! I am your",
    welcomeRole: "Travel Assistant",
    subWelcome: "Everything you need to plan your next adventure, in one conversation.",
    languageLabel: "Language",
    langAuto: "Auto",
    langEn: "English",
    langFil: "Filipino",
    langJa: "Japanese",
    langZhCn: "Chinese (Simplified)",
    langZhTw: "Chinese (Traditional)",
    langKo: "Korean",
    langEs: "Spanish",
    clear: "Clear",
    messageLabel: "Your message",
    promptPlaceholder: "Ask or search for anything...",
    promptTitles: {
      Itinerary: "Itinerary",
      Comparison: "Comparison",
      Curated: "Curated",
      Booking: "Booking",
      Destination: "Destination",
      Hotels: "Hotels"
    },
    promptContents: {
      Itinerary: "Plan a 5-day Japan trip for a foodie on a mid-range budget.",
      Comparison: "Compare Bali, Vietnam, and Japan for a 7-day budget trip.",
      Curated: "Build a 3-day Rome itinerary focused on art and food.",
      Booking: "How should I book a multi-city Europe trip in the right order?",
      Destination: "Can you tell me about Palawan?",
      Hotels: "Recommend hotels and areas to stay for a Palawan trip."
    }
  },
  fil: {
    title: "Travel Assistant",
    welcomePrefix: "Welcome! Ako ang iyong",
    welcomeRole: "Travel Assistant",
    subWelcome: "Lahat ng kailangan mo para planuhin ang susunod mong biyahe, sa isang usapan.",
    languageLabel: "Wika",
    langAuto: "Auto",
    langEn: "Ingles",
    langFil: "Filipino",
    langJa: "Hapon",
    langZhCn: "Tsino (Simplified)",
    langZhTw: "Tsino (Traditional)",
    langKo: "Koreano",
    langEs: "Espanyol",
    clear: "I-clear",
    messageLabel: "Iyong mensahe",
    promptPlaceholder: "Magtanong o maghanap ng kahit ano...",
    promptTitles: {
      Itinerary: "Itinerary",
      Comparison: "Paghahambing",
      Curated: "Curated",
      Booking: "Pag-book",
      Destination: "Destinasyon",
      Hotels: "Mga Hotel"
    },
    promptContents: {
      Itinerary: "Magplano ng 5-araw na Japan trip para sa foodie na may mid-range budget.",
      Comparison: "Ihambing ang Bali, Vietnam, at Japan para sa 7-araw na budget trip.",
      Curated: "Bumuo ng 3-araw na Rome itinerary na nakatuon sa sining at pagkain.",
      Booking: "Paano ako dapat mag-book ng multi-city Europe trip sa tamang pagkakasunod?",
      Destination: "Pwede mo ba akong bigyan ng info tungkol sa Palawan?",
      Hotels: "Magrekomenda ng mga hotel at lugar na puwedeng matuluyan sa Palawan."
    }
  },
  ja: {
    title: "トラベルアシスタント",
    welcomePrefix: "ようこそ！私はあなたの",
    welcomeRole: "トラベルアシスタント",
    subWelcome: "次の旅の計画に必要なことを、1つの会話で。",
    languageLabel: "言語",
    langAuto: "自動",
    langEn: "英語",
    langFil: "フィリピノ語",
    langJa: "日本語",
    langZhCn: "中国語（簡体字）",
    langZhTw: "中国語（繁体字）",
    langKo: "韓国語",
    langEs: "スペイン語",
    clear: "クリア",
    messageLabel: "メッセージ",
    promptPlaceholder: "何でも質問・検索してください…",
    promptTitles: {
      Itinerary: "旅程",
      Comparison: "比較",
      Curated: "おすすめ",
      Booking: "予約",
      Destination: "目的地",
      Hotels: "ホテル"
    },
    promptContents: {
      Itinerary: "中価格帯の予算でグルメ向けの5日間日本旅行を計画して。",
      Comparison: "7日間の予算旅行でバリ、ベトナム、日本を比較して。",
      Curated: "アートと食に特化した3日間のローマ旅行を作って。",
      Booking: "ヨーロッパの複数都市旅行はどんな順序で予約すべき？",
      Destination: "パラワンについて教えて。",
      Hotels: "パラワン旅行のホテルと滞在エリアをおすすめして。"
    }
  },
  "zh-cn": {
    title: "旅行助手",
    welcomePrefix: "欢迎！我是你的",
    welcomeRole: "旅行助手",
    subWelcome: "在一次对话中，规划你的下一次旅程所需的一切。",
    languageLabel: "语言",
    langAuto: "自动",
    langEn: "英语",
    langFil: "菲律宾语",
    langJa: "日语",
    langZhCn: "中文（简体）",
    langZhTw: "中文（繁体）",
    langKo: "韩语",
    langEs: "西班牙语",
    clear: "清除",
    messageLabel: "你的消息",
    promptPlaceholder: "提问或搜索任何内容...",
    promptTitles: {
      Itinerary: "行程",
      Comparison: "对比",
      Curated: "精选",
      Booking: "预订",
      Destination: "目的地",
      Hotels: "酒店"
    },
    promptContents: {
      Itinerary: "为美食爱好者规划5天日本中等预算旅行。",
      Comparison: "比较7天预算旅行的巴厘岛、越南和日本。",
      Curated: "制定一个以艺术和美食为主题的3天罗马行程。",
      Booking: "多城市欧洲旅行应该按什么顺序预订？",
      Destination: "可以介绍一下巴拉望吗？",
      Hotels: "推荐巴拉望旅行的酒店和住宿区域。"
    }
  },
  "zh-tw": {
    title: "旅行助理",
    welcomePrefix: "歡迎！我是你的",
    welcomeRole: "旅行助理",
    subWelcome: "一次對話就能規劃下一趟旅程所需的一切。",
    languageLabel: "語言",
    langAuto: "自動",
    langEn: "英語",
    langFil: "菲律賓語",
    langJa: "日語",
    langZhCn: "中文（簡體）",
    langZhTw: "中文（繁體）",
    langKo: "韓語",
    langEs: "西班牙語",
    clear: "清除",
    messageLabel: "你的訊息",
    promptPlaceholder: "提問或搜尋任何內容...",
    promptTitles: {
      Itinerary: "行程",
      Comparison: "比較",
      Curated: "精選",
      Booking: "預訂",
      Destination: "目的地",
      Hotels: "飯店"
    },
    promptContents: {
      Itinerary: "為美食愛好者規劃5天日本中等預算旅行。",
      Comparison: "比較7天預算旅行的峇里島、越南和日本。",
      Curated: "制定一個以藝術和美食為主題的3天羅馬行程。",
      Booking: "多城市歐洲旅行應該按什麼順序預訂？",
      Destination: "可以介紹一下巴拉望嗎？",
      Hotels: "推薦巴拉望旅行的飯店與住宿區域。"
    }
  },
  ko: {
    title: "여행 도우미",
    welcomePrefix: "환영합니다! 저는 당신의",
    welcomeRole: "여행 도우미",
    subWelcome: "다음 여행 계획에 필요한 모든 것을 한 번의 대화로.",
    languageLabel: "언어",
    langAuto: "자동",
    langEn: "영어",
    langFil: "필리핀어",
    langJa: "일본어",
    langZhCn: "중국어(간체)",
    langZhTw: "중국어(번체)",
    langKo: "한국어",
    langEs: "스페인어",
    clear: "지우기",
    messageLabel: "메시지",
    promptPlaceholder: "무엇이든 질문하거나 검색하세요...",
    promptTitles: {
      Itinerary: "일정",
      Comparison: "비교",
      Curated: "추천",
      Booking: "예약",
      Destination: "목적지",
      Hotels: "호텔"
    },
    promptContents: {
      Itinerary: "미식가를 위한 중간 예산 5일 일본 여행을 계획해 주세요.",
      Comparison: "7일 예산 여행으로 발리, 베트남, 일본을 비교해 주세요.",
      Curated: "예술과 음식에 집중한 3일 로마 일정 만들어 주세요.",
      Booking: "유럽 다도시 여행은 어떤 순서로 예약해야 하나요?",
      Destination: "팔라완에 대해 알려 주세요.",
      Hotels: "팔라완 여행의 호텔과 숙박 지역을 추천해 주세요."
    }
  },
  es: {
    title: "Asistente de Viaje",
    welcomePrefix: "¡Bienvenido! Soy tu",
    welcomeRole: "Asistente de Viaje",
    subWelcome: "Todo lo que necesitas para planear tu próxima aventura, en una sola conversación.",
    languageLabel: "Idioma",
    langAuto: "Auto",
    langEn: "Inglés",
    langFil: "Filipino",
    langJa: "Japonés",
    langZhCn: "Chino (Simplificado)",
    langZhTw: "Chino (Tradicional)",
    langKo: "Coreano",
    langEs: "Español",
    clear: "Borrar",
    messageLabel: "Tu mensaje",
    promptPlaceholder: "Pregunta o busca cualquier cosa...",
    promptTitles: {
      Itinerary: "Itinerario",
      Comparison: "Comparación",
      Curated: "Curado",
      Booking: "Reserva",
      Destination: "Destino",
      Hotels: "Hoteles"
    },
    promptContents: {
      Itinerary: "Planifica un viaje de 5 días a Japón para un foodie con presupuesto medio.",
      Comparison: "Compara Bali, Vietnam y Japón para un viaje económico de 7 días.",
      Curated: "Crea un itinerario de 3 días en Roma centrado en arte y comida.",
      Booking: "¿En qué orden debo reservar un viaje por varias ciudades de Europa?",
      Destination: "¿Puedes contarme sobre Palawan?",
      Hotels: "Recomienda hoteles y zonas donde alojarse en Palawan."
    }
  }
};
