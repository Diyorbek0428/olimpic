
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Exercises from "./pages/Exercises";
import Committee from "./pages/Committee";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Olympics from "./pages/Olympics";
import Contact from "./pages/Contact";
import TeamDetail from "./pages/TeamDetail";
import LegendAthletes from "./pages/LegendAthletes";
import GamesSchedule from "./pages/GamesSchedule";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/exercises" element={<Exercises />} />
              
              {/* Committee routes */}
              <Route path="/qomita" element={<Committee />} />
              <Route path="/qomita/rahbariyat" element={<Committee />} />
              <Route path="/qomita/tarix" element={<Committee />} />
              
              {/* News routes */}
              <Route path="/yangiliklar" element={<News />} />
              <Route path="/yangiliklar/:id" element={<NewsDetail />} />
              
              {/* Olympics routes */}
              <Route path="/olimpiya" element={<Olympics />} />
              <Route path="/olimpiya/parij-2024" element={<Olympics />} />
              <Route path="/olimpiya/medallar" element={<Olympics />} />
              <Route path="/olimpiya/jadval" element={<GamesSchedule />} />
              
              {/* Team and Athletes routes */}
              <Route path="/jamoa" element={<TeamDetail />} />
              <Route path="/sportchilar" element={<LegendAthletes />} />
              
              {/* Contact route */}
              <Route path="/aloqa" element={<Contact />} />
              
              {/* Catch all unmatched routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
