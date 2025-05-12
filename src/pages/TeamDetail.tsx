import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';
import { Users, Medal, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamDetail = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("football");
  const [showAllPlayers, setShowAllPlayers] = useState(false); // Qo'shildi
  const navigate = useNavigate();

  // Team data
  const teams = {
    football: {
      coach: {
        name: "Temur Kapatadze",
        age: 44,
        matches: 26,
        medals: 1,
        image: "/picture/temur kapatze.webp",
      },
      players: [
        { name: "Eldor Shomurodov", position: "FW", age: 29, matches: 69, goals: 38, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Oston Urunov", position: "FW", age: 24, matches: 26, goals: 6, image: "https://images.unsplash.com/photo-1539057083368-32657aa383c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Jaloliddin Masharipov", position: "FW", age: 31, matches: 64, goals: 12, image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Akmal Mozgovoy", position: "FW", age: 25, matches: 12, goals: 0, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Otabek Shukurov", position: "FW", age: 28, matches: 71, goals: 9, },
        { name: "Ibrohimhalil Yoʻldoshev", position: "FW", age: 24, matches: 30, goals: 1, },
        { name: "Hojiakbar Alijonov", position: "FW", age: 28, matches: 28, goals: 1, },
        { name: "Husniddin Aliqulov", position: "FW", age: 26, matches: 45, goals: 3, },
        { name: "Bobur Abduholiqov", position: "FW", age: 28, matches: 8, goals: 1, },
        { name: "Abbos Fayzullayev", position: "FW", age: 21, matches: 25, goals: 8, },
        { name: "Ruslanbek Jiyanov", position: "MF", age: 23, matches: 17, goals: 2, },
        { name: "Abdurauf Boʻriyev", position: "MF", age: 22, matches: 0, goals: 0, },
        { name: "Rustam Ashurmatov", position: "MF", age: 28, matches: 40, goals: 1, },
        { name: "Jamshid Iskanderov", position: "MF", age: 31, matches: 37, goals: 4, },
        { name: "Odiljon Hamrobekov", position: "MF", age: 29, matches: 61, goals: 1, },
        { name: "Oybek Bozorov", position: "MF", age: 27, matches: 16, goals: 0, },
        { name: "Farrux Sayfiyev", position: "MF", age: 34, matches: 59, goals: 1, },
        { name: "Sherzod Nasrullayev", position: "DF", age: 26, matches: 26, goals: 2, },
        { name: "Abduqodir Husanov", position: "DF", age: 21, matches: 18, goals: 0, },
        { name: "Umar Eshmurodov", position: "DF", age: 32, matches: 33, goals: 0, },
        { name: "Dilshod Komilov", position: "DF", age: 25, matches: 3, goals: 0, },
        { name: "Zafarmurod Abdurahmatov", position: "DF", age: 22, matches: 4, goals: 0, },
        { name: "	Abdulla Abdullayev", position: "DF", age: 27, matches: 23, goals: 0, },
        { name: "Botirali Ergashev", position: "GK", age: 29, matches: 2, goals: 0, },
        { name: "Oʻtkir Yusupov", position: "GK", age: 34, matches: 37, goals: 0, },
        { name: "Abduvohid Neʼmatov", position: "GK", age: 24, matches: 7, goals: 0, },
        
      ],
      matches: [
        { date: "25-mart, 2025", opponent: "O'zbekiston vs Eron", result: "2-2", venue: "Tehron, Stadion; Ozodiy " },
        { date: "20- mart ,2025", opponent: "O'zbekiston vs Qirg'iziston", result: "1-0", venue: "Toshkent,Stadion;Bunyodkor" },
        { date: "27-yanvar, 2025", opponent: "O'zbekiston vs Iordaniya", result: "0–0", venue: "	Amman, Stadion: Abdulloh ibn Xalifa" },
        { date: "19-noyabr, 2024", opponent: "O'zbekiston vs Shimoliy Koreya", result: "1–0", venue: "	Vyentyan,	Stadion: Lao" },
        { date: "14-noyabr, 2024", opponent: "O'zbekiston vs  Qatar", result: "2–3", venue: "Doʻha,Stadion: Jassim ibn Hamad" },
        { date: "15-oktyabr, 2024", opponent: "O'zbekiston vs Birlashgan Arab Amirliklari", result: "1–0", venue: " Toshkent, 	Stadion: Bunyodkor" },
        { date: "5-sentyabr, 2024", opponent: "O'zbekiston vs Qirgʻiziston", result: "1–0", venue: " Toshkent, 	Stadion: Bunyodkor" },
        { date: "5-sentyabr, 2024", opponent: "O'zbekiston vs Shimoliy Koreya", result: "1–0", venue: " Toshkent, 	Stadion: Bunyodkor" },
        { date: "11-iyun, 2024", opponent: "Eron vs O'zbekiston", result: "1–0", venue: " 	Tehron, Eron,	Stadion: Ozodiy Stadioni" },
        { date: "6-iyun, 2024", opponent: "O'zbekiston vs Turkmaniston", result: "3–1", venue: " Toshkent, 	Stadion: Bunyodkor" },
      ]
    },
    boxing: {
      coach: {
        name: "Toʻlqin Qilichev",
        age: 42,
        matches:8,
        medals: 5,
        image: "/picture/team/Toʻlqin Qilichev.webp",
      },
      players: [
        { name: "Bektemir Melikuziev", position: "76 kg", age: 29, matches: 16, medals: 2, },
        { name: "Hasanboy Do'smatov", position: "51 kg", age: 31, matches: 19, medals: 6, image: "https://images.unsplash.com/photo-1622201806800-308df2459a14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Bobo-Usmon Baturov", position: "69 kg", age: 30, matches: 6, medals: 5, image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Shakhram G'iyosov", position: "67 kg", age: 31, matches: 17, medals: 3, image: "https://images.unsplash.com/photo-1567598508481-65a7a5553191?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Bahodir Jalolov", position: "+92 kg", age: 30, matches: 15, medals: 7, },
        { name: "Abbos Atoev", position: "75 kg", age: 38, matches: 16, medals: 2, },
        { name: "Rustam Saidov", position: "+91 kg", age: 40,matches: 16, medals: 3 },
        { name: "Rustam Saidov", position: "70kg", age: 37,matches: 19, medals: 8},
      ],
      matches: [
        { date: "28.07.2024", opponent: "Hasanboy Dusmatov vs	David de Pina (Kabo-Verde)", result: "3-2", venue: "Arena Paris Nord" },
        { date: "29.07.2024", opponent: "Abdumalik Khalokov	vs Javier Ibanez Diaz (Bolgariya)", result: "4-1", venue: "Arena Paris Nord" },
        { date: "30.07.2024", opponent: "Asadkhuja Muydinkhujaev vs	Omari Jones (AQSh)", result: "3-2", venue: "Arena Paris Nord" },
        { date: "31.07.2024", opponent: "Hasanboy Dusmatov vs Yunior Alcantara Reyes (Dominikana)", result: "4-1", venue: "Arena Paris Nord" },
        { date: "03.08.2024", opponent: "Abdumalik Khalokov vs Charlie Senior (Avstraliya)", result: "TKO-5", venue: "Arena Paris Nord" },
        { date: "06.08.2024", opponent: "Asadkhuja Muydinkhujaev vs Lewis Richardson (Buyuk Britaniya)", result: "3-2", venue: "Stade Roland-Garros" },
        { date: "08.08.2024", opponent: "Hasanboy Dusmatov vs	Billal Bennama (Fransiya)", result: "5-0", venue: "Stade Roland-Garros" }, 
        { date: "08.08.2024", opponent: "Abdumalik Khalokov vs	Munarbek Seiitbek Uulu (Qirg‘iziston)", result: "2-3", venue: "Stade Roland-Garros" },
        { date: "09.08.2024", opponent: "Asadkhuja Muydinkhujaev vs Marco Alonso Verde Alvarez (Meksika)", result: "1-4", venue: "Stade Roland-Garros" },
        { date: "09.08.2024", opponent: "Lazizbek Mullojonov vs	Loren Berto Alfonso (Ozarbayjon)", result: "4-1", venue: "Stade Roland-Garros" },
        { date: "10.08.2024", opponent: "Bakhodir Jalolov vs Richard Torrez (AQSh) ", result: "TKO-5 ", venue: "Le Bourget Arena" }
      ]
    },
    judo: {
      coach: {
        name: "Alexei Budolin",
        age: 49,
        matches: 38,
        medals: 8,
        image: "/picture/team/Alexei Budolin.jpg"
      },
      players: [
        { name: "Davlat Bobonov", position: "90 kg", age: 27, matches: 49, medals: 30,  },
        { name: "KELDIYOROVA Diyora", position: "-52 kg", age: 26, matches: 49, medals: 26, image: "https://images.unsplash.com/photo-1564859228039-5fd0629cf3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "AHADOV Shakhram", position: "-73kg", age: 28, matches:29 , medals: 15, image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "BOLTABOEV Sharofiddin", position: "-81 kg", age: 29, matches: 45, medals: 16, image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "YUSUPOV Alisher", position: "+100kg", age: 26, matches: 30, medals: 20, image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "TUROBOYEV Muzaffarbek", position: "-100kg", age: 24, matches: 22, medals: 18, image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "	YULDOSHEV Murodjon", position: "-73kg", age: 24, matches: 24, medals: 10, image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },

     
      ],
      matches: [
        { date: "05.07.2024", opponent: "Davlat Bobonov vs Nikoloz Sherazadishvili", result: "Ippon", venue: "Paris, France" },
        { date: "10.07.2024", opponent: "KELDIYOROVA Diyora vs Saeid Mollaei", result: "Waza-ari", venue: "Paris, France" },
        { date: "11.07.2024", opponent: "AHADOV Shakhram` vs Madeleine Malonga", result: "Draw", venue: "Paris, France" },
        { date: "01.08.2024", opponent: "BOLTABOEV Sharofiddin vs Yeldos Smetov", result: "Ippon", venue: "Paris, France" },
        { date: "03.08.2023", opponent: "YULDOSHEV Murodjon vs Jorge Fonseca", result: "Ippon", venue:"Paris, France" }
      ]
    },
    athletics: {
      coach: {
        name: "Andrey Sokolov",
        age: 56,
        matches: 42,
        medals: 7,
        image: "/picture/team/Andrey Sokolov.webp"
      },
      players: [
        { name: "Ruslan Nurudinov", position: "105 kg", age: 	33, matches: 18, medals: 6, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Ivan Efremov", position: "105 kg", age: 39, matches: 28, medals: 1, image: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Akbar Djuraev", position: "102–109 kg", age: 25, matches: 15, medals: 2, image: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Igor Khalilov", position: "+105 kgkg", age: 52, matches: 12, medals: 1, image: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Aleksandr Urinov", position: "99–105  kg", age: 25, matches: 15, medals: 3,},
        { name: "Sh. Yusupov", position: "77–85 kg", age: 42, matches: 21, medals: 5,},
        { name: "Mansurbek Chashemov", position: "85 kg", age: 40, matches: 25, medals: 7,},
        { name: "Doston Yokubov", position: "69-kg", age: 27, matches: 12, medals: 1,},
        { name: "Rustam Djangabaev", position: "+105kg", age: 30, matches: 18, medals: 2,},
        { name: "S. Dusmurotov", position: "+105 kgkg", age: 32, matches: 30, medals: 5,},
      ],
      matches: [
        { date: "10.08.2024 ", opponent: "Muzaffarbek Turoboyev	Paris 2024", result: "🥉 Bronza Medal (401 kg)", venue: "Paris Expo Porte de Versailles" },
        { date: "10.08.2024", opponent: "Akbar Djuraev	Paris 2024", result: "🥈 Kumush Medal (404 kg)", venue: "	Paris Expo Porte de Versailles" },
        { date: "04.08.2021", opponent: "Ivan Efremov	Tokyo 2020", result: "🥉 Bronza Medal (416 kg)", venue: "Tokyo International Forum" },
        { date: "04.08.2021", opponent: "Akbar Djuraev Tokyo 2020	", result: "🥇 Oltin Medal (430 kg)", venue: "Tokyo International Forum" },
        { date: "14.08.2016", opponent: "Ruslan Nurudinov-Rio 2016", result: "🥇 Oltin Medal (431 kg)", venue: "Pavilion 2, Rioga sarayi kompleksi" }
      ]
    }
  };

  const translations = {
    teamInfo: {
      uz: "Jamoa ma'lumotlari",
      ru: "Информация о команде",
      en: "Team Information"
    },
    coach: {
      uz: "Murabbiy",
      ru: "Тренер",
      en: "Coach"
    },
    players: {
      uz: "O'yinchilar",
      ru: "Игроки",
      en: "Players"
    },
    results: {
      uz: "Natijalar",
      ru: "Результаты",
      en: "Results"
    },
    age: {
      uz: "Yosh",
      ru: "Возраст",
      en: "Age"
    },
    matches: {
      uz: "O'yinlar",
      ru: "Матчи",
      en: "Matches"
    },
    medals: {
      uz: "Medallari",
      ru: "Медали",
      en: "Medals"
    },
    position: {
      uz: "Pozitsiya",
      ru: "Позиция",
      en: "Position"
    },
    goals: {
      uz: "Gollar",
      ru: "Голы",
      en: "Goals"
    },
    name: {
      uz: "Ism",
      ru: "Имя",
      en: "Name"
    },
    date: {
      uz: "Sana",
      ru: "Дата",
      en: "Date"
    },
    opponent: {
      uz: "Raqib",
      ru: "Соперник",
      en: "Opponent"
    },
    result: {
      uz: "Natija",
      ru: "Результат",
      en: "Result"
    },
    venue: {
      uz: "Joy",
      ru: "Место",
      en: "Venue"
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
    athletics: {
      uz: "Og'ir atletika",
      ru: "Тяжелая атлетика",
      en: "Weightlifting"
    },
    viewAll: {
      uz: "Barcha sportchilar",
      ru: "Все спортсмены",
      en: "All Athletes"
    },
    schedule: {
      uz: "Jadval",
      ru: "Расписание",
      en: "Schedule"
    }
  };

  const selectedTeam = teams[activeTab];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <motion.h1 
          className="text-3xl font-bold mb-6" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {translations.teamInfo[language]}
        </motion.h1>

        <Tabs value={activeTab} onValueChange={tab => { setActiveTab(tab); setShowAllPlayers(false); }}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="football">{translations.football[language]}</TabsTrigger>
            <TabsTrigger value="boxing">{translations.boxing[language]}</TabsTrigger>
            <TabsTrigger value="judo">{translations.judo[language]}</TabsTrigger>
            <TabsTrigger value="athletics">{translations.athletics[language]}</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Coach Section */}
              <Card className="col-span-1">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users size={24} />
                    {translations.coach[language]}
                  </h2>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img src={selectedTeam.coach.image} alt={selectedTeam.coach.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">{selectedTeam.coach.name}</h3>
                    <div className="mt-4 grid grid-cols-3 w-full text-center">
                      <div>
                        <div className="text-lg font-bold">{selectedTeam.coach.age}</div>
                        <div className="text-sm text-gray-500">{translations.age[language]}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">{selectedTeam.coach.matches}</div>
                        <div className="text-sm text-gray-500">{translations.matches[language]}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">{selectedTeam.coach.medals}</div>
                        <div className="text-sm text-gray-500">{translations.medals[language]}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Players Section */}
              <Card className="col-span-2">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users size={24} />
                    {translations.players[language]}
                  </h2>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{translations.name[language]}</TableHead>
                          <TableHead>{translations.position[language]}</TableHead>
                          <TableHead>{translations.age[language]}</TableHead>
                          <TableHead>{translations.matches[language]}</TableHead>
                          <TableHead>{activeTab === 'football' ? translations.goals[language] : translations.medals[language]}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {(showAllPlayers ? selectedTeam.players : selectedTeam.players.slice(0, 5)).map((player, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{player.name}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.age}</TableCell>
                            <TableCell>{player.matches}</TableCell>
                            <TableCell>{activeTab === 'football' ? player.goals : player.medals}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {selectedTeam.players.length > 5 && (
                      <div className="flex justify-center mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowAllPlayers((prev) => !prev)}
                        >
                          {showAllPlayers
                            ? (language === "uz" ? "Yopish" : language === "ru" ? "Скрыть" : "Show less")
                            : (language === "uz" ? "Barchasini ko‘rsatish" : language === "ru" ? "Показать все" : "Show all")}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Calendar size={24} />
                    {translations.results[language]}
                  </h2>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{translations.date[language]}</TableHead>
                          <TableHead>{translations.opponent[language]}</TableHead>
                          <TableHead>{translations.result[language]}</TableHead>
                          <TableHead>{translations.venue[language]}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedTeam.matches.map((match, index) => (
                          <TableRow key={index}>
                            <TableCell>{match.date}</TableCell>
                            <TableCell className="font-medium">{match.opponent}</TableCell>
                            <TableCell className="font-bold">{match.result}</TableCell>
                            <TableCell>{match.venue}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mt-6"
            >
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/sportchilar')}
              >
                <Medal className="mr-2 h-4 w-4" />
                {translations.viewAll[language]}
              </Button>
              {/* <Button 
                variant="outline"
                onClick={() => navigate('/olimpiya/jadval')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {translations.schedule[language]}
              </Button> */}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default TeamDetail;