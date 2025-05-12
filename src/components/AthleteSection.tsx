
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; 

interface AthleteProps {
  id: number;
  name: string;
  sport: string;
  category: string;
  achievement: string;
  image: string;
}

const AthleteCard = ({ name, sport, category, achievement, image }: AthleteProps) => {
  return (
    <div className="bg-darkBg rounded-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-gray-400 mb-3">{sport} {category && `(${category})`}</p>
        <div className="flex items-center mb-4">
          <span className="w-5 h-5 bg-goldMedal rounded-full flex items-center justify-center mr-2">
            🏅
          </span>
          <span className="text-sm text-gray-300">{achievement}</span>
        </div>
        {/* <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-white/5">
          Sportchi haqida
        </Button> */}
      </div>
    </div>
  );
};

const AthleteSection = () => {
  const navigate = useNavigate();
  const athletes: AthleteProps[] = [
    {
      id: 1,
      name: "Artur Taymazov",
      sport: "Erkin kurash",
      category: "120/125 kg",
      achievement: "2004 yil Oltin Afina Olimpiadasi",
      image: "/picture/legand sportmen/Artur Šavqatovich Taymazov.jpg"
    },
    {
      id: 2,
      name: "Oksana Chusovitina",
      sport: "Gimnastika",
      category: "",
      achievement: "2003 yil	Oltin JCH, boʻshliqdan sakrash",
      image: "/picture/legand sportmen/Oksana Aleksandrovna Chusovitina.jpg"
    },
    {
      id: 3,
      name: "Anton Fokin",
      sport: "Artistik gimnastika, parallel barlar",
      category: "2008 yil	Pekin Olimpiadasi,2007 yil	JCH, Shtutgart",
      achievement: "2 Kumush",
      image: "/picture/legand sportmen/Anton Sergeyevich Fokin.jpg"
    },
    {
      id: 4,
      name: "Ruslan Nurudinov",
      sport: "Og'ir atletika",
      category: "105 kg",
      achievement: "Olimpiya va JCH medallari 2 Oltin ",
      image: "/picture/legand sportmen/Ruslan Qimmatov oʻgʻli Nurudinov.jpg"
    }
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Mashxur sportchilarimiz</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {athletes.map(athlete => (
    <AthleteCard key={athlete.id} {...athlete} />
  ))}
</div>
        
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="bg-transparent border-gray-700 text-white hover:bg-white/5"
            onClick={() => navigate('/sportchilar')} // To'g'ri joyga qo'yildi
          >
            Barcha sportchilar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AthleteSection;
