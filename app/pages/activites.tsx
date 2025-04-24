"use client";
import ActivitesCard from "../components/activitescard";
import { FiSearch, FiFilter } from "react-icons/fi";
import hero from "../../public/Frame 128.png";

export default function ActivitesPage() {
  return (
    <div className="flex b-gray-50 flex-col items-center justify-center min-h-screen">
      <div className="w-full relative top-0">
        <img
          src={hero.src}
          alt="Mentorship Hero"
          className="w-screen h-full object-cover rounded-md"
        />
        <div className=" bg-white  mx-auto rounded-md p-8 shadow-md z-10 relative">
          <div className="p-4">
            <div dir="rtl" className="flex flex-col gap-2 mb-4">
            
              <h2 className="text-2xl font-bold text-primary mb-4 mt-6">احدث الانشطة </h2>
              <div className="flex justify-between items-center w-full">
                {/* <button className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
                  <FiFilter />
                  Filter
                </button> */}
             
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
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <ActivitesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
