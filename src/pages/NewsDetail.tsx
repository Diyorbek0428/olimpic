import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/useLanguage";

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
    <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-black">
      <img
        src={images[current]}
        alt="news"
        className="w-full h-full object-cover object-center transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 z-10"
            aria-label="Oldingi rasm"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 z-10"
            aria-label="Keyingi rasm"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  fullText?: string;
  date: string;
  category: string;
  image: string[]; // massiv qilib o'zgartirildi
  readTime?: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Yosh bokschilarimiz Osiyo chempionatida ochkolar boʻyicha tengsiz boʻlishdi",
    excerpt: "Qirg'izistonda o'tkazilgan Osiyo chempionatida O'zbekiston milliy jamoasi 2 oltin, 1 kumush va 2 bronza medalini qo'lga kiritdi.",
    fullText: `Iordaniyaning Amman shahrida boks boʻyicha U15 va U17 yosh toifalaridagi Osiyo chempionati yakunlandi. Musobaqaning soʻnggi kunida U17 toifasidagi final janglari oʻtkazildi. Unda bokschilarimiz 8 ta oltin, 7 ta kumush va 4 ta bronza medallariga sazovor boʻlishdi.

Oltin medal:
-48 kg: Habibulla Saynazarov
-57 kg: Asilbek Abduqodirov
-63,5 kg: Saidxoʻja Sadillaxoʻjayev
-70 kg: Diyorbek Murodilloyev
-48 kg: Nazokat Mardonova
-57 kg: Farzuna Roʻziyeva
-60 kg: Rushanabonu Isoyeva
-80 kg: Mavjuda Abdusaidova

Kumush medal:
-54 kg: Bobomurod Boymirzayev
-60 kg: Abrorbek Sharipov
-75 kg: Xurshidbek Joʻrayev
-50 kg: Shodiyona Meliqoʻziyeva
-54 kg: Sabrina Chakomanova
-70 kg: Ulbosin Jalgasbayeva
-75 kg: Samira Turgʻunova

Bronza medal:
-52 kg: Asadbek Esonboyev
+80 kg: Artur Kenesbayev
-52 kg: Qumriniso Muhammadova
+80 kg: Sohibaxon Xudoyberdiyeva

Ahamiyatlisi, Rushanabonu Isoyeva mazkur yosh toifasidagi qizlar orasida eng yaxshi bokschi deb topildi.

World Boxing tomonidan tashkil etilgan mazkur qitʼa birinchiligida Oʻzbekiston delegatsiyasi ochkolar boʻyicha umumjamoa hisobida birinchi oʻrinni egalladi. Har ikki yosh toifasidagi bahslarda bokschilarimiz 15 tadan oltin va kumush, 12 ta bronza medallarini jamgʻarishdi.`,
    date: "1 May, 2025",
    category: "Boxs",
    image: [
      "/picture/Yosh bokschilarimiz.jpg",
      "/picture/Yosh bokschilarimiz2.jpg"
    ],
    readTime: "3 daqiqa"
  },
  {
    id: 2,
    title: "Dzyudochilarimiz Dushanbe “Katta dubulgʻa” turniriga joʻnab ketishdi",
    excerpt: "",
    fullText: `2-4-may kunlari Tojikiston poytaxti Dushanbe shahrida dzyudo bo'yicha “Katta dubulgʻa” turniri boʻlib oʻtadi. 27 mamlaktadan 200 dan ortiq sportchi ishtirok etadigan mazkur musobaqada Oʻzbekiston terma jamoasi toʻliq tarkibda qatnashadi. Terma jamoa murabbiylar shtabi Dushanbe turniri uchun tanlab olgan tarkib bilan tanishing:

Erkaklar:
-60 kg: Anvarjon Ibrohimov
-60 kg: Asadbek Misirov
-66 kg: Artyom Shturbabin
-66 kg: Sardor Nurillayev
-73 kg: Hojiakbar Toshev
-73 kg: Muhammadyahyo Muhammadjonov
-81 kg: Murodjon Yoʻldoshev
-81 kg: Suhrob Tursunov
-90 kg: Umar Bozorov
-90 kg: Azizbek Avazmurodov
-100 kg: Muhammadsodiq Sodiqov
-100 kg: Muhammadali Tangriyev
+100 kg: Oʻtkirbek Toʻraboyev
+100 kg: Muzaffarbek Toʻraboyev

Ayollar:
-48 kg: Ulbusin Hakimova
-48 kg: Laziza Haydarova
-52 kg: Muhayyo Ahmatova
-52 kg: Fotimaxon Tursunboyeva
-57 kg: Despina Bochkova
-57 kg: Shukurjon Aminova
-63 kg: Sevinch Isoqova
-63 kg: Marjona Nurullayeva
-70 kg: Farangiz Hojiyeva
-70 kg: Nodira Yoʻldosheva
-78 kg: Shinar Ibrayeva
+78 kg: Fotima Quramboyeva
+78 kg: Irisxon Qurbonboyeva`,
    date: "1 May, 2025",
    category: "Boxs",
    image: [
      "/picture/Dzyudochilarimiz Dushanbe.jpg",
      "/picture/Dzyudochilarimiz Dushanbe1.jpg"
    ],
    readTime: "3 daqiqa"
  } ,
   {
    id: 3,
    title: "Taekvondochilarimiz klublar oʻrtasidagi Osiyo chempionatini 14 ta medal bilan tugatishdi",
    excerpt: "",
    fullText: `Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 2 ta kumush va 1 ta bronza medallariga sazovor boʻldi.

Oltin medal:
-54 kg: Jahongir Xudoyberdiyev
-67 kg: Ozoda Sobirjonova

Kumush medal:
-58 kg: Omonjon Otajonov
+73 kg: Svetlana Osipova

Bronza medal:
-62 kg: Sevinch Hayitova

Shu tariqa, taekvondochilarimiz mazkur musobaqada 4 ta oltin, 5 ta kumush va 5 ta bronza medallarini jamgʻarishdi.`,
    date: "30 Aprel, 2025",
    category: "Boxs",
    image: [
      "/picture/Taekvondochilarimiz.jpg",
      "/picture/Taekvondochilarimiz1.jpg",
       "/picture/Taekvondochilarimiz2.jpg",
        "/picture/Taekvondochilarimiz3.jpg",
         "/picture/Taekvondochilarimiz4.jpg",
    ],
    readTime: "3 daqiqa"
  } ,
  {
   id: 4,
   title: "Ogʻir atletika boʻyicha oʻsmirlar va yoshlar oʻrtasidagi jahon chempionati boshlanmoqda",
   excerpt: "",
   fullText: `Bugun Peru poytaxti Lima shahrida ogʻir atletika boʻyicha oʻsmirlar va yoshlar oʻrtasidagi jahon chempionati start oladi. 5-mayga qadar davom etadigan dunyo birinchiligida 77 mamlakatdan 531 nafar sportchi ishtirok etadi.

Turnirda mamlakatimiz sharafini quyidagi sportchilarimiz himoya qilishadi:

Yigitlar:
-67 kg: Diyorbek Roʻzmetov (yoshlar)
-81 kg: Hikmatillo Haydarov (yoshlar)
-89 kg: Munisbek Davletov (oʻsmirlar)
-89 kg: Bekzod Gʻofurjonov (yoshlar)
-96 kg: Diyorbek Ermatov (yoshlar)
-102 kg: Alisher Osmanov (oʻsmirlar/yoshlar)
-109 kg: Qudratbek Salimjonov (yoshlar)
+109 kg: Omadillo Olimov (yoshlar)

Qizlar:
-59 kg: Marjona Abdumutalova (oʻsmirlar/yoshlar)
-71 kg: Dilnura Xoldorova (oʻsmirlar/yoshlar)
+81 kg: Mohinur Esonboyeva (oʻsmirlar/yoshlar)`,
   date: "30 Aprel,2025",
   category: "Boxs",
   image: [
    "/picture/Ogʻir atletika.jpg",
   ],
   readTime: "3 daqiqa"
 } ,
 {
  id: 5,
  title: "Kichik oʻsmirlarimiz Ammandagi Osiyo chempionatini muvaffaqiyatli yakunlashdi",
  excerpt: "",
  fullText: `Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 2 ta kumush va 1 ta bronza medallariga sazovor boʻldi.

Oltin medal:
-54 kg: Jahongir Xudoyberdiyev
-67 kg: Ozoda Sobirjonova

Kumush medal:
-58 kg: Omonjon Otajonov
+73 kg: Svetlana Osipova

Bronza medal:
-62 kg: Sevinch HayitovaIordaniyaning Amman shahri boks boʻyicha U15 va U17 yosh toifalaridagi Osiyo chempionatiga mezbonlik qilmoqda. Ortda qolgan kun 15 yoshgacha boʻlgan sportchilar oʻrtasida final janglari oʻtkazildi. Yakunda ringga koʻtarilgan 15 nafar bokschimizning 7 tasi gʻalaba qozonib, qitʼa chempionligiga erishdi. Shuningdek, yarim finalgacha yetib borgan 8 nafar vakilimiz bronza medaliga sazovor boʻldi.

Oltin medal:
-37 kg: Muhriddin Hamidjonov
-58 kg: Jahongirjon Usmanqulov
-61 kg: Hadyatulloh Saydullayev
-67 kg: Meyrambek Aliyev
-70 kg: Ezmir Oʻktamov
-49 kg: Parvina Shakarova
-55 kg: Madinabonu Xudoyorova

Kumush medal:
-33 kg: Temurbek Baxtiyorov
-35 kg: Sarmat Shokarimov
-43 kg: Zarifjon Neʼmatov
-52 kg: Elshod Shokirjonov
-55 kg: Hasan Xolmurodov
+70 kg: Elshod Oblaqulov
-37 kg: Sabinaxon Kamiljonova
-43 kg: Rayhona Alimxanova

Bronza medal:
-46 kg: Oybek Alimjonov
-35 kg: Ominaxon Nosirova
-40 kg: Sugʻdiyona Abduazimova
-46 kg: Dildora Toʻlqinova
-52 kg: Mohichehra Hamidova
-58 kg: Angelina Umarova
-61 kg: Marjona Sultonova
-67 kg: Fazilatxon Tursunova

Ushbu natija orqali yigitlarimiz umumjamoa hisobida birinchi oʻrinni qoʻlga kiritishdi. Bugun 17 yoshgacha boʻlgan bokschilar oʻrtasidagi final janglari tashkil etiladi.
Shu tariqa, taekvondochilarimiz mazkur musobaqada 4 ta oltin, 5 ta kumush va 5 ta bronza medallarini jamgʻarishdi.`,
  date: "30 Aprel,2025",
  category: "Boxs",
  image: [
    "/picture/Kichik oʻsmirlarimiz.jpg"
  ],
  readTime: "3 daqiqa"
} ,
{
 id: 6,
 title: "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Butunjahon suzish federatsiyasi rahbari, Osiyo Olimpiya kengashi bosh direktori Husayn al-Musallam va Milliy olimpiya qo‘mitalari assotsiatsiyasi birinchi vitse-prezidenti Shayx Javʼan bin Hamad Ol Soniyni qabul qildi",
 excerpt: "",
 fullText: `Sport sohasidagi o‘zaro manfaatli hamkorlikni yanada kengaytirish, olimpiya harakatini qo‘llab-quvvatlash, mamlakatimizda professional va ommaviy sportni rivojlantirish uchun shart-sharoitlar yaratishning dolzarb masalalari ko‘rib chiqildi.

Uchrashuv avvalida Shayx Jav’an bin Hamad Ol Soniy O‘zbekiston yetakchisiga Qatar Amiri Shayx Tamim bin Hamad Ol Soniyning salomi va eng ezgu tilaklarini yetkazdi.

Ushbu xalqaro sport tashkilotlari bilan amaliy hamkorlik yuksak darajaga ko‘tarilgani mamnuniyat bilan qayd etildi.

Butunjahon suzish federatsiyasi bilan sheriklikni mustahkamlash, mutaxassislar tayyorlash bo‘yicha dasturlarni amalga oshirish, shuningdek, O‘zbekistonda suv sporti turlari uchun zamonaviy va hammabop infratuzilma yaratishga alohida e’tibor qaratildi.

Mamlakatimizda yirik xalqaro musobaqalar, Osiyo Olimpiya kengashi Assambleyasi yig‘ilishi va Olimpiya qo‘mitalari assotsiatsiyasining yirik tadbirlarini o‘tkazish masalalari ham muhokama qilindi.`,
 date: "29 Aprel,2025",
 category: "Boxs",
 image: [
  "/picture/O‘zbekiston Respublikasi Prezidenti.jpg"
 ],
 readTime: "3 daqiqa"
} ,
{
 id:7,
 title: "Taekvondochilarimiz Osiyo chempionatining ilk kunida toʻqqizta medal jamgʻarishdi",
 excerpt: "",
 fullText: `Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati boshlandi. Musobaqaning birinchi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 3 ta kumush va 4 ta bronza medallarini qoʻlga kiritdi.

Oltin medal:
-80 kg: Jasur Jaysunov
+87 kg: Marat Mavlonov

Kumush medal:
-74 kg: Shahbozbek Tusmatov
-87 kg: Shuhrat Salayev
-57 kg: Madina Mirabzalova

Bronza medal:
-87 kg: Yodgor Joʻraboyev
-46 kg: Madina Shoniyozova
-49 kg: Laylo Hasanova
-57 kg: Shabbona Abduvaliyeva.`,
 date: "29 Aprel,2025",
 category: "Boxs",
 image: [
  "/picture/Taekvondochilarimiz osiyo.jpg","/picture/Taekvondochilarimiz osiyo1.jpg",
 ],
 readTime: "3 daqiqa"
} ,
{
 id: 8,
 title: "Kun tarixi:",
 excerpt: "",
 fullText: `Roppa-rosa 1 yil avval futbol boʻyicha Oʻzbekiston olimpiya terma jamoasi U23 Osiyo kubogining yarim finalida Indoneziya ustidan 2:0 hisobida gʻalaba qozonib, final va tarixiy Parij-2024 yozgi Olimpiya oʻyinlari yoʻllanmasini qoʻlga kiritgan edi.`,
 date: "1 May, 2025",
 category: "Boxs",
 image: [
   "/picture/Kun tarixi.jpg","/picture/Kun tarixi1.jpg",
        "/picture/Kun tarixi2.jpg","/picture/Kun tarixi3.jpg",
        "/picture/Kun tarixi4.jpg","/picture/Kun tarixi5.jpg",
        "/picture/Kun tarixi6.jpg","/picture/Kun tarixi7.jpg",
        "/picture/Kun tarixi8.jpg","/picture/Kun tarixi9.jpg",
 ],
 readTime: "3 daqiqa"
} ,
{
 id: 9,
 title: "Sport gimnastikachilarimiz Jahon kubogida 2 ta bronza medalini qoʻlga kiritishdi",
 excerpt: "",
 fullText: `Misr poytaxtida sport gimnastikasi boʻyicha Jahon kubogi bosqichi nihoyasiga yetdi. Quvonarlisi, unda ishtirok etgan Oʻzbekiston terma jamoasi 2 ta bronza medaliga sazovor boʻldi.

Har ikki medalni yigitlarimiz qoʻlga kiritishdi. Abdulaziz Mirvaliyev tayanib sakrash dasturida 14.116 ball bilan bronza medali sohibiga aylangan boʻlsa, parallel brusda 13.866 ball jamgʻargan ikki karra Olimpiya oʻyinlari ishtirokchisi Rasuljon Abdurasulov ham kuchli uchlikni yakunlab berdi.

`,
 date: "29 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Sport.jpg",
 ],
 readTime: "3 daqiqa"
} ,
{
 id: 10,
 title: "Olimpiya harakati va suv sporti turlari rivojini yangi bosqichga olib chiqish yo‘lida muhim qadam tashlandi",
 excerpt: "",
 fullText: `World Aquatics Prezidenti, Osiyo Olimpiya kengashi (OOK) Bosh direktori Husayn Al Musallam, Milliy Olimpiya qo‘mitalari assotsiatsiyasi birinchi (MOQA) vitse-prezidenti, Qatar MOQ Prezidenti Shayx Joaan Ol Soni, OOK vitse-prezidenti Tani Abdulraxmon Al Kuvari boshchiligidagi delegatsiya bugun O‘zbekiston Milliy Olimpiya qo‘mitasida mehmon bo‘ldi va yurtimizda olimpiya harakati, suv sporti turlari rivojini yangi bosqichga olib chiqish mavzusida uchrashuv o‘tkazildi.

Unda O‘zbekiston tomonidan Sport vaziri Adham Ikramov, MOQ raisining birinchi o‘rinbosari, OOK vitse-prezidenti Otabek Umarov, Kasaba uyushmalari federatsiyasi kengashi raisi, Uzbekistan aquatics federatsiyasi rahbari Qudratilla Rafikov ishtirok etishdi.

Suhbat davomida martabali mehmonlar yurtimizning sport sohasida ulkan yutuqlarga erishib borayotgani xalqaro doirada katta qiziqishga sabab bo‘layotgani, mamlakatimiz bilan hamkorlik aloqalarini yanada rivojlantirishdan mamnun bo‘lishlarini bildirdilar.

Uchrashuvda suv sporti turlarini rivojlantirish borasidagi ustuvor rejalar ko‘rib chiqildi. Xususan, xalqaro seminar va kurslar orqali mahalliy mutaxassislarning malakalarini oshirish, sportchilarni yirik musobaqalarga tayyorlashda zamonaviy metodikalardan foydalanish kabi mavzular muhokama qilindi.`,
 date: "28 Aprel, 2025",
 category: "Boxs",
 image: [
        "/picture/Olimpiya.jpg",

 ],
 readTime: "3 daqiqa"
} ,
{
 id: 11,
 title: "Duatlon bo‘yicha O‘zbekiston chempionatida g‘oliblar aniqlandi",
 excerpt: "",
 fullText: `Poytaxtimizdagi “Yangi O‘zbekiston” majmuasida duatlon bo‘yicha O‘zbekiston chempionati o‘tkazildi. Respublikamizning turli hududlaridan tashrif buyurgan 250 nafar sportchi o‘zaro bellashishdi. Poygalar turli yosh toifalarida 20 kilometr velopoyga va 3 kmga yugurish bo‘yicha tashkil etildi. Yakunda erkaklar va ayollar o‘rtasidagi g‘olib va sovrindorlar ro‘yxati quyidagicha ko‘rinish oldi:

Erkaklar:
1. Viktor Zemsev
2. Andrey Sharipov
3. Aʼzamjon Qodirov

Ayollar:
1. Viktoriya Morozova
2. Diana Valiyeva
3. Sevara Choriyeva`,
 date: "28 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Duatlon.jpg", "/picture/Duatlon1.jpg", "/picture/Duatlon2.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 12,
 title: "Toshkentga World Aquatics, MOQA va Osiyo Olimpiya kengashi delegatsiyasi yetib keldi",
 excerpt: "",
 fullText: `Bugun Islom Karimov nomidagi Toshkent xalqaro aeroportiga World Aquatics prezidenti, Osiyo Olimpiya kengashi (OOK) Bosh direktori Husayn Al Musallam, Milliy Olimpiya qoʻmitalari assotsiatsiyasi (MOQA) birinchi vitse-prezidenti hamda Qatar MOQ prezidenti Shayx Joaan Ol Soniy, OOK vitse-prezidenti Tani Abdulraxmon Al Kuvari boshchiligidagi yuqori martabali delegatsiya tashrif buyurdi.

Mehmonlarni Toshkent aeroportida Oʻzbekiston Respublikasi Sport vaziri Adham Ikramov va Oʻzbekiston MOQ raisining birinchi oʻrinbosari, OOK vitse-prezidenti Otabek Umarov kutib olishdi.

Tashrif doirasida mamlakatimizda olimpiya harakati, xususan, suv sporti turlarini rivojlantirish, xalqaro hamkorlikni mustahkamlash va uni yangi bosqichga olib chiqish boʻyicha rasmiy uchrashuvlar oʻtkazilishi rejalashtirilgan.

`,
 date: "28 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Toshkentga.jpg", "/picture/Toshkentga1.jpg",
        "/picture/Toshkentga2.jpg",   "/picture/Toshkentga3.jpg", "/picture/Toshkentga4.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 13,
 title: "Dzyudochilarimiz aralash jamoaviy dasturda kumush medalni qoʻlga kiritishdi",
 excerpt: "",
 fullText: `Tailandning Bangkok shahrida dzyudo boʻyicha Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida aralash jamoaviy dastur boʻyicha gʻolib va sovrindorlar aniqlab olindi.

Hamyurtlarimiz finalgacha boʻlgan yoʻlni mardonavor bosib oʻtib, dastlab Tojikiston, soʻng Koreya Respublikasi jamoalarini 4:0 hisobida magʻlubiyatga uchratishdi. Afsuski, chempionlik bahsida dzyudo vatani boʻlmish Yaponiya termasiga 1:4 hisobida imkoniyat boy berildi va sportchilarimiz kumush medal bilan musobaqani yakunlashdi.`,
 date: "28 Aprel, 2025",
 category: "Boxs",
 image: [
  "/picture/Tailandning.jpg"
 ],
 readTime: "3 daqiqa"
},
{
 id: 14,
 title: "Sport vazirligi va MOQ rahbariyati maktablarda: Yoshlar sport sinovlarida oʻz salohiyatini namoyon etishmoqda",
 excerpt: "",
 fullText: `Poytaxtimizda aholi, ayniqsa, yoshlar oʻrtasida sogʻlom turmush tarzini targʻib qilish va ularni ommaviy sportga keng jalb etish maqsadida maktab oʻquvchilari uchun maxsus sport sinovlari oʻtkazilmoqda.

Bugun ushbu jarayonda Oʻzbekiston Respublikasi Sport vazirligi va Milliy olimpiya qoʻmitasi rahbariyati ham ishtirok etdi. Ular Toshkent shahridagi bir qator umumtaʼlim maktablariga tashrif buyurib, sport sinovlari jarayoniga bevosita guvoh boʻlishdi.

Xususan, Sport vaziri Adham Ikramov va MOQ raisining birinchi oʻrinbosari Otabek Umarov Yunusobod tumanidagi 86 va 220-sonli maktablarda boʻlib, yosh sportchilarning mashgʻulotlarini kuzatishdi. Rasmiylar oʻquvchilar bilan yaqindan suhbatlashib, ularning sportga boʻlgan qiziqishlari, kelajakdagi maqsadlari va orzulari haqida maʼlumotlarga ega boʻlishdi.`,
 date: "28  Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Sport vazirligi.jpg","/picture/Sport vazirligi1.jpg","/picture/Sport vazirligi2.jpg","/picture/Sport vazirligi3.jpg","/picture/Sport vazirligi4.jpg","/picture/Sport vazirligi5.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 15,
 title: "Gimnastikachilarimiz Jahon kubogi bosqichini 10 ta medal bilan yakunlashdi",
 excerpt: "",
 fullText: `Toshkent mezbonlik qilgan badiiy gimnastika boʻyicha Jahon kubogining uchinchi bosqichi yakunlandi. Musobaqaning soʻnggi kunida sportchilarimiz 1 ta oltin, 4 ta kumush va 3 ta bronza medallarini jamgʻarishdi.

 Oltin medal:
Taxmina Ikromova (xalqa)

 Kumush medal:
Anastasiya Saranseva (xalqa)
Anastasiya Saranseva (bulava)
Taxmina Ikromova (toʻp)
Taxmina Ikromova (tasma)

 Bronza medal:
Guruh mashqi (3 toʻp va 2 xalqa)
Anastasiya Saranseva (toʻp)
Taxmina Ikromova (bulava)

Shu tariqa, jamoamiz mazkur turnirda 2 ta oltin, 5 ta kumush va 3 ta bronza medallarini qoʻlga kiritdi.`,
 date: "28 Aprel, 2025",
 category: "Boxs",
 image: [
 "/picture/Gimnastikachilarimiz.jpg","/picture/Gimnastikachilarimiz 1.jpg","/picture/Gimnastikachilarimiz 2.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 16,
 title: "Oʻzbekiston U17 terma jamoasi – ikki karra Osiyo chempioni!",
 excerpt: "",
 fullText: `Saudiya Arabistonida futbol boʻyicha U17 yosh toifasidagi Osiyo kubogi oʻz yakuniga yetdi. Finalgacha ajoyib oʻyinlari bilan muxlislarni xursand qilgan Oʻzbekiston oʻsmirlar terma jamoasi hal qiluvchi bahsda ham chiroyli gʻalabaga erishdi. 2-taymni ikki oʻyinchi kam boʻlib oʻtkazganiga qaramay, yigitlarimiz chempionlik oʻyinida mezbonlarni 2:0 hisobida magʻlub etishni uddalashdi. Shu tariqa, jamoamizga ushbu yosh toifasidagi ikkinchi chempionlikka erishishdi. Barakalla, oʻzbegim oʻgʻlonlari!

 U-17 Osiyo kubogi | Final

 Oʻzbekiston 2:0 Saudiya Arabistoni`,
 date: "20 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Oʻzbekiston U17.jpg"
 ],
 readTime: "3 daqiqa"
},
{
 id: 17,
 title: "Kun dayjesti",
 excerpt: "",
 fullText: `Futbolchilarimiz ikki karra Osiyo chempionligiga erishishdi

Saudiya Arabistonida futbol boʻyicha U17 yosh toifasidagi Osiyo chempionati oʻz yakuniga yetdi. Finalda Oʻzbekiston oʻsmirlar terma jamoasi mezbonlarni 2:0 hisobida magʻlub etib, oʻz tarixida ikkinchi bor mazkur yosh toifasida qitʼa chempionligini qoʻlga kiritdi. Yigitlarimiz bugun soat 19:00 da Toshkent xalqaro aeroportiga yetib kelishadi.

Sambo boʻyicha Osiyo-Okeaniya chempionatida sportchilarimiz birinchi boʻlishdi

Toshkent mezbonlik qilgan sambo boʻyicha Osiyo-Okeaniya chempionati nihoyasiga yetdi. Kattalar, oʻsmirlar, yoshlar va faxriylar oʻrtasida kechgan bahslarda Oʻzbekiston terma jamoasi umumjamoa hisobida birinchi oʻrinni egalladi.

Dushanbe xalqaro yarim marafonida hamyurtlarimiz gʻalaba qozonishdi

Tojikiston poytaxtida anʼanaviy xalqaro yarim marafon oʻtkazildi. Erkaklar oʻrtasidagi bahslarda hamyurtimiz Shohruh Davlatov oltin, Hasan Mirsoatov bronza, ayollar toifasida esa Yekaterina Tunguskova oltin medalni qoʻlga kiritdi.

Ogʻir atletikada jahon rekordi

Shu kunlarda Moldovada ogʻir atletika boʻyicha Yevropa chempionati boʻlib oʻtmoqda. Erkaklar oʻrtasidagi -96 kg vazn toifasida bolgariyalik Karlos Nasar ikki kurash boʻyicha 417 kg natija qayd etib, jahon rekordini oʻrnatishga erishdi.`,
 date: "21 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Kun dayjesti.jpg",
        "/picture/Kun dayjesti1.jpg",
        "/picture/Kun dayjesti2.jpg","/picture/Kun dayjesti3.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 18,
 title: "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning futbol bo‘yicha o‘n yetti yoshgacha bo‘lgan O‘zbekiston terma jamoasi aʼzolariga tabrigi",
 excerpt: "",
 fullText: `Aziz farzandlarim!

O‘n yetti yoshgacha bo‘lgan o‘smirlar o‘rtasida Saudiya Arabistoni maydonlarida bo‘lib o‘tgan nufuzli musobaqada muvaffaqiyatli ishtirok etib, yuksak sovrin – Osiyo kubogini qo‘lga kiritganingiz bilan xalqimiz nomidan, o‘z nomimdan chin qalbimdan samimiy muborakbod etaman.

Sizlar kabi navqiron, azm-u shijoatli yoshlarimizning butun turnir davomida bironta ham mag‘lubiyatga uchramasdan, rekord natija ko‘rsatib, jonajon Vatanimiz sharafini mardona himoya qilganlari, hech shubhasiz, milliy futbolimiz tarixiga oltin harflar bilan yoziladigan shonli voqea, desak, to‘g‘ri bo‘ladi.

Ayniqsa, finalda musobaqa mezboni – Saudiya Arabistoni kabi g‘oyat kuchli jamoaga qarshi keskin bellashuvda turli bosimlarga qaramasdan, o‘n bir o‘yinchiga qarshi to‘qqiz futbolchi shiddatli kurash olib borganingiz chinakam jasorat va matonat namunasi bo‘ldi. Sizlar namoyon etgan yuksak mardlik va mahorat har qanday tahsinga sazovordir.

Musobaqa yakuniga ko‘ra, uch nafar iste’dodli va mohir sportchimiz yakka tartibdagi sovrinlar egasi bo‘lgani, jumladan, Ne’matulloh Rustamjonov – turnirning eng yaxshi darvozaboni, Asilbek Aliyev – eng yaxshi to‘purari, Sadriddin Hasanov – eng yaxshi futbolchisi sifatida e’tirof etilganini ham alohida ta’kidlash lozim.

El-yurtimiz sizlarning timsolingizda doimo oldinga intilib yashaydigan, yuksak marralarni zabt etishga qodir Yangi O‘zbekiston yoshlarining eng yorqin vakillarini ko‘radi va sizlar bilan haqli ravishda faxrlanadi.

Mamlakatimizda sportga, jumladan, futbol rivojiga berilayotgan yuksak e’tiborning yana bir amaliy natijasi bo‘lgan mana shunday tarixiy g‘alaba uchun sizlarga, sizlarni tarbiyalab voyaga yetkazgan ota-onalaringiz va ustoz-murabbiylaringizga chin dildan samimiy minnatdorlik bildiraman.

Sizlar ushbu g‘alabadan ruhlanib, shu yil noyabr oyida Qatarda bo‘lib o‘tadigan jahon chempionatida ham Osiyoning g‘olib jamoasi sifatida munosib ishtirok etasiz, deb ishonaman.

Baxt va zafar sizlarga doimo yor bo‘lsin, aziz farzandlarim!

 

Shavkat Mirziyoyev,

O‘zbekiston Respublikasi Prezidenti


Manba: president.uz`,
 date: "21 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Shavkat Mirziyoyevning.jpg" ,
 ],
 readTime: "3 daqiqa"
},
{
 id: 19,
 title: "Toshkent badiiy gimnastika yulduzlarini qabul qiladi",
 excerpt: "",
 fullText: `25–27-aprel kunlari poytaxtimiz Toshkent yana bir yirik musobaqa — badiiy gimnastika boʻyicha Jahon kubogining navbatdagi bosqichiga mezbonlik qiladi. Bu yilgi bahslarda 26 mamlakatdan 100 nafardan ortiq sportchi medallar uchun bahs olib boradi.

Musobaqa gimnastika boʻyicha ixtisoslashtirilgan Respublika bolalar-oʻsmirlar olimpiya zaxiralari sport maktabi maydonida boʻlib oʻtadi. Tantanali ochilish marosimi 25-aprel kuni oʻtkazilishi rejalashtirilgan.

Oʻzbekiston terma jamoasi ushbu nufuzli startga jiddiy tayyorgarlik olib bormoqda. Unda mamlakatimiz sharafini quyidagi sportchilar himoya qiladi:

Yakkalik bahslari:
– Taxmina Ikromova
– Anastasiya Saranseva

Guruh mashqlari:
– Evelina Atalyans
– Maftuna Zoirova
– Adelya Fayzulina
– Mumtozabonu Isʼhoqzoda
– Amaliya Mamedova
– Irodaxon Sodiqova`,
 date: "21 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Toshkent badiiy.jpg"
 ],
 readTime: "3 daqiqa"
},
{
 id: 20,
 title: "/picture/Toshkent badiiy.jpg",
 excerpt: "",
 fullText: `Xitoyning Usi shahrida taekvondo WT boʻyicha klublar oʻrtasidagi Osiyo chempionati oʻz yakuniga yetdi. Musobaqaning soʻnggi kunida Oʻzbekiston terma jamoasi 2 ta oltin, 2 ta kumush va 1 ta bronza medallariga sazovor boʻldi.

Oltin medal:
-54 kg: Jahongir Xudoyberdiyev
-67 kg: Ozoda Sobirjonova

Kumush medal:
-58 kg: Omonjon Otajonov
+73 kg: Svetlana Osipova

Bronza medal:
-62 kg: Sevinch Hayitova

Shu tariqa, taekvondochilarimiz mazkur musobaqada 4 ta oltin, 5 ta kumush va 5 ta bronza medallarini jamgʻarishdi.`,
 date: "21 Aprel, 2025",
 category: "Boxs",
 image: [
    "/picture/Futbol.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 21,
 title: "Qahramon futbolchilarimiz tantanali kutib olindi",
 excerpt: "",
 fullText: `Saudiya Arabistoni maydonlarida oʻtgan futbol boʻyicha U17 Osiyo kubogida mardonavor ishtirok etib, chempionlikni qoʻlga kiritgan Oʻzbekiston oʻsmirlar terma jamoasi diyorimizga qaytib keldi.

Tantanali kutib olish marosimi Islom Karimov nomidagi Toshkent xalqaro aeroportida oʻtkazildi. Unda Oʻzbekiston Respublikasi Bosh vaziri Abdulla Aripov, Oʻzbekiston Respublikasi Prezidenti Adminstratsiyasi departament rahbari Odil Abduraxmanov, Sport vazirligi, Oʻzbekiston Milliy Olimpiya qoʻmitasi, mamlakat futbol assotsiatsiyasi rahbariyati, shuningdek, futbolchilarimizning yaqinlari, muxlislar va OAV xodimlari ishtirok etishdi.

Rasmiylar yigitlarimizning butun musobaqadagi yorqin oʻyinlari, ayniqsa, mezbonlarga qarshi final bahsidagi irodali gʻalabalarini alohida eʼtirof etib, ularning kelgusi faoliyatida ham mana shunday shijoat va kuch-gʻayrat tiladilar.

Tadbirda Oʻzbekiston Respublikasi Prezidenti, Milliy Olimpiya qoʻmitasi raisining terma jamoa aʼzolariga yoʻllagan tabrigi, musobaqa gʻoliblari va uning ishtirokchilarini mukofotlash toʻgʻrisidagi Farmoni oʻqib eshittirildi.

Shundan soʻng terma jamoa aʼzolariga Prezident sovgʻasi – avtomobillar topshirildi. Unga koʻra, futbolchilarimizga “Cobalt”, bosh murabbiyga esa “Equinox” mashinalarining kalitlari tantanali taqdim etildi.`,
 date: "21 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Qahramon0.jpg" 
 ],
 readTime: "3 daqiqa"
},
{
 id: 22,
 title: "Prezident Shavkat Mirziyoyev sportchilarimizning g‘alabalarini eʼtirof etdi",
 excerpt: "",
 fullText: `Prezident Shavkat Mirziyoyev sportchilarimizning yutuqlarini alohida qiziqish va eʼtibor bilan kuzatib boryaptilar. Quvonarlisi, aprel oyida mamlakatimizning sport sohasidagi muvaffaqiyatlari futbol bilangina cheklanib qolmadi.

Xususan, xokkey bo‘yicha O‘zbekiston milliy terma jamoasi ham xalqaro maydonda ajoyib natija ko‘rsatdi. Armanistonda o‘tkazilgan jahon chempionatida xokkeychilarimiz o‘z divizionida g‘olib bo‘lib, kelgusi mavsumda uchinchi divizionda qatnashish huquqini qo‘lga kiritdi. Bundan oldin, mart oyida Tailandda bo‘lib o‘tgan 18 yoshgacha bo‘lgan xokkeychilar o‘rtasidagi jahon chempionatida ham terma jamoamiz g‘alaba qozongan edi.

Saudiya Arabistonida o‘tkazilgan 18 yoshgacha bo‘lgan sportchilar o‘rtasidagi yengil atletika bo‘yicha Osiyo chempionatida yurtdoshlarimiz 12 ta - 3 ta oltin, 5 ta kumush va 4 ta bronza medalini qo‘lga kiritib, o‘z tarixida birinchi marta umumjamoa hisobida ikkinchi o‘rinni egalladi.

Bu yutuqlar, eng avvalo, yigit-qizlarimizning tinimsiz mehnati, yuksak mahorati, mustahkam irodasi va matonati tufaylidir. Bunda sport sohasiga qaratilayotgan eʼtibor va tizimli davlat siyosatining ham alohida o‘rni borligini taʼkidlash joiz. Mamlakatimizda sport infratuzilmasi sezilarli darajada yaxshilandi, yangi maktablar ochilmoqda, sportchilarning professional rivojlanishi uchun shart-sharoitlar yaratilmoqda.

Davlatimiz rahbari xokkeychi va yengil atletikachilarimizni yuksak zafarlari bilan tabriklab, ota-onalari, ustoz va murabbiylariga samimiy minnatdorlik izhor etadilar.`,
 date: "22 Aprel, 2025",
 category: "Boxs",
 image: [
 "/picture/g‘alabalarini.jpg","/picture/g‘alabalarini1.jpg","/picture/g‘alabalarini2.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 23,
 title: "“Continental Americas Gold” kamari sohibi Ruslan Abdullayev Toshkentga qaytib keldi",
 excerpt: "",
 fullText: `Boks boʻyicha jahon chempioni Ruslan Abdullayev 19-aprel kuni AQShning Kaliforniya shtatida tashkil etilgan professional boks kechasida filippinlik Jino Rodrigoni magʻlub etib, WBA super yengil vazn toifasida “Continental Americas Gold” kamarini qoʻlga kiritgan edi. Bugun hamyurtimiz Oʻzbekistonga qaytib keldi.

Abdullayevni Islom Karimov nomidagi Toshkent xalqaro aeroportida Sport vazirining oʻrinbosari Shahrullo Mahmudov, MOQ Bosh kotibi Oybek Kasimov, mamlakat boks federatsiyasi Bosh kotibi Shohid Tillaboyev va uning yaqinlari munosib kutib oldi.

Rasmiylar sportchimizning professional boksdagi ikkinchi muvaffaqiyati bilan qutlab, uning keyingi faoliyatida ham yorqin gʻalabalar tilashdi.`,
 date: "22 Aprel, 2025",
 category: "Boxs",
 image: [
  "/picture/Continental.jpg", "/picture/Continental1.jpg",
  "/picture/Continental2.jpg","/picture/Continental3.jpg",
 ],
 readTime: "3 daqiqa"
},
{
 id: 24,
 title: "Bilasizmi?",
 excerpt: "",
 fullText: `Eng uzoq davom etgan Olimpiya oʻyinlari 1900-yil Parij shahrida oʻtkazilgan. Ikkinchi yozgi Olimpiya oʻyinlari 1900-yilning 14-may sanasida boshlanib, 28-oktyabrda yakuniga yetgan.`,
 date: "23 Aprel, 2025",
 category: "Boxs",
 image: [
   "/picture/Bilasizmi.jpg"
 ],
 readTime: "3 daqiqa"
},{
  id: 25,
  title: "Chigiryev va Geynish Milan-Kortina-2026 qishki Olimpiya oʻyinlari yoʻllanmasini qoʻlga kiritishdi!",
  excerpt: "Dmitriy Chigiryev va Yekaterina Geynish Milan-Kortina-2026 qishki Olimpiadasiga yo‘llanma qo‘lga kiritishdi.",
  fullText: `Eng uzoq davom etgan Olimpiya oʻyinlari 1900-yil Parij shahrida oʻtkazilgan. Ikkinchi yozgi Olimpiya oʻyinlari 1900-yilning 14-may sanasida boshlanib, 28-oktyabrda yakuniga yetgan.`,
  date: "28 Mart, 2025",
  category: "Boxs",
  image: [
  "/picture/Chigiryev0.jpg", 
  ],
  readTime: "3 daqiqa"
 }
  // ... boshqa yangiliklar ...
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const newsItem = newsData.find(item => item.id === Number(id));

  const translations = {
    backToNews: {
      uz: "Yangiliklarga qaytish",
      ru: "Вернуться к новостям",
      en: "Back to news"
    },
    readTime: {
      uz: "O'qish vaqti",
      ru: "Время чтения",
      en: "Read time"
    },
    share: {
      uz: "Ulashish",
      ru: "Поделиться",
      en: "Share"
    },
    relatedNews: {
      uz: "O'xshash yangiliklar",
      ru: "Похожие новости",
      en: "Related news"
    },
    newsNotFound: {
      uz: "Yangilik topilmadi",
      ru: "Новость не найдена",
      en: "News not found"
    }
  };

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{translations.newsNotFound[language]}</h1>
            <Button onClick={() => navigate('/yangiliklar')}>
              {translations.backToNews[language]}
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsData
    .filter(item => item.category === newsItem.category && item.id !== newsItem.id)
    .slice(0, 3);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="ghost" 
            onClick={() => navigate('/yangiliklar')}
            className="flex items-center hover:bg-primary/10"
          >
            <ArrowLeft size={16} className="mr-2" />
            {translations.backToNews[language]}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Slayder */}
              <NewsImageSlider images={newsItem.image} />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{newsItem.date}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{translations.readTime[language]}: {newsItem.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">{newsItem.title}</h1>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {newsItem.fullText || newsItem.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-end">
                {/* <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Share size={16} />
                  {translations.share[language]}
                </Button> */}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">{translations.relatedNews[language]}</h3>
            <div className="space-y-4">
              {relatedNews.map((news, index) => (
                <motion.div 
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={Array.isArray(news.image) ? news.image[0] : news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{news.category}</Badge>
                        <span className="text-sm text-gray-500">{news.date}</span>
                      </div>
                      <h4 className="font-semibold line-clamp-2 mb-2">{news.title}</h4>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary" 
                        onClick={() => navigate(`/yangiliklar/${news.id}`)}
                      >
                        {translations.backToNews[language].replace(translations.backToNews[language].split(' ')[0], '')}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default NewsDetail;