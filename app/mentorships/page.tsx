"use client";
import MentorshipCard from "@/app/components/mentorshipcard";
import { FiSearch, FiFilter } from "react-icons/fi";
import mentorPageHero from "../../public/mentor  hero (1).png";

export default function Mentorships() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full relative top-0">
        <img
          src={mentorPageHero.src}
          alt="Mentorship Hero"
          className="w-screen h-full object-cover rounded-md"
        />
        <div className="-mt-[90px] bg-white w-[1500px] mx-auto rounded-md p-8 shadow-md z-10 relative">
          <div className="p-4">
            <div dir="rtl" className="flex flex-col gap-2 mb-4">
              <div>
                <h1 className="text-2xl mb-4 font-bold text-primary">خدمات مرشد</h1>
                <div className="grid grid-cols-4 gap-4">
                
<div
  dir="rtl"
  className="flex flex-col items-start justify-start p-6 bg-gray-50  border-gray-200 rounded-xl  w-full max-w-sm"
>
  <span dir='rtl' className="flex items-center gap-2 mb-2">
    <span className="bg-gray-200 rounded-xl p-2">
      <FiFilter />
    </span>
    <h2 className="text-lg font-bold text-gray-900">تحديد المسار المهني</h2>
  </span>
  <p className="text-sm text-gray-600 leading-relaxed text-right">
    ابحث عن توجهات مهنية مختلفة وتعلم كيف تبدأ في مجال جديد يناسبك
  </p>
</div>
<div
  dir="rtl"
  className="flex flex-col items-start justify-start p-6 bg-gray-50  border-gray-200 rounded-xl  w-full max-w-sm"
>
  <span dir='rtl' className="flex items-center gap-2 mb-2">
    <span className="bg-gray-200 rounded-xl p-2">
      <FiFilter />
    </span>
    <h2 className="text-lg font-bold text-gray-900">تحديد المسار المهني</h2>
  </span>
  <p className="text-sm text-gray-600 leading-relaxed text-right">
    ابحث عن توجهات مهنية مختلفة وتعلم كيف تبدأ في مجال جديد يناسبك
  </p>
</div>
<div
  dir="rtl"
  className="flex flex-col items-start justify-start p-6 bg-gray-50  border-gray-200 rounded-xl  w-full max-w-sm"
>
  <span dir='rtl' className="flex items-center gap-2 mb-2">
    <span className="bg-gray-200 rounded-xl p-2">
      <FiFilter />
    </span>
    <h2 className="text-lg font-bold text-gray-900">تحديد المسار المهني</h2>
  </span>
  <p className="text-sm text-gray-600 leading-relaxed text-right">
    ابحث عن توجهات مهنية مختلفة وتعلم كيف تبدأ في مجال جديد يناسبك
  </p>
</div>
<div
  dir="rtl"
  className="flex flex-col items-start justify-start p-6 bg-gray-50  border-gray-200 rounded-xl  w-full max-w-sm"
>
  <span dir='rtl' className="flex items-center gap-2 mb-2">
    <span className="bg-gray-200 rounded-xl p-2">
      <FiFilter />
    </span>
    <h2 className="text-lg font-bold text-gray-900">تحديد المسار المهني</h2>
  </span>
  <p className="text-sm text-gray-600 leading-relaxed text-right">
    ابحث عن توجهات مهنية مختلفة وتعلم كيف تبدأ في مجال جديد يناسبك
  </p>
</div>

                </div>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 mt-6">المرشدين</h2>
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
            <MentorshipCard />
          </div>
        </div>
      </div>
    </div>
  );
}
