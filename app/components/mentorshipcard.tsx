"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trpc } from "../../client/trpc";
import { useSession } from 'next-auth/react';
type Mentorship = {
  id: number;
  name: string;
  mentor_id: number;
  department_id: number;
  date: string;
  days: string;
  available_times: string;
};

export default function MentorshipCard() {
  const router = useRouter();
const {data : user } = useSession()
  const { data: mentorships, isLoading, error } = trpc.mentorship.getMentorships.useQuery();

  const handlePreview = (item: Mentorship) => {
    router.push(`/mentorship/${item.id}`);
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading mentorships...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Failed to load mentorships.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center p-4">
      {mentorships?.map((item:any) => (
        <Card
          key={item.id}
          className="w-full  p-4 flex flex-col justify-center bg-white transition-shadow duration-300 ease-in-out"
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
                .map(
                  ([period, times]) => `${period}: ${(times as string[]).join(" - ")}`
                )
                .join(" | ")}
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
        </Card>
      ))}

      {mentorships?.length === 0 && !isLoading && (
        <p className="text-center mt-4">No mentorships available.</p>
      )}
    </div>
  );
}
