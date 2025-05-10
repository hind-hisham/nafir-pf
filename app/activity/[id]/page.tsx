"use client";

//import ErrorView from "@/components/global/Error";
//import LoadingView from "@/components/global/Loading";
import { trpc } from "@/client/trpc";
import { useParams } from "next/navigation";
import {data} from "../page"
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import ActivityCard from "../_components/ActivityCard";
export default function Activity() {
  const { id } = useParams() as { id: string };
  // const {
  //   data: activity,
  //   isLoading,
  //   error,
  // } = trpc.activity.getOne.useQuery({ id: +id });

  // if (isLoading) {
  //   return <LoadingView />;
  // }

  // if (error) {
  //   return <ErrorView />;
  // }

  const activity = data.find((activity) => activity.id == +id);

  console.log(activity);
  return (
    <>
    <h1 className="text-3xl font-bold mb-6">Activites Section</h1>
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="flex-1 flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md ">
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-lg px-6 md:p-10">
          <Image src="/zoom-logo.svg" alt="zoom logo" width={100} height={100} />
          <p>{activity?.link}</p>
          <div className="flex gap-2">
          <Link href={activity?.link} className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center min-w-[120px]">Join</Link>
          <Link href={activity?.link} className="bg-gray-300 px-4 py-2 rounded-md flex items-center justify-center min-w-[120px]"> <LinkIcon /> Shara</Link>
          </div>
        </div>
      <h2 className="text-2xl font-semibold">{activity?.type}</h2>
      <p>{activity?.description}</p>

      <h3 className="text-lg font-semibold">What you will learn:</h3>
      <ul className="list-disc ps-6">
        {activity?.values.map((learning, index) => (
          <li  key={index}>{learning}</li>
        ))}
      </ul>
      </div>
     
     <ActivityCard key={activity?.id} {...{ activity }} />
    </div>
    </>
  );
}
