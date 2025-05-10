// components/Features.tsx
import Image from "next/image";

const Features = () => {
  const features = [
    { title: "Job Opportunities", desc: "Find the right job that fits your expertise.and go beyond your limits.",img :"/card-1.jpg" },
    { title: "Skill Development", desc: "Courses and resources to enhance your career.and go beyond your limits.", img :"/card-2.jpg" },
    { title: "Networking", desc: "Connect with professionals and collaborate.and go beyond your limits.", img :"/card-3.jpg" },
    { title: "Mentorship", desc: "Get guidance from industry experts.and go beyond your limits.", img :"/card-4.png" },
  ];

  return (
    <section className="py-16 bg-white px-8 min-h-screen text-center">
      <h2 className="text-center text-3xl font-bold mb-6">Features</h2>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6">
            <Image src={feature.img} alt={feature.title} width={200} height={200} />
            <h3 className="text-xl font-semibold text-primary my-6">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;