
import { Award, Users, Calendar, BarChart } from 'lucide-react';

const StatsCard = ({ icon, number, label, className }: { icon: React.ReactNode, number: string, label: string, className?: string }) => {
  return (
    <div className={`flex items-center p-6 rounded-lg ${className || 'bg-darkBg'}`}>
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{number}</h3> {/* <-- text-white qo'shildi */}
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          icon={<Award className="text-white" />} 
          number="49+" 
          label="Olimpiya medallari"
        />
        <StatsCard 
          icon={<Users className="text-white" />} 
          number="120+" 
          label="Malakali sportchilar"
        />
        <StatsCard 
          icon={<Calendar className="text-white" />} 
          number="30+" 
          label="Sport turlari"
       
        />
        <StatsCard 
          icon={<BarChart className="text-white" />} 
          number="31" 
          label="Yillik tajriba"
          
        />
      </div>
    </div>
  );
};

export default Stats;
