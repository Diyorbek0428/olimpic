import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/useLanguage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Medal, Calendar, ChevronRight, Image } from "lucide-react";

const Hero = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Background images for the hero section
  const heroBackgrounds = [
    "/picture/O‘zbekiston Respublikasi Prezidenti.jpg",
    "/picture/Olimpiya.jpg",
    "/picture/Qahramon.jpg",
    "/picture/Chigiryev0.jpg",
  ];

  // Latest news for hero headline
  const latestNews = [
    {
      title: {
        uz: "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Butunjahon suzish federatsiyasi rahbari, Osiyo Olimpiya kengashi bosh direktori Husayn al-",
        ru: "Президент Республики Узбекистан Шавкат Мирзиёев встретился с президентом Всемирной федерации плавания, генеральным директором Олимпийского совета Азии Хусейном аль-",
        en: "President of the Republic of Uzbekistan Shavkat Mirziyoyev met with President of the World Swimming Federation and Director General of the Olympic Council of Asia Hussein al-"
      },
      subtitle: {
        uz: "Prezident Shavkat Mirziyoyev xalqaro sport tashkilotlari rahbarlarini qabul qildi.",
        ru: "Президент Шавкат Мирзиёев принял руководителей международных спортивных организаций.",
        en: "President Shavkat Mirziyoyev received the heads of international sports organizations."
      },
      image: heroBackgrounds[0],
      link: "/yangiliklar/6",
    
    },
    {
      title: {
        uz: "Olimpiya harakati va suv sporti turlari rivojini yangi bosqichga olib chiqish yo‘lida muhim qadam tashlandi",
        ru: "Сделан важный шаг на пути вывода развития олимпийского движения и водных видов спорта на новый уровень.",
        en: "An important step has been taken towards bringing the development of the Olympic Movement and aquatic sports to a new level"
      },
      subtitle: {
        uz: "World Aquatics va Osiyo Olimpiya kengashi rahbarlari O‘zbekiston sport sohasi bo‘yicha hamkorlikni rivojlantirish yuzasidan uchrashuv o‘tkazdi.",
        ru: "Руководство World Aquatics и Олимпийского совета Азии провело встречу по развитию сотрудничества в спортивной сфере Узбекистана.",
        en: "Leaders of World Aquatics and the Olympic Council of Asia held a meeting to enhance sports cooperation with Uzbekistan."
      },
      image: heroBackgrounds[1],
      link: "/yangiliklar/10",
     
    },
    {
      title: {
        uz: "Qahramon futbolchilarimiz tantanali kutib olindi",
        ru: "Нашим героическим игрокам был оказан торжественный прием",
        en: "Our heroic players were given a ceremonial welcome"
      },
      subtitle: {
        uz: "U17 Osiyo kubogida chempion bo‘lgan O‘zbekiston o‘smirlar jamoasi tantanali ravishda Toshkentga qaytdi.",
        ru: "Юношеская сборная Узбекистана, победившая на Кубке Азии U17, торжественно вернулась в Ташкент.",
        en: "Uzbekistan’s U17 team triumphantly returned to Tashkent after winning the Asian Cup"
      },
      image: heroBackgrounds[2],
      link: "/yangiliklar/21",
     
    },
    {
      title: {
        uz: "Chigiryev va Geynish Milan-Kortina-2026 qishki Olimpiya oʻyinlari yoʻllanmasini qoʻlga kiritishdi!",
        ru: "Чигирев и Гейниш прошли отбор на зимние Олимпийские игры Милан-Кортина 2026!",
        en: "Chigiryev and Geinisch have qualified for the Milan-Cortina 2026 Winter Olympics!"
      },
      subtitle: {
        uz: "Dmitriy Chigiryev va Yekaterina Geynish Milan-Kortina-2026 qishki Olimpiadasiga yo‘llanma qo‘lga kiritishdi.",
        ru: "Дмитрий Чигирев и Екатерина Гейниш завоевали лицензию на зимнюю Олимпиаду Милан-Кортина-2026.",
        en: "Dmitriy Chigiryev and Yekaterina Geynish earned a spot at the Milan-Cortina 2026 Winter Olympics."
      },
      image: heroBackgrounds[3],
      link: "/yangiliklar/25",
      video: "https://youtube.com/embed/0qKaEAnnI5U?si=7BrTKliNsjUNZIA8"
    }
  ];

  useEffect(() => {
    if (showVideo) return; // Video ochiq bo‘lsa, slayder ishlamasin
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % latestNews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [latestNews.length, showVideo]);

  const currentNews = latestNews[currentNewsIndex];

  const translations = {
    watchVideo: {
      uz: "Video ko'rish",
      ru: "Смотреть видео",
      en: "Watch video"
    },
    athletes: {
      uz: "Sportchilar",
      ru: "Спортсмены",
      en: "Athletes"
    },
    gallery: {
      uz: "Galereya",
      ru: "Галерея",
      en: "Gallery"
    },
    moreInfo: {
      uz: "Batafsil ma'lumot",
      ru: "Подробная информация",
      en: "More information"
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div 
        key={currentNewsIndex}
        className="w-full h-[600px] bg-cover bg-center" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${currentNews.image}')`
        }}
      >
        <motion.div 
          className="container mx-auto px-4 h-full flex flex-col justify-center" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {currentNews.title[language]}
          </motion.h1>

          <motion.p 
            className="text-white text-lg md:text-xl max-w-2xl mb-8" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {currentNews.subtitle[language]}
          </motion.p>

    

<motion.div 
  className="flex flex-wrap gap-4" 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.9 }}
