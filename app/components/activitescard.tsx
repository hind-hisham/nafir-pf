"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trpc } from "../../client/trpc";
import { FiHeart } from "react-icons/fi";

type Activity = {
  id: number;
  name: number;
  type: string;
  department_id: string;
  time: string;
  date: string;
};

export default function ActivitesCard() {
  const router = useRouter();

  const { data: Activites, isLoading, error } = trpc.test.getActivites.useQuery();

  const handlePreview = (item: Activity) => {
    router.push(`/blogoverview/${item.id}`);
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading blogscards...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Failed to load blogscards.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Activites?.map((item: Activity) => (
        <Card
          key={item.id}
          className="w-full max-w-sm h-fit flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
            alt="Test image"
            width={302}
            height={226}
            className="rounded-t-md w-full h-[226px] object-cover"
            unoptimized
          />
          <CardHeader className="px-4 py-2">
            <h2 className="text-xl font-bold mb-1">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.time} - {item.date}</p>
          </CardHeader>
          <CardContent className="flex flex-col justify-end flex-grow px-4 py-2">
            <div className="flex items-center justify-between mt-auto">
              <FiHeart size={20} className="text-gray-500" />
              <Button onClick={() => handlePreview(item)}>Book a Session</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
