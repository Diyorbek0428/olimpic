import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from 'react-router-dom';
import ParisOlympics from '@/components/ParisOlympics';
import Gallery from '@/components/Gallery';
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';

const Olympics = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Determine the active tab based on the URL path
  const getInitialTab = () => {
    if (location.pathname.includes('medallar')) return 'medals';
    if (location.pathname.includes('parij-2024')) return 'paris';
    return 'general';
  };

  const [activeTab, setActiveTab] = React.useState(getInitialTab());

  // Update browser URL without refreshing the page
  const handleTabChange = (value) => {
    setActiveTab(value);
    
    let newPath;
    switch (value) {
      case 'paris':
        newPath = '/olimpiya/O"zbekiston olimpiyada statistikasi';
        break;
      case 'medals':
        newPath = '/olimpiya/medallar';
        break;
      default:
        newPath = '/olimpiya';
        break;
    }
    
    window.history.pushState(null, '', newPath);
  };

  // Update tab if URL changes
  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname, getInitialTab]);

  const tabLabels = {
    general: {
      uz: "Umumiy ma'lumot",
      ru: "Общая информация",
      en: "General information"
    },
    paris: {
      uz: "Statistika",
      ru: "Статистика",
      en: "Statistics"
    },
    medals: {
      uz: "Medallar",
      ru: "Медали",
      en: "Medals"
    }
  };

  const historyText = {
    uz: (
      <>
        <p className="mb-4">
          Olimpiya o'yinlari tarixi miloddan avvalgi VIII asrga borib taqaladi. Qadimgi Yunonistonda Olimpiya shahrida har to'rt yilda o'tkaziladigan musobaqa diniy bayram hisoblanardi. Birinchi Olimpiya o'yinlari miloddan avvalgi 776-yilda o'tkazilgan deb hisoblanadi.
        </p>
        <p className="mb-4">
          Zamonaviy Olimpiya o'yinlari 1896-yilda Gretsiyaning Afina shahrida qayta tiklandi. Xalqaro Olimpiya qo'mitasi (XOQ) 1894-yilda tashkil topgan va birinchi prezident sifatida Pyer de Kuberten saylangan.
        </p>
      </>
    ),
    ru: (
      <>
        <p className="mb-4">
          История Олимпийских игр уходит корнями в VIII век до нашей эры. В Древней Греции в городе Олимпия каждые четыре года проводились соревнования, которые считались религиозным праздником. Считается, что первые Олимпийские игры были проведены в 776 году до нашей эры.
        </p>
        <p className="mb-4">
          Современные Олимпийские игры были возрождены в 1896 году в Афинах, Греция. Международный Олимпийский комитет (МОК) был основан в 1894 году, и Пьер де Кубертен был избран первым президентом.
        </p>
      </>
    ),
    en: (
      <>
        <p className="mb-4">
          The history of the Olympic Games dates back to the VIII century BC. In ancient Greece, competitions held every four years in the city of Olympia were considered a religious festival. The first Olympic Games are believed to have been held in 776 BC.
        </p>
        <p className="mb-4">
          The modern Olympic Games were revived in 1896 in Athens, Greece. The International Olympic Committee (IOC) was founded in 1894, and Pierre de Coubertin was elected as the first president.
        </p>
      </>
    )
  };

  const medalData = [
    { year: '1996', gold: 0, silver: 1, bronze: 1, location: 'Atlanta' },
    { year: '2000', gold: 1, silver: 1, bronze: 2, location: 'Sydney' },
    { year: '2004', gold: 2, silver: 1, bronze: 2, location: 'Afina' },
    { year: '2008', gold: 0, silver: 1, bronze: 3, location: 'Pekin' },
    { year: '2012', gold: 0, silver: 0, bronze: 3, location: 'London' },
    { year: '2016', gold: 4, silver: 2, bronze: 7, location: 'Rio de Janeiro' },
    { year: '2020', gold: 3, silver: 0, bronze: 2, location: 'Tokyo' },
    { year: '2024', gold: 8, silver: 2, bronze: 3, location: 'Paris' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <motion.h1 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {language === 'uz' ? "Olimpiya o'yinlari" :
             language === 'ru' ? "Олимпийские игры" :
             "Olympic Games"}
          </motion.h1>
          
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-6">
              <TabsTrigger value="general">{tabLabels.general[language]}</TabsTrigger>
              <TabsTrigger value="paris">{tabLabels.paris[language]}</TabsTrigger>
              <TabsTrigger value="medals">{tabLabels.medals[language]}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'uz' ? "Olimpiya o'yinlari tarixi" :
                     language === 'ru' ? "История Олимпийских игр" :
                     "History of Olympic Games"}
                  </h2>
                  <div className="prose max-w-none">
                    {historyText[language]}
                  </div>
                  
                  {/* Summer and Winter Olympics info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3">
                        {language === 'uz' ? "Yozgi Olimpiya o'yinlari" :
                         language === 'ru' ? "Летние Олимпийские игры" :
                         "Summer Olympic Games"}
                      </h3>
                      <p className="mb-3">
                        {language === 'uz' ? 
                          "Yozgi Olimpiya o'yinlari har to'rt yilda o'tkaziladi va zamonaviy davrdagi 32 ta turli sport turlarini o'z ichiga oladi." :
                         language === 'ru' ? 
                          "Летние Олимпийские игры проводятся каждые четыре года и в современную эпоху включают 32 различных вида спорта." :
                          "The Summer Olympic Games are held every four years and include 32 different sports disciplines in the modern era."}
                      </p>
                      <p>
                        {language === 'uz' ? 
                          "Oxirgi Yozgi Olimpiya o'yinlari 2021-yilda Tokioda bo'lib o'tdi (COVID-19 tufayli 2020-yildan ko'chirilgan)." :
                         language === 'ru' ? 
                          "Последние Летние Олимпийские игры прошли в Токио в 2021 году (перенесены с 2020 года из-за COVID-19)." :
                          "The last Summer Olympic Games were held in Tokyo in 2021 (moved from 2020 due to COVID-19)."}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3">
                        {language === 'uz' ? "Qishki Olimpiya o'yinlari" :
                         language === 'ru' ? "Зимние Олимпийские игры" :
                         "Winter Olympic Games"}
                      </h3>
                      <p className="mb-3">
                        {language === 'uz' ? 
                          "Qishki Olimpiya o'yinlari ham har to'rt yilda o'tkaziladi va muz va qor sport turlarini o'z ichiga oladi." :
                         language === 'ru' ? 
                          "Зимние Олимпийские игры также проводятся каждые четыре года и включают виды спорта на льду и снегу." :
                          "The Winter Olympic Games are also held every four years and include ice and snow sports."}
                      </p>
                      <p>
                        {language === 'uz' ? 
                          "Oxirgi Qishki Olimpiya o'yinlari 2022-yilda Pekinda bo'lib o'tdi." :
                         language === 'ru' ? 
                          "Последние Зимние Олимпийские игры прошли в Пекине в 2022 году." :
                          "The last Winter Olympic Games were held in Beijing in 2022."}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Add Gallery Component */}
                <Gallery />
              </div>
            </TabsContent>
            
            <TabsContent value="paris">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ParisOlympics />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="medals">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'uz' ? "O'zbekiston sportchilarining Olimpiya o'yinlaridagi yutuqlari" :
                   language === 'ru' ? "Достижения спортсменов Узбекистана на Олимпийских играх" :
                   "Achievements of Uzbekistan athletes at the Olympic Games"}
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left">
                          {language === 'uz' ? "Yil" : language === 'ru' ? "Год" : "Year"}
                        </th>
                        <th className="py-3 px-4 text-left">
                          {language === 'uz' ? "Shahar" : language === 'ru' ? "Город" : "City"}
                        </th>
                        <th className="py-3 px-4 text-center">
                          {language === 'uz' ? "Oltin" : language === 'ru' ? "Золото" : "Gold"}
                        </th>
                        <th className="py-3 px-4 text-center">
                          {language === 'uz' ? "Kumush" : language === 'ru' ? "Серебро" : "Silver"}
                        </th>
                        <th className="py-3 px-4 text-center">
                          {language === 'uz' ? "Bronza" : language === 'ru' ? "Бронза" : "Bronze"}
                        </th>
                        <th className="py-3 px-4 text-center">
                          {language === 'uz' ? "Jami" : language === 'ru' ? "Всего" : "Total"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {medalData.map((row, index) => (
                        <tr key={row.year} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4">{row.year}</td>
                          <td className="py-3 px-4">{row.location}</td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white font-bold">
                              {row.gold}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-800 font-bold">
                              {row.silver}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold">
                              {row.bronze}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center font-bold">
                            {row.gold + row.silver + row.bronze}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-100 font-bold">
                        <td className="py-3 px-4" colSpan={2}>
                          {language === 'uz' ? "Jami" : language === 'ru' ? "Всего" : "Total"}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {medalData.reduce((sum, row) => sum + row.gold, 0)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {medalData.reduce((sum, row) => sum + row.silver, 0)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {medalData.reduce((sum, row) => sum + row.bronze, 0)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {medalData.reduce((sum, row) => sum + row.gold + row.silver + row.bronze, 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'uz' ? "Eslatib o'tamiz" : 
                     language === 'ru' ? "Напоминаем" : 
                     "Note"}
                  </h3>
                  <p>
                    {language === 'uz' ? 
                      "O'zbekiston 1992-yildan beri mustaqil davlat sifatida Olimpiya o'yinlarida ishtirok etmoqda." :
                     language === 'ru' ? 
                      "Узбекистан участвует в Олимпийских играх как независимое государство с 1992 года." :
                      "Uzbekistan has been participating in the Olympic Games as an independent state since 1992."}
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Olympics;
