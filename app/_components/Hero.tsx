// components/Hero.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center  bg-[#221B56] h-screen text-white md:flex-row md:justify-between p-8">
      <div className="w-[150px] h-[150px] border-[25px] border-primary  absolute -bottom-30 left-50 rotate-[60deg]"></div>
      <div className="w-[200px] h-[200px] border-[25px] border-orange-400 rounded-full absolute -bottom-20 left-10"></div>

      <div className="max-w-3xl flex flex-col gap-2">
      <h1 className="text-5xl font-bold">Build a Strong Professional Future, Together!</h1>
      <p className="mt-4 text-lg">Helping Sudanese professionals find jobs, develop skills, and connect</p>
      <Button className="mt-6 px-6 py-6 rounded-md text-lg w-[200px]">Start Your Journey</Button>
      </div>
      <div className="">
      <div className="flex">
        <div>
          <Image src='/hero/hero-img-2.png' alt="" width={150} height={150} className="animate-bounce" />
        </div>
        <div>
          <Image src='/hero/hero-img-3.png' alt="" width={150} height={150} />
        </div>
        <div>
          <Image src='/hero/hero-img-4.png' alt="" width={150} height={150} />
        </div>
      </div>
      <div className="flex">
        <div>
          <Image src='/hero/hero-img-5.png' alt="" width={150} height={150} />
        </div>
        <div>
          <Image src='/hero/hero-img-8.png' alt="" width={150} height={150} />
        </div>
        <div> 
        <Image src='/hero/hero-img-7.png' alt="" width={150} height={150} className="animate-slow-spin" /> 
      </div>
      </div>
      <div className="flex">
        <div>
          <Image src='/hero/hero-img-6.png' alt="" width={150} height={150} />
        </div>
        <div>
          <Image src='/hero/hero-img-9.png' alt="" width={150} height={150}  />
        </div>
        <div>
          <Image src='/hero/hero-img-10.png' alt="" width={150} height={150} />
        </div>
      </div>
      </div>
   </section>
  );
};

export default Hero;