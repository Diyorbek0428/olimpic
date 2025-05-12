import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/useLanguage";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Committee = () => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Determine the active tab based on the URL path
  const getInitialTab = () => {
    if (location.pathname.includes('rahbariyat')) return 'leadership';
    if (location.pathname.includes('tarix')) return 'history';
    return 'about';
  };

  const [activeTab, setActiveTab] = React.useState(getInitialTab());

  // Update browser URL without refreshing the page
  const handleTabChange = (value) => {
    setActiveTab(value);
    
    let newPath;
    switch (value) {
      case 'leadership':
        newPath = '/qomita/rahbariyat';
        break;
      case 'history':
        newPath = '/qomita/tarix';
        break;
      default:
        newPath = '/qomita';
        break;
    }
    
    window.history.pushState(null, '', newPath);
  };

  const getTitle = () => {
    switch (language) {
      case 'uz':
        return "O'zbekiston Milliy Olimpiya Qo'mitasi";
      case 'ru':
        return "Национальный Олимпийский Комитет Узбекистана";
      default:
        return "National Olympic Committee of Uzbekistan";
    }
  };

  const tabLabels = {
    about: {
      uz: "Qo'mita haqida",
      ru: "О комитете",
      en: "About Committee"
    },
    leadership: {
      uz: "Rahbariyat",
      ru: "Руководство",
      en: "Leadership"
    },
    history: {
      uz: "Tarix",
      ru: "История",
      en: "History"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {getTitle()}
        </motion.h1>
        
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-6">
            <TabsTrigger value="about">{tabLabels.about[language]}</TabsTrigger>
            <TabsTrigger value="leadership">{tabLabels.leadership[language]}</TabsTrigger>
            <TabsTrigger value="history">{tabLabels.history[language]}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <img src="public/picture/qomita/qomita.jpg" alt="Qo'mita" />

                <CardTitle>
                  {language === 'uz' ? "O'zbekiston Milliy Olimpiya Qo'mitasi" :
                   language === 'ru' ? "Национальный Олимпийский Комитет Узбекистана" :
                   "National Olympic Committee of Uzbekistan"}
                </CardTitle>
                <CardDescription>
                  {language === 'uz' ? "1992-yildan beri faoliyat yuritib kelmoqda" :
                   language === 'ru' ? "Работает с 1992 года." :
                   "Operating since 1992"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {language === 'uz' ? (
                    <>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasi nodavlat — notijorat tashkiloti bo‘lib, o‘z faoliyatini O‘zbekiston Respublikasi qonunchiligi, Xalqaro Olimpiya Qo‘mitasi Olimpiya Xartiyasi hamda O‘zbekiston Milliy olimpiya qo‘mitasining Ustavi asosida amalga oshiradi.
                      </p>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasining asosiy vazifalari quyidagilardan iborat:
                      </p>
                      <p className="mb-4">
                      O‘zbekistonda Olimpiya xarakatini rivojlantirish, olimpizm g‘oyalarini keng targ‘ib etish;
Respublika sport delegatsiyalarining Olimpiada, Osiyo, Butunjahon yoshlar o‘yinlarida vakili bo‘lish;
Xalqaro Olimpiya Qo‘mitasi, Osiyo Olimpiya Kengashi, boshqa mamlakatlar milliy olimpiya qo‘mitalari, xalqaro sport federatsiyalari va uyushmalari bilan qalin hamkorlik qilish, XOQning «Olimpiya birdamligi» dasturida ishtirok etish;
Respublika, aholisini jismoniy va ma’naviy tarbiyalashga, jismoniy tarbiya va sport, ayniqsa, milliy sport turlari, nogironlar o‘rtasida sportni rivojlantirishga har taraflama ko‘maklashish;
Mamlakat terma jamoalari va sport zaxiralarini tayyorlashda davlat, jismoniy tarbiya va sport tashkilotlariga ko‘maklashish;
Yoshlarni boshqa mamlakatlar sportchilari bilan do‘stlik va birodarlikni mustahkamlash, musobaqalarda halol sport kurashi olib borish, raqibiga olijanoblik bilan munosabatda bo‘lish tamoyillari asosida tarbiyalash;
O‘zbekiston sportchilari yutuqlarini keng targ‘ib etish;
Sport kadrlari o‘rtasida tajriba ayriboshlash, ular malakalarini oshirish uchun anjumanlar, seminarlar tashkil etish.
                      </p>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasi tarkibi quyidagilardan iboratdir:
                      </p>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasi Prezidenti, Bosh kotibi, vitse-prezidentlar va a’zolardan;
Olimpiya o‘yinlari dasturiga kiritilgan milliy sport federatsiyalari vakillaridan;
Cportning olimpiya turlari bo‘lmagan hamda milliy sport federatsiyalari vakillaridan;
Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar sport tashkilotlari vakillaridan;
Jismoniy tarbiya va sport davlat boshqaruvi organlari, ko‘ngilli sport jamiyatlari vakillaridan;
Olimpiya o‘yinlari ishtirokchilari bo‘lgan sportchilar vakillaridan hamda boshqa alohida shaxslardan iboratdir.
                      </p><p className="mb-4">
                      Quyidagilar O‘zbekiston Milliy olimpiya qo‘mitasining rahbar organlari hisoblanadi:
                      </p><p className="mb-4">
                      Bosh assambleya;
                      </p><p className="mb-4">
                      Ijroiy qo‘mita;
                      </p>
                      <p className="mb-4">
                      Ijroiy qo‘mita byurosi.
                      </p><p className="mb-4">
                      O‘zbeBosh assambleyalar oralig‘ida O‘zbekiston Milliy Olimpiya qo‘mitasi faoliyatiga Ijroiy qo‘mita rahbarlik qiladi.
                      </p>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasining quyidagi doimiy komissiyalari mavjud:
                      </p>
                      <p className="mb-4">
                      Atletlar komissiyasi;
                      </p>
                      <p className="mb-4">
                      Ayollar va sport komissiyasi.
                      </p>
                      <p className="mb-4">
                      Sport va atrof muhit komissiyasi.
                      </p>
                      <p className="mb-4">
                      O‘zbekiston Milliy Olimpiya qo‘mitasi huzurida Olimpiya akademiyasi tashkil etilgan.
                      </p>
                    </>
                  ) : language === 'ru' ? (
                    <>
                      <p className="mb-4">
                      Национальный олимпийский комитет Узбекистана — негосударственная некоммерческая организация, осуществляющая свою деятельность в соответствии с законодательством Республики Узбекистан, Олимпийской хартией Международного олимпийского комитета и Уставом Национального олимпийского комитета Узбекистана.
                      </p>
                      
                      <p className="mb-4">
                      Основными задачами Национального олимпийского комитета Узбекистана являются:
                      </p>
                      <p className="mb-4">
                      Развитие олимпийского движения в Узбекистане и широкая пропаганда идей олимпизма;
Представление спортивных делегаций республики на Олимпийских, Азиатских и Всемирных юношеских играх;
Тесное сотрудничество с Международным олимпийским комитетом, Олимпийским советом Азии, национальными олимпийскими комитетами других стран, международными спортивными федерациями и ассоциациями, участие в программе МОК «Олимпийская солидарность»;
Оказывать всестороннюю помощь физическому и духовному воспитанию населения республики, развитию физической культуры и спорта, особенно национальных видов спорта, а также спорта среди инвалидов;
Оказание содействия государственным, физкультурно-спортивным организациям в подготовке национальных сборных команд и спортивного резерва;
Воспитывать у молодежи принципы укрепления дружбы и братства со спортсменами других стран, проведения честных спортивных соревнований, благородства по отношению к соперникам;
Широко пропагандировать достижения узбекских спортсменов;
Организация конференций и семинаров для обмена опытом среди спортивных работников и повышения их квалификации.
                      </p> <p className="mb-4">
                      Состав Национального Олимпийского Комитета Узбекистана следующий:
                      </p> <p className="mb-4">
                      От президента, генерального секретаря, вице-президентов и членов Национального олимпийского комитета Узбекистана;
Представители национальных спортивных федераций, входящих в программу Олимпийских игр;
Представители неолимпийских видов спорта и национальных спортивных федераций;
Представители спортивных организаций Республики Каракалпакстан, областей и города Ташкента;
Представители государственных органов, курирующих физическую культуру и спорт, добровольных спортивных обществ;
В его состав входят представители спортсменов, участвующих в Олимпийских играх, и другие лица.
                      </p> <p className="mb-4">
                      Руководящими органами Национального олимпийского комитета Узбекистана являются:
                      </p> <p className="mb-4">
                      Генеральная Ассамблея;
                      </p> <p className="mb-4">
                      Исполнительный комитет;
                      </p> <p className="mb-4">
                      Бюро Исполнительного комитета.
                      </p> <p className="mb-4">
                      Исполнительный комитет руководит деятельностью Национального олимпийского комитета Узбекистана в период между Генеральными ассамблеями.
                      </p> <p className="mb-4">
                      Национальный олимпийский комитет Узбекистана имеет следующие постоянные комиссии:
                      </p> <p className="mb-4">
                      Комиссия спортсменов;
                      </p>
                       <p className="mb-4">
                       Комиссия по делам женщин и спорта.
                       </p>
                       <p className="mb-4">
                       Комиссия по спорту и окружающей среде.
                       </p><p className="mb-4">
                       При Национальном олимпийском комитете Узбекистана создана Олимпийская академия.
                       </p>
                     
                    </>
                  ) : (
                    <>
                      <p className="mb-4">
                      The National Olympic Committee of Uzbekistan is a non-governmental, non-profit organization that carries out its activities in accordance with the legislation of the Republic of Uzbekistan, the Olympic Charter of the International Olympic Committee, and the Charter of the National Olympic Committee of Uzbekistan.
                      </p>
                      
                      <p className="mb-4">
                      The main tasks of the National Olympic Committee of Uzbekistan are:
                      </p>
                      <p className="mb-4">
                      To develop the Olympic movement in Uzbekistan, to widely promote the ideas of Olympism;
To represent the sports delegations of the republic at the Olympic, Asian, and World Youth Games;
To cooperate closely with the International Olympic Committee, the Olympic Council of Asia, national Olympic committees of other countries, international sports federations and associations, and to participate in the IOC's "Olympic Solidarity" program;
To provide comprehensive assistance in the physical and spiritual education of the population of the republic, in the development of physical education and sports, especially national sports, and sports among the disabled;
To assist state, physical education, and sports organizations in the preparation of national teams and sports reserves;
To educate young people on the principles of strengthening friendship and brotherhood with athletes from other countries, conducting fair sports competitions, and treating their opponents with dignity;
To widely promote the achievements of Uzbek athletes;
Organizing conferences and seminars to exchange experiences among sports personnel and improve their skills.
                      </p><p className="mb-4">
                      The composition of the National Olympic Committee of Uzbekistan is as follows:
                      </p><p className="mb-4">
                      The National Olympic Committee of Uzbekistan consists of the President, Secretary General, Vice-Presidents and members;
Representatives of national sports federations included in the Olympic Games program;
Representatives of non-Olympic sports and national sports federations;
Representatives of sports organizations of the Republic of Karakalpakstan, regions and the city of Tashkent;
Representatives of state bodies of physical education and sports, voluntary sports societies;
Representatives of athletes who participated in the Olympic Games and other individuals.
                      </p><p className="mb-4">
                        The following are the governing bodies of the National Olympic Committee of Uzbekistan:
                      </p><p className="mb-4">
                      General Assembly;
                      </p><p className="mb-4">
                      Executive Committee;
                      </p><p className="mb-4">
                      Executive Committee Bureau.
                      </p><p className="mb-4">
                      The Executive Committee manages the activities of the National Olympic Committee of Uzbekistan between the General Assemblies.
                      </p><p className="mb-4">
                      The National Olympic Committee of Uzbekistan has the following standing commissions:
                      </p><p className="mb-4">
                      Athletes' Commission;
                      </p>
                      <p className="mb-4">
                      Women and Sports Commission.
                      </p><p className="mb-4">
                      Sports and Environment Commission.
                      </p><p className="mb-4">
                      The Olympic Academy has been established under the National Olympic Committee of Uzbekistan.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
            
            
          </TabsContent>
          
          <TabsContent value="leadership" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'uz' ? "Rais" :
                     language === 'ru' ? "Председатель" :
                     "Chairman"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "Milliy Olimpiya qo'mitasi raisi " :
                     language === 'ru' ? "Председатель Национального олимпийского комитета" :
                     "Chairman of the National Olympic Committee"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Milliy Olimpiya qo'mitasi raisi.jpg" 
                        alt="Mirziyoyev Shavkat Miromonovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Mirziyoyev Shavkat Miromonovich</h3>
                    <p className="text-gray-600">
                      {language === 'uz' ? "Milliy Olimpiya qo'mitasi raisi" :
                       language === 'ru' ? "Председатель Национального олимпийского комитета" :
                       "Chairman of the National Olympic Committee"}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'uz' ? "Bosh kotib" :
                     language === 'ru' ? "Генеральный секретарь" :
                     "Secretary General"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "" :
                     language === 'ru' ? "" :
                     ""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Bosh kotib.jpg" 
                        alt="Kasimov Oybek Omilovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Kasimov Oybek Omilovich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi vitse-prezidenti" :
                       language === 'ru' ? "Вице-президент Национального Олимпийского комитета Узбекистана" :
                       "Vice President of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'uz' ? "Rais o‘rinbosari" :
                     language === 'ru' ? "Заместитель председателя" :
                     "Deputy chairman"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "Milliy Olimpiya qoʻmitasi raisining birinchi oʻrinbosari" :
                     language === 'ru' ? "Первый заместитель председателя Национального олимпийского комитета" :
                     "First Deputy Chairman of the National Olympic Committee"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Milliy Olimpiya qoʻmitasi raisining birinchi oʻrinbosari.jpg" 
                        alt="Umarov Otabek Muhammadaliyevich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Umarov Otabek Muhammadaliyevich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'uz' ? "Rais o‘rinbosari" :
                     language === 'ru' ? "Заместитель председателя" :
                     "Deputy chairman"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "Milliy Olimpiya qo'mitasi raisi o'rinbosari, O'zbekiston taekvondo wt assotsiatsiyasi raisi" :
                     language === 'ru' ? "Заместитель председателя Национального олимпийского комитета, председатель Ассоциации таэквондо Узбекистана (WT)" :
                     "Deputy Chairman of the National Olympic Committee, Chairman of the Uzbekistan Taekwondo WT Association"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Milliy Olimpiya qo'mitasi raisi o'rinbosari, O'zbekiston taekvondo wt assotsiatsiyasi raisi.jpg" 
                        alt="Tashmatov Sherzod Rixsibaevich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Tashmatov Sherzod Rixsibaevich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'uz' ? "Ijroiya qo‘mitasi" :
                     language === 'ru' ? "Исполнительный комитет" :
                     "Executive Committee"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "O‘zbekiston og‘ir atletika federatsiyasi raisining birinchi o‘rinbosari, Osiyo og‘ir atletika federatsiyasi vitse-prezidenti" :
                     language === 'ru' ? "Первый заместитель председателя Федерации тяжелой атлетики Узбекистана, вице-президент Азиатской федерации тяжелой атлетики" :
                     "First Deputy Chairman of the Weightlifting Federation of Uzbekistan, Vice President of the Asian Weightlifting Federation"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/O‘zbekiston og‘ir atletika federatsiyasi raisining birinchi o‘rinbosari, Osiyo og‘ir atletika federatsiyasi vitse-prezidenti.jpg" 
                        alt="Mahmudov Shahrullo Sharipovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Mahmudov Shahrullo Sharipovich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya qo‘mitasi" :
                     language === 'ru' ? "Исполнительный комитет" :
                     "Executive Committee"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "O‘zbekiston gimnastika federatsiyasi raisining birinchi o‘rinbosari" :
                     language === 'ru' ? "Первый заместитель председателя Федерации гимнастики Узбекистана" :
                     "First Deputy Chairman of the Gymnastics Federation of Uzbekistan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/O‘zbekiston gimnastika federatsiyasi raisining birinchi o‘rinbosari.jpg" 
                        alt="Mo‘minova Go‘zal Baxodirovna" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Mo‘minova Go‘zal Baxodirovna</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya qo‘mitasi" :
                     language === 'ru' ? "Исполнительный комитет" :
                     "Executive Committee"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti" :
                     language === 'ru' ? "Первый вице-президент Ассоциации футбола Узбекистана" :
                     "First Vice President of the Football Association of Uzbekistan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti.jpg" 
                        alt="Irmatov Ravshan Sayfiddinovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Irmatov Ravshan Sayfiddinovich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya qo‘mitasi" :
                     language === 'ru' ? "Исполнительный комитет" :
                     "Executive Committee"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "O‘zbekiston boks federatsiyasi raisining birinchi o‘rinbosari" :
                     language === 'ru' ? "Первый заместитель председателя Федерации бокса Узбекистана" :
                     "First Deputy Chairman of the Boxing Federation of Uzbekistan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/O‘zbekiston boks federatsiyasi raisining birinchi o‘rinbosari.jpg" 
                        alt="Polatov Saken Djetibayevich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Polatov Saken Djetibayevich</h3>
                    <p className="text-gray-600">
                     
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya qo‘mitasi" :
                     language === 'ru' ? "Исполнительный комитет" :
                     "Executive Committee"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "O'zbekiston dzyudo federatsiyasi raisi" :
                     language === 'ru' ? "Председатель Федерации дзюдо Узбекистана" :
                     "Chairman of the Judo Federation of Uzbekistan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/O'zbekiston dzyudo federatsiyasi raisi.jpg" 
                        alt="Kamilov Aziz Yakubdjanovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Kamilov Aziz Yakubdjanovich</h3>
                    <p className="text-gray-600">
                      
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya apparati" :
                     language === 'ru' ? "Исполнительная власть" :
                     "Executive branch"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "Ishlar boshqarmasi boshlig‘i" :
                     language === 'ru' ? "Начальник отдела дел" :
                     "Head of the Department of Affairs"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Ishlar boshqarmasi boshlig‘i.jpg" 
                        alt="Kadirov Djasur Abdubositovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Kadirov Djasur Abdubositovich</h3>
                    <p className="text-gray-600">
                     
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                  {language === 'uz' ? "Ijroiya apparati" :
                     language === 'ru' ? "Исполнительная власть" :
                     "Executive branch"}
                  </CardTitle>
                  <CardDescription>
                    {language === 'uz' ? "Bosh muhandis" :
                     language === 'ru' ? "Главный инженер" :
                     "Chief Engineer"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/picture/qomita/Bosh muhandis.jpg" 
                        alt="Tohirov Maxmud Toxirovich" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Tohirov Maxmud Toxirovich</h3>
                    <p className="text-gray-600">
                      {/* {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi bosh kotibi" :
                       language === 'ru' ? "Генеральный секретарь Национального Олимпийского комитета Узбекистана" :
                       "Secretary General of the National Olympic Committee of Uzbekistan"} */}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'uz' ? "O'zbekiston Olimpiya harakati tarixi" :
                   language === 'ru' ? "История Олимпийского движения Узбекистана" :
                   "History of the Olympic Movement in Uzbekistan"}
                </CardTitle>
                <CardDescription>
                  {language === 'uz' ? "1992-yildan hozirgi kunga qadar" :
                   language === 'ru' ? "С 1992 года по настоящее время" :
                   "From 1992 to the present day"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">1992</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi tashkil topdi" :
                         language === 'ru' ? "Образован Национальный Олимпийский комитет Узбекистана" :
                         "Formation of the National Olympic Committee of Uzbekistan"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "21-yanvar, 1992-yil O'zbekiston sportining eng muhim sanalaridan biri: O'zbekiston Milliy Olimpiya qo'mitasi rasman tashkil etildi." :
                         language === 'ru' ? 
                          "21 января 1992 года — одна из важнейших дат в спортивной истории Узбекистана: был официально создан Национальный Олимпийский комитет Узбекистана." :
                          "January 21, 1992, is one of the most important dates in Uzbekistan's sports history: the National Olympic Committee of Uzbekistan was officially established."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">1993</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "XOQ tomonidan tan olinishi" :
                         language === 'ru' ? "Признание МОК" :
                         "IOC Recognition"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "O'zbekiston Milliy Olimpiya qo'mitasi Xalqaro Olimpiya qo'mitasi tomonidan rasman tan olindi." :
                         language === 'ru' ? 
                          "Национальный Олимпийский комитет Узбекистана официально признан Международным Олимпийским комитетом." :
                          "The National Olympic Committee of Uzbekistan was officially recognized by the International Olympic Committee."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">1994</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "Birinchi ishtirok" :
                         language === 'ru' ? "Первое участие" :
                         "First Participation"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "O'zbekiston terma jamoasi Lillehammer (Norvegiya) qishki Olimpiya o'yinlarida ilk marta mustaqil davlat sifatida ishtirok etdi." :
                         language === 'ru' ? 
                          "Сборная Узбекистана впервые приняла участие в зимних Олимпийских играх в Лиллехаммере (Норвегия) в качестве независимого государства." :
                          "The Uzbekistan team participated for the first time as an independent state at the Lillehammer Winter Olympics in Norway."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">1996</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "Birinchi Olimpiya medali" :
                         language === 'ru' ? "Первая Олимпийская медаль" :
                         "First Olympic Medal"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "Atlanta Olimpiya o'yinlarida O'zbekiston sportchilari birinchi medallarni qo'lga kiritdi. Bokschi Muhammad Abdullayev oltin medal sohibi bo'ldi." :
                         language === 'ru' ? 
                          "На Олимпийских играх в Атланте спортсмены Узбекистана завоевали первые медали. Боксер Мухаммад Абдуллаев стал обладателем золотой медали." :
                          "Uzbekistan athletes won their first medals at the Atlanta Olympic Games. Boxer Muhammad Abdullayev won a gold medal."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">2016</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "Eng muvaffaqiyatli Olimpiada" :
                         language === 'ru' ? "Самая успешная Олимпиада" :
                         "Most Successful Olympics"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "Rio-de-Janeyro Olimpiya o'yinlarida O'zbekiston sportchilari 4 ta oltin, 2 ta kumush va 7 ta bronza medal bilan tarixdagi eng muvaffaqiyatli natijani qayd etishdi." :
                         language === 'ru' ? 
                          "На Олимпийских играх в Рио-де-Жанейро спортсмены Узбекистана завоевали 4 золотые, 2 серебряные и 7 бронзовых медалей — самый успешный результат в истории." :
                          "At the Rio de Janeiro Olympic Games, Uzbekistan athletes recorded their most successful result in history with 4 gold, 2 silver, and 7 bronze medals."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">2024</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'uz' ? "Parij Olimpiadasi" :
                         language === 'ru' ? "Олимпиада в Париже" :
                         "Paris Olympics"}
                      </h3>
                      <p>
                        {language === 'uz' ? 
                          "O'zbekiston sportchilari Parij Olimpiya o'yinlarida ishtirok etishga tayyorgarlik ko'rmoqda." :
                         language === 'ru' ? 
                          "Спортсмены Узбекистана готовятся к участию в Олимпийских играх в Париже." :
                          "Uzbekistan athletes are preparing to participate in the Paris Olympic Games."}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
