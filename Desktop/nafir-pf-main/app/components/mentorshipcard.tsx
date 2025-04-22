"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import axios from "axios";
import useAuthContext from "../hooks/authprovider";
import { useRouter } from "next/navigation";
type Mentorship = {
  id: number;
  name: string;
  mentor_id: number;
  department_id: number;
  date: string;
  days: string; 
  available_times: string; 
};

export default function MentorshipCard( ) {
  const { user } = useAuthContext();
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
    const router = useRouter();
  const getMentorship = () => {
    axios
      .get<{ data: Mentorship[] }>("http://localhost:8000/api/mentorships")
      .then((res) => {
        setMentorships(res.data.data);
        console.log("here is mentorships",res.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
  
      getMentorship();
    
  }
  , []);


  const handelPreview = (item: Mentorship) => {
    console.log("item", item);
    router.push(`/mentorship/${item.id}`);
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-6 items-center justify-center p-4">
      {mentorships && mentorships.map((item) => (
        <Card
          key={item.id}
          className="w-[374px] h-[506] p-4 flex flex-col justify-center bg-white   transition-shadow duration-300 ease-in-out"
        >

            <Image
                        src="https://lh3.googleusercontent.com/a/ACg8ocLSU8odejNo0uYpGwHMC8M6047moO1TcWERzyah3f5f4f7hMOCb=s96-c"
                        alt="Test image"
                        width={370}
                        height={300}
                        className="rounded-md w-full"
                        unoptimized
                      />
          <CardHeader>
            <h2 className="text-xl my-2 font-bold">{item.name}</h2>
            <p className="text-sm text-muted-foreground">
              Days: {JSON.parse(item.days).join(", ")}
            </p>
            <p className="text-sm text-muted-foreground">
              Available:{" "}
              {Object.entries(JSON.parse(item.available_times))
                .map(([period, times]) => `${period}: ${(times as string[]).join(" - ")}`)
                .join(" | ")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button onClick={() => handelPreview(item)}  variant="outline" className="">
                View Profile
              </Button>
              <Button  variant="outline" className=" bg-primary text-white">
                Book Session
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {mentorships.length === 0 && (
        <Button onClick={getMentorship} variant="outline" className="mt-4">
          Load Mentorships
        </Button>
      )}
    </div>
  );
}
