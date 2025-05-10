// pages/index.tsx
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Testimonials from "./_components/Testimonials";
import MentorSection from "./_components/MentorSection";
import ActivitySection from "./_components/ActivitySection";
import Community from "./_components/Community";
import Contact from "./_components/Contact";
import FAQ from "./_components/FAQ";
import HowItWorks from "./_components/HowItWorks";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Testimonials />
      <MentorSection/>
      <Community/>
      <ActivitySection/>
      {/* <HowItWorks/> */}
      {/* <FAQ/> */}
      <Contact/>
    </div>
  );
};

export default Home;