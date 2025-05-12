
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NewsSection from "@/components/NewsSection";
import ParisOlympics from "@/components/ParisOlympics";
import AthleteSection from "@/components/AthleteSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <NewsSection />
      <ParisOlympics />
      <AthleteSection />
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Index;
