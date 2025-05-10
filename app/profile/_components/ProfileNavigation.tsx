import Link from "next/link";

export default function ProfileNavigation() {
  const navItems = [
    { id: "address", label: "Address" },
    { id: "professional", label: "Professional Summary" },
    { id: "contact", label: "Contact Information" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "desired-jobs", label: "Desired Jobs" },
    { id: "cv", label: "CV/Resume" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 overflow-x-auto">
      <div className="flex space-x-6 min-w-max">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="text-gray-700 hover:text-primary whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
