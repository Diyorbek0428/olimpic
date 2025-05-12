import { BarChart } from "@/components/ui/chart";
import { useLanguage } from "@/context/useLanguage";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Medal, Users, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const ParisOlympics = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 1158,
    hours: 11,
    minutes: 25,
    seconds: 0
  });

  // Translations for fixed content
  const translations = {
    days: {
      uz: "kun",
      ru: "дней",
      en: "days"
    },
    hours: {
      uz: "soat",
      ru: "часов",
      en: "hours"
    },
    minutes: {
      uz: "daqiqa",
      ru: "минут",
      en: "minutes"
    },
    seconds: {
      uz: "soniya",
      ru: "секунд",
      en: "seconds"
    },
    remainingTime: {
      uz: "Olimpiadagacha qolgan vaqt",
      ru: "Время до Олимпиады",
      en: "Time until Olympics"
    },
    venues: {
      uz: "Sport obyektlari",
      ru: "Спортивные объекты",
      en: "Venues"
    },
    athletes: {
      uz: "Sportchilar",
      ru: "Спортсмены",
      en: "Athletes"
    },
    countries: {
      uz: "Mamlakatlar",
      ru: "Страны",
      en: "Countries"
    },
    sports: {
      uz: "Sport turlari",
      ru: "Виды спорта",
      en: "Sports"
    },
    viewTeam: {
      uz: "Jamoa haqida",
      ru: "О команде",
      en: "View team"
    }
  };

  const chartData = [
    { year: "1996", gold: 0, silver: 1, bronze: 1 },
    { year: "2000", gold: 1, silver: 1, bronze: 2 },
    { year: "2004", gold: 2, silver: 1, bronze: 2 },
    { year: "2008", gold: 0, silver: 1, bronze: 3 },
    { year: "2012", gold: 0, silver: 0, bronze: 3 },
    { year: "2016", gold: 4, silver: 2, bronze: 7 },
    { year: "2020", gold: 3, silver: 2, bronze: 0 },
    { year: "2024", gold: 8, silver: 2, bronze: 3 },
  ];

  // Olympic stats
  const olympicStats = [
    { icon: <MapPin size={24} />, count: 35, label: translations.venues[language] },
    { icon: <Users size={24} />, count: 10714, label: translations.athletes[language] },
    { icon: <Flag size={24} />, count: 206, label: translations.countries[language] },
    { icon: <Medal size={24} />, count: 329, label: translations.sports[language] },
  ];

  // Calculate countdown to Paris Olympics (July 26, 2024)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const olympicsDate = new Date("2028-07-30T00:00:00+05:00");
      const now = new Date();
      const difference = olympicsDate.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return {
          days: 1184,
          hours: 2,
          minutes: 0,
          seconds: 0
        };
      }
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-darkBg">{t('parisOlympicsTitle', 'home')}</h2>
          <p className="text-gray-700 mb-6">
            {t('parisOlympicsText', 'home')}
          </p>

          {/* Countdown timer */}
          <motion.div 
            className="bg-primary/5 p-6 rounded-lg mb-8"
            initial={{ opacity: 15, y: 20 }}
            whileInView={{ opacity: 15, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock size={20} className="mr-2" />
              {translations.remainingTime[language]}
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-gray-600">{translations.days[language]}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-gray-600">{translations.hours[language]}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-600">{translations.minutes[language]}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-600">{translations.seconds[language]}</div>
              </div>
            </div>
          </motion.div>

          <h3 className="text-xl font-semibold mb-4 text-darkBg">{t('keyDates', 'home')}</h3>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">14</span>
              </div>
              <div>
                <div className="font-semibold">14.07.2028</div>
                <span>{t('openingCeremony', 'home')}</span>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">16</span>
              </div>
              <div>
                <div className="font-semibold">14.07 - 30.07.2028</div>
                <span>{t('competitionPeriod', 'home')}</span>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">30</span>
              </div>
              <div>
                <div className="font-semibold">30.07.2028</div>
                <span>{t('closingCeremony', 'home')}</span>
              </div>
            </motion.li>
          </ul>

          <motion.button 
            className="mt-8 px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/jamoa')}
          >
            {translations.viewTeam[language]}
            <Users size={16} />
          </motion.button>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <motion.div 
            className="bg-gray-50 rounded-lg p-6 shadow-md mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-darkBg">{t('uzbekistanMedals', 'home')}</h3>
            <BarChart
              data={chartData}
              index="year"
              categories={["gold", "silver", "bronze"]}
              colors={["#FFC93B", "#A3A6A8", "#CD7F32"]}
              valueFormatter={(value) => `${value} ta`}
              yAxisWidth={30}
              customTooltip={(props) => {
                const { payload, label } = props;
                if (!payload || !payload.length) return null;
                
                return (
                  <div className="bg-white p-3 shadow-lg rounded border">
                    <div className="font-bold">{label}</div>
                    {payload.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="capitalize">{entry.name}: </span>
                        <span className="ml-1 font-semibold">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                );
              }}
            />
          </motion.div>

          {/* Paris Olympics stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {olympicStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(239, 237, 226, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">
                    {stat.icon}
                  </div>
                </div>
               <div className="text-2xl font-bold text-black">{stat.count.toLocaleString()}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ParisOlympics;
