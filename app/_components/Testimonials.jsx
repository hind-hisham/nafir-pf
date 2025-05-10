// components/Testimonials.tsx
import { Card } from "@/components/ui/card";
import Slider from "./Slider";
import Image from "next/image";

const Testimonials = () => {
 

  return (
    <section className="py-20 h-screen relative">
      <div className="absolute top-10 right-10 z-10"> 
        <Image src='/hero/hero-img-7.png' alt="" width={150} height={150} className="animate-slow-spin" /> 
      </div>
      <div className="absolute -bottom-17 left-10 z-10">
          <Image src='/hero/hero-img-9.png' alt="" width={150} height={150}  />
        </div>
      <h2 className="text-center text-3xl font-bold">User Testimonials</h2>
      <div className=' h-full m-8 rounded-lg overflow-hidden shadow-md'>
        <Slider />
      </div>
    </section>
  );
};

export default Testimonials;