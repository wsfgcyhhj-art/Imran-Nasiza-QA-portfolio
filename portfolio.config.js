// ═══════════════════════════════════════════════════════════════
//  ✏️  PORTFOLIO.CONFIG.JS — ВСЁ РЕДАКТИРУЙ ЗДЕСЬ
//  Сохрани → git push → Vercel задеплоит за ~30 секунд.
// ═══════════════════════════════════════════════════════════════
 
const SITE = {
 
  site: {
    nav: [
      { label: "Навыки",   href: "#skills"   },
      { label: "Обо мне",  href: "#about"    },
      { label: "Проекты",  href: "#projects" },
      { label: "Контакт",  href: "#contact"  },
    ],
  },
 
  profile: {
    name:        "Имран Насиза",
    initials:    "ИН",
    role:        "QA Engineer · Manual · API · Automation",
    tagline:     "Нахожу баги до того, как их найдут пользователи.",
    about:       "Специализируюсь на ручном тестировании, API-проверках и автоматизации дымовых сценариев. Быстро нахожу слабые места, превращаю проверки в понятные чек-листы и помогаю команде видеть состояние качества до выхода в продакшн.",
    contactText: "Ищете QA-инженера или хотите обсудить проект? Напишите — отвечу быстро.",
    avatar:      "",      // ← URL фото (https://...) или оставь "" для плейсхолдера
    cv:          "https://docs.google.com/document/d/1AYurutyTgVLET6G4ExpxvDOJMHwIvS8NL_GWQ6veaFA/edit?usp=sharing",     // ← ссылка на PDF резюме
 
    contacts: [
      { label: "Email",    value: "wsfgcyhhj@gmail.com",            href: "mailto:wsfgcyhhj@gmail.com" },
      { label: "Telegram", value: "@imran_wxz",                     href: "https://t.me/imran_wxz" },
      { label: "GitHub",   value: "wsfgcyhhj-art",                  href: "https://github.com/wsfgcyhhj-art" },
      { label: "LinkedIn", value: "Imran Nasiza",                   href: "http://linkedin.com/in/imran-nasiza-9872053b9/" },
    ],
  },
 
  // Бейджи на герое (зелёные) — оставь [] чтобы убрать совсем
  heroBadges: [],
 
  // Бегущая строка
  ticker: [
    "Manual QA","API Testing","PyTest","Postman","SQL",
    "Playwright","DevTools","CI/CD","Regression","Smoke",
    "Bug Report","Test Case","Checklist","Jira","Swagger",
    "Cross-browser","Mobile Testing","Test Design","Selenium",
  ],
  // Статистика в hero
  stats: [
    { value: 50, suffix: "+", label: "Найдено багов"   },
    { value:  3, suffix: "+", label: "Проекта"         },
    { value:  7, suffix: "+", label: "QA инструментов" },
  ],
 
  // Карточки "Что я умею"
  skills: [
    { icon:"search",   title:"Manual QA",    desc:"Функциональное, исследовательское и регрессионное тестирование web и mobile продуктов" },
    { icon:"api",      title:"API Testing",  desc:"Postman, Swagger, контрактные сценарии, статус-коды и валидация燬хем ответов" },
    { icon:"bot",      title:"Automation",   desc:"Smoke-сценарии на PyTest и Playwright, CI-ready пайплайны и GitHub Actions" },
    { icon:"db",       title:"SQL",          desc:"Написание запросов, проверка данных в БД, поиск аномалий и дублей" },
    { icon:"devtools", title:"DevTools",     desc:"Анализ сети, консоль, storage, перехват и проверка запросов в браузере" },
    { icon:"loop",     title:"Regression",   desc:"Чек-листы, баг-репорты, тест-дизайн, тест-кейсы и smoke-прогоны перед релизом" },
    { icon:"bot",      title:"Selenium",     desc:"Автоматизация UI-тестов в браузере, локаторы, ожидания, Page Object Model" },
    { icon:"devtools", title:"Apache JMeter",desc:"Нагрузочное и стресс-тестирование API и web-сервисов, анализ отклика под нагрузкой" },
    { icon:"db",       title:"Android Studio",desc:"Тестирование мобильных приложений, эмуляторы, Logcat, отладка Android-сборок" },
  ],
 
  // "Обо мне" → список направлений
  focus: [
    "Функциональное и исследовательское тестирование web и mobile",
    "API-проверки: Postman, Swagger, контрактные сценарии и статусы",
    "Регрессия, smoke, чек-листы, баг-репорты и тест-дизайн",
    "Автоматизация smoke-сценариев: PyTest, Playwright, CI-ready",
  ],
 
  // Прогресс-бары в "Обо мне"
  bars: [
    { name:"Manual QA",           percent:95 },
    { name:"API Testing",         percent:85 },
    { name:"PyTest / Automation", percent:70 },
    { name:"SQL",                 percent:65 },
  ],
 
  // Проекты. type: Web | API | Mobile | Automation | Process
  projects: [
    {
      title:       "Geeks Pro · Web 2026",
      period:      "2026",
      type:        "Web",
      result:      "Regression-набор для ключевых пользовательских сценариев.",
      description: "Авторизация, профиль, уведомления, платёжные состояния. Сделал чек-лист, баг-репорты, тест-кейсы.",
      approaches:  ["Test design","Regression","Smoke","DevTools","Cross-browser"],
      links: [
        { label: "Сайт",       href: "https://gps.geekspro.kg/" },
        { label: "Тест-кейсы", href: "https://docs.google.com/spreadsheets/d/1GTyTzE4DppkAjWmrlZNSTx0oo3O37R15/edit?gid=1665610796#gid=1665610796" },
        { label: "Чек-лист",   href: "https://docs.google.com/spreadsheets/d/1mzbcCmYDxw2LsYtRQubqsqpOotFKwR756BWAa1ZBcBg/edit?gid=1824314626#gid=1824314626" },
      ],
    },
  ], // ← Закрыли массив проектов
}; // ← Закрыли объект SITE