
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";
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
export default function MentorCard ( {item} : { item: Mentorship }) {

  const handlePreview = (item: Mentorship) => {
    window.location.href = `/mentorships/${item.id}`;
  };
    return(
        <div
          key={item.id}
          className="w-full  p-4 flex flex-col justify-center gap-4"
        >
        <div className="w-full relative">
        <Heart strokeWidth={0.8} className="absolute top-2 right-2 bg-white rounded-sm p-1 size-8"/>
          <Image
            src="https://lh3.googleusercontent.com/a/ACg8ocLSU8odejNo0uYpGwHMC8M6047moO1TcWERzyah3f5f4f7hMOCb=s96-c"
            alt="Test image"
            width={370}
            height={300}
            className="rounded-md w-full"
            unoptimized
          />
        </div>
          <CardHeader>
            <h2 className="text-xl my-2 font-bold">{item.name}</h2>
            <p className="text-sm text-muted-foreground">
              Days: {item.days}
            </p>
            <p className="text-sm text-muted-foreground">
              Available: {item.available_times}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button onClick={() => handlePreview(item)} variant="outline">
                View Profile
              </Button>
              <Button variant="outline" className="bg-primary text-white">
                Book Session
              </Button>
            </div>
          </CardContent>
        </div>
    )}