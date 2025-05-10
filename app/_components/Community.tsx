import { Button } from "@/components/ui/button";
import Image from "next/image";
const Community = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center h-screen text-white bg-pepole">
            <div className="w-[200px] h-[200px] border-[25px] border-orange-400 rounded-full absolute -bottom-20 left-10 z-10"></div>
            <div className="w-[150px] h-[150px] border-[25px] border-primary  absolute -bottom-30 left-50 rotate-[60deg]"></div>

            <div className="absolute top-17 right-10 z-10">
          <Image src='/hero/hero-img-9.png' alt="" width={150} height={150} className="animate-slow-spin"  />
        </div>
      <div className="max-w-3xl flex flex-col gap-2 items-center justify-center text-center border bg-white/10 rounded-lg p-10 py-14 backdrop-blur-md">
      <h1 className="text-5xl font-bold">Build a Strong Professional Future, Together!</h1>
      <p className="mt-4 text-lg">Helping Sudanese professionals find jobs, develop skills, and connect</p>
      <Button className="mt-6 px-6 py-6 rounded-md text-lg">Start Your Journey</Button>
      </div>
   </section>
  );
};

export default Community;