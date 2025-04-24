"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import MenBookingModal from "@/app/components/MenBookingModal";
type Mentorship = {
  id: number;
  name: string;
  mentor_id: number;
  department_id: number;
  date: string;
  days: string;
  available_times: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  certificates: string;
};

export default function MentorSession() {
  const { id } = useParams();
  const [session, setSession] = useState<Mentorship | null>(null);
  const [mentor, setMentor] = useState<User | null>(null);
const [certificates, setCertificates] = useState<any[]>([]);
const [available_times , setAvailable_times] = useState<any[]>([]);
const [activeTab , setActiveTab] = useState('about')
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  const handleCloseModal:any = () => {
    setIsModalOpen(false);
  };

useEffect(() => {
    if (!id) return;

    const fetchSessionAndMentor = async () => {
      try {
        const sessionRes = await axios.get<{ data: Mentorship }>(
          `http://localhost:8000/api/mentorship/${id}`
        );
        const sessionData = sessionRes.data.data;
        setSession(sessionData);
console.log(sessionData.available_times)
        const mentorRes = await axios.get<{ data: User }>(
          `http://localhost:8000/api/user/${sessionData.mentor_id}`
        );
        setMentor(mentorRes.data.data);
        console.log(JSON.parse(mentorRes.data.data.certificates));
        setCertificates(JSON.parse(mentorRes.data.data.certificates));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchSessionAndMentor();
  }, [id]);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen   py-8">

    <div
      dir="rtl"
      className="grid grid-cols-6 max-w-7xl items-center  mx-auto gap-4  w-full mt-4"
    >
      <div className="col-span-4 rounded-xl shadow-md bg-white  h-[852px] p-6">

        <div className="flex justify-between h-[80px] p-4 items-center ">
          
<span className="flex items-center gap-2 mb-2 p-4 ">
<Image
            src="https://lh3.googleusercontent.com/a/ACg8ocLSU8odejNo0uYpGwHMC8M6047moO1TcWERzyah3f5f4f7hMOCb=s96-c"
            alt="Test image"
            width={60}
            height={60}
            className="rounded-full"
            unoptimized
          /> 
          <span className="flex flex-col text-sm font-medium ">
          <h2 className="text-lg font-bold mb-2">{mentor?.name}</h2>
<h2 className="text-sm text-muted-foreground mb-4">
  محترف برمجة    
          </h2> 
          </span>
</span>


<span>

<span>
  < FiHeart className="text-gray-800" size={24} />
</span>
</span>

        </div>
       

<div className=" ">
<div className=" flex flex-col">
      <div className="h-[67px]  flex justify-start p-4 mt-4 items-center gap-4 text-hray-400 font-semibold">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-4 py-2 rounded ${
            activeTab === "about" ? "bg-white text-primary font-bold" : "text-gray-400"
          }`}
        >
          عن المرشد
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-4 py-2 rounded ${
            activeTab === "experience" ? "bg-white text-primary bold" : "text-gray-400"
          }`}
        >
          الخبرات
        </button>
      </div>

      <div className="flex-1 h-[160] justify-center overflow-y-auto p-4 bg-white text-right text-lg">
        {activeTab === "about" ? (
          <div className="p-4  h-full">
  <p className="mb-6 leading-loose text-right">
    مرشد خبير في التسويق🔥 هو محترف يتمتع بخبرة واسعة في استراتيجيات التسويق وتطوير العلامات التجارية. يقدم هذا المرشد نصائح قيمة حول كيفية الوصول إلى الجمهور المستهدف، وتحليل السوق، واستخدام الأدوات الرقمية لتعزيز الوجود الرقمي. بفضل معرفته العميقة، يساعد الشركات على تحسين أدائها وزيادة مبيعاتها من خلال استراتيجيات مبتكرة وفعالة.
  </p>

  <div className="mt-8">
    <h2 className="text-lg font-bold mb-6 text-right">الشهادات</h2>

    <div className="relative border-r-2 border-gray-200 pr-6">
      {certificates.length > 0 ? (
        certificates.map((certificate, index) => (
          <div key={index} className="relative mb-8 pl-6 text-right">
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>

            <h3 className="text-lg font-semibold">{certificate.name}</h3>
            <p className="text-sm text-muted-foreground">{certificate.issue_date}</p>
            <p className="text-sm text-muted-foreground">{certificate.issued_by}</p>
          </div>
        ))
      ) : (
        <p className="text-right text-sm text-muted-foreground">...جارٍ تحميل تفاصيل الشهادات</p>
      )}
    </div>
  </div>
</div>

        ) : (
          <p>
            لدى المرشد خبرة في الطهي، وصناعة القوالب، والتعليم، والتوجيه المهني. عمل في عدة دول واكتسب مهارات متعددة.
          </p>
        )}
      </div>
    </div>
  </div>        


      </div>

      <div className="col-span-2 gap-4 flex flex-col h-full p-4">
    
      <div className="bg-white p-6 rounded-xl shadow-md w-[411px] h-[427px] flex flex-col items-center justify-between">
  <div className="text-center w-full">
    <h2 className="text-lg font-bold mb-1">حجز جلسة مع {mentor?.name}</h2>
    <p className="text-sm text-muted-foreground">الجلسات بتوقت السودان GMT+2</p>
  </div>

  <div dir="rtl" className="flex flex-col items-start w-full gap-2">
    <p className="text-base">زمن الجلسة: 30 دقيقة</p>
    <p className="text-base">+10 جلسات</p>

    <div className="bg-gray-50 rounded p-3 w-full">
      <p className="text-base font-medium">الموعد المتاح القادم</p>
      <p className="text-base">5 مايو، الثلاثاء - 7:00 مساء</p>
    </div>
  </div>




  <div className="w-full">
    {/* <button onClick={handleOpenModal} className="bg-primary text-white px-4 py-2 rounded w-full transition duration-200">
      احجز جلستك
    </button> */}


  <MenBookingModal
    mentorshipId={session?.id ?? 0}
    mentorId={mentor?.id ?? 0}
    menteeId={123} 
    // onClose={handleCloseModal} 
     mentor={mentor} 
  />

  </div>
</div>


<div className="bg-white p-6 rounded-xl shadow-md w-[411px] h-[427px] flex flex-col items-center justify-between">
<div className="w-full">
    <h2 className="text-xl font-bold mb-1">جلسات الإرشاد</h2>
    <p className="text-lg text-muted-foreground mb-4">
      الاستفادة القصوى من جلسات الإرشاد
    </p>

    <ul className="list-disc pr-5 space-y-2 text-sm text-gray-700">
      <li>حدد هدفك من الجلسة</li>
      <li>جهز أسئلتك مسبقاً</li>
      <li>كن صريحاً وواضحاً مع المرشد</li>
      <li>دوّن الملاحظات</li>
      <li>تابع ما تم الاتفاق عليه بعد الجلسة</li>
    </ul>
  </div>
</div>

      </div>
    </div>
      </div>
  );
}
