// components/TemTwo.tsx
import React from "react";

const TemTwo= ({ data }: { data: any })  => {
  return (
    <div className="w-full min-w-[600px] min-h-[800px] overflow-x-auto rounded bg-gray-50 md:scale-50 ">
      <div className=" mx-auto bg-white text-black font-sans text-[14px] flex shadow-lg">
        {/* Left Sidebar */}
        <div className="w-[30%] bg-gray-100 p-6 space-y-6">
          {/* Education */}
          <div>
            <h2 className="font-bold text-lg mb-2">EDUCATION</h2>
            <div className="text-sm mb-3">
              <p className="font-semibold">2020 – 2024</p>
              <p>Bachelor of Science</p>
              <p>City, State</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold">2016 – 2020</p>
              <p>High School Diploma</p>
              <p>City, State</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-bold text-lg mb-2">SKILLS</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python</li>
              <li>Java</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Team Collaboration</li>
              <li>Public Speaking</li>
            </ul>
          </div>

          {/* Awards */}
          <div>
            <h2 className="font-bold text-lg mb-2">AWARDS</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Dean’s List (2022, 2023)</li>
              <li>Hackathon Finalist – UT Austin</li>
              <li>Best Undergraduate Research Poster</li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[70%] p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">Jack William</h1>
              <p className="text-sm text-gray-600">University Academic</p>
            </div>
            <div className="text-sm text-right space-y-1">
              <p>📞 (123)-456-7890</p>
              <p>✉️ jack@email.com</p>
              <p>🌐 jacksite.com</p>
              <p>📍 Austin, TX</p>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
              CAREER OBJECTIVE
            </h2>
            <p>
              Detail-oriented, organized as a Bachelor’s Computer Science student
              that is excited to apply academic knowledge in real-world settings.
              Passionate about contributing to team success through hard work,
              attention to detail, and excellent organizational skills. Eager to learn
              and grow in a professional tech environment.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h2>
            <div className="mb-4">
              <p className="font-bold">Research Assistant</p>
              <p className="italic text-sm text-gray-600">University of Texas | Summer 2023</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Worked on NLP research and data collection.</li>
                <li>Used Python, HuggingFace, and TensorFlow.</li>
              </ul>
            </div>
          </div>

          {/* Lab Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">LAB EXPERIENCE</h2>
            <div className="mb-4">
              <p className="font-bold">AI Systems Lab</p>
              <p className="italic text-sm text-gray-600">Fall 2022 – Spring 2023</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Tested and evaluated neural network models.</li>
                <li>Generated visualizations and technical reports.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">PROJECTS</h2>
            <div className="mb-2">
              <p className="font-bold">Chatbot App</p>
              <p className="text-sm">
                Developed a chatbot app using React, Node.js, and OpenAI API.
              </p>
            </div>
            <div className="mb-2">
              <p className="font-bold">Smart Attendance System</p>
              <p className="text-sm">
                Built using face recognition; implemented with Python and OpenCV.
              </p>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">PUBLICATIONS</h2>
            <ul className="list-disc list-inside text-sm">
              <li>
                William, J. (2023). *BERT vs GPT for Academic Chatbots*. UT CS Journal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemTwo;
