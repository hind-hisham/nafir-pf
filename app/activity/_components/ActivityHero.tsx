import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Users, Rocket } from "lucide-react";

const cards = [
    { title: "Advanced Skills", description: "Enhance your skills in a professional environment", icon: Briefcase, color: "text-blue-500", position: "bottom-10 -left-35" },
    { title: "Upcoming Events", description: "Reserve your seat now!", icon: Calendar, color: "text-green-500", position: "bottom-45 -left-20" },
    { title: "Elite Community", description: "Join a network of experts", icon: Users, color: "text-purple-500", position: "bottom-27 right-3" },
    { title: "Start Your Journey", description: "Take the first step towards success", icon: Rocket, color: "text-red-500", position: "bottom-50 right-1" },
  ];
  

export default function HomePage() {
  return (
    <div className="relative bg-[#221B56] flex flex-col items-center justify-center md:min-h-screen w-full md:flex-row md:justify-between  " >
        {/* left side */}
        <div className="md:w-[60%] p-8 bg-white flex flex-col justify-center md:h-screen " style={{ clipPath: "ellipse(90% 100% at 10% 50%)" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Activities and Opportunities to <span className="text-yellow-400">Develop</span> Your Career Path
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Discover upcoming sessions and events from various Nafier initiative departments, learn new skills, and start your journey of learning and networking.
        </p>
        <Button className="bg-[#221B56] text-white px-6 py-6 rounded-md hover:bg-[#2e246e] transition w-[200px]">
          Join Nafier Events!
        </Button>
        </div>
      {/*  right side */}
      <div className="relative md:w-[40%] h-screen z-10 flex items-center justify-center ">
        <img src="/activity-hero-img.png" alt="image of a boy with phone " className="w-[80%] absolute bottom-0" />
        
            {/* cards */}
           
            {cards.map((card, index) => (
        <div key={index} className={`absolute ${card.position} p-3 bg-white/50 text-black rounded-lg shadow-md  min-w-[250px] duration-300 flex items-center gap-3 backdrop-blur-md`}>
          <card.icon className={`w-6 h-6 ${card.color}`} />
          <div>
            <h2 className="font-semibold text-sm">{card.title}</h2>
            <p className="text-xs">{card.description}</p>
          </div>
        </div>
      ))}


      </div>

      
    </div>
  );
}