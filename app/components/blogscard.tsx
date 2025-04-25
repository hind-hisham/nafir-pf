"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trpc } from "../../client/trpc";
import { IoIosArrowRoundBack } from "react-icons/io";


type Blogs = {
  id: number;
  author_id: number;
  title: string;
  department_id: string;
};

export default function BlogsCard() {
  const router = useRouter();

  const { data: blogs, isLoading, error } = trpc.test.getBlogs.useQuery();

  const handlePreview = (item: Blogs ) => {
   router.push(`/blogoverview/${item.id}`);
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading blogscards...</p>;
  }
if(error){
    console.log(error)
}
  if (error) {
    return <p className="text-center text-red-500 mt-10">Failed to load blogscards.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center p-4">
      {blogs?.map((item:any) => (
        //   <div className="flex flex-col items-center jsustify-center mb-4">
          <Card
          key={item.id}
          className="w-full px-12  p-4 flex gap-4 flex-col justify-center bg-white transition-shadow duration-300 ease-in-out"
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

            <h2 className="text-xl my-2 font-bold">{item.title}</h2>

            <p>
                {item.content.length > 100
                    ? item.content.slice(0, 100) + "..."
                    : item.content}
            </p>
         </CardHeader>
          <CardContent>
            <div className="flex justify-end my-4 w-full">
     
            <button onClick={() => handlePreview(item)} 
            className="flex items-center ">
                <IoIosArrowRoundBack className="mr-2" size={20} /> 

            Read More
            </button>
            </div>
          </CardContent>
        </Card>
      ))}

      {blogs?.length === 0 && !isLoading && (
        <p className="text-center mt-4">No blogscards available.</p>
      )}
    </div>
  );
}
