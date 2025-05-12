import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/useLanguage";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Barcha asosiy ma'lumotlarni umumiy massivda to'plang
const allData = [
  // Yangiliklar
  { id: 1, title: "Olimpiya yangiliklari", description: "Olimpiya haqida so'nggi yangiliklar", path: "/yangiliklar" },
  { id: 2, title: "Parij 2024", description: "Parij Olimpiadasi haqida", path: "/olimpiya/parij-2024" },
  // Sportchilar
  { id: 3, title: "Artur Taymazov", description: "Erkin kurash bo'yicha olimpiya chempioni", path: "/sportchilar" },
  { id: 4, title: "Oksana Chusovitina", description: "Gimnastika bo'yicha afsonaviy sportchi", path: "/sportchilar" },
  // Mashqlar
  { id: 5, title: "Ertalabki badantarbiya", description: "15 daqiqa mashq", path: "/exercises" },
  { id: 6, title: "Yoga mashqlari", description: "Ertalabki yoga mashqlari", path: "/exercises" },
  // Komitet va tarix
  { id: 7, title: "Olimpiya qo'mitasi", description: "O'zbekiston Milliy Olimpiya qo'mitasi haqida", path: "/qomita" },
  { id: 8, title: "Olimpiya tarixi", description: "Olimpiya o'yinlari tarixi", path: "/olimpiya" },
  // Sport turlari
  { id: 9, title: "Boks", description: "O'zbekiston bokschilari va natijalari", path: "/yangiliklar" },
  { id: 10, title: "Dzyudo", description: "O'zbekiston dzyudochilari", path: "/yangiliklar" },
  { id: 11, title: "Kurash", description: "Kurash bo'yicha sportchilar", path: "/sportchilar" },
  { id: 12, title: "Yengil atletika", description: "Yengil atletika yangiliklari", path: "/sportchilar" },
  { id: 13, title: "Gimnastika", description: "Gimnastika yangiliklari", path: "/sportchilar" },
  { id: 14, title: "Futbol", description: "Olimpiya futbol jamoasi", path: "/olimpiya/jadval" },
  // Musobaqalar va jadval
  { id: 15, title: "Musobaqalar jadvali", description: "Olimpiya o'yinlari jadvali", path: "/olimpiya/jadval" },
  // Afsonaviy sportchilar
  { id: 16, title: "Afsonaviy sportchilar", description: "O'zbekistonning mashhur sportchilari", path: "/sportchilar" },
  // Qo'shimcha ma'lumotlar
  { id: 17, title: "Medallar", description: "O'zbekiston olimpiya medallari", path: "/olimpiya/medallar" },
  // ... boshqa kerakli ma'lumotlarni shu yerga qo'shing
];

const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchSource, setSearchSource] = useState<"site" | "google" | "yandex">("site");
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Qidiruv natijalari
  const filteredResults = searchQuery
    ? allData.filter((item) =>
        (item.title + " " + item.description).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = (path: string) => {
    setOpen(false);
    setSearchQuery("");
    navigate(path);
    toast({
      title: "Navigating",
      description: `Going to ${path}`,
      duration: 2000,
    });
  };

  const handleExternalSearch = () => {
    if (!searchQuery) return;
    let url = "";
    if (searchSource === "google") {
      url = `https://www.google.com/search?q=site:olympic.uz+${encodeURIComponent(searchQuery)}`;
    } else if (searchSource === "yandex") {
      url = `https://yandex.com/search/?text=site:olympic.uz+${encodeURIComponent(searchQuery)}`;
    } else {
      return;
    }
    window.open(url, "_blank");
    setOpen(false);
    setSearchQuery("");
  };

  const handleTabChange = (value: string) => {
    setSearchSource(value as "site" | "google" | "yandex");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="bg-darkBg hover:bg-gray-800 rounded-full p-2 transition-colors transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600" 
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {language === "uz" ? "Qidiruv" : language === "ru" ? "Поиск" : "Search"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Tabs defaultValue="site" value={searchSource} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="site">{t('searchOnSite')}</TabsTrigger>
              <TabsTrigger value="google">{t('searchInGoogle')}</TabsTrigger>
              <TabsTrigger value="yandex">{t('searchInYandex')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="site">
              <Input
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-300 dark:border-gray-700"
                autoFocus
              />
            </TabsContent>
            
            <TabsContent value="google">
              <div className="space-y-4">
                <Input
                  placeholder={`${t('search')} Google...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-gray-300 dark:border-gray-700"
                  autoFocus
                />
                <Button 
                  className="w-full" 
                  onClick={handleExternalSearch}
                  disabled={!searchQuery}
                >
                  {t('searchInGoogle')}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="yandex">
              <div className="space-y-4">
                <Input
                  placeholder={`${t('search')} Yandex...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-gray-300 dark:border-gray-700"
                  autoFocus
                />
                <Button 
                  className="w-full" 
                  onClick={handleExternalSearch}
                  disabled={!searchQuery}
                >
                  {t('searchInYandex')}
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {searchQuery && searchSource === "site" && (
            <div className="mt-2">
              <h4 className="text-sm text-gray-500 mb-2">{t('searchResults')}</h4>
              {filteredResults.length > 0 ? (
                <ul className="space-y-2">
                  {filteredResults.map((result) => (
                    <li key={result.id}>
                      <Button
                        variant="ghost"
                        className="w-full text-left justify-start transition-all hover:translate-x-1"
                        onClick={() => handleSearch(result.path)}
                      >
                        {result.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">{t('noResults')}</p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;