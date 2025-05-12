import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Medal, Calendar } from "lucide-react";

const LegendAthletes = () => {
  const { language } = useLanguage();
  const [sportFilter, setSportFilter] = useState("all");

  const translations = {
    legendAthletes: {
      uz: "Afsonaviy sportchilar",
      ru: "Легендарные спортсмены",
      en: "Legendary Athletes"
    },
    filterBySport: {
      uz: "Sport turi bo'yicha saralash",
      ru: "Фильтр по виду спорта",
      en: "Filter by Sport"
    },
    allSports: {
      uz: "Barcha sport turlari",
      ru: "Все виды спорта",
      en: "All Sports"
    },
    boxing: {
      uz: "Boks",
      ru: "Бокс",
      en: "Boxing"
    },
    wrestling: {
      uz: "Kurash",
      ru: "Борьба",
      en: "Wrestling"
    },
    gymnastics: {
      uz: "Gimnastika",
      ru: "Гимнастика",
      en: "Gymnastics"
    },
    athletics: {
      uz: "Og'ir atletika",
      ru: "Тяжелая атлетика",
      en: "Weightlifting"
    },
    judo: {
      uz: "Dzyudo",
      ru: "Дзюдо",
      en: "Judo"
    },
    taekvondo: {
      uz: "Taekvondo",
      ru: "Tхэквондо",
      en: "Taekwondo"
    },
    medals: {
      uz: "Medallar",
      ru: "Медали",
      en: "Medals"
    },
    achievements: {
      uz: "Yutuqlar",
      ru: "Достижения",
      en: "Achievements"
    },
    biography: {
      uz: "Biografiya",
      ru: "Биография",
      en: "Biography"
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
    olympicGames: {
      uz: "Olimpiya o'yinlari",
      ru: "Олимпийские игры",
      en: "Olympic Games"
    },
    worldChampionships: {
      uz: "Jahon chempionati",
      ru: "Чемпионат мира",
      en: "World Championships"
    }
  };

  const legendaryAthletes = [
    {
      id: 1,
      name: "Artur Taymazov",
      sport: "wrestling",
      image: "/picture/legand sportmen/Artur Šavqatovich Taymazov.jpg",
      medals: {
        olympic: { gold: 3, silver: 1, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 1 }
      },
      achievements: [
        { year: "2004", event: "Athens Olympics", medal: "gold", weight: "120kg" },
        { year: "2008", event: "Beijing Olympics", medal: "gold", weight: "120kg" },
        { year: "2012", event: "London Olympics", medal: "gold", weight: "120kg" },
        { year: "2000", event: "Sydney Olympics", medal: "silver", weight: "130kg" },
        { year: "2003", event: "World Championship", medal: "gold", weight: "120kg" },
        { year: "2001", event: "World Championship", medal: "bronze", weight: "130kg" }
      ],
      biography: {
        uz: "Artur Taymazov 1979-yilda tug'ilgan. U Osiyo o'yinlarida 2 marta g'olib chiqqan. 2004, 2008 va 2012-yillardagi Olimpiya o'yinlarida oltin medal sohibi bo'lgan.",
        ru: "Артур Таймазов родился в 1979 году. Он дважды становился победителем Азиатских игр. Обладатель золотых медалей Олимпийских игр 2004, 2008 и 2012 годов.",
        en: "Artur Taymazov was born in 1979. He has been a two-time Asian Games champion. He won gold medals at the 2004, 2008, and 2012 Olympic Games."
      }
    },
    {
      id: 2,
      name: "Oksana Chusovitina",
      sport: "gymnastics",
      image: "/picture/legand sportmen/Oksana Aleksandrovna Chusovitina.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 2, bronze: 3 }
      },
      achievements: [
        { year: "1993", event: "Jaxon chempionati, boʻshliqdan sakrash", medal: "bronze", weight: "" },
        { year: "2001", event: "JCH, boʻshliqdan sakrash", medal: "silver", weight: "Heavy" },
        { year: "2002", event: "JCH, boʻshliqdan sakrash", medal: "bronze", weight: "Heavy" },
        { year: "2003", event: "JCH, boʻshliqdan sakrash", medal: "gold", weight: "Heavy" },
        { year: "2005", event: "JCH, boʻshliqdan sakrash", medal: "silver", weight: "Heavy" },
        { year: "2008", event: "Pekin Olimpiadasi, turgan boʻshliqdan sakrash (gnoz)", medal: "silver", weight: "Heavy" },
      ],
      biography: {
        uz: "Oksana Chusovitina – 1975-yil 19-iyun, Buxoro shahrida tug'ilgan, birinchi boʻlib Oʻzbekiston bayrogʻini jahon maydonida koʻtarib chiqqan. U 1992-yilda birlashgan jamoa tarkibida Olimpiya oltin medalini qoʻlga kiritgan,",
        ru: "Оксана Чусовитина – родилась 19 июня 1975 года в городе Бухаре, первой подняла флаг Узбекистана на мировой арене. В 1992 году в составе объединенной команды он завоевал олимпийское золото.",
        en: "Oksana Chusovitina – born on June 19, 1975 in Bukhara, was the first to carry the flag of Uzbekistan on the world stage. She won the Olympic gold medal as part of the unified team in 1992,"
      }
    },
    {
      id: 3,
      name: "Anton Fokin",
      sport: "gymnastics",
      image: "/picture/legand sportmen/Anton Sergeyevich Fokin.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 1, bronze: 0 }
      },
      achievements: [
        { year: "2007", event: "	JCH, Shtutgart, ", medal: "silver", category: "Team" },
        { year: "2008", event: "Pekin Olimpiadasi, ", medal: "silver", category: "Vault" },
       
      ],
      biography: {
        uz: " Anton Fokin –  1982-yil 13-noyabr, Toshkent shahrida tug'ilgan. U Pekin Olimpiadasida parallel gʻildirak uslubida bronza medalga sazovor boʻldi, shuningdek 2007-yilgi jahon chempionatida ham bronza medalni qoʻlga kiritgan.",
        ru: "Антон Фокин родился 13 ноября 1982 года в Ташкенте. Она завоевала бронзовую медаль в упражнениях на брусьях на Олимпиаде в Пекине, а также бронзовую медаль на чемпионате мира 2007 года.",
        en: "Anton Fokin – born November 13, 1982, in Tashkent. He won a bronze medal in the parallel bars at the Beijing Olympics, and also won a bronze medal at the 2007 World Championships."
      }
    },
    {
      id: 4,
      name: "Ruslan Nurudinov",
      sport: "athletics",
      image: "/picture/legand sportmen/Ruslan Qimmatov oʻgʻli Nurudinov.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2013", event: "JCH, Vashingtonda, ", medal: "gold", weight: "105kg" },
        { year: "2016", event: "Rio-Olimpiadasi", medal: "gold", weight: "105kg" },
       
      ],
      biography: {
        uz: "Ruslan Nurudinov 1991-yilda tug'ilgan. U 2016-yil Rio-de-Janeyro Olimpiadasida og'ir atletika bo'yicha oltin medal sohibi bo'lgan. 2018-yilda jahon chempioni unvonini qo'lga kiritgan.",
        ru: "Руслан Нурудинов родился в 1991 году. На Олимпийских играх 2016 года в Рио-де-Жанейро он завоевал золотую медаль по тяжелой атлетике. В 2018 году он выиграл титул чемпиона мира.",
        en: "Ruslan Nurudinov was born in 1991. He won a gold medal in weightlifting at the 2016 Rio de Janeiro Olympics. In 2018, he became a world champion."
      }
    },
    {
      id: 5,
      name: "Rishod Sobirov ",
      sport: "judo",
      image: "/picture/legand sportmen/Rishod Rashidovich Sobirov.jpg",
      medals: {
        olympic: { gold: 0, silver: 0, bronze: 3 },
        world: { gold: 2, silver: 0, bronze: 1 }
      },
      achievements: [
        { year: "2008", event: "Pekin Olimpiadasi", medal: "bronze", weight: "75kg" },
        { year: "2010", event: "World Championship", medal: "gold", weight: "75kg" },
       { year: "2011", event: "JCH, Parij, ", medal: "gold", weight: "75kg" } ,
       { year: "2012", event: "London Olimpiadasi", medal: "bronze", weight: "81kg" },
        
      ],
      biography: {
        uz: "Rishod Sobirov – 1986-yil 11-sentyabr, Buxoro viloyatitug'ilgan,U ikki karra Olimpiya medali (2008 va 2012 yillarda bronza) hamda ikki karra jahon chempioni (2010 va 2011 yillar) boʻlgan ukrain-chaqirilgan dzyudochi",
        ru: "Ришод Собиров – родился 11 сентября 1986 года, Бухарская область. Он — дзюдоист украинского происхождения, двукратный призер Олимпийских игр (бронза 2008 и 2012 годов) и двукратный чемпион мира (2010 и 2011 годов).",
        en: "Rishod Sobirov – born September 11, 1986, Bukhara region. He is a Ukrainian-born judoka, two-time Olympic medalist (bronze in 2008 and 2012) and two-time world champion (2010 and 2011)."
      }
    },
    {
      id: 6,
      name: "Davlat Bobonov",
      sport: "judo",
      image: "/picture/legand sportmen/Davlat Bobonov.jpg",
      medals: {
        olympic: { gold: 0, silver: 0, bronze: 1 },
        world: { gold: 0, silver: 1, bronze: 0 }
      },
      achievements: [
        { year: "2020", event: "Tokyo Olympics", medal: "bronze", weight: "90kg" },
        { year: "2021", event: "World Championship", medal: "silver", weight: "90kg" },
        { year: "2021", event: "Asian Championship", medal: "gold", weight: "90kg" },
        { year: "2019", event: "Asian Championship", medal: "silver", weight: "90kg" }
      ],
      biography: {
        uz: "Davlat Bobonov 1997-yilda tug'ilgan. U 2020-yil Tokio Olimpiadasida dzyudo bo'yicha bronza medal sohibi bo'ldi. 2021-yilda jahon chempionatida kumush medal qozondi.",
        ru: "Давлат Бобонов родился в 1997 году. На Олимпийских играх 2020 года в Токио он завоевал бронзовую медаль по дзюдо. В 2021 году он выиграл серебряную медаль на чемпионате мира.",
        en: "Davlat Bobonov was born in 1997. He won a bronze medal in judo at the 2020 Tokyo Olympics. In 2021, he won a silver medal at the World Championship."
      }
    },{
      id: 7,
      name: "Ulugʻbek Rashitov ",
      sport: "taekvondo",
      image: "/picture/legand sportmen/Ulugʻbek Rashidjon oʻgʻli Rashitov.jpg",
      medals: {
        olympic: { gold: 2, silver: 0, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2020", event: "Tokio Olimpiadasi", medal: "gold", weight: "90kg" },
        { year: "2024", event: "Parij Olimpiadasi", medal: "gold", weight: "90kg" },
       
      ],
      biography: {
        uz: "Ulugʻbek Rashitov - 2002-yil 23-martda tug'ilgan, U yosh taekvondo ustozi, ikki karra Olimpiya oltin medali sohibi.",
        ru: "Улугбек Рашитов - родился 23 марта 2002 года. Молодой инструктор по тхэквондо, двукратный олимпийский чемпион.",
        en: "Davlat Bobonov was born in 1997. He won a bronze medal in judo at the 2020 Tokyo Olympics. In 2021, he won a silver medal at the World Championship."
      }
    },{
      id: 8,
      name: "Akbar Djurayev ",
      sport: "athletics",
      image: "/picture/legand sportmen/Akbar (Abdurashid) Djuraev (Juraev).jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2020", event: "Tokyo Olympics", medal: "gold", weight: "90kg" },
        { year: "2021", event: "JCH, Toshkent", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Akbar Djurayev – yosh ogʻir atlet, Tokio 2020 Olimpiadasida +109 kg sinfida gʻolib chiqqan hamda 2021-yilda Oʻzbekiston poytaxtida oʻtkazilgan jahon chempionatini ham yutgan.",
        ru: "Акбар Джураев — молодой тяжелоатлет, победивший в весовой категории +109 кг на Олимпиаде в Токио в 2020 году, а также выигравший чемпионат мира в столице Узбекистана в 2021 году.",
        en: "Akbar Djurayev is a young weightlifter who won the +109 kg class at the Tokyo 2020 Olympics and also won the World Championships in the capital of Uzbekistan in 2021."
      }
    }
    ,{
      id: 9,
      name: "Bakhodir Jalolov  ",
      sport: "boxing",
      image: "/picture/legand sportmen/Bakhodir Jalolov oʻgʻli Jalolov.avif",
      medals: {
        olympic: { gold: 2, silver: 0, bronze: 0 },
        world: { gold: 2, silver: 0, bronze: 1 }
      },
      achievements: [
        { year: "2015", event: "JCH, Doha", medal: "bronze", weight: "90kg" },
        { year: "2019", event: "JCH, Yangi Delhi", medal: "gold", weight: "90kg" },
        { year: "2020", event: "Tokio Olimpiadasi", medal: "gold", weight: "90kg" },
        { year: "2023", event: "JCH, Buxoro", medal: "gold", weight: "90kg" },
        { year: "2024", event: "Parij Olimpiadasi", medal: "gold", weight: "90kg" }
      ],
      biography: {
        uz: "Bakhodir Jalolov – Oʻzbekiston boksida superogʻir vaznning afsonaviy vakili. U 2019 va 2023-yillarda jahon chempionati gʻolibiga aylangan hamda Tokio (2020) va Parij (2024) Olimpiadalarida +91/+92 kg vazn toifasida oltin medalga sazovor boʻlgan.",
        ru: "Баходир Джалолов — легендарный представитель супертяжелого веса в узбекском боксе. Он побеждал на чемпионатах мира 2019 и 2023 годов, а также завоевал золотые медали в весовой категории +91/+92 кг на Олимпийских играх в Токио (2020) и Париже (2024).",
        en: "Bakhodir Jalolov is a legendary representative of the super heavyweight division in Uzbek boxing. He won the world championships in 2019 and 2023 and won gold medals in the +91/+92 kg weight category at the Tokyo (2020) and Paris (2024) Olympics."
      }
    }
    ,{
      id: 10,
      name: "Shakhram Giyasov ",
      sport: "boxing",
      image: "/picture/legand sportmen/Shakhram Dzhavlonovich Giyasov.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2016", event: "Rio-Olimpiadasi", medal: "silver", weight: "90kg" },
        { year: "2017", event: "JCH, Hamburg", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Shakhram Giyasov – taniqli bokschi, Rio 2016 Olimpiadasida 69 kg vaznda kumush medal, 2017-yilda esa jahon chempionligini qoʻlga kiritgan",
        ru: "Шахрам Гиясов — известный боксер, завоевавший серебряную медаль в весовой категории до 69 кг на Олимпиаде в Рио-де-Жанейро в 2016 году и чемпионате мира в 2017 году.",
        en: "Shakhram Giyasov is a famous boxer who won a silver medal in the 69 kg weight category at the 2016 Rio Olympics and the world championship in 2017."
      }
    }
    ,{
      id: 11,
      name: "Shakhobidin Zoirov  ",
      sport: "boxing",
      image: "/picture/legand sportmen/Shakhobidin Zoirov.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2016", event: "Rio-Olimpiadasi", medal: "gold", weight: "90kg" },
        { year: "2019", event: "JCH, Sochi, ", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Shakhobidin Zoirov – Oʻzbekiston terma jamoasining eng yaxshi bokschilaridan biri. U Rio 2016 Olimpiadasida 52 kg vaznda oltin medalni qoʻlga kiritdi va 2019-yilda jahon chempioni (Sochi) boʻldi. ",
        ru: "Шахобидин Зоиров — один из лучших боксеров сборной Узбекистана. Он завоевал золотую медаль в весовой категории 52 кг на Олимпиаде в Рио-2016, а в 2019 году стал чемпионом мира (Сочи).",
        en: "Shakhobidin Zoirov is one of the best boxers in the Uzbek national team. He won the gold medal in the 52 kg weight category at the Rio 2016 Olympics and became the world champion in 2019 (Sochi)."
      }
    }
    ,{
      id: 12,
      name: "Fazliddin Gaibnazarov",
      sport: "boxing",
      image: "/picture/legand sportmen/Fazliddin Marafon oʻgʻli Gaibnazarov.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 0, silver: 1, bronze: 0 }
      },
      achievements: [
        { year: "2015", event: "JCH, Doha", medal: "silver", weight: "90kg" },
        { year: "2016", event: "Rio-Olimpiadasi", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Fazliddin Gaibnazarov – kuchli bokschi, Rio 2016 Olimpiadasida 64 kg kategoriyasida oltin medalni qoʻlga kiritgan. U 2015-yilda jahon chempionatida ham kumush medalni jamoamizga sovgʻa qilgan",
        ru: "Фазлиддин Гаибназаров — сильный боксер, завоевавший золотую медаль в категории 64 кг на Олимпиаде в Рио-2016. Он также завоевал для нашей команды серебряную медаль на чемпионате мира 2015 года.",
        en: "Fazliddin Gaibnazarov is a strong boxer who won a gold medal in the 64 kg category at the Rio 2016 Olympics. He also brought our team a silver medal at the 2015 World Championships."
      }
    },{
      id: 13,
      name: "Ekaterina Khilko  ",
      sport: "gymnastics",
      image: "/picture/legand sportmen/Ekaterina Khilko (Trampolin gimnastika).jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2008", event: "Pekin Olimpiadasi,", medal: "silver", weight: "90kg" },
        
      ],
      biography: {
        uz: "Ekaterina Khilko – trampolin gimnastikasi bo‘yicha Oʻzbekiston terma jamoasining etakchi sportchisi. Pekin Olimpiadasida ona yurtiga trampolindan bronza medal olib keldi.",
        ru: "Екатерина Хилько — ведущая спортсменка сборной Узбекистана по прыжкам на батуте. На Олимпиаде в Пекине он завоевал бронзовую медаль в прыжках на батуте.",
        en: "Ekaterina Khilko is the leading athlete of the Uzbek national trampoline gymnastics team. She brought her homeland a bronze medal in trampoline at the Beijing Olympics."
      }
    },{
      id: 14,
      name: "Abdullo Tangriev  ",
      sport: "judo",
      image: "/picture/legand sportmen/Abdullo Tangriev.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2008", event: "Pekin Olimpiadasi", medal: "silver", weight: "90kg" },
      ],
      biography: {
        uz: "Abdullo Tangriev – Oʻzbek dzyudo tarixidagi taniqli mashhur sportchi. U Pekin-2008 Olimpiadasida +100 kg kategoriya finalida kumush medalni qoʻlga kiritib, mamlakatimiz birinchi marta dzyudo sohasida Olimpiya medalini oldi.",
        ru: "Абдулло Тангриев — известный спортсмен в истории узбекского дзюдо. На Олимпиаде 2008 года в Пекине он завоевал серебряную медаль в финале категории +100 кг, став первым олимпийским призером по дзюдо для нашей страны.",
        en: "Abdullo Tangriev is a well-known athlete in the history of Uzbek judo. He won the silver medal in the +100 kg category final at the 2008 Beijing Olympics, becoming the first Olympic medalist for our country in judo."
      }
    },{
      id: 15,
      name: "Diyorbek Urozboev ",
      sport: "judo",
      image: "/picture/legand sportmen/Diyorbek Urozboev.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2016", event: "Rio-Olimpiadasi", medal: "silver", weight: "90kg" },
        
      ],
      biography: {
        uz: "Diyorbek Urozboev – yosh dzyudochi, Rio 2016 Olimpiadasida 60 kg kategoriyada kumush medalni qoʻlga kiritgan.",
        ru: "Диёрбек Урозбоев — молодой дзюдоист, завоевавший серебряную медаль в весовой категории до 60 кг на Олимпиаде в Рио-2016.",
        en: "Diyorbek Urozboev is a young judoka who won a silver medal in the 60 kg category at the Rio 2016 Olympics."
      }
    },{
      id: 16,
      name: "Diyora Keldiyorova  ",
      sport: "judo",
      image: "/picture/legand sportmen/Diyora Keldiyorova.webp",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2024", event: "Parij Olimpiadasi", medal: "gold", weight: "90kg" },
        
        
      ],
      biography: {
        uz: "Diyora Keldiyorova – Oʻzbekiston tarixidagi ilk ayol Olimpiya chempioni (judo 52 kg) boʻlgan sportchi. U Parij 2024 Olimpiadasida oltin medalni qoʻlga kiritib, mamlakatimiz dzyudo qahramonlaridan biriga aylandi",
        ru: "Диёра Келдиёрова – первая в истории Узбекистана олимпийская чемпионка среди женщин (судья до 52 кг). Он завоевал золотую медаль на Олимпиаде 2024 года в Париже, став одним из героев дзюдо нашей страны.",
        en: "Diyora Keldiyorova is the first female Olympic champion in the history of Uzbekistan (judo 52 kg). She won the gold medal at the Paris 2024 Olympics and became one of the heroes of judo in our country."
      }
    },{
      id: 17,
      name: "Bekzod Abdurakhmonov  ",
      sport: "wrestling",
      image: "/picture/legand sportmen/Bekzod Abdurakhmonov.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2020", event: "Tokyo Olympics", medal: "silver", weight: "90kg" },     
      ],
      biography: {
        uz: "Bekzod Abdurakhmonov – 74 kg vaznda tozalik bilan kurashuvchi murabbiylik o’g’li. U 2020-yil Tokioda erkin kurash bo‘yicha Olimpiadada bronza medalini qo‘lga kiritgan.",
        ru: "Бекзод Абдурахмонов — борец, выступающий в толчке в весовой категории до 74 кг. На Олимпийских играх 2020 года в Токио он завоевал бронзовую медаль по вольной борьбе.",
        en: "Bekzod Abdurakhmonov is a clean and jerk wrestler in the 74 kg weight class. He won a bronze medal in freestyle wrestling at the 2020 Tokyo Olympics."
      }
    },{
      id: 18,
      name: "Elmurat Tasmuradov ",
      sport: "wrestling",
      image: "/picture/legand sportmen/Elmurat Tasmuradov.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 1, bronze: 2 }
      },
      achievements: [
        { year: "2013", event: "JCH, Budapesht", medal: "bronze", weight: "90kg" },
        { year: "2014", event: "JCH, Toshkent", medal: "bronze", weight: "90kg" },
        { year: "2016", event: "Rio-Olimpiadasi", medal: "silver", weight: "90kg" },
        { year: "2018", event: "JCH, Budapesht", medal: "silver", weight: "90kg" },
      ],
      biography: {
        uz: "Elmurat Tasmuradov – sobiq qozog‘istonlik grekorum kurashchi, hozir Oʻzbekistonda kurashadi. U Rio-2016 Olimpiadasida 59 kg vaznda bronza medaliga sazovor boʻldi",
        ru: "Эльмурат Тасмурадов — бывший казахский борец греко-римского стиля, ныне выступающий в Узбекистане. На Олимпиаде 2016 года в Рио-де-Жанейро он завоевал бронзовую медаль в весовой категории 59 кг.",
        en: "Elmurat Tasmuradov is a former Kazakh Greco-Roman wrestler who now competes in Uzbekistan. He won a bronze medal in the 59 kg weight category at the Rio 2016 Olympics."
      }
    },{
      id: 19,
      name: "Svetlana Osipova ",
      sport: "taekvondo",
      image: "/picture/legand sportmen/Svetlana Osipova.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 1, silver: 1, bronze: 0 }
      },
      achievements: [
        { year: "2022", event: "JCH, Guadalajara", medal: "gold", weight: "90kg" },
        { year: "2023", event: "JCH, Boku", medal: "silver", weight: "90kg" },
        { year: "2024", event: "Parij Olimpiadasi", medal: "silver", weight: "90kg" }, 
      ],
      biography: {
        uz: "Svetlana Osipova – oʻzbek taekwondo jamoasining ilgʻor sportchisi. U Parij-2024 Olimpiadasida +67 kg vazn toifasida kumush medalga sazovor boʻldi. Bundan oldin jahon chempionatlarida ham oltin (2022) va kumush (2023) medallarni qoʻlga kiritgan",
        ru: "Светлана Осипова — опытная спортсменка сборной Узбекистана по тхэквондо. На Олимпиаде 2024 года в Париже он завоевал серебряную медаль в весовой категории +67 кг. Ранее он завоевал золотую (2022) и серебряную (2023) медали чемпионатов мира.",
        en: "Svetlana Osipova is a leading athlete of the Uzbek taekwondo team. She won a silver medal in the +67 kg weight category at the Paris 2024 Olympics. She also won gold (2022) and silver (2023) medals at the World Championships."
      }
    },{
      id: 20,
      name: "Mirazizbek Mirzakhalilov ",
      sport: "boxing",
      image: "/picture/legand sportmen/Mirazizbek Mirzakhalilov.jpg",
          medals: {
        olympic: { gold: 0, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2019", event: "JCH, Yangi Dehli", medal: "gold", weight: "90kg" },
       
        
      ],
      biography: {
        uz: "Mirazizbek Mirzakhalilov – yosh filipponi kurashchi. U 2019-yilda Svet atlet boks jahon chempionatida 52 kg kategoriyasida oltin medalni qo‘lga kiritib, Oʻzbekiston terma jamoasiga katta faxr bagʻishladi. ",
        ru: "Миразизбек Мирзахалилов – молодой филиппинский борец. Он принес большую гордость сборной Узбекистана, завоевав золотую медаль в категории 52 кг на чемпионате мира по боксу 2019 года.",
        en: "Mirazizbek Mirzakhalilov is a young Filipino wrestler who brought great pride to the Uzbek national team by winning the gold medal in the 52 kg category at the 2019 World Athlete Boxing Championships."
      }
    },{
      id: 21,
      name: "Muzaffarbek Turoboyev  ",
      sport: "judo",
      image: "/picture/legand sportmen/Muzaffarbek Turoboyev.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 1 }
      },
      achievements: [
        { year: "2021", event: "JCH, Budapesht", medal: "broze", weight: "90kg" },
        { year: "2022", event: "JCH, Toshkent,", medal: "gold", weight: "90kg" },
        { year: "2024", event: "Parij Olimpiadasi", medal: "silver", weight: "90kg" },
      ],
      biography: {
        uz: "Muzaffarbek Turoboyev – Oʻzbekiston dzyudosining isteʼdodli vakili. U Parij-2024 Olimpiadasida 100 kg vazn toifasida bronza medalni qo‘lga kiritdi. Shuningdek, Tashkentdagi 2022-yilgi jahon chempionatida oltin medal, 2021-yilda esa bronza medalga erishgan.",
        ru: "Музаффарбек Туробоев — талантливый представитель узбекского дзюдо. На Олимпиаде 2024 года в Париже он завоевал бронзовую медаль в весовой категории 100 кг. Они также завоевали золотую медаль на чемпионате мира 2022 года в Ташкенте и бронзовую медаль в 2021 году.",
        en: "Muzaffarbek Turoboyev is a talented representative of Uzbek judo. He won a bronze medal in the 100 kg weight category at the Paris 2024 Olympics. He also won a gold medal at the 2022 World Championships in Tashkent and a bronze medal in 2021."
      }
    },
    {
      id: 22,
      name: "Gulomjon Abdullaev  ",
      sport: "wrestling",
      image: "/picture/legand sportmen/Gulomjon Abdullaev.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2024", event: "Parij Olimpiadasi", medal: "silver", weight: "90kg" },
      ],
      biography: {
        uz: "Gulomjon Abdullaev – Oʻzbekiston kurashi terma jamoasining yosh aʼzosi. U Parij-2024 Olimpiadasida erkin kurash 57 kg toifasida kumush medalni qo‘lga kiritdi.",
        ru: "Гуломжон Абдуллаев — молодой член сборной Узбекистана по борьбе. На Олимпиаде 2024 года в Париже он завоевал серебряную медаль в весовой категории до 57 кг по вольной борьбе.",
        en: "Gulomjon Abdullaev is a young member of the Uzbekistan national wrestling team. He won a silver medal in the freestyle wrestling 57 kg category at the Paris 2024 Olympics."
      }
    },
    {
      id: 23,
      name: "Hasanboy Dusmatov",
      sport: "boxing",
      image: "/picture/legand sportmen/Hasanboy Dusmatov.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2016", event: "Rio-Olimpiadasi", medal: "gold", weight: "90kg" },
        { year: "2013", event: "JCH, Toshkent", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Hasanboy Dusmatov – Oʻzbekiston qahramoni, Rio 2016 Olimpiadasida 52 kg vazn toifasida oltin medalni qoʻlga kiritgan. U jahon chempionatining sobiq sovrindori ham bo‘lib, 2013-yilda jahon chempionatida ham oltin medalga erishgan.",
        ru: "Хасанбой Дусматов — герой Узбекистана, завоевавший золотую медаль в весовой категории 52 кг на Олимпиаде в Рио-2016. Он также является бывшим чемпионом мира, завоевавшим золотую медаль на чемпионате мира 2013 года.",
        en: "Hasanboy Dusmatov is a hero of Uzbekistan, who won the gold medal in the 52 kg weight category at the Rio 2016 Olympics. He is also a former world champion, having also won the gold medal at the 2013 World Championships."
      }
    },{
      id: 24,
      name: "Bektemir Melikuziev  ",
      sport: "boxing",
      image: "/picture/legand sportmen/Bektemir Melikuziev.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2016", event: "Rio-Olimpiadasi", medal: "silver", weight: "90kg" },
       
      ],
      biography: {
        uz: "Bektemir Melikuziev – Rio 2016 Olimpiadasida 75 kg vazn toifasida kumush medal olgan koʻtarinki ruhli bokschi. Oʻsha yili jahon chempionatida ham kumush medalga sazovor boʻldi. ",
        ru: "Бектемир Меликузиев — талантливый боксер, завоевавший серебряную медаль в весовой категории 75 кг на Олимпиаде в Рио-2016. В том же году он завоевал серебряную медаль на чемпионате мира.",
        en: "Bektemir Melikuziev is a spirited boxer who won a silver medal in the 75 kg weight category at the Rio 2016 Olympics. He also won a silver medal at the World Championships that same year."
      }
    },
    {
      id: 25,
      name: "Armen Bagdasarov  ",
      sport: "judo",
      image: "/picture/legand sportmen/Armen Yuryevich Bagdasarov.jpg",
      medals: {
        olympic: { gold: 0, silver: 1, bronze: 0 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "1996", event: "Atlanta Olimpiadasi", medal: "silver", weight: "90kg" },
         
      ],
      biography: {
        uz: "Armen Bagdasarov – Oʻzbekistonning birinchi Olimpiya medalistlaridan biri. U 1996-yil Atlantada 86 kg dzyudo bahsida kumush medalni qoʻlga kiritgan. Bu Oʻzbekiston tarixidagi eng muhim vazifalardan biri boʻlib, mustaqil davlat uchun Olimpiya medali birinchi marta olib kelingan",
        ru: "Армен Багдасаров — один из первых олимпийских медалистов Узбекистана. Он завоевал серебряную медаль в дзюдо в весовой категории 86 кг на Олимпийских играх в Атланте в 1996 году. Это одно из самых важных достижений в истории Узбекистана и первая олимпийская медаль для независимого государства.",
        en: "Armen Bagdasarov is one of Uzbekistan's first Olympic medalists. He won a silver medal in the 86 kg judo event in Atlanta in 1996. This is one of the most important achievements in the history of Uzbekistan, and the first Olympic medal for an independent state."
       
      }
    },{
      id: 26,
      name: "Karim Tulaganov  ",
      sport: "boxing",
      image: "/picture/legand sportmen/Karim Alimshanovich Tulaganov.webp",
      medals: {
        olympic: { gold: 0, silver: 0, bronze: 1 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "1996", event: "Atlanta Olimpiadasi", medal: "bronze", weight: "90kg" },
        
      ],
      biography: {
        uz: "Karim Tulaganov – Rio va London Olimpiadalarida ishtirok etgan bokschi. U Atlantada (1996) 71 kg vazn toifasida bronza medalini qo‘lga kiritgan. ",
        ru: "Карим Тулаганов — боксер, участник Олимпийских игр в Рио и Лондоне. Он завоевал бронзовую медаль в категории 71 кг в Атланте (1996).",
        en: "Karim Tulaganov is a boxer who competed in the Rio and London Olympics. He won a bronze medal in the 71 kg weight category in Atlanta (1996)."
      }
    },{
      id: 27,
      name: "Muhammadkodir Abdullaev ",
      sport: "boxing",
      image: "/picture/legand sportmen/Muhammadkodir (“Mahammatkodir”) Abdullaev.jpg",
      medals: {
        olympic: { gold: 1, silver: 0, bronze: 0 },
        world: { gold: 1, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "1999", event: "JCH, Bruklin", medal: "gold", weight: "90kg" },
        { year: "2000", event: "Sidney Olimpiadasi", medal: "gold", weight: "90kg" },
        
      ],
      biography: {
        uz: "Muhammadkodir Abdullaev – Oʻzbekiston boksining yirik namoyondasi. U 2000-yil Sidney Olimpiadasida 63.5 kg vazn toifasida oltin medalni qoʻlga kiritgan ",
        ru: "Мухаммадкодир Абдуллаев – крупная фигура в узбекском боксе. Он завоевал золотую медаль на Олимпиаде 2000 года в Сиднее в весовой категории 63,5 кг.",
        en: "Muhammadkodir Abdullaev is a prominent figure in Uzbek boxing. He won a gold medal in the 63.5 kg weight category at the 2000 Sydney Olympics."
      }
    },{
      id: 28,
      name: "Rustam Saidov  ",
      sport: "boxing",
      image: "/picture/legand sportmen/Rustam Saidov (Boks, +91 kg).jpg",
      medals: {
        olympic: { gold: 0, silver: 0, bronze: 1 },
        world: { gold: 0, silver: 0, bronze: 0 }
      },
      achievements: [
        { year: "2000", event: "Sidney Olimpiadasi", medal: "bronze", weight: "90kg" },
       
        
      ],
      biography: {
        uz: "Rustam Saidov – superogʻir vazndagi bokschi. U Sidney-2000 Olimpiadasida +91 kg vazn toifasida bronza medalni qo‘lga kiritgan.",
        ru: "Рустам Саидов — боксер-супертяжеловес. На Олимпиаде 2000 года в Сиднее он завоевал бронзовую медаль в весовой категории +91 кг.",
        en: "Rustam Saidov is a super heavyweight boxer. He won a bronze medal in the +91 kg weight category at the 2000 Sydney Olympics."
      }
    },
  ];

  const filteredAthletes = sportFilter === 'all' 
    ? legendaryAthletes 
    : legendaryAthletes.filter(athlete => athlete.sport === sportFilter);

  const getMedalColor = (medal) => {
    if (medal === 'gold') return 'bg-yellow-400';
    if (medal === 'silver') return 'bg-gray-300';
    if (medal === 'bronze') return 'bg-amber-700';
    return 'bg-gray-100';
  };

  const getMedalTextColor = (medal) => {
    if (medal === 'gold') return 'text-black';
    if (medal === 'silver') return 'text-black';
    if (medal === 'bronze') return 'text-white';
    return 'text-gray-900';
  };

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
          {translations.legendAthletes[language]}
        </motion.h1>

        <div className="mb-8">
          <h2 className="text-lg mb-3">{translations.filterBySport[language]}:</h2>
          <Tabs value={sportFilter} onValueChange={setSportFilter} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
              <TabsTrigger value="all">{translations.allSports[language]}</TabsTrigger>
              <TabsTrigger value="boxing">{translations.boxing[language]}</TabsTrigger>
              <TabsTrigger value="wrestling">{translations.wrestling[language]}</TabsTrigger>
              <TabsTrigger value="gymnastics">{translations.gymnastics[language]}</TabsTrigger>
              <TabsTrigger value="athletics">{translations.athletics[language]}</TabsTrigger>
              <TabsTrigger value="judo">{translations.judo[language]}</TabsTrigger>
              <TabsTrigger value="taekvondo">{translations.taekvondo[language]}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <Card className="h-full flex flex-col overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={athlete.image} 
                    alt={athlete.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                
                <CardContent className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold">{athlete.name}</h2>
                    <Badge variant="outline" className="text-sm">
                      {translations[athlete.sport][language]}
                    </Badge>
                  </div>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Medal className="mr-2" size={18} />
                        {translations.olympicGames[language]}
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                            {athlete.medals.olympic.gold}
                          </span>
                          <span className="text-xs mt-1">{translations.gold[language]}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">
                            {athlete.medals.olympic.silver}
                          </span>
                          <span className="text-xs mt-1">{translations.silver[language]}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
                            {athlete.medals.olympic.bronze}
                          </span>
                          <span className="text-xs mt-1">{translations.bronze[language]}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Medal className="mr-2" size={18} />
                        {translations.worldChampionships[language]}
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                            {athlete.medals.world.gold}
                          </span>
                          <span className="text-xs mt-1">{translations.gold[language]}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">
                            {athlete.medals.world.silver}
                          </span>
                          <span className="text-xs mt-1">{translations.silver[language]}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
                            {athlete.medals.world.bronze}
                          </span>
                          <span className="text-xs mt-1">{translations.bronze[language]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Calendar className="mr-2" size={18} />
                      {translations.achievements[language]}
                    </h3>
                    <div className="space-y-2 max-h-36 overflow-y-auto">
                      {athlete.achievements.slice(0, 4).map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className={`px-2 py-1 rounded-md ${getMedalColor(achievement.medal)} ${getMedalTextColor(achievement.medal)} text-xs font-medium`}>
                            {achievement.year}
                          </span>
                          <span>{achievement.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">{translations.biography[language]}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{athlete.biography[language]}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LegendAthletes;
