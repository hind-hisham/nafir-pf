// components/TemThree.tsx
import React from "react";

const TemThree=({ data }: { data: any })   => {
  return (
    <div className="w-full min-w-[600px] min-h-[800px]  md:scale-50">
      <div className="relative   mx-auto flex bg-white text-gray-900 font-sans text-[14px] shadow-lg">
        {/* Profile Image */}
        <div className="absolute top-0 left-0 p-4 flex w-full gap-1 justify-center ms-6 items-center">
          <div className="w-full flex justify-center mb-4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40  object-cover"
            />

          </div>
          <div className="w-full">
            <h1 className="text-4xl font-bold">Olivia Smith</h1>
            <p >Software Engineer</p>
          </div>

          </div>
        {/* Left Column */}
        <div className="w-[35%] pt-[200px] bg-gray-900 text-white p-6 space-y-6">
         
          
          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold mb-2">CONTACT</h2>
            <ul className="space-y-1 text-sm">
              <li>📞 (123) 456-7890</li>
              <li>✉️ olivia@email.com</li>
              <li>🌐 www.oliviasite.com</li>
              <li>📍 Austin, TX</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
            <div className="text-sm">
              <p className="font-semibold">Harvard University</p>
              <p>B.A. Marketing Management</p>
              <p>2017 - 2021</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-bold mb-2">SKILLS</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Digital Marketing</li>
              <li>SEO/SEM</li>
              <li>Google Analytics</li>
              <li>Copywriting</li>
              <li>Social Media</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-lg font-bold mb-2">LANGUAGE</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[65%] p-8 pt-[200px]">
        

          {/* About Me */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
              ABOUT ME
            </h2>
            <p>
              Creative marketing professional with 5+ years of experience in brand
              management, digital campaigns, and customer engagement. Passionate about
              delivering measurable results and building long-lasting client relationships.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
              EXPERIENCE
            </h2>
            <div className="mb-4">
              <p className="font-bold">Senior Project Manager</p>
              <p className="italic text-sm text-gray-600">Creative Digital Co. | 2021 - Present</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Led a team of 10 to develop marketing strategies for top-tier clients.</li>
                <li>Increased ROI by 40% through optimized ad campaigns.</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold">Marketing Executive</p>
              <p className="italic text-sm text-gray-600">Agency Solutions | 2019 - 2021</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Executed multi-channel campaigns that boosted brand awareness.</li>
                <li>Collaborated with designers and sales teams on promotions.</li>
              </ul>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
              REFERENCES
            </h2>
            <div className="flex justify-between text-sm">
              <div>
                <p className="font-bold">Hayden Richardson</p>
                <p>CEO, Creative Digital Co.</p>
                <p>📞 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-bold">Sasha Dupont</p>
                <p>HR, Agency Solutions</p>
                <p>📞 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemThree;
