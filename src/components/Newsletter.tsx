
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react"; // importlar orasiga qo‘shing
// ...existing code...

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  // Telegramga yuborish funksiyasi
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !true) return;

    const BOT_TOKEN = "7592778917:AAElocpCuLSnWV7soGOhyTXK1vq31lRvyRY";
    const CHAT_ID = "6241219152";
    const text = `Saytga yangi obuna: ${email}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML"
      }),
    });

    setEmail("");
    setChecked(false);
    // Istasangiz, xabar yoki toast chiqaring
  };
  // ...existing code...
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubscribe}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Yangiliklarga obuna bo'ling</h2>
              <p className="text-white/80">
                Olimpiya yangililari, musobaqalar va sportchilarimiz haqidagi so'nggi ma'lumotlarni birinchilardan bo'lib oling.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input 
                  type="email" 
                  placeholder="Elektron pochta manzilingiz" 
                  className="bg-gray-700 border-gray-600 text-white"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
               <Button
  className={`bg-red-500 hover:bg-red-600 ${ checked ? "opacity-50 cursor-not-allowed" : ""}`}
  type="submit"
  disabled={false}
>
  Obuna bo'lish
</Button>
              </div>
              
              <div className="flex items-center space-x-2">
               <Checkbox
  id="terms"
  checked={checked}
  onCheckedChange={val => setChecked(Boolean(val))}
/>
                <label 
                  htmlFor="terms"
                  className="text-sm text-white/80 cursor-pointer"
                >
                  Men shaxsiy ma'lumotlarimni qayta ishlashga rozilik bildiraman
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Newsletter;
