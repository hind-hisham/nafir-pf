import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    { question: "How can I find job opportunities?", answer: "Sign up and browse our listings to find jobs that match your skills." },
    { question: "Is there a free plan?", answer: "Yes! Our free plan provides access to networking and basic job listings." },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold text-blue-600">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-6">
        {faqs.map((faq, idx) => (
          <Card key={idx} className="p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQ;