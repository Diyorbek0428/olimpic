import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define language content type
type LanguageContent = {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
};

// Available languages
export type Language = "uz" | "ru" | "en";

// Theme type
export type Theme = "light" | "dark";

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
  content: LanguageContent;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Content for different languages
const translations: LanguageContent = {
  uz: {
    common: {
      home: "Bosh sahifa",
      committee: "Qo'mita",
      news: "Yangiliklar",
      olympics: "Olimpiya o'yinlari",
      exercises: "Mashg'ulotlar",
      contact: "Aloqa",
      search: "Qidirish...",
      aboutCommittee: "Qo'mita haqida",
      leadership: "Rahbariyat",
      history: "Tarix",
      generalInfo: "Umumiy ma'lumot",
      olympicGames: "Olimpiya o'yinlari",
      competitions: "Musobaqalar",
      medals: "Medallar",
      readMore: "Batafsil o'qish",
      allNews: "Barcha yangiliklar",
      noResults: "Ma'lumot topilmadi",
      searchResults: "Natijalar:",
      welcomeText: "Oʻzbekiston Milliy Olimpiada Qoʻmitasi  ",
      darkMode: "Tungi rejim",
      lightMode: "Kunduzgi rejim",
      searchInGoogle: "Google'da qidirish",
      searchInYandex: "Yandex'da qidirish",
      searchOnSite: "Saytda qidirish",
      allAthletes: "Barcha sportchilar",
      languageChanged: "Til o'zgartirildi",
      searchBy: "Qidirish orqali:",
    },
    home: {
      heroTitle: "Parij-2024 Olimpiya O'yinlari",
      heroSubtitle: "O'zbekiston sportchilari xalqaro arena sahnasida mamlakatimiz sharafini himoya qilishga tayyor. Milliy jamoamizning yutuqlarini birgalikda qo'llab-quvvatlaylik!",
      moreInfo: "Batafsil ma'lumot",
      athletesList: "Sportchilar ro'yxati",
      latestNews: "So'nggi yangiliklar",
      parisOlympicsTitle: "Olimpiya o'yinlari",
      parisOlympicsText: "O'zbekiston olimpiada barcha medallar va keyingi olimpiada vaqtlari",
      keyDates: "Asosiy sanalar:",
      openingCeremony: "Ochilish marosimi",
      competitionPeriod: "Musobaqalar davri",
      closingCeremony: "Yopilish marosimi",
      aboutTeam: "O'zbekiston jamoasi haqida",
      uzbekistanMedals: "O'zbekiston Olimpiya medallari",
      allAthletes: "Barcha yangiliklar",
    },
    news: {
      judo: "Dzyudo",
      boxing: "Boks",
      weightlifting: "Og'ir atletika",
      judoNews: "O'zbekiston dzyudochilari Osiyo chempionatida 5 ta medal qozondi",
      judoDesc: "Qirg'izistonda o'tkazilgan Osiyo chempionatida O'zbekiston milliy jamoasi 2 oltin, 1 kumush va 2 bronza medalini qo'lga kiritdi.",
      boxingNews: "Bokschlarimiz Parij-2024 uchun tayyorgarlikni boshladilar",
      boxingDesc: "O'zbekiston boks federatsiyasi Olimpiya o'yinlariga tayyorgarlik ko'rish uchun maxsus mashg'ulot bazasini ishga tushirdi.",
      weightliftingNews: "Akbar Juraev jahon rekordini yangiladi",
      weightliftingDesc: "O'zbekistonlik og'ir atletikachi Akbar Juraev 109 kg vazn toifasida yangi jahon rekordini o'rnatdi va Olimpiya yo'llanmasini qo'lga kiritdi.",
    },
    athletes: {
      legendAthletes: "Afsonaviy sportchilar",
      filterBySport: "Sport turi bo'yicha saralash",
      allSports: "Barcha sport turlari",
      boxing: "Boks",
      wrestling: "Kurash",
      gymnastics: "Gimnastika",
      athletics: "Og'ir atletika",
      judo: "Dzyudo",
      medals: "Medallar",
      achievements: "Yutuqlar",
      biography: "Biografiya",
      gold: "Oltin",
      silver: "Kumush",
      bronze: "Bronza",
      olympicGames: "Olimpiya o'yinlari",
      worldChampionships: "Jahon chempionati",
      football: "Futboll",
    }
  },
  ru: {
    common: {
      home: "Главная",
      committee: "Комитет",
      news: "Новости",
      olympics: "Олимпийские игры",
      exercises: "Упражнения",
      contact: "Контакты",
      search: "Поиск...",
      aboutCommittee: "О комитете",
      leadership: "Руководство",
      history: "История",
      generalInfo: "Общая информация",
      paris2024: "Париж-2024",
      medals: "Медали",
      readMore: "Подробнее",
      allNews: "Все новости",
      olympicGames: "Олимпийские игры",
      competitions: "Соревнования",
      noResults: "Результаты не найдены",
      searchResults: "Результаты:",
      welcomeText: "Добро пожаловать на веб-сайт Олимпиады Узбекистана!",
      darkMode: "Темный режим",
      lightMode: "Светлый режим",
      searchInGoogle: "Искать в Google",
      searchInYandex: "Искать в Яндекс",
      searchOnSite: "Искать на сайте",
      allAthletes: "Все спортсмены",
      languageChanged: "Язык изменен",
      searchBy: "Поиск по:",
    },
    home: {
      heroTitle: "Олимпийские игры Париж-2024",
      heroSubtitle: "Спортсмены Узбекистана готовы защищать честь страны на международной арене. Давайте вместе поддержим достижения нашей национальной сборной!",
      moreInfo: "Подробная информация",
      athletesList: "Список спортсменов",
      latestNews: "Последние новости",
      parisOlympicsTitle: "Олимпийские игры Париж-2024",
      parisOlympicsText: "Летние Олимпийские игры 2024 года пройдут в столице Франции, Париже, с 26 июля по 11 августа. Узбекистан планирует участвовать более чем в 15 видах спорта на этой Олимпиаде.",
      keyDates: "Ключевые даты:",
      openingCeremony: "Церемония открытия",
      competitionPeriod: "Период соревнований",
      closingCeremony: "Церемония закрытия",
      aboutTeam: "О команде Узбекистана",
      uzbekistanMedals: "Олимпийские медали Узбекистана",
      allAthletes: "Все новости",
    },
    news: {
      judo: "Дзюдо",
      boxing: "Бокс",
      weightlifting: "Тяжелая атлетика",
      judoNews: "Дзюдоисты Узбекистана завоевали 5 медалей на чемпионате Азии",
      judoDesc: "Национальная сборная Узбекистана завоевала 2 золотые, 1 серебряную и 2 бронзовые медали на чемпионате Азии, проходившем в Кыргызстане.",
      boxingNews: "Наши боксёры начали подготовку к Парижу-2024",
      boxingDesc: "Федерация бокса Узбекистана запустила специальную тренировочную базу для подготовки к Олимпийским играм.",
      weightliftingNews: "Акбар Джураев обновил мировой рекорд",
      weightliftingDesc: "Узбекский тяжелоатлет Акбар Джураев установил новый мировой рекорд в весовой категории 109 кг и получил олимпийскую путевку.",
    },
    athletes: {
      legendAthletes: "Легендарные спортсмены",
      filterBySport: "Фильтр по виду спорта",
      allSports: "Все виды спорта",
      boxing: "Бокс",
      wrestling: "Борьба",
      gymnastics: "Гимнастика",
      athletics: "Тяжелая атлетика",
      judo: "Дзюдо",
      medals: "Медали",
      achievements: "Достижения",
      biography: "Биография",
      gold: "Золото",
      silver: "Серебро",
      bronze: "Бронза",
      olympicGames: "Олимпийские игры",
      worldChampionships: "Чемпионат мира",
      football: "Футбол",
    }
  },
  en: {
    common: {
      home: "Home",
      committee: "Committee",
      news: "News",
      olympics: "Olympic Games",
      exercises: "Exercises",
      contact: "Contact",
      search: "Search...",
      aboutCommittee: "About Committee",
      leadership: "Leadership",
      history: "History",
      generalInfo: "General Information",
      paris2024: "Paris-2024",
      medals: "Medals",
      readMore: "Read more",
      allNews: "All news",
      olympicGames: "Olympic Games",
      competitions: "Competitions",
      noResults: "No results found",
      searchResults: "Results:",
      welcomeText: "Welcome to the Uzbekistan Olympic Website!",
      darkMode: "Dark mode",
      lightMode: "Light mode",
      searchInGoogle: "Search in Google",
      searchInYandex: "Search in Yandex",
      searchOnSite: "Search on site",
      allAthletes: "All athletes",
      languageChanged: "Language changed",
      searchBy: "Search by:",
    },
    home: {
      heroTitle: "Paris-2024 Olympic Games",
      heroSubtitle: "Uzbekistan athletes are ready to defend the country's honor on the international arena. Let's support our national team's achievements together!",
      moreInfo: "More information",
      athletesList: "Athletes list",
      latestNews: "Latest news",
      parisOlympicsTitle: "Paris-2024 Olympic Games",
      parisOlympicsText: "The Paris 2024 Summer Olympic Games will be held in Paris, France from July 26 to August 11. Uzbekistan plans to participate in more than 15 sports at this Olympics.",
      keyDates: "Key dates:",
      openingCeremony: "Opening ceremony",
      competitionPeriod: "Competition period",
      closingCeremony: "Closing ceremony",
      aboutTeam: "About Uzbekistan team",
      uzbekistanMedals: "Uzbekistan Olympic medals",
      allAthletes: "All athletes",
    },
    news: {
      judo: "Judo",
      boxing: "Boxing",
      weightlifting: "Weightlifting",
      judoNews: "Uzbekistan judokas won 5 medals at the Asian Championship",
      judoDesc: "The Uzbekistan national team won 2 gold, 1 silver and 2 bronze medals at the Asian Championship held in Kyrgyzstan.",
      boxingNews: "Our boxers have begun preparation for Paris-2024",
      boxingDesc: "The Boxing Federation of Uzbekistan has launched a special training base to prepare for the Olympic Games.",
      weightliftingNews: "Akbar Juraev updated the world record",
      weightliftingDesc: "Uzbek weightlifter Akbar Juraev set a new world record in the 109 kg weight category and secured an Olympic quota.",
    },
    athletes: {
      legendAthletes: "Legendary Athletes",
      filterBySport: "Filter by Sport",
      allSports: "All Sports",
      boxing: "Boxing",
      wrestling: "Wrestling",
      gymnastics: "Gymnastics",
      athletics: "Weightlifting",
      judo: "Judo",
      medals: "Medals",
      achievements: "Achievements",
      biography: "Biography",
      gold: "Gold",
      silver: "Silver",
      bronze: "Bronze",
      olympicGames: "Olympic Games",
      worldChampionships: "World Championships",
      football: "Football",
    }
  }
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from local storage or default to Uzbek
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "uz";
  });

  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from local storage or default to light
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  const [content, setContent] = useState<LanguageContent>(translations);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Save theme to localStorage and apply it to the document when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Add custom background color based on theme
    if (theme === "dark") {
      document.documentElement.style.setProperty("--background", "222.2 84% 4.9%");
      document.documentElement.style.setProperty("--foreground", "210 40% 98%");
    } else {
      document.documentElement.style.setProperty("--background", "0 0% 100%");
      document.documentElement.style.setProperty("--foreground", "222.2 84% 4.9%");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Translation function
  const t = (key: string, section: string = "common"): string => {
    try {
      const sectionContent = content[language][section];
      if (typeof sectionContent === "object" && sectionContent !== null) {
        return (sectionContent as { [key: string]: string })[key] || key;
      }
      return key;
    } catch (error) {
      console.warn(`Translation missing: ${section}.${key}`);
      return key;
    }
  };

  const value = {
    language,
    setLanguage,
    t,
    content,
    theme,
    setTheme,
    toggleTheme
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
