import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    { title: "Create a Profile", desc: "Sign up and build your professional identity." },
    { title: "Apply for Jobs", desc: "Browse listings and submit applications easily." },
    { title: "Connect with Experts", desc: "Join communities and interact with professionals." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-blue-600">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
        {steps.map((step, idx) => (
          <Card key={idx} className="p-6 shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;