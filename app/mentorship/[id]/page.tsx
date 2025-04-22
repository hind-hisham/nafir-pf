"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
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
  // Add any other fields you need from the user response
};

export default function MentorSession() {
  const { id } = useParams();
  const [session, setSession] = useState<Mentorship | null>(null);
  const [mentor, setMentor] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchSessionAndMentor = async () => {
      try {
        const sessionRes = await axios.get<{ data: Mentorship }>(
          `http://localhost:8000/api/mentorship/${id}`
        );
        const sessionData = sessionRes.data.data;
        setSession(sessionData);

        const mentorRes = await axios.get<{ data: User }>(
          `http://localhost:8000/api/user/${sessionData.mentor_id}`
        );
        setMentor(mentorRes.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchSessionAndMentor();
  }, [id]);

  return (
    <div
      dir="rtl"
      className="grid grid-cols-6 items-center justify-center px-12 gap-4 bg-gray-50 w-full mt-4"
    >
      <div className="col-span-4 bg-white h-[852px] p-4">

        <div className="flex justify-between h-[80px] p-4 items-center ">
<span className="flex items-center gap-2 mb-2 p-4">
<Image
            src="https://lh3.googleusercontent.com/a/ACg8ocLSU8odejNo0uYpGwHMC8M6047moO1TcWERzyah3f5f4f7hMOCb=s96-c"
            alt="Test image"
            width={80}
            height={80}
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
        {session ? (
          <pre className="mt-4 bg-white p-4 rounded">
            {JSON.stringify(session, null, 2)}
          </pre>
        ) : (
          <p>...جارٍ تحميل تفاصيل الجلسة</p>
        )}
      </div>

      <div className="col-span-2 gap-4 flex flex-col h-full p-4">
        <div className="bg-white p-4 rounded shadow-md w-[411px] h-[427px] flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-2">   

          {mentor ? `مرشد: ${mentor.name}` : "حجز جلسة مع   "} 

          </h2>
          <p className="text-sm text-muted-foreground mb-4">
          الجلسات بتوقت السودان GMT+2
                      </p>



          {/* {mentor ? (
            <pre>{JSON.stringify(mentor, null, 2)}</pre>
          ) : (
            <p>...جارٍ تحميل بيانات المرشد</p>
          )} */}
        </div>

        <div className="bg-white p-4 rounded shadow-md w-[411px] h-[427px] flex flex-col items-center justify-center">
          <p>خطوات الحجز تظهر هنا</p>
        </div>
      </div>
    </div>
  );
}
