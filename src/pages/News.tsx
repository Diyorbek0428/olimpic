import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';

// Rasm slayderi komponenti
const NewsImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-48 overflow-hidden rounded-t-lg flex items-center justify-center bg-black">
      <img
        src={images[current]}
        alt="news"
        className="w-full h-full object-cover object-center transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/80 z-10"
            aria-label="Oldingi rasm"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/80 z-10"
            aria-label="Keyingi rasm"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

const NewsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  // Yangiliklar ma'lumotlari (image endi massiv bo'lishi mumkin)
  const newsData = [
    {
      id: 1,
      title: {
        uz: "Yosh bokschilarimiz Osiyo chempionatida ochkolar boʻyicha tengsiz boʻlishdi",
        ru: "Наши молодые боксеры не имели равных по очкам на чемпионате Азии",
        en: "Our young boxers were unequal in points at the Asian Championship"
      },
      category: "boxing",
      date: "2025-05-01",
      image: [
        "/picture/Yosh bokschilarimiz.jpg",     
       ],
      excerpt: {
        uz: "Iordaniyaning Amman shahrida boks boʻyicha U15 va U17 yosh toifalaridagi Osiyo chempionati yakunlandi. Musobaqaning soʻnggi kunida U17 toifasidagi final janglari oʻtkazildi. Unda bokschilarimiz 8 ta oltin, 7 ta kumush va 4 ta bronza medallariga sazovor boʻlishdi.",
        ru: "В Аммане (Иордания) завершился чемпионат Азии по боксу в возрастных категориях до 15 и до 17 лет. Финальные матчи в категории до 17 лет прошли в последний день соревнований. Наши боксеры завоевали 8 золотых, 7 серебряных и 4 бронзовых медали.",
        en: "The Asian Boxing Championships in the U15 and U17 age categories have concluded in Amman, Jordan. On the last day of the competition, the final fights in the U17 category were held. Our boxers won 8 gold, 7 silver and 4 bronze medals."
      }
    },
    {
      id: 2,
      title: {
        uz: "Dzyudochilarimiz Dushanbe “Katta dubulgʻa” turniriga joʻnab ketishdi",
        ru: "Наши дзюдоисты отправились на турнир Большого шлема в Душанбе",
        en: "Our judokas left for the Dushanbe Grand Slam tournament"
      },
      category: "Kurash",
      date: "2025-05-01",
      image: ["/picture/Dzyudochilarimiz Dushanbe.jpg",
        "/picture/Dzyudochilarimiz Dushanbe1.jpg",
      ],
      excerpt: {
        uz: "2-4-may kunlari Tojikiston poytaxti Dushanbe shahrida dzyudo bo'yicha “Katta dubulgʻa” turniri boʻlib oʻtadi",
        ru: "Турнир Большого шлема по дзюдо пройдет в Душанбе, столице Таджикистана, со 2 по 4 мая.",
        en: "The Grand Slam judo tournament will be held in Dushanbe, the capital of Tajikistan, on May 2-4."
      }
    },
    {
      id: 3,
      title: {
        uz: "Taekvondochilarimiz klublar oʻrtasidagi Osiyo chempionatini 14 ta medal bilan tugatishdi",
        ru: "Наши тхэквондисты завершили клубный чемпионат Азии с 14 медалями",
        en: "Our taekwondo athletes finished the Asian Club Championship with 14 medals"
      },
      category: "taekvondo",
      date: "2025-04-30",
      image: [
        "/picture/Taekvondochilarimiz.jpg",
         "/picture/Taekvondochilarimiz1.jpg",
          "/picture/Taekvondochilarimiz2.jpg",
           "/picture/Taekvondochilarimiz3.jpg",
            "/picture/Taekvondochilarimiz4.jpg",
      ],
      excerpt: {
        uz: "Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 2 ta kumush va 1 ta bronza medallariga sazovor boʻldi.",
        ru: "В Уси, Китай, завершился клубный чемпионат Азии по тхэквондо (WT). В последний день соревнований сборная Узбекистана завоевала 2 золотые, 2 серебряные и 1 бронзовую медаль.",
        en: "The Asian Taekwondo WT Club Championship has come to an end in Wuxi, China. On the last day of the competition, the Uzbek national team won 2 gold, 2 silver, and 1 bronze medals."
      }
    },
    {
      id: 4,
      title: {
        uz: "Ogʻir atletika boʻyicha oʻsmirlar va yoshlar oʻrtasidagi jahon chempionati boshlanmoqda",
        ru: "Начинается чемпионат мира по тяжелой атлетике среди юниоров и молодежи",
        en: "The World Junior and Youth Weightlifting Championships are starting"
      },
      category: "athletics",
      date: "2025-04-30",
      image: [
        "/picture/Ogʻir atletika.jpg",
      ],
      excerpt: {
        uz: "Bugun Peru poytaxti Lima shahrida ogʻir atletika boʻyicha oʻsmirlar va yoshlar oʻrtasidagi jahon chempionati start oladi. 5-mayga qadar davom etadigan dunyo birinchiligida 77 mamlakatdan 531 nafar sportchi ishtirok etadi.",
        ru: "Сегодня в Лиме, ​​столице Перу, стартует чемпионат мира по тяжелой атлетике среди юниоров и молодежи. В чемпионате мира, который продлится до 5 мая, примут участие 531 спортсмен из 77 стран.",
        en: "The World Junior and Youth Weightlifting Championships begin today in Lima, the capital of Peru. 531 athletes from 77 countries will participate in the world championship, which will last until May 5."
      }
    },
    {
      id: 5,
      title: {
        uz: "Kichik oʻsmirlarimiz Ammandagi Osiyo chempionatini muvaffaqiyatli yakunlashdi",
        ru: "Наши юниоры успешно завершили чемпионат Азии в Аммане",
        en: "Our juniors successfully completed the Asian Championship in Amman"
      },
      category: "olympic",
      date: "2025-04-30",
      image: [
        "/picture/Kichik oʻsmirlarimiz.jpg"
      ],
      excerpt: {
        uz: "Iordaniyaning Amman shahri boks boʻyicha U15 va U17 yosh toifalaridagi Osiyo chempionatiga mezbonlik qilmoqda. Ortda qolgan kun 15 yoshgacha boʻlgan sportchilar oʻrtasida final janglari oʻtkazildi. Yakunda ringga koʻtarilgan 15 nafar bokschimizning 7 tasi gʻalaba qozonib, qitʼa chempionligiga erishdi. Shuningdek, yarim finalgacha yetib borgan 8 nafar vakilimiz bronza medaliga sazovor boʻldi.",
        ru: "В Аммане (Иордания) проходит чемпионат Азии по боксу в возрастных категориях до 15 и до 17 лет. На следующий день состоялись финальные поединки среди спортсменов до 15 лет. В итоге 7 из 15 наших боксеров, вышедших на ринг, одержали победу и стали чемпионами континента. Также 8 наших представителей, вышедших в полуфинал, получили бронзовые медали.",
        en: "Amman, Jordan, is hosting the Asian Boxing Championships in the U15 and U17 age categories. The finals for athletes under 15 were held yesterday. In the end, 7 of our 15 boxers who entered the ring won and became continental champions. In addition, 8 of our representatives who reached the semi-finals won bronze medals."
      }
    },
    {
      id: 6,
      title: {
        uz: "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Butunjahon suzish federatsiyasi rahbari, Osiyo Olimpiya kengashi bosh direktori Husayn al-Musallam va Milliy olimpiya qo‘mitalari assotsiatsiyasi birinchi vitse-prezidenti Shayx Javʼan bin Hamad Ol Soniyni qabul qildi",
        ru: "Президент Республики Узбекистан Шавкат Мирзиёев принял президента Всемирной федерации плавания, генерального директора Олимпийского совета Азии Хусейна Аль-Мусаллама и первого вице-президента Ассоциации национальных олимпийских комитетов шейха Джавана бин Хамада Аль Тани.",
        en: "President of the Republic of Uzbekistan Shavkat Mirziyoyev received the President of the World Swimming Federation, Director General of the Olympic Council of Asia Hussein Al-Musallam, and the First Vice President of the Association of National Olympic Committees Sheikh Jawan bin Hamad Al Thani"
      },
      category: "handball",
      date: "2025-04-29",
      image: [
        "/picture/O‘zbekiston Respublikasi Prezidenti.jpg"
      ],
      excerpt: {
        uz: "Sport sohasidagi o‘zaro manfaatli hamkorlikni yanada kengaytirish, olimpiya harakatini qo‘llab-quvvatlash, mamlakatimizda professional va ommaviy sportni rivojlantirish uchun shart-sharoitlar yaratishning dolzarb masalalari ko‘rib chiqildi.",
        ru: "Стороны рассмотрели актуальные вопросы дальнейшего расширения взаимовыгодного сотрудничества в области спорта, поддержки олимпийского движения, создания условий для развития профессионального и массового спорта в нашей стране.",
        en: "The parties considered urgent issues of further expanding mutually beneficial cooperation in the field of sports, supporting the Olympic movement, and creating conditions for the development of professional and mass sports in our country."
      }
    },
    {
      id: 7,
      title: {
        uz: "Taekvondochilarimiz Osiyo chempionatining ilk kunida toʻqqizta medal jamgʻarishdi",
        ru: "Наши тхэквондисты завоевали девять медалей в первый день чемпионата Азии",
        en: "Our taekwondo athletes won nine medals on the first day of the Asian Championships"
      },
      category: "wrestling",
      date: "2025-04-29",
      image: [
        "/picture/Taekvondochilarimiz osiyo.jpg","/picture/Taekvondochilarimiz osiyo1.jpg",
      ],
      excerpt: {
        uz: "Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati boshlandi. Musobaqaning birinchi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 3 ta kumush va 4 ta bronza medallarini qoʻlga kiritdi",
        ru: "В Уси, Китай, стартовал клубный чемпионат Азии по тхэквондо (WT). В первый день соревнований сборная Узбекистана завоевала 2 золотые, 3 серебряные и 4 бронзовые медали.",
        en: "The Asian Taekwondo WT Club Championship has begun in Wuxi, China. On the first day of the competition, the Uzbek national team won 2 gold, 3 silver and 4 bronze medals"
      }
    },
    {
      id: 8,
      title: {
        uz: "Kun tarixi!",
        ru: "История дня!",
        en: "History of the day!"
      },
      category: "tabletennis",
      date: "2025-04-29",
      image: [
        "public/picture/Kun tarixi.jpg","public/picture/Kun tarixi1.jpg",
        "public/picture/Kun tarixi2.jpg","public/picture/Kun tarixi3.jpg",
        "public/picture/Kun tarixi4.jpg","public/picture/Kun tarixi5.jpg",
        "public/picture/Kun tarixi6.jpg","public/picture/Kun tarixi7.jpg",
        "public/picture/Kun tarixi8.jpg","public/picture/Kun tarixi9.jpg"
      ],
      excerpt: {
        uz: "Roppa-rosa 1 yil avval futbol boʻyicha Oʻzbekiston olimpiya terma jamoasi U23 Osiyo kubogining yarim finalida Indoneziya ustidan 2:0 hisobida gʻalaba qozonib, final va tarixiy Parij-2024 yozgi Olimpiya oʻyinlari yoʻllanmasini qoʻlga kiritgan edi.",
        ru: "Ровно год назад олимпийская сборная Узбекистана по футболу обыграла Индонезию со счетом 2:0 в полуфинале Кубка Азии среди игроков до 23 лет, обеспечив себе место в финале и историческую путевку на летние Олимпийские игры 2024 года в Париже.",
        en: "Exactly one year ago, the Uzbekistan Olympic football team defeated Indonesia 2-0 in the semifinals of the U23 Asian Cup, securing a spot in the final and a historic berth at the 2024 Summer Olympics in Paris."
      }
    },
    {
      id: 9,
      title: {
        uz: "Sport gimnastikachilarimiz Jahon kubogida 2 ta bronza medalini qoʻlga kiritishdi",
        ru: "Наши гимнастки завоевали 2 бронзовые медали на Кубке мира",
        en: "Our gymnasts won 2 bronze medals at the World Cup"
      },
      category: "tabletennis",
      date: "2025-04-29",
      image: [
        "public/picture/Sport.jpg",
      ],
      excerpt: {
        uz: "Misr poytaxtida sport gimnastikasi boʻyicha Jahon kubogi bosqichi nihoyasiga yetdi. Quvonarlisi, unda ishtirok etgan Oʻzbekiston terma jamoasi 2 ta bronza medaliga sazovor boʻldi.",
        ru: "В египетской столице завершился Кубок мира по спортивной гимнастике. К счастью, участвовавшая в нем сборная Узбекистана завоевала 2 бронзовые медали.",
        en: "The Artistic Gymnastics World Cup in the Egyptian capital has come to an end. Fortunately, the Uzbek national team that participated in it won 2 bronze medals."
      }
    },
    {
      id: 10,
      title: {
        uz: "Olimpiya harakati va suv sporti turlari rivojini yangi bosqichga olib chiqish yo‘lida muhim qadam tashlandi",
        ru: "Сделан важный шаг на пути вывода развития олимпийского движения и водных видов спорта на новый уровень.",
        en: "An important step has been taken towards bringing the development of the Olympic Movement and aquatic sports to a new level"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Olimpiya.jpg",
      ],
      excerpt: {
        uz: "World Aquatics Prezidenti, Osiyo Olimpiya kengashi (OOK) Bosh direktori Husayn Al Musallam, Milliy Olimpiya qo‘mitalari assotsiatsiyasi birinchi (MOQA) vitse-prezidenti, Qatar MOQ Prezidenti Shayx Joaan Ol Soni...",
        ru: "Президент World Aquatics, Генеральный директор Олимпийского совета Азии (ОСА) Хуссейн Аль Мусаллам, Первый вице-президент Ассоциации национальных олимпийских комитетов (АНОК), Президент НОК Катара шейх Джоан Аль Тани...",
        en: "President of World Aquatics, Director General of the Olympic Council of Asia (OCA), Hussain Al Musallam, First Vice President of the Association of National Olympic Committees (ANOC), President of the Qatar NOC, Sheikh Joaan Al Thani..."
      }
    },
    {
      id: 11,
      title: {
        uz: "Duatlon bo‘yicha O‘zbekiston chempionatida g‘oliblar aniqlandi",
        ru: "Определены победители чемпионата Узбекистана по дуатлону",
        en: "Winners of the Uzbekistan Duathlon Championship have been determined"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Duatlon.jpg", "public/picture/Duatlon1.jpg", "public/picture/Duatlon2.jpg",
      ],
      excerpt: {
        uz: "Poytaxtimizdagi “Yangi O‘zbekiston” majmuasida duatlon bo‘yicha O‘zbekiston chempionati o‘tkazildi.",
        ru: "В столичном комплексе «Янги Узбекистан» прошел чемпионат Узбекистана по дуатлону.",
        en: "The Uzbekistan Duathlon Championship was held at the Yangi Uzbekistan' complex in our capital."
      }
    },
    {
      id: 12,
      title: {
        uz: "Toshkentga World Aquatics, MOQA va Osiyo Olimpiya kengashi delegatsiyasi yetib keldi",
        ru: "Делегации World Aquatics, MOCA и Олимпийского совета Азии прибывают в Ташкент",
        en: "Delegations from World Aquatics, MOCA and Olympic Council of Asia arrive in Tashkent"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Toshkentga.jpg", "public/picture/Toshkentga1.jpg",
        "public/picture/Toshkentga2.jpg",   "public/picture/Toshkentga3.jpg", "public/picture/Toshkentga4.jpg",
      ],
      excerpt: {
        uz: "Bugun Islom Karimov nomidagi Toshkent xalqaro aeroportiga World Aquatics prezidenti, Osiyo Olimpiya kengashi (OOK) Bosh direktori Husayn Al Musallam, Milliy Olimpiya qoʻmitalari...",
        ru: "Сегодня в Международный аэропорт Ташкента имени Ислама Каримова прибыли президент World Aquatics, генеральный директор Олимпийского совета Азии (ОСА) Хусейн Аль Мусаллам и представители национальных олимпийских комитетов...",
        en: "Today, President of World Aquatics, Director General of the Olympic Council of Asia (OCA), Hussein Al Musallam, and representatives of the National Olympic Committees arrived at the Islam Karimov Tashkent International Airport..."
      }
    },
    {
      id: 13,
      title: {
        uz: "Dzyudochilarimiz aralash jamoaviy dasturda kumush medalni qoʻlga kiritishdi",
        ru: "Наши дзюдоисты завоевали серебряную медаль в смешанной командной программе",
        en: "Our judokas won a silver medal in the mixed team program"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Tailandning.jpg"
      ],
      excerpt: {
        uz: "Tailandning Bangkok shahrida dzyudo boʻyicha Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida aralash jamoaviy dastur boʻyicha gʻolib va sovrindorlar aniqlab olindi.",
        ru: "В Бангкоке, Таиланд, завершился чемпионат Азии по дзюдо. В последний день соревнований определились победители и призеры в смешанной командной программе.",
        en: "The Asian Judo Championships have come to an end in Bangkok, Thailand. On the last day of the competition, the winners and medalists in the mixed team program were determined."
      }
    },
    {
      id: 14,
      title: {
        uz: "Sport vazirligi va MOQ rahbariyati maktablarda: Yoshlar sport sinovlarida oʻz salohiyatini namoyon etishmoqda",
        ru: "Министерство спорта и руководство НОК в школах: молодежь демонстрирует свой потенциал в спортивных тестах",
        en: "Ministry of Sports and NOC leadership in schools: Youth are demonstrating their potential in sports tests"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Sport vazirligi.jpg","public/picture/Sport vazirligi1.jpg","public/picture/Sport vazirligi2.jpg","public/picture/Sport vazirligi3.jpg","public/picture/Sport vazirligi4.jpg","public/picture/Sport vazirligi5.jpg",
      ],
      excerpt: {
        uz: "Poytaxtimizda aholi, ayniqsa, yoshlar oʻrtasida sogʻlom turmush tarzini targʻib qilish va ularni ommaviy sportga keng jalb etish maqsadida maktab oʻquvchilari uchun maxsus sport sinovlari oʻtkazilmoqda.",
        ru: "В нашей столице проводятся специальные спортивные испытания для школьников в целях пропаганды здорового образа жизни среди населения, особенно молодежи, широкого привлечения их к массовым занятиям спортом.",
        en: "In our capital, special sports tests are being held for schoolchildren in order to promote a healthy lifestyle among the population, especially young people, and to widely involve them in mass sports."
      }
    },
    {
      id: 15,
      title: {
        uz: "Gimnastikachilarimiz Jahon kubogi bosqichini 10 ta medal bilan yakunlashdi",
        ru: "Наши гимнастки завершили этап Кубка мира с 10 медалями",
        en: "Our gymnasts finished the World Cup stage with 10 medals"
      },
      category: "tabletennis",
      date: "2025-04-28",
      image: [
        "public/picture/Gimnastikachilarimiz.jpg","public/picture/Gimnastikachilarimiz 1.jpg","public/picture/Gimnastikachilarimiz 2.jpg",
      ],
      excerpt: {
        uz: "Toshkent mezbonlik qilgan badiiy gimnastika boʻyicha Jahon kubogining uchinchi bosqichi yakunlandi. ",
        ru: "В Ташкенте завершился третий этап Кубка мира по художественной гимнастике.",
        en: "The third stage of the Rhythmic Gymnastics World Cup, hosted by Tashkent, has ended."
      }
    },
    {
      id: 16,
      title: {
        uz: "Oʻzbekiston U17 terma jamoasi – ikki karra Osiyo chempioni!",
        ru: "Сборная Узбекистана до 17 лет — двукратный чемпион Азии!",
        en: "Uzbekistan U17 national team is a two-time Asian champion!"
      },
      category: "tabletennis",
      date: "2025-04-20",
      image: [
       "public/picture/Oʻzbekiston U17.jpg"
      ],
      excerpt: {
        uz: "Saudiya Arabistonida futbol boʻyicha U17 yosh toifasidagi Osiyo kubogi oʻz yakuniga yetdi.",
        ru: "В Саудовской Аравии завершился Кубок Азии по футболу среди команд до 17 лет.",
        en: "The U17 Asian Cup in football has come to an end in Saudi Arabia."
      }
    }, {
      id: 17,
      title: {
        uz: "Kun dayjesti",
        ru: "Ежедневный дайджест",
        en: "Daily digest"
      },
      category: "tabletennis",
      date: "2025-04-20",
      image: [
       "public/picture/Kun dayjesti.jpg",
        "public/picture/Kun dayjesti1.jpg",
        "public/picture/Kun dayjesti2.jpg","public/picture/Kun dayjesti3.jpg",
      ],
      excerpt: {
        uz: "Saudiya Arabistonida futbol boʻyicha U17 yosh toifasidagi Osiyo chempionati oʻz yakuniga yetdi.",
        ru: "В Саудовской Аравии завершился чемпионат Азии по футболу среди команд до 17 лет.",
        en: "The AFC U-17 Football Championship has come to an end in Saudi Arabia."
      }
    }, {
      id: 18,
      title: {
        uz: "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning futbol bo‘yicha o‘n yetti yoshgacha bo‘lgan O‘zbekiston terma jamoasi aʼzolariga tabrigi",
        ru: "Поздравление Президента Республики Узбекистан Шавката Мирзиёева членам сборной Узбекистана по футболу до семнадцати лет",
        en: "Congratulations from the President of the Republic of Uzbekistan Shavkat Mirziyoyev to the members of the Uzbekistan national football team under the age of seventeen"
      },
      category: "tabletennis",
      date: "2025-04-20",
      image: [
      "public/picture/Shavkat Mirziyoyevning.jpg" ,
      ],
      excerpt: {
        uz: "Aziz farzandlarim!",
        ru: "Дорогие мои дети!",
        en: "My dear children!"
      }
    }, {
      id: 19,
      title: {
        uz: "Toshkent badiiy gimnastika yulduzlarini qabul qiladi",
        ru: "Ташкент встречает звезд художественной гимнастики",
        en: "Tashkent welcomes rhythmic gymnastics stars"
      },
      category: "tabletennis",
      date: "2025-04-20",
      image: [
        
        "public/picture/Toshkent badiiy.jpg"
      ],
      excerpt: {
        uz: "25–27-aprel kunlari poytaxtimiz Toshkent yana bir yirik musobaqa — badiiy gimnastika boʻyicha Jahon kubogining navbatdagi bosqichiga mezbonlik qiladi. Bu yilgi bahslarda 26 mamlakatdan 100 nafardan ortiq sportchi medallar uchun bahs olib boradi.",
        ru: "С 25 по 27 апреля в нашей столице, Ташкенте, пройдут еще одни крупные соревнования – очередной этап Кубка мира по художественной гимнастике. В этом году на играх за медали поборются более 100 спортсменов из 26 стран.",
        en: "On April 25-27, our capital Tashkent will host another major competition - the next stage of the Rhythmic Gymnastics World Cup. This year's competitions will feature more than 100 athletes from 26 countries competing for medals."
      }
    },
    {
      id: 20,
      title: {
        uz: "O‘zbekiston Respublikasi Prezidentining 'Futbol bo‘yicha o‘n yetti yoshgacha bo‘lgan o‘smirlar o‘rtasidagi Osiyo kubogi o‘yinlari g‘oliblari va ishtirokchilarini mukofotlash to‘g‘risida' gi Farmoni",
        ru: "Указ Президента Республики Узбекистан «О награждении победителей и участников Кубка Азии по футболу среди юношеских команд до семнадцати лет»",
        en: "Decree of the President of the Republic of Uzbekistan 'On awarding the winners and participants of the Asian Cup among youth football teams under the age of seventeen'"
      },
      category: "tabletennis",
      date: "2025-04-21",
      image: [
      "public/picture/Futbol.jpg"
      ],
      excerpt: {
        uz: "Futbol bo‘yicha o‘n yetti yoshgacha bo‘lgan o‘smirlar o‘rtasidagi Osiyo kubogi o‘yinlari g‘oliblari va ishtirokchilarini mukofotlash to‘g‘risida O‘zbekiston Respublikasi Prezidentining Farmoni",
        ru: "Указ Президента Республики Узбекистан о награждении победителей и участников Кубка Азии по футболу среди юношеских команд до семнадцати лет",
        en: "Decree of the President of the Republic of Uzbekistan on awarding the winners and participants of the Asian Cup among youth football teams under the age of seventeen"
      }
    }, {
      id: 21,
      title: {
        uz: "Qahramon futbolchilarimiz tantanali kutib olindi",
        ru: "Нашим героическим игрокам был оказан торжественный прием",
        en: "Our heroic players were given a ceremonial welcome"
      },
      category: "tabletennis",
      date: "2025-04-21",
      image: [
       "public/picture/Qahramon0.jpg" 
       ],
      excerpt: {
        uz: "Saudiya Arabistoni maydonlarida oʻtgan futbol boʻyicha U17 Osiyo kubogida mardonavor ishtirok etib, chempionlikni qoʻlga kiritgan Oʻzbekiston oʻsmirlar terma jamoasi diyorimizga qaytib keldi.",
        ru: "Молодежная сборная Узбекистана, мужественно принявшая участие в проходившем в Саудовской Аравии Кубке Азии по футболу среди команд до 17 лет и ставшая победителем чемпионата, вернулась на Родину.",
        en: "The Uzbek youth national team, which courageously participated in the U17 Asian Football Cup held in Saudi Arabia and won the championship, has returned to our homeland."
      }
    },
    {
      id: 22,
      title: {
        uz: "Prezident Shavkat Mirziyoyev sportchilarimizning g‘alabalarini eʼtirof etdi",
        ru: "Президент Шавкат Мирзиёев отметил победы наших спортсменов",
        en: "President Shavkat Mirziyoyev recognized the victories of our athletes"
      },
      category: "tabletennis",
      date: "2025-04-22",
      image: [
      "public/picture/g‘alabalarini.jpg","public/picture/g‘alabalarini1.jpg","public/picture/g‘alabalarini2.jpg", 
      ],
      excerpt: {
        uz: "Prezident Shavkat Mirziyoyev sportchilarimizning yutuqlarini alohida qiziqish va eʼtibor bilan kuzatib boryaptilar. Quvonarlisi, aprel oyida mamlakatimizning sport sohasidagi muvaffaqiyatlari futbol bilangina cheklanib qolmadi.",
        ru: "Президент Шавкат Мирзиёев с особым интересом и вниманием следит за достижениями наших спортсменов. К счастью, спортивные успехи нашей страны в апреле не ограничились футболом.",
        en: "President Shavkat Mirziyoyev is following the achievements of our athletes with particular interest and attention. Fortunately, in April, our country's sporting successes were not limited to football."
      }
    }, {
      id: 23,
      title: {
        uz: "“Continental Americas Gold” kamari sohibi Ruslan Abdullayev Toshkentga qaytib keldi",
        ru: "Обладатель пояса Continental Americas Gold Руслан Абдуллаев возвращается в Ташкент",
        en: "Continental Americas Gold belt holder Ruslan Abdullayev returns to Tashkent"
      },
      category: "tabletennis",
      date: "2025-04-22",
      image: [
       "public/picture/Continental.jpg", "public/picture/Continental1.jpg",
        "public/picture/Continental2.jpg","public/picture/Continental3.jpg",
        ],
      excerpt: {
        uz: "Boks boʻyicha jahon chempioni Ruslan Abdullayev 19-aprel kuni AQShning Kaliforniya shtatida tashkil etilgan...",
        ru: "Чемпион мира по боксу Руслан Абдуллаев примет участие в чемпионате мира по боксу в Калифорнии, США, 19 апреля.",
        en: "World boxing champion Ruslan Abdullayev will compete in the World Boxing Championships in California, USA, on April 19."
      }
    }, {
      id: 24,
      title: {
        uz: "Bilasizmi?",
        ru: "Вы знали?",
        en: "Did you know?"
      },
      category: "tabletennis",
      date: "2025-04-22",
      image: [
      "public/picture/Bilasizmi.jpg" 
      ],
      excerpt: {
        uz: "Eng uzoq davom etgan Olimpiya oʻyinlari 1900-yil Parij shahrida oʻtkazilgan.",
        ru: "Самые продолжительные Олимпийские игры прошли в Париже в 1900 году.",
        en: "The longest-running Olympic Games were held in Paris in 1900."
      }
    },{
      id: 25,
      title: {
        uz: "Chigiryev va Geynish Milan-Kortina-2026 qishki Olimpiya oʻyinlari yoʻllanmasini qoʻlga kiritishdi!",
        ru: "Чигирев и Гейниш прошли отбор на зимние Олимпийские игры Милан-Кортина 2026!",
        en: "Chigiryev and Geinisch have qualified for the Milan-Cortina 2026 Winter Olympics!"
      },
      category: "tabletennis",
      date: "2025-04-22",
      image: [
      " public/picture/Chigiryev0.jpg", 
      ],
      excerpt: {
        uz: "Dmitriy Chigiryev va Yekaterina Geynish Milan-Kortina-2026 qishki Olimpiadasiga yo‘llanma qo‘lga kiritishdi.",
        ru: "Дмитрий Чигирев и Екатерина Гейниш завоевали лицензию на зимнюю Олимпиаду Милан-Кортина-2026.",
        en: "Dmitriy Chigiryev and Yekaterina Geynish earned a spot at the Milan-Cortina 2026 Winter Olympics."
      }
    },
  ];

  const categories = [
    { id: 'all', name: { uz: 'Barcha yangiliklar', ru: 'Все', en: 'All News' } },
    // { id: 'olympic', name: { uz: 'Olimpiada', ru: 'Олимпиада', en: 'Olympics' } },
    // { id: 'boxing', name: { uz: 'Boks', ru: 'Бокс', en: 'Boxing' } },
    // { id: 'swimming', name: { uz: 'Suzish', ru: 'Плавание', en: 'Swimming' } },
    // { id: 'athletics', name: { uz: 'Yengil atletika', ru: 'Легкая атлетика', en: 'Athletics' } },
    // { id: 'wrestling', name: { uz: 'Kurash', ru: 'Борьба', en: 'Wrestling' } }
    // { id: 'taekvondo', name: { uz: 'Taekvondo', ru: 'тхэквондо', en: 'taekwondo' } }
  ];

  // Filter news by category
  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory);

  // Get current news items
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  // Calculate total pages
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'uz') {
      return date.toLocaleDateString('uz-UZ');
    } else if (language === 'ru') {
      return date.toLocaleDateString('ru-RU');
    } else {
      return date.toLocaleDateString('en-US');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'uz' ? 'Yangiliklar' : language === 'ru' ? 'Новости' : 'News'}
        </h1>
        
        {/* Category filters */}
        <div className="mb-8">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary"
                >
                  {category.name[language]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-transform hover:shadow-lg hover:scale-[1.02]">
                <CardHeader className="p-0">
                  <NewsImageSlider images={Array.isArray(news.image) ? news.image : [news.image]} />
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>12:30</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 line-clamp-2">
                    {news.title[language]}
                  </CardTitle>
                  <p className="text-muted-foreground line-clamp-3">
                    {news.excerpt[language]}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-primary font-medium flex items-center gap-1"
                    onClick={() => navigate(`/yangiliklar/${news.id}`)}
                  >
                    {language === 'uz' ? "Batafsil" : language === 'ru' ? 'Читать далее' : 'Read more'}
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  className="w-10 h-10 p-0 rounded-md"
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;