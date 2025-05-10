// components/TemOne.tsx
import React from "react";

const TemOne = ({ data }: { data: any }) => {
  return (
    <div className="w-full min-w-[600px] min-h-[800px] overflow-x-auto md:scale-50 ">
      <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex font-sans text-[14px]">
        {/* Sidebar */}
        <div className="bg-blue-900 text-white w-[33%] p-6 flex flex-col">
          <div>
          <img
            src="/profile.jpg"
            alt="Richard Sanchez"
            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-white"
          />
          </div>
          
          <h2 className="text-md font-semibold mb-1">CONTACT</h2>
          <div className="text-xs mb-4 space-y-1">
            <p>{data?.personalInfo.phone}</p>
            <p>{data?.personalInfo.email}</p>
            <p>{data?.personalInfo.links.website}</p>
            <p>{data?.personalInfo.location}</p>
          </div>

          <h2 className="text-md font-semibold mb-1">EDUCATION</h2>
          {
            data?.educations?.map((edu: any, index: number) => (
              <div key={index} className="text-xs mb-4 space-y-1">
                <p className="font-bold">{edu.startDate} - {edu.endDate}</p>
                <div className="flex gap-2">
                <h3 className="font-semibold">{edu.certificate}</h3>
                <p>{edu.degree}</p>
                </div>
                <p>{edu.university}</p>
                <p>{edu.details}</p>
              </div>
            ))
          }

          <h2 className="text-md font-semibold mb-1">SKILLS</h2>
          <ul className="text-xs list-disc list-inside mb-4 space-y-1">
            {data?.skills?.map((skill: string, index: number) => <li key={index}>{skill}</li>)}
          </ul>

          <h2 className="text-md font-semibold mb-1">LANGUAGES</h2>
          <ul className="text-xs list-disc list-inside mb-4 space-y-1">
            {data?.language?.map((lang: string, index: number) => <li key={index}>{lang}</li>)}
          </ul>
        </div>

        {/* Main content */}
        <div className="w-[67%] p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            {data?.personalInfo.name}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{data?.personalInfo.specialization}</p>

          <h2 className="text-lg font-semibold text-blue-800 mb-2">PROFILE</h2>
          <p className="text-gray-700 text-sm mb-6">
            {data?.personalInfo.summery} </p>

          <h2 className="text-lg font-semibold text-blue-800 mb-2">WORK EXPERIENCE</h2>
            {
              data?.experiences?.map((work: any, index: number) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{work.companyName}</h3>
                  <p className="italic text-sm text-gray-600">{work.jobTitle} | {work.startDate} – {work.endDate}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {work.jobDescription.split("\n")
                                  ?.map((paragraph : string, index : number) => (
                                    <p key={index}>&#9679; {paragraph}</p>
                                  ))}
                  </ul>
                </div>
              ))
            }

          <h2 className="text-lg font-semibold text-blue-800 mb-2 mt-6">REFERENCE</h2>
          <div className="text-sm text-gray-700">
            <p><strong>Nicole Berry</strong> – Head of Marketing</p>
            <p>+123-456-9876 | nicole@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemOne;
