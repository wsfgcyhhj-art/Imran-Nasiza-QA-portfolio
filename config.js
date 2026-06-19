// ═══════════════════════════════════════════════════════════════
//  ✏️  CONFIG.JS — ВСЁ РЕДАКТИРУЙ ЗДЕСЬ
//  Меняй значения → сохраняй → обновляй страницу. Бэкенд не нужен.
// ═══════════════════════════════════════════════════════════════

const SITE = {

  // ─── ЛИЧНОЕ ──────────────────────────────────────────────────
  name:     "ИМРАН НАСИЗА",
  initials: "ИН",
  roles:    ["QA ENGINEER", "MANUAL TESTER", "API TESTER", "AUTOMATION ENGINEER"],
  tagline:  "НАХОЖУ БАГИ ДО ТОГО, КАК ИХ НАЙДУТ ПОЛЬЗОВАТЕЛИ.",
  avatar:   "",        // ← вставь URL фото (https://...) или оставь "" → покажется плейсхолдер
  cv:       "#",       // ← ссылка на PDF резюме

  // ─── СОЦСЕТИ ─────────────────────────────────────────────────
  social: {
    telegram: "https://t.me/imran_wxz",
    github:   "https://github.com/wsfgcyhhj-art",
    linkedin: "#",
    email:    "mailto:wsfgcyhhj@gmail.com",
  },

  // ─── СТАТИСТИКА В HERO ───────────────────────────────────────
  
  
  
  
  
  
  
  
  
  stats: [
    { value: 50, suffix: "+", label: "НАЙДЕНО БАГОВ"   },
    { value:  3, suffix: "+", label: "ПРОЕКТА"         },
    { value:  7, suffix: "+", label: "QA ИНСТРУМЕНТОВ" },
  ],

  // ─── БЕГУЩАЯ СТРОКА (MARQUEE) ────────────────────────────────
  ticker: [
    "MANUAL QA","API TESTING","PYTEST","POSTMAN","SQL",
    "PLAYWRIGHT","DEVTOOLS","CI/CD","REGRESSION","SMOKE",
    "BUG REPORT","TEST CASE","CHECKLIST","JIRA","SWAGGER",
    "CROSS-BROWSER","MOBILE TESTING","TEST DESIGN","SELENIUM",
  ],

  // ─── НАВЫКИ (6 карточек) ─────────────────────────────────────
  skills: [
    {
      icon:  "search",
      title: "MANUAL QA",
      desc:  "ФУНКЦИОНАЛЬНОЕ, ИССЛЕДОВАТЕЛЬСКОЕ И РЕГРЕССИОННОЕ ТЕСТИРОВАНИЕ WEB И MOBILE ПРОДУКТОВ",
    },
    {
      icon:  "api",
      title: "API TESTING",
      desc:  "POSTMAN, SWAGGER, КОНТРАКТНЫЕ СЦЕНАРИИ, СТАТУС-КОДЫ И ВАЛИДАЦИЯ СХЕМ ОТВЕТОВ",
    },
    {
      icon:  "bot",
      title: "AUTOMATION",
      desc:  "SMOKE-СЦЕНАРИИ НА PYTEST И PLAYWRIGHT, CI-READY ПАЙПЛАЙНЫ И GITHUB ACTIONS",
    },
    {
      icon:  "db",
      title: "SQL",
      desc:  "НАПИСАНИЕ ЗАПРОСОВ, ПРОВЕРКА ДАННЫХ В БД, ПОИСК АНОМАЛИЙ И ДУБЛЕЙ",
    },
    {
      icon:  "devtools",
      title: "DEVTOOLS",
      desc:  "АНАЛИЗ СЕТИ, КОНСОЛЬ, STORAGE, ПЕРЕХВАТ И ПРОВЕРКА ЗАПРОСОВ В БРАУЗЕРЕ",
    },
    {
      icon:  "loop",
      title: "REGRESSION",
      desc:  "ЧЕК-ЛИСТЫ, БАГ-РЕПОРТЫ, ТЕСТ-ДИЗАЙН, ТЕСТ-КЕЙСЫ И SMOKE-ПРОГОНЫ ПЕРЕД РЕЛИЗОМ",
    },
  ],

  // ─── ОБО МНЕ ─────────────────────────────────────────────────
  about: {
    title: "ОБО МНЕ",
    bio:   "СПЕЦИАЛИЗИРУЮСЬ НА РУЧНОМ ТЕСТИРОВАНИИ, API-ПРОВЕРКАХ И АВТОМАТИЗАЦИИ ДЫМОВЫХ СЦЕНАРИЕВ. БЫСТРО НАХОЖУ СЛАБЫЕ МЕСТА, ПРЕВРАЩАЮ ПРОВЕРКИ В ПОНЯТНЫЕ ЧЕК-ЛИСТЫ И ПОМОГАЮ КОМАНДЕ ВИДЕТЬ СОСТОЯНИЕ КАЧЕСТВА ДО ВЫХОДА В ПРОДАКШН.",
    expertise: [
      "ФУНКЦИОНАЛЬНОЕ И ИССЛЕДОВАТЕЛЬСКОЕ ТЕСТИРОВАНИЕ WEB И MOBILE",
      "API-ПРОВЕРКИ: POSTMAN, SWAGGER, КОНТРАКТНЫЕ СЦЕНАРИИ И СТАТУСЫ",
      "РЕГРЕССИЯ, SMOKE, ЧЕК-ЛИСТЫ, БАГ-РЕПОРТЫ И ТЕСТ-ДИЗАЙН",
      "АВТОМАТИЗАЦИЯ SMOKE-СЦЕНАРИЕВ: PYTEST, PLAYWRIGHT, CI-READY",
    ],
    bars: [
      { name: "MANUAL QA",           percent: 95 },
      { name: "API TESTING",         percent: 85 },
      { name: "PYTEST / AUTOMATION", percent: 70 },
      { name: "SQL",                 percent: 65 },
    ],
  },

  // ─── ПРОЕКТЫ ─────────────────────────────────────────────────
  // category: "web" | "api" | "automation"
  projects: [
    {
      id:       1,
      title:    "GEEKS PRO · WEB 2026",
      category: "web",
      year:     "2026",
      client:   "GEEKS PRO",
      tags:     ["TEST DESIGN","REGRESSION","SMOKE","DEVTOOLS","CROSS-BROWSER"],
      desc:     "REGRESSION-НАБОР ДЛЯ КЛЮЧЕВЫХ ПОЛЬЗОВАТЕЛЬСКИХ СЦЕНАРИЕВ: АВТОРИЗАЦИЯ, ПРОФИЛЬ, УВЕДОМЛЕНИЯ, ПЛАТЁЖНЫЕ СОСТОЯНИЯ.",
      links: [
        { label: "САЙТ",       url: "https://gps.geekspro.kg/" },
        { label: "ТЕСТ-КЕЙСЫ", url: "https://docs.google.com/spreadsheets/d/1GTyTzE4DppkAjWmrlZNSTx0oo3O37R15/edit?gid=1665610796#gid=1665610796" },
        { label: "ЧЕК-ЛИСТ",   url: "https://docs.google.com/spreadsheets/d/1mzbcCmYDxw2LsYtRQubqsqpOotFKwR756BWAa1ZBcBg/edit?gid=1824314626#gid=1824314626" },
      ],
    },
    {
      id:       2,
      title:    "API SUITE · PLACEHOLDER",
      category: "api",
      year:     "2025",
      client:   "PLACEHOLDER",
      tags:     ["PYTEST","POSTMAN","CI/CD","SWAGGER"],
      desc:     "ЗАГЛУШКА. ДОБАВЬ ДАННЫЕ В CONFIG.JS → PROJECTS[]",
      links:    [],
    },
    {
      id:       3,
      title:    "SMOKE AUTOMATION · PLACEHOLDER",
      category: "automation",
      year:     "2025",
      client:   "PLACEHOLDER",
      tags:     ["PLAYWRIGHT","PYTEST","GITHUB ACTIONS"],
      desc:     "ЗАГЛУШКА. ДОБАВЬ ДАННЫЕ В CONFIG.JS → PROJECTS[]",
      links:    [],
    },
  ],

  // ─── КОНТАКТ ─────────────────────────────────────────────────
  contact: {
    email:    "WSFGCYHHJ@GMAIL.COM",
    telegram: "@imran_wxz",
    location: "БИШКЕК, КЫРГЫЗСТАН",
  },
};