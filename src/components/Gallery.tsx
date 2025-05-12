import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';

const Gallery = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'opening',
      image: '/picture/galareya/Qahramon futbolchilarimiz tantanali kutib olindi.jpg',
      title: {
        uz: 'Qahramon futbolchilarimiz tantanali kutib olindi',
        ru: 'Нашим героическим игрокам был оказан торжественный прием',
        en: 'Our heroic players were given a ceremonial welcome'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 2,
      category: 'opening',
      image: '/picture/galareya/Jahon chempionati yoʻllanmasi sari katta qadam tashlangan oʻyindan galereya.jpg',
      title: {
        uz: 'Jahon chempionati yoʻllanmasi sari katta qadam tashlangan oʻyindan galereya',
        ru: 'Фотогалерея с матча, который стал большим шагом на пути к квалификации на чемпионат мира',
        en: 'Gallery from the game that took a big step towards qualifying for the World Cup'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 3,
      category: 'opening',
      image: '/picture/galareya/Xarbinda oʻzbek sporti tarixiga muxrlangan suratlar.jpg',
      title: {
        uz: 'Xarbinda oʻzbek sporti tarixiga muxrlangan suratlar',
        ru: 'Фотографии, запечатлевшиеся в истории узбекского спорта в Харбине',
        en: 'Photos that are etched in the history of Uzbek sports in Harbin'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 4,
      category: 'opening',
      image: '/picture/galareya/Kun qahramonlarining chiqishidan yorqin suratlar.jpg',
      title: {
        uz: 'Kun qahramonlarining chiqishidan yorqin suratlar',
        ru: 'Яркие фотографии с выступления юбиляров',
        en: 'Bright photos from the performance of the heroes of the day'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 5,
      category: 'opening',
      image: '/picture/galareya/Xitoy lol qoldirishda davom etadi. Xarbin-2025 qishki Osiyo oʻyinlarining tantanali ochilish marosimidan yorqin suratlar.jpg',
      title: {
        uz: 'Xitoy lol qoldirishda davom etadi. Xarbin-2025 qishki Osiyo oʻyinlarining tantanali ochilish marosimidan yorqin surat',
        ru: 'Китай продолжает удивлять. Яркое фото с церемонии открытия зимних Азиатских игр 2025 года в Харбине',
        en: 'China continues to amaze. A vivid picture from the opening ceremony of the Harbin 2025 Asian Winter Games'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 6,
      category: 'opening',
      image: '/picture/galareya/Bu yilgi “Milliy sport mukofoti-2024” tantanali taqdirlash marosimi koʻtarinki ruhda tashkil etildi.jpg',
      title: {
        uz: 'Bu yilgi “Milliy sport mukofoti-2024” tantanali taqdirlash marosimi koʻtarinki ruhda tashkil etildi. ',
        ru: 'В этом году церемония вручения «Национальной спортивной премии-2024» прошла в атмосфере энтузиазма.',
        en: 'This year\'s National Sports Award-2024 ceremony was held in a high spirit. '
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 7,
      category: 'opening',
      image: '/picture/galareya/Toshkent-2025 yoshlar Osiyo o‘yinlariga.jpg',
      title: {
        uz: 'Toshkent-2025 yoshlar Osiyo o‘yinlariga tayyorgarlik bo‘yicha Osiyo Olimpiya kengashi (OOK) Muvofiqlashtiruvchi qo‘mitasining ishchi guruhi yig‘ilishidan yorqin suratlar',
        ru: 'Основные моменты заседания рабочей группы Координационного комитета Олимпийского совета Азии (ОСА) по подготовке к проведению Азиатских юношеских игр «Ташкент-2025»',
        en: 'Highlights from the meeting of the working group of the Olympic Council of Asia (OCA) Coordinating Committee on preparations for the Tashkent-2025 Asian Youth Games'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 8,
      category: 'opening',
      image: '/picture/galareya/Terma jamoamiz hisobiga oʻta muhim 3.jpg',
      title: {
        uz: 'Terma jamoamiz hisobiga oʻta muhim 3 ochko qoʻshib qoʻyilgan, ob-havo sovuq boʻlsa-da, maydondagi harorat juda ham yuqori boʻlgan oʻyindan suratlar  ',
        ru: 'Фотографии с матча, в котором наша сборная набрала решающие 3 очка. Несмотря на холодную погоду, температура на поле была очень высокой.',
        en: 'Photos from a match in which our national team scored a crucial 3 points, despite the cold weather, the temperature on the field was very high.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 9,
      category: 'opening',
      image: '/picture/galareya/Samarqandda baydarka.jpg',
      title: {
        uz: 'Samarqandda baydarka va kanoeda eshkak eshish bo’yicha jahon chempionatining bugungi kun dasturidan o’rin olgan bellashuvlari nihoyasiga yetdi. ',
        ru: 'Завершились соревнования сегодняшней программы чемпионата мира по гребле на байдарках и каноэ в Самарканде. ',
        en: 'The competitions of the World Canoe and Kayak Championships in Samarkand, which were included in today\'s program, have come to an end. '
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 10,
      category: 'opening',
      image: '/picture/galareya/Parij-2024 XXXIII yozgi Olimpiya.jpg',
      title: {
        uz: 'Parij-2024 XXXIII yozgi Olimpiya o’yinlarining tantanali yopilish marosimidan yorqin suratlar',
        ru: 'Яркие фотографии с церемонии закрытия XXXIII летних Олимпийских игр в Париже-2024',
        en: 'Bright photos from the closing ceremony of the XXXIII Summer Olympic Games in Paris-2024'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 11,
      category: 'opening',
      image: '/picture/galareya/Kechagi kun qahramonlaridan.jpg',
      title: {
        uz: 'Kechagi kun qahramonlaridan biri Razambek Jamalovning taqdirlash marosimidan yorqin suratlar',
        ru: 'Яркие фотографии с церемонии награждения Разамбека Джамалова, одного из героев вчерашнего дня',
        en: 'Vivid photos from the award ceremony of Razambek Jamalov, one of the heroes of yesterday'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 12,
      category: 'opening',
      image: '/picture/galareya/Razambek Jamalov delegatsiyamiz.jpg',
      title: {
        uz: 'Razambek Jamalov delegatsiyamiz hisobiga oltinchi oltin medalni taqdim etgan finalning yorqin lahzalari',
        ru: 'Яркие моменты финала, когда Разамбек Джамалов принес нашей делегации шестую золотую медаль.',
        en: 'Bright moments of the final, when Razambek Jamalov brought home the sixth gold medal for our delegation.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 13,
      category: 'opening',
      image: '/picture/galareya/Qahramon futbolchilarimiz tantanali kutib olindi.jpg',
      title: {
        uz: 'Buenos-Ayres-2018 yozgi o’smirlar Olimpiya o’yinlari chempioni endi kattalar o’rtasida ham 4 yillikning enf nufuzli musobaqasida oltin medalga sazovor bo’ldi. ',
        ru: 'Чемпион летних юношеских Олимпийских игр 2018 года в Буэнос-Айресе завоевал золотую медаль на престижном соревновании среди взрослых в возрасте 4 лет. ',
        en: 'The champion of the Buenos Aires 2018 Summer Youth Olympic Games has now won a gold medal at the prestigious 4-year-old ENF competition among adults. '
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 14,
      category: 'opening',
      image: '/picture/galareya/“Oltin kecha”ga.jpg',
      title: {
        uz: '“Oltin kecha”ga o’zgacha fayz bergan Bahodir Jalolovning final jangi, har bir zarbalari yurtdoshlarimizni katta hayajonda ushlab turdi. ',
        ru: '“Финальный бой Баходыра Джалолова, придавший особую изюминку «Золотой ночи», и каждый нанесенный им удар держали наших соотечественников в большом волнении.',
        en: 'The final fight of Bakhodir Jalolov, who gave a special touch to the “Golden Night”, kept our compatriots in great excitement with every blow.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 15,
      category: 'opening',
      image: '/picture/galareya/Parij-2024 yozgi Olimpiya.jpg',
      title: {
        uz: 'Parij-2024 yozgi Olimpiya o’yinlarining kumush medali sohibi Svetlana Osipova shohsupada',
        ru: 'Серебряный призер летних Олимпийских игр 2024 года в Париже Светлана Осипова на пьедестале почета',
        en: 'Paris 2024 Summer Olympics silver medalist Svetlana Osipova on the podium'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 16,
      category: 'opening',
      image: '/picture/galareya/“Big Uzbek” endi ikki karra.jpg',
      title: {
        uz: '“Big Uzbek” endi ikki karra Olimpiya o’yinlari chempioni.',
        ru: '«Большой Узбек» теперь двукратный олимпийский чемпион.',
        en: '"Big Uzbek" is now a two-time Olympic champion.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 17,
      category: 'opening',
      image: '/picture/galareya/Erkin kurashchimiz.jpg',
      title: {
        uz: 'Erkin kurashchimiz, Parij-2024 yozgi Olimpiya o’yinlari sovrindori G’ulomjon Abdullayev shohsupada',
        ru: 'Наш борец вольного стиля, призер летних Олимпийских игр 2024 года в Париже Гуломжон Абдуллаев на пьедестале почета',
        en: 'Our freestyle wrestler, medalist of the Paris 2024 Summer Olympics, Gulomjon Abdullayev on the podium'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 18,
      category: 'opening',
      image: '/picture/galareya/Kun qahramonlaridan.jpg',
      title: {
        uz: 'Kun qahramonlaridan biri, jahon chempioni Asadxo’ja Mo’ydinxo’jayev o’z titullari orasiga Olimpiada chempionligini ham qo’shib qo’ydi',
        ru: 'Один из героев дня, чемпион мира Асадходжа Мойдинходжаев, добавил к своим титулам олимпийское чемпионство.',
        en: 'One of the heroes of the day, world champion Asadkhodja Moydinkhodjayev, added the Olympic championship to his titles.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
    {
      id: 19,
      category: 'opening',
      image: '/picture/galareya/Ketma-ket ikkita oltin.jpg',
      title: {
        uz: 'Ketma-ket ikkita oltin medal bilan delegatsiyamiz umumjamoa hisobida yanada yuqori o\'ringa ko\'tarildi.',
        ru: 'Завоевав две золотые медали подряд, наша делегация поднялась на более высокое место в общекомандном зачете.',
        en: 'With two consecutive gold medals, our delegation rose to even higher places in the overall team standings.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    }, {
      id: 20,
      category: 'opening',
      image: '/picture/galareya/G’ulomjon Abdullayevning.jpg',
      title: {
        uz: 'G’ulomjon Abdullayevning bronza medali uchun bellashuvda qirg’izistonlik raqibini mag’lub etgan bahsdan yorqin surat.',
        ru: 'Яркие фотографии с матча за бронзовую медаль Гуломжона Абдуллаева, в котором он победил своего соперника из Кыргызстана.',
        en: 'Vivid photos from Gulomjon Abdullayev\'s bronze medal match, where he defeated his Kyrgyz opponent.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    }, {
      id: 21,
      category: 'opening',
      image: '/picture/galareya/Akbar Jo’rayev bugun.jpg',
      title: {
        uz: 'Akbar Jo’rayev bugun bor kuch va imkoniyatlarini ishga solib, delegatsiyamizga Parij-2024 yozgi Olimpiya o’yinlarining dastlabki kumush medalini taqdim qildi.',
        ru: 'Акбар Джураев сегодня приложил все свои силы и возможности, чтобы вручить нашей делегации первую серебряную медаль летних Олимпийских игр 2024 года в Париже.',
        en: 'Akbar Juraev today used all his strength and capabilities to present our delegation with the first silver medal of the Paris 2024 Summer Olympic Games.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    }, {
      id: 22,
      category: 'opening',
      image: '/picture/galareya/Muxlislarning.jpg',
      title: {
        uz: 'Muxlislarning tinimsiz bosimiga qaramay Hasanboy Do’smatov aniq va kuchli zarbalari, chaqqon harakatlari bilan tarixiy finalni o’z foydasiga hal qildi.',
        ru: 'Несмотря на неослабевающее давление болельщиков, Хасанбой Дусматов одержал победу в историческом финале благодаря своим четким и сильным ударам и ловким движениям.',
        en: 'Despite the relentless pressure from the fans, Hasanboy Dusmatov won the historic final with his clear and powerful shots and agile movements.'
      },
      description: {
        uz: '',
        ru: '',
        en: ''
      }
    },
  ];

  // const categories = [
  //   { id: 'all', name: { uz: 'Barchasi', ru: 'Все', en: 'All' } },
  //   { id: 'opening', name: { uz: 'Ochilish marosimi', ru: 'Церемония открытия', en: 'Opening Ceremony' } },
  //   { id: 'athletes', name: { uz: 'Sportchilar', ru: 'Спортсмены', en: 'Athletes' } },
  //   { id: 'boxing', name: { uz: 'Boks', ru: 'Бокс', en: 'Boxing' } },
  //   { id: 'swimming', name: { uz: 'Suzish', ru: 'Плавание', en: 'Swimming' } },
  //   { id: 'wrestling', name: { uz: 'Kurash', ru: 'Борьба', en: 'Wrestling' } },
  //   { id: 'medals', name: { uz: 'Medallar', ru: 'Медали', en: 'Medals' } },
  // ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'uz' ? 'Olimpiya gallereyasi' : 
             language === 'ru' ? 'Олимпийская галерея' : 
             'Olympic Gallery'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Olimpiya o\'yinlari lahzalari va sport tadbirlari suratlarini ko\'ring' : 
             language === 'ru' ? 'Смотрите моменты Олимпийских игр и фотографии спортивных мероприятий' : 
             'View moments from the Olympic Games and sports events'}
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-6 mx-auto max-w-4xl">
            {/* {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary"
              >
                {category.name[language]}
              </TabsTrigger>
            ))} */}
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            <Carousel className="w-full">
              <CarouselContent>
                {filteredItems.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 relative group">
                        <img 
                          src={item.image}
                          alt={item.title[language]}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 transition-opacity opacity-100">
                          {/* <Badge variant="secondary" className="self-start mb-2">
                            {categories.find(cat => cat.id === item.category)?.name[language]}
                          </Badge> */}
                          <h3 className="text-white text-xl font-bold">{item.title[language]}</h3>
                          <p className="text-white/80 text-sm mt-1">{item.description[language]}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