>
  <Button 
    className="bg-primary hover:bg-primary/90 text-white font-medium transform transition-transform hover:scale-105 flex items-center gap-2"
    onClick={() => navigate(currentNews.link)}
  >
    {translations.moreInfo[language]}
    <ChevronRight size={16} />
  </Button>
  
  {currentNews.image === heroBackgrounds[3] && (
    <Button 
      variant="outline" 
      className="bg-primary/30 backdrop-blur-sm border-white/50 text-white hover:bg-primary/40 transform transition-transform hover:scale-105 flex items-center gap-2"
      onClick={() => setShowVideo(true)}
    >
      <Play size={16} />
      {translations.watchVideo[language]}
    </Button>
  )}
</motion.div>

          <motion.div 
            className="flex gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/sportchilar')}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center mb-2">
                <Medal size={24} className="text-white" />
              </div>
              <span className="text-white text-sm">{translations.athletes[language]}</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/olimpiya')}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center mb-2">
                <Image size={24} className="text-white" />
              </div>
              <span className="text-white text-sm">{translations.gallery[language]}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" style={{ zIndex: 100 }}>
          <div className="relative w-full max-w-2xl aspect-video bg-black rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Yopish"
            >
              
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentNews.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* News indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2" style={{ pointerEvents: showVideo ? "none" : "auto" }}>
        {latestNews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentNewsIndex === index ? "bg-primary" : "bg-white/50"
            } transition-all duration-300`}
            onClick={() => setCurrentNewsIndex(index)}
            disabled={showVideo}
          />
        ))}
      </div>

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute bottom-5 left-5 w-16 h-16 rounded-full bg-primary/30" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }} 
        transition={{
          repeat: Infinity,
          duration: 3
        }} 
        style={{ pointerEvents: "none" }}
      />
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-secondary/20" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }} 
        transition={{
          repeat: Infinity,
          duration: 4,
          delay: 1
        }} 
        style={{ pointerEvents: "none" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary/10" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }} 
        transition={{
          repeat: Infinity,
          duration: 5,
          delay: 0.5
        }} 
        style={{ pointerEvents: "none" }}
      />

    </div>
  );
};

export default Hero;