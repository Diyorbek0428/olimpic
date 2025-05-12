import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Menu, Sun, Moon } from 'lucide-react';
import SearchDialog from './SearchDialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useLanguage } from '@/context/useLanguage';
import { Language } from '@/context/LanguageContext';
import { Switch } from "@/components/ui/switch";
import { toast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    language,
    setLanguage,
    t,
    theme,
    toggleTheme
  } = useLanguage();
  
  const languages = [
    {
      code: 'uz',
      label: "O'zbek"
    }, 
    {
      code: 'ru',
      label: 'Русский'
    }, 
    {
      code: 'en',
      label: 'English'
    }
  ];
  
  const currentLang = languages.find(lang => lang.code === language) || languages[0];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as Language);
    toast({
      title: t("languageChanged"),
      description: lang === "uz" ? "Til o'zbekchaga o'zgartirildi" : lang === "ru" ? "Язык изменен на русский" : "Language changed to English",
      duration: 2000
    });
  };
  
  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-darkBg/95 backdrop-blur-md shadow-md dark:bg-gray-900/95' : 'bg-darkBg dark:bg-gray-900'} text-white py-4`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse">
           <img src="/picture/logo web/logo web.png" alt="olimpiada" />
            {}
          </div>
          <Link to="/" className="text-xl font-bold hover:text-primary-foreground/90 transition-colors">
            {t('welcomeText')}
          </Link>
        </div>
        
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  {t('home')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="mx-0 bg-transparent text-gray-50">{t('committee')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/qomita" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('aboutCommittee')}</div>
                      <p className="text-sm text-muted-foreground">O'zbekiston Olimpiya qo'mitasi haqida ma'lumotlar</p>
                    </Link>
                    <Link to="/qomita/rahbariyat" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('leadership')}</div>
                      <p className="text-sm text-muted-foreground">Qo'mita rahbariyati va a'zolari</p>
                    </Link>
                    <Link to="/qomita/tarix" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('history')}</div>
                      <p className="text-sm text-muted-foreground">O'zbekiston Olimpiya harakatining tarixi</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/yangiliklar" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  {t('news')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-transparent">
                <NavigationMenuTrigger className="font-normal my-0 text-[gwhite] bg-[ewhite] text-gray-50 bg-transparent rounded-full">{t('olympics')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/olimpiya" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('generalInfo')}</div>
                      <p className="text-sm text-muted-foreground">Olimpiya o'yinlari tarixi va ma'lumotlari</p>
                    </Link>
                    <Link to="/olimpiya/parij-2024" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('Statistika')}</div>
                      <p className="text-sm text-muted-foreground">O'zbekiston so'ngi statistikasi </p>
                    </Link>
                    <Link to="/olimpiya/medallar" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                      <div className="font-medium">{t('medals')}</div>
                      <p className="text-sm text-muted-foreground">O'zbekiston sportchilarining yutuqlari</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/exercises" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  {t('exercises')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/aloqa" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  {t('contact')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary-foreground/80 transition-colors bg-transparent border-0">
              <Globe size={18} className="animate-pulse" />
              <span>{currentLang.label}</span>
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map(lang => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => handleLanguageChange(lang.code)} 
                  className={`${language === lang.code ? 'bg-accent' : ''} cursor-pointer`}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Sun size={18} className={`transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`} />
            <Switch 
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
            />
            <Moon size={18} className={`transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`} />
          </div>
          
          {/* Search Dialog */}
          <SearchDialog />
        </div>
        
        <div className="md:hidden mt-4 w-full">
          <button onClick={() => setIsOpen(!isOpen)} className="w-full px-4 py-2 bg-primary rounded flex justify-center items-center" aria-label="Toggle menu">
            <Menu size={20} className="mr-2" />
            <span>Menu</span>
          </button>
          
          {isOpen && (
            <div className="bg-darkBg dark:bg-gray-800 w-full mt-2 rounded shadow-lg p-4 border border-gray-700 divide-y divide-gray-700">
              <Link to="/" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('home')}
              </Link>
              <Link to="/qomita" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('committee')}
              </Link>
              <Link to="/yangiliklar" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('news')}
              </Link>
              <Link to="/olimpiya" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('olympics')}
              </Link>
              <Link to="/olimpiya/jadval" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('competitions')}
              </Link>
              <Link to="/sportchilar" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('allAthletes', 'home')}
              </Link>
              <Link to="/exercises" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('exercises')}
              </Link>
              <Link to="/aloqa" className="block py-3 hover:text-primary-foreground/80 transition-colors">
                {t('contact')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
