import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/useLanguage";
import { motion } from "framer-motion";

const NewsCard = ({
  id,
  images = [],
  category,
  date,
  title,
  description,
}: {
  id: number;
  images: string[];
  category: string;
  date: string;
  title: string;
  description: string;
}) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      className="bg-darkBg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden flex items-center justify-center bg-black">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
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
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div
          className="text-primary hover:underline flex items-center group cursor-pointer"
          onClick={() => navigate(`/yangiliklar/${id}`)}
        >
          {t("readMore")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const NewsSection = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      images: ["/picture/Yosh bokschilarimiz.jpg"],
      category: t("boxing", "news"),
      date: "1 May, 2025",
      title: t("boxingNews", "news"),
      description: t("boxingDesc", "news"),
    },
    {
      id: 2,
      images: [
        "/picture/Dzyudochilarimiz Dushanbe.jpg",
        "/picture/Dzyudochilarimiz Dushanbe1.jpg",
      ],
      category: t("judo", "news"),
      date: "1 May, 2025",
      title: t("judoNews", "news"),
      description: t("judoDesc", "news"),
    },
    {
      id: 3,
      images: ["picture/Taekvondochilarimiz.jpg",
         "picture/Taekvondochilarimiz1.jpg",
         "picture/Taekvondochilarimiz2.jpg",
         "picture/Taekvondochilarimiz3.jpg",
         "picture/Taekvondochilarimiz4.jpg",
         ],
      category: t("Taekvondo", "news"),
      date: "30 Aprel, 2025",
      title: t("TaekvondoNews", "news"),
      description: t("TaekvondoDesc", "news"),
    },
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
            {t("latestNews", "home")}
          </h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              className="bg-primary"
              onClick={() => navigate("/yangiliklar")}
            >
              {t("allNews")}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="bg-transparent border-gray-700 text-white hover:bg-white/5 hover:scale-105 transition-transform"
            onClick={() => navigate("/yangiliklar")}
          >
            {t("Barcha yangiliklar", "home")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsSection;