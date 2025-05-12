import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Flag, Medal, Table as TableIcon } from "lucide-react";

const GamesSchedule = () => {
  const { language } = useLanguage();
  const [selectedOlympics, setSelectedOlympics] = useState("paris2024");
  const [selectedSport, setSelectedSport] = useState("all");

  const translations = {
    olympicGames: {
      uz: "Olimpiya o'yinlari",
      ru: "Олимпийские игры",
      en: "Olympic Games"
    },
    schedule: {
      uz: "Jadval",
      ru: "Расписание",
      en: "Schedule"
    },
    athletes: {
      uz: "Sportchilar",
      ru: "Спортсмены",
      en: "Athletes"
    },
    medals: {
      uz: "Medallar",
      ru: "Медали",
      en: "Medals"
    },
    selectOlympics: {
      uz: "Olimpiada tanlang",
      ru: "Выберите Олимпиаду",
      en: "Select Olympics"
    },
    selectSport: {
      uz: "Sport turini tanlang",
      ru: "Выберите вид спорта",
      en: "Select Sport"
    },
    all: {
      uz: "Barcha sport turlari",
      ru: "Все виды спорта",
      en: "All Sports"
    },
    football: {
      uz: "Futbol",
      ru: "Футбол",
      en: "Football"
    },
    boxing: {
      uz: "Boks",
      ru: "Бокс",
      en: "Boxing"
    },
    judo: {
      uz: "Dzyudo",
      ru: "Дзюдо",
      en: "Judo"
    },
    swimming: {
      uz: "Suzish",
      ru: "Плавание",
      en: "Swimming"
    },
    athletics: {
      uz: "Og'ir atletika",
      ru: "Тяжелая атлетика",
      en: "Weightlifting"
    },
    gymnastics: {
      uz: "Gimnastika",
      ru: "Гимнастика",
      en: "Gymnastics"
    },
    date: {
      uz: "Sana",
      ru: "Дата",
      en: "Date"
    },
    event: {
      uz: "Tadbir",
      ru: "Событие",
      en: "Event"
    },
    time: {
      uz: "Vaqt",
      ru: "Время",
      en: "Time"
    },
    venue: {
      uz: "Joy",
      ru: "Место проведения",
      en: "Venue"
    },
    athlete: {
      uz: "Sportchi",
      ru: "Спортсмен",
      en: "Athlete"
    },
    sport: {
      uz: "Sport",
      ru: "Спорт",
      en: "Sport"
    },
    weight: {
      uz: "Vazn",
      ru: "Вес",
      en: "Weight"
    },
    gold: {
      uz: "Oltin",
      ru: "Золото",
      en: "Gold"
    },
    silver: {
      uz: "Kumush",
      ru: "Серебро",
      en: "Silver"
    },
    bronze: {
      uz: "Bronza",
      ru: "Бронза",
      en: "Bronze"
    },
    total: {
      uz: "Jami",
      ru: "Всего",
      en: "Total"
    },
    paris2024: {
      uz: "Parij 2024",
      ru: "Париж 2024",
      en: "Paris 2024"
    },
    tokyo2020: {
      uz: "Tokio 2020",
      ru: "Токио 2020",
      en: "Tokyo 2020"
    },
    rio2016: {
      uz: "Rio 2016",
      ru: "Рио 2016",
      en: "Rio 2016"
    },
    london2012: {
      uz: "London 2012",
      ru: "Лондон 2012",
      en: "London 2012"
    },
    opening: {
      uz: "Ochilish marosimi",
      ru: "Церемония открытия",
      en: "Opening Ceremony"
    },
    closing: {
      uz: "Yopilish marosimi",
      ru: "Церемония закрытия",
      en: "Closing Ceremony"
    },
    noEvents: {
      uz: "Bu tanlov uchun tadbirlar topilmadi",
      ru: "События для этого выбора не найдены",
      en: "No events found for this selection"
    }
  };

  // Olympic Games data
  const olympicsData = {
    paris2024: {
      name: {
        uz: "Parij 2024",
        ru: "Париж 2024",
        en: "Paris 2024"
      },
      date: "26.07.2024 - 11.08.2024",
      venue: "Paris, France",
      events: [
        { date: "26.07.2024", time: "20:00", event: translations.opening[language], venue: "Seine River" },
        { date: "27.07.2024", time: "10:00", event: "Judo - Men's 60kg", venue: "Champ de Mars Arena", sport: "judo" },
        { date: "27.07.2024", time: "14:30", event: "Swimming - Men's 400m freestyle", venue: "Paris La Défense Arena", sport: "swimming" },
        { date: "28.07.2024", time: "10:00", event: "Boxing - Women's 57kg", venue: "Roland-Garros Stadium", sport: "boxing" },
        { date: "30.07.2024", time: "15:00", event: "Gymnastics - Women's Team Final", venue: "Bercy Arena", sport: "gymnastics" },
        { date: "02.08.2024", time: "19:00", event: "Athletics - Men's 100m Finals", venue: "Stade de France", sport: "athletics" },
        { date: "05.08.2024", time: "15:00", event: "Football - Men's Semi-finals", venue: "Parc des Princes", sport: "football" },
        { date: "07.08.2024", time: "20:00", event: "Boxing - Men's Finals", venue: "Roland-Garros Stadium", sport: "boxing" },
        { date: "10.08.2024", time: "15:00", event: "Football - Men's Gold Medal Match", venue: "Parc des Princes", sport: "football" },
        { date: "11.08.2024", time: "20:00", event: translations.closing[language], venue: "Stade de France" }
      ],
      athletes: [
        { name: "Akbar Juraev", sport: "athletics", weight: "109kg", qualified: true },
        { name: "Bektemir Melikuziev", sport: "boxing", weight: "81kg", qualified: true },
        { name: "Davlat Bobonov", sport: "judo", weight: "90kg", qualified: true },
        { name: "Oksana Chusovitina", sport: "gymnastics", weight: "N/A", qualified: true },
        { name: "Eldor Shomurodov", sport: "football", weight: "N/A", qualified: false }
      ],
      medals: []
    },
    tokyo2020: {
      name: {
        uz: "Tokio 2020",
        ru: "Токио 2020",
        en: "Tokyo 2020"
      },
      date: "23.07.2021 - 08.08.2021",
      venue: "Tokyo, Japan",
      events: [
        { date: "23.07.2021", time: "20:00", event: translations.opening[language], venue: "Olympic Stadium" },
        { date: "24.07.2021", time: "10:00", event: "Judo - Men's 60kg", venue: "Nippon Budokan", sport: "judo" },
        { date: "25.07.2021", time: "10:00", event: "Boxing - Women's 57kg", venue: "Kokugikan Arena", sport: "boxing" },
        { date: "27.07.2021", time: "19:00", event: "Gymnastics - Women's Team Final", venue: "Ariake Gymnastics Centre", sport: "gymnastics" },
        { date: "01.08.2021", time: "19:00", event: "Athletics - Men's 100m Finals", venue: "Olympic Stadium", sport: "athletics" },
        { date: "05.08.2021", time: "20:00", event: "Boxing - Men's Finals", venue: "Kokugikan Arena", sport: "boxing" },
        { date: "07.08.2021", time: "15:00", event: "Football - Men's Gold Medal Match", venue: "International Stadium Yokohama", sport: "football" },
        { date: "08.08.2021", time: "20:00", event: translations.closing[language], venue: "Olympic Stadium" }
      ],
      athletes: [
        { name: "Akbar Juraev", sport: "athletics", weight: "109kg", medal: "gold" },
        { name: "Bakhodir Jalolov", sport: "boxing", weight: "+91kg", medal: "gold" },
        { name: "Davlat Bobonov", sport: "judo", weight: "90kg", medal: "bronze" },
        { name: "Oksana Chusovitina", sport: "gymnastics", weight: "N/A", medal: null },
        { name: "Bektemir Melikuziev", sport: "boxing", weight: "81kg", medal: null }
      ],
      medals: [
        { sport: "Athletics", gold: 1, silver: 0, bronze: 0 },
        { sport: "Boxing", gold: 1, silver: 1, bronze: 2 },
        { sport: "Judo", gold: 0, silver: 0, bronze: 1 },
        { sport: "Taekwondo", gold: 1, silver: 0, bronze: 1 },
        { sport: "Wrestling", gold: 0, silver: 1, bronze: 2 }
      ]
    },
    rio2016: {
      name: {
        uz: "Rio 2016",
        ru: "Рио 2016",
        en: "Rio 2016"
      },
      date: "05.08.2016 - 21.08.2016",
      venue: "Rio de Janeiro, Brazil",
      events: [
        { date: "05.08.2016", time: "20:00", event: translations.opening[language], venue: "Maracanã Stadium" },
        { date: "06.08.2016", time: "10:00", event: "Judo - Men's 60kg", venue: "Carioca Arena 2", sport: "judo" },
        { date: "07.08.2016", time: "14:30", event: "Swimming - Men's 400m freestyle", venue: "Olympic Aquatics Stadium", sport: "swimming" },
        { date: "14.08.2016", time: "19:00", event: "Athletics - Men's 100m Finals", venue: "Olympic Stadium", sport: "athletics" },
        { date: "20.08.2016", time: "15:00", event: "Football - Men's Gold Medal Match", venue: "Maracanã Stadium", sport: "football" },
        { date: "21.08.2016", time: "20:00", event: translations.closing[language], venue: "Maracanã Stadium" }
      ],
      athletes: [
        { name: "Ruslan Nurudinov", sport: "athletics", weight: "105kg", medal: "gold" },
        { name: "Bektemir Melikuziev", sport: "boxing", weight: "75kg", medal: "silver" },
        { name: "Fazliddin Gaibnazarov", sport: "boxing", weight: "64kg", medal: "gold" },
        { name: "Rishod Sobirov", sport: "judo", weight: "66kg", medal: "bronze" },
        { name: "Diyorbek Urozboev", sport: "judo", weight: "60kg", medal: "bronze" }
      ],
      medals: [
        { sport: "Athletics", gold: 1, silver: 0, bronze: 0 },
        { sport: "Boxing", gold: 2, silver: 1, bronze: 2 },
        { sport: "Judo", gold: 0, silver: 0, bronze: 2 },
        { sport: "Wrestling", gold: 1, silver: 1, bronze: 3 }
      ]
    },
    london2012: {
      name: {
        uz: "London 2012",
        ru: "Лондон 2012",
        en: "London 2012"
      },
      date: "27.07.2012 - 12.08.2012",
      venue: "London, United Kingdom",
      events: [
        { date: "27.07.2012", time: "20:00", event: translations.opening[language], venue: "Olympic Stadium" },
        { date: "28.07.2012", time: "10:00", event: "Judo - Men's 60kg", venue: "ExCeL London", sport: "judo" },
        { date: "29.07.2012", time: "14:30", event: "Swimming - Men's 400m freestyle", venue: "London Aquatics Centre", sport: "swimming" },
        { date: "05.08.2012", time: "19:00", event: "Athletics - Men's 100m Finals", venue: "Olympic Stadium", sport: "athletics" },
        { date: "11.08.2012", time: "15:00", event: "Football - Men's Gold Medal Match", venue: "Wembley Stadium", sport: "football" },
        { date: "12.08.2012", time: "20:00", event: translations.closing[language], venue: "Olympic Stadium" }
      ],
      athletes: [
        { name: "Artur Taymazov", sport: "wrestling", weight: "120kg", medal: "gold" },
        { name: "Rishod Sobirov", sport: "judo", weight: "60kg", medal: "bronze" },
        { name: "Abbos Atoev", sport: "boxing", weight: "75kg", medal: "bronze" },
        { name: "Soslan Tigiev", sport: "wrestling", weight: "74kg", medal: "silver" }
      ],
      medals: [
        { sport: "Wrestling", gold: 1, silver: 0, bronze: 0 },
        { sport: "Boxing", gold: 0, silver: 0, bronze: 1 },
        { sport: "Judo", gold: 0, silver: 0, bronze: 1 },
        { sport: "Canoe Sprint", gold: 0, silver: 0, bronze: 1 }
      ]
    }
  };

  const selectedOlympicsData = olympicsData[selectedOlympics];
  const filteredEvents = selectedOlympicsData.events.filter(
    event => selectedSport === "all" || event.sport === selectedSport
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <motion.h1 
          className="text-3xl font-bold mb-2" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations.olympicGames[language]}
        </motion.h1>

        <motion.div
          className="text-xl mb-6 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {selectedOlympicsData.name[language]} - {selectedOlympicsData.venue}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">{translations.selectOlympics[language]}:</label>
            <Select value={selectedOlympics} onValueChange={setSelectedOlympics}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={translations.selectOlympics[language]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paris2024">{translations.paris2024[language]}</SelectItem>
                <SelectItem value="tokyo2020">{translations.tokyo2020[language]}</SelectItem>
                <SelectItem value="rio2016">{translations.rio2016[language]}</SelectItem>
                <SelectItem value="london2012">{translations.london2012[language]}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">{translations.selectSport[language]}:</label>
            <Select value={selectedSport} onValueChange={setSelectedSport}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={translations.selectSport[language]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{translations.all[language]}</SelectItem>
                <SelectItem value="judo">{translations.judo[language]}</SelectItem>
                <SelectItem value="boxing">{translations.boxing[language]}</SelectItem>
                <SelectItem value="swimming">{translations.swimming[language]}</SelectItem>
                <SelectItem value="athletics">{translations.athletics[language]}</SelectItem>
                <SelectItem value="gymnastics">{translations.gymnastics[language]}</SelectItem>
                <SelectItem value="football">{translations.football[language]}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <Tabs defaultValue="schedule">
          <TabsList className="mb-6">
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar size={16} />
              {translations.schedule[language]}
            </TabsTrigger>
            <TabsTrigger value="athletes" className="flex items-center gap-2">
              <Flag size={16} />
              {translations.athletes[language]}
            </TabsTrigger>
            {selectedOlympics !== 'paris2024' && (
              <TabsTrigger value="medals" className="flex items-center gap-2">
                <Medal size={16} />
                {translations.medals[language]}
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="schedule">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TableIcon size={20} />
                    <h2 className="text-xl font-bold">{translations.schedule[language]}</h2>
                  </div>
                  
                  {filteredEvents.length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{translations.date[language]}</TableHead>
                            <TableHead>{translations.time[language]}</TableHead>
                            <TableHead>{translations.event[language]}</TableHead>
                            <TableHead>{translations.venue[language]}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredEvents.map((event, index) => (
                            <TableRow key={index}>
                              <TableCell>{event.date}</TableCell>
                              <TableCell>{event.time}</TableCell>
                              <TableCell className="font-medium">{event.event}</TableCell>
                              <TableCell>{event.venue}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      {translations.noEvents[language]}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="athletes">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Flag size={20} />
                    <h2 className="text-xl font-bold">{translations.athletes[language]}</h2>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{translations.athlete[language]}</TableHead>
                          <TableHead>{translations.sport[language]}</TableHead>
                          <TableHead>{translations.weight[language]}</TableHead>
                          {selectedOlympics !== 'paris2024' && (
                            <TableHead>{translations.medals[language]}</TableHead>
                          )}
                          {selectedOlympics === 'paris2024' && (
                            <TableHead>{language === 'uz' ? "Malakasi" : language === 'ru' ? "Квалификация" : "Qualification"}</TableHead>
                          )}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedOlympicsData.athletes
                          .filter(athlete => selectedSport === "all" || athlete.sport === selectedSport)
                          .map((athlete, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{athlete.name}</TableCell>
                              <TableCell>{translations[athlete.sport] ? translations[athlete.sport][language] : athlete.sport}</TableCell>
                              <TableCell>{athlete.weight}</TableCell>
                              {selectedOlympics !== 'paris2024' ? (
                                <TableCell>
                                  {athlete.medal && (
                                    <span className={`
                                      px-2 py-1 rounded-md text-xs font-medium
                                      ${athlete.medal === 'gold' ? 'bg-yellow-400 text-gray-900' : 
                                        athlete.medal === 'silver' ? 'bg-gray-300 text-gray-900' : 
                                        'bg-amber-700 text-white'}
                                    `}>
                                      {athlete.medal === 'gold' ? translations.gold[language] : 
                                        athlete.medal === 'silver' ? translations.silver[language] : 
                                        translations.bronze[language]}
                                    </span>
                                  )}
                                  {!athlete.medal && '-'}
                                </TableCell>
                              ) : (
                                <TableCell>
                                  <span className={`
                                    px-2 py-1 rounded-md text-xs font-medium
                                    ${athlete.qualified ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                                  `}>
                                    {athlete.qualified ? 
                                      (language === 'uz' ? "Malakali" : language === 'ru' ? "Квалифицирован" : "Qualified") : 
                                      (language === 'uz' ? "Jarayonda" : language === 'ru' ? "В процессе" : "In process")}
                                  </span>
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          {selectedOlympics !== 'paris2024' && (
            <TabsContent value="medals">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Medal size={20} />
                      <h2 className="text-xl font-bold">{translations.medals[language]}</h2>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{translations.sport[language]}</TableHead>
                            <TableHead className="text-center">{translations.gold[language]}</TableHead>
                            <TableHead className="text-center">{translations.silver[language]}</TableHead>
                            <TableHead className="text-center">{translations.bronze[language]}</TableHead>
                            <TableHead className="text-center">{translations.total[language]}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedOlympicsData.medals
                            .filter(medal => selectedSport === "all" || medal.sport.toLowerCase() === selectedSport)
                            .map((medal, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{medal.sport}</TableCell>
                                <TableCell className="text-center">
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-gray-900 font-bold">
                                    {medal.gold}
                                  </span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-900 font-bold">
                                    {medal.silver}
                                  </span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold">
                                    {medal.bronze}
                                  </span>
                                </TableCell>
                                <TableCell className="text-center font-bold">
                                  {medal.gold + medal.silver + medal.bronze}
                                </TableCell>
                              </TableRow>
                            ))}
                          <TableRow className="bg-muted/50">
                            <TableCell className="font-bold">{translations.total[language]}</TableCell>
                            <TableCell className="text-center font-bold">
                              {selectedOlympicsData.medals
                                .filter(medal => selectedSport === "all" || medal.sport.toLowerCase() === selectedSport)
                                .reduce((sum, medal) => sum + medal.gold, 0)}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                              {selectedOlympicsData.medals
                                .filter(medal => selectedSport === "all" || medal.sport.toLowerCase() === selectedSport)
                                .reduce((sum, medal) => sum + medal.silver, 0)}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                              {selectedOlympicsData.medals
                                .filter(medal => selectedSport === "all" || medal.sport.toLowerCase() === selectedSport)
                                .reduce((sum, medal) => sum + medal.bronze, 0)}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                              {selectedOlympicsData.medals
                                .filter(medal => selectedSport === "all" || medal.sport.toLowerCase() === selectedSport)
                                .reduce((sum, medal) => sum + medal.gold + medal.silver + medal.bronze, 0)}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          )}
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default GamesSchedule;
