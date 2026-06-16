// ═══════════════════════════════════════════════════════════════
//  ✏️  CONFIG.JS — ВСЁ РЕДАКТИРУЙ ЗДЕСЬ
//  Меняй значения → сохраняй → обновляй страницу. Бэкенд не нужен.
// ═══════════════════════════════════════════════════════════════

const SITE = {

  // ─── ЛИЧНОЕ ──────────────────────────────────────────────────
  name:     "Имран Насиза",
  initials: "ИН",
  roles:    ["QA Engineer", "Manual Tester", "API Tester", "Automation Engineer"],
  tagline:  "Нахожу баги до того, как их найдут пользователи.",
  avatar:   "",        // ← вставь URL фото (https://...) или оставь "" → покажется плейсхолдер
  cv:       "#",       // ← ссылка на PDF резюме

  // ─── СОЦСЕТИ ─────────────────────────────────────────────────
  social: {
    telegram: "https://t.me/imran_wxz",
    github:   "#",
    linkedin: "#",
    email:    "mailto:your@email.com",
  },

  // ─── СТАТИСТИКА В HERO ───────────────────────────────────────
  
  
  
  
  
  
  
  
  
  1stats: [
    { value: 50, suffix: "+", label: "Найдено багов"   },
    { value:  3, suffix: "+", label: "Проекта"         },
    { value:  7, suffix: "+", label: "QA инструментов" },
  ],

  // ─── БЕГУЩАЯ СТРОКА (MARQUEE) ────────────────────────────────
  ticker: [
    "Manual QA","API Testing","PyTest","Postman","SQL",
    "Playwright","DevTools","CI/CD","Regression","Smoke",
    "Bug Report","Test Case","Checklist","Jira","Swagger",
    "Cross-browser","Mobile Testing","Test Design","Selenium",
  ],

  // ─── НАВЫКИ (6 карточек) ─────────────────────────────────────
  skills: [
    {
      icon:  "search",
      title: "Manual QA",
      desc:  "Функциональное, исследовательское и регрессионное тестирование web и mobile продуктов",
    },
    {
      icon:  "api",
      title: "API Testing",
      desc:  "Postman, Swagger, контрактные сценарии, статус-коды и валидация схем ответов",
    },
    {
      icon:  "bot",
      title: "Automation",
      desc:  "Smoke-сценарии на PyTest и Playwright, CI-ready пайплайны и GitHub Actions",
    },
    {
      icon:  "db",
      title: "SQL",
      desc:  "Написание запросов, проверка данных в БД, поиск аномалий и дублей",
    },
    {
      icon:  "devtools",
      title: "DevTools",
      desc:  "Анализ сети, консоль, storage, перехват и проверка запросов в браузере",
    },
    {
      icon:  "loop",
      title: "Regression",
      desc:  "Чек-листы, баг-репорты, тест-дизайн, тест-кейсы и smoke-прогоны перед релизом",
    },
  ],

  // ─── ОБО МНЕ ─────────────────────────────────────────────────
  about: {
    title: "Обо мне",
    bio:   "Специализируюсь на ручном тестировании, API-проверках и автоматизации дымовых сценариев. Быстро нахожу слабые места, превращаю проверки в понятные чек-листы и помогаю команде видеть состояние качества до выхода в продакшн.",
    expertise: [
      "Функциональное и исследовательское тестирование web и mobile",
      "API-проверки: Postman, Swagger, контрактные сценарии и статусы",
      "Регрессия, smoke, чек-листы, баг-репорты и тест-дизайн",
      "Автоматизация smoke-сценариев: PyTest, Playwright, CI-ready",
    ],
    bars: [
      { name: "Manual QA",           percent: 95 },
      { name: "API Testing",         percent: 85 },
      { name: "PyTest / Automation", percent: 70 },
      { name: "SQL",                 percent: 65 },
    ],
  },

  // ─── ПРОЕКТЫ ─────────────────────────────────────────────────
  // category: "web" | "api" | "automation"
  projects: [
    {
      id:       1,
      title:    "Geeks Pro · Web 2026",
      category: "web",
      year:     "2026",
      client:   "Geeks Pro",
      tags:     ["Test design","Regression","Smoke","DevTools","Cross-browser"],
      desc:     "Regression-набор для ключевых пользовательских сценариев: авторизация, профиль, уведомления, платёжные состояния.",
      links: [
        { label: "Сайт",       url: "https://gps.geekspro.kg/" },
        { label: "Тест-кейсы", url: "https://docs.google.com/spreadsheets/d/1GTyTzE4DppkAjWmrlZNSTx0oo3O37R15/edit?gid=1665610796#gid=1665610796" },
        { label: "Чек-лист",   url: "https://docs.google.com/spreadsheets/d/1mzbcCmYDxw2LsYtRQubqsqpOotFKwR756BWAa1ZBcBg/edit?gid=1824314626#gid=1824314626" },
      ],
    },
    {
      id:       2,
      title:    "API Suite · Placeholder",
      category: "api",
      year:     "2025",
      client:   "Placeholder",
      tags:     ["PyTest","Postman","CI/CD","Swagger"],
      desc:     "Заглушка. Добавь данные в config.js → projects[]",
      links:    [],
    },
    {
      id:       3,
      title:    "Smoke Automation · Placeholder",
      category: "automation",
      year:     "2025",
      client:   "Placeholder",
      tags:     ["Playwright","PyTest","GitHub Actions"],
      desc:     "Заглушка. Добавь данные в config.js → projects[]",
      links:    [],
    },
  ],

  // ─── КОНТАКТ ─────────────────────────────────────────────────
  contact: {
    email:    "your@email.com",
    telegram: "@imran_wxz",
    location: "Бишкек, Кыргызстан",
  },
};
