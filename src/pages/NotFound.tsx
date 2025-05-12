
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100 py-16">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Sahifa topilmadi</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Siz izlayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="/">Bosh sahifaga qaytish</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
