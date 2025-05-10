"use client";
import { FiSearch, FiFilter } from "react-icons/fi";
import MentorHero from "./_components/MentorHero";
import MentorCard from "./_components/MentorCard";
import { identity } from "@trpc/server/unstable-core-do-not-import";
import { title } from "process";
import Image from "next/image";


type Mentorship = {
  id: number;
  name: string;
  mentor_id: number;
  department_id: number;
  date: string;
  days: string;
  available_times: string;
};

const filterOptions = ["All", "CV", "Book Club", "English Club","Tips","Carrer","Leadership"];

export const mentors: Mentorship[] = [
  {
    id: 1,
    name: "Mentorship 1",
    mentor_id: 1,
    department_id: 1,
    date: "2023-01-01",
    days: "Monday, Tuesday",
    available_times: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    name: "Mentorship 2",
    mentor_id: 2,
    department_id: 2,
    date: "2023-01-02",
    days: "Wednesday, Thursday",
    available_times: "1:00 PM - 3:00 PM",
  },
  {
    id: 3,
    name: "Mentorship 3",
    mentor_id: 3,
    department_id: 3,
    date: "2023-01-03",
    days: "Friday, Saturday",
    available_times: "2:00 PM - 4:00 PM",
  },
  {
    id: 4,
    name: "Mentorship 4",
    mentor_id: 4,
    department_id: 4,
    date: "2023-01-04",
    days: "Sunday, Monday",
    available_times: "3:00 PM - 5:00 PM",
  },
  {
    id: 5,
    name: "Mentorship 5",
    mentor_id: 5,
    department_id: 5,
    date: "2023-01-05",
    days: "Tuesday, Wednesday",
    available_times: "4:00 PM - 6:00 PM",
  },
  {
    id: 6,
    name: "Mentorship 6",
    mentor_id: 6,
    department_id: 6,
    date: "2023-01-06",
    days: "Thursday, Friday",
    available_times: "5:00 PM - 7:00 PM",
  },
  {
    id: 7,
    name: "Mentorship 7",
    mentor_id: 7,
    department_id: 7,
    date: "2023-01-07",
    days: "Saturday, Sunday",
    available_times: "6:00 PM - 8:00 PM",
  },
  {
    id: 8,
    name: "Mentorship 8",
    mentor_id: 8,
    department_id: 8,
    date: "2023-01-08",
    days: "Monday, Tuesday",
    available_times: "7:00 PM - 9:00 PM",
  }
];

const cards =[
  {
    title: "Advanced Skills",
    description: "Enhance your skills in a professional environment",
    icon: "/icons/icon-1.png",
  },
  {
    title: "Upcoming Events",
    description: "Reserve your seat now! and join a network of experts",
    icon: "/icons/icon-2.png",
  },
  {
    title: "Elite Community",
    description: "Join a network of experts,and take the first step towards success",
    icon: "/icons/icon-3.png",
  },
  {
    title: "Start Your Journey",
    description: "Take the first step towards success, and join a network of experts",
    icon: "/icons/icon-4.png",
  },
]

export default function Mentorships() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
        <MentorHero />
        <div className=" bg-white border rounded-md p-8 shadow-md z-10 -top-10 relative mx-8">
        <h1 className="text-xl mb-4 font-bold ">Mentorship Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            cards.map((card, index) => (
              <div key={index} className='p-6  bg-gray-100 rounded-lg  min-w-[250px] flex flex-col gap-3'>
                <div className="flex items-center gap-2">
                <Image src={card.icon} alt="icon" width={30} height={30} />
                <h2 className="font-semibold text-sm">{card.title}</h2>
                </div>
                  <p className="text-xs">{card.description}</p>
              </div>
            ))
          }
        </div>
            <div className="flex flex-col gap-2 mb-4">
              <h2 className="text-xl font-bold mb-4 mt-6">
                Mentors
                </h2>
              <div className="flex justify-between items-center w-full">
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Search mentors..."
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <FiSearch
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
                <button className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
                  <FiFilter />
                  Filter
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center w-full my-6">
            { filterOptions.map((option) => (
                  <button key={option} className=" bg-yellow-100 px-3 py-2 min-w-[100px] text-gray-800 rounded-full hover:bg-yellow-100 text-sm"
                  onClick={() => console.log(option)}
                  >
                    {option}
                  </button>
                ))
              }
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {mentors.map((mentor: Mentorship) => (
              <MentorCard key={mentor.id} item={mentor} />
            ))}
            </div>
        </div>
      </div>
  
  );
}
