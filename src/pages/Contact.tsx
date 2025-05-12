import React, { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/useLanguage";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(1, {
    message: "Message must be at least 1 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Normally, you would use an environment variable here
    // This is a temporary public token - in production you should use your own token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHVtbXl0b2tlbiIsImEiOiJjbGdhYTl1dHEwMjQ4M3BxdXNrYmJpenI1In0.BXWfCmwJhE6qnq_e1XS1Wg';
    
    // Coordinates for Uzbekistan Olympic Committee
    const coords = [69.268182, 41.308289]; // Tashkent coordinates
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coords,
      zoom: 14
    });
    
    // Add marker
    const marker = new mapboxgl.Marker()
      .setLngLat(coords)
      .setPopup(new mapboxgl.Popup().setHTML(`
        <h3 class="font-bold">${language === 'uz' ? "O'zbekiston Milliy Olimpiya qo'mitasi" :
                               language === 'ru' ? "Национальный Олимпийский комитет Узбекистана" :
                               "National Olympic Committee of Uzbekistan"}</h3>
        <p>Toshkent sh., Shayhontohur tumani, A.Qodiriy ko'chasi, 7A-uy</p>
      `))
      .addTo(map.current);
    
    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl());
    
    // Cleanup function
    return () => {
      if (map.current) map.current.remove();
    };
  }, [language]);
  
  const onSubmit = async (data: FormValues) => {
  try {
    // Telegram bot token va chat ID
    const BOT_TOKEN = "7592778917:AAElocpCuLSnWV7soGOhyTXK1vq31lRvyRY";
    const CHAT_ID = "6241219152";

    // Yuboriladigan xabar matni
    const text = `
Yangi aloqa xabari:
Ism: ${data.name}
Email: ${data.email}
Mavzu: ${data.subject}
Xabar: ${data.message}
    `;

    // Telegram API ga POST so‘rov
 await fetch(`https://api.telegram.org/bot7592778917:AAElocpCuLSnWV7soGOhyTXK1vq31lRvyRY/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: "6241219152",
    text,
    parse_mode: "HTML"
  }),
});

    toast({
      title: language === 'uz' ? "Xabar yuborildi" : 
             language === 'ru' ? "Сообщение отправлено" : 
             "Message sent",
      description: language === 'uz' ? "Tez orada siz bilan bog'lanamiz." : 
                  language === 'ru' ? "Мы свяжемся с вами в ближайшее время." : 
                  "We will contact you soon.",
    });

    form.reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: language === 'uz' ? "Xatolik yuz berdi" : 
             language === 'ru' ? "Произошла ошибка" : 
             "An error occurred",
      description: language === 'uz' ? "Iltimos, keyinroq qayta urinib ko'ring." : 
                  language === 'ru' ? "Пожалуйста, повторите попытку позже." : 
                  "Please try again later.",
      variant: "destructive",
    });
  }
};
  
  const getTranslation = (key: string) => {
    const translations = {
      contactUs: {
        uz: "Biz bilan bog'laning",
        ru: "Свяжитесь с нами",
        en: "Contact us"
      },
      contactDescription: {
        uz: "Savollaringiz, takliflaringiz yoki fikrlaringiz bo'lsa, bizga xabar yuboring. Biz tez orada javob beramiz.",
        ru: "Если у вас есть вопросы, предложения или отзывы, отправьте нам сообщение. Мы ответим в ближайшее время.",
        en: "If you have questions, suggestions or feedback, send us a message. We will respond soon."
      },
      name: {
        uz: "Ismingiz",
        ru: "Ваше имя",
        en: "Your name"
      },
      email: {
        uz: "Elektron pochta",
        ru: "Электронная почта",
        en: "Email"
      },
      subject: {
        uz: "Mavzu",
        ru: "Тема",
        en: "Subject"
      },
      message: {
        uz: "Xabar",
        ru: "Сообщение",
        en: "Message"
      },
      send: {
        uz: "Yuborish",
        ru: "Отправить",
        en: "Send"
      },
      address: {
        uz: "Manzil",
        ru: "Адрес",
        en: "Address"
      },
      addressText: {
        uz: "Toshkent 100027, Botir Zokirov ko‘chasi, 6",
        ru: "Ташкент 100027, улица Батыра Закирова, 6",
        en: "Tashkent 100027, Batyr Zakirov Street, 6"
      },
      contactInfo: {
        uz: "Bog'lanish ma'lumotlari",
        ru: "Контактная информация",
        en: "Contact information"
      },
      phone: {
        uz: "Telefon",
        ru: "Телефон",
        en: "Phone"
      },
      fax: {
        uz: "Faks",
        ru: "Факс",
        en: "Fax"
      },
      socialNetworks: {
        uz: "Ijtimoiy tarmoqlar",
        ru: "Социальные сети",
        en: "Social networks"
      }
    };
    
    return translations[key][language];
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
          {language === 'uz' ? 'Aloqa' : language === 'ru' ? 'Контакты' : 'Contact'}
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">{getTranslation('contactUs')}</h2>
              <p className="text-gray-600 mb-6">
                {getTranslation('contactDescription')}
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{getTranslation('name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={getTranslation('name')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{getTranslation('email')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{getTranslation('subject')}</FormLabel>
                        <FormControl>
                          <Input placeholder={getTranslation('subject')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{getTranslation('message')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={getTranslation('message')}
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'uz' ? "Yuborilmoqda..." : language === 'ru' ? "Отправка..." : "Sending..."}
                      </span>
                    ) : getTranslation('send')}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <Card className="p-6">
  <h3 className="text-xl font-semibold mb-3">{getTranslation('address')}</h3>
  <p className="text-gray-600 mb-2">
    {getTranslation('addressText').split('\n')[0]}
  </p>
  <p className="text-gray-600">
    {getTranslation('addressText').split('\n')[1]}
  </p>
  
  <div className="h-[300px] mt-4 bg-gray-200 rounded-md overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.630584505144!2d69.25228417553022!3d41.316899400365315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b123adbb105%3A0xf7dc97a4f9280e08!2sBotir%20Zokirov%20ko&#39;chasi%206%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1746354168837!5m2!1suz!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  </div>
</Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">{getTranslation('contactInfo')}</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">{getTranslation('phone')}:</span>+99871 205 5205
                </p>
                {/* <p className="text-gray-600">
                  <span className="font-medium">{getTranslation('fax')}:</span> +998 71 241-99-79
                </p> */}
                <p className="text-gray-600">
                  <span className="font-medium">{getTranslation('email')}:</span> info@olympic.uz
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Web:</span> www.olympic.uz
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">{getTranslation('socialNetworks')}</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/nocuzbekistan" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://www.instagram.com/Olympic.uz/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://twitter.com/Olympicuz" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="https://t.me/OlympicUz" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-.868.432-1.15.824-.28.392-.41.845-.373 1.3.07.89.538 1.665 1.355 2.037.315.137.74.22 1.22.716.15.562 2.55 8.324 2.55 8.324.21.56.347.969.512 1.234.83.135.173.26.263.38.37.048.38.106.126.183.109.092.231.172.286.093.484.204 1.9.56 1.95.585.405.217.75.31.158.31.245 0 .474-.135.642-.363.116-.153.9-1.248 1.527-3.276.725-2.356 1.522-4.56 1.536-4.6.044-.12.12-.215.225-.282.112-.072.255-.083.34-.102-.238.332-.73.335-1.084.155-.036.202 2.97 1.308 4.672 2.053 1.713.75 3.43 1.504 3.582 1.57.76.32 1.454.485 1.916.485.21 0 .577-.068.732-.545.164-.508.325-2.003.325-3.342 0-1.34-.16-2.834-.325-3.342-.155-.477-.523-.545-.732-.545-2.495 0-17.626-7.23-17.797-7.306-.175-.53-.44-1.117-.77-1.914-.18-.45.122-.726.32-1.288.47-1.285 1.304-3.6-.997-3.623z"/></svg>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
