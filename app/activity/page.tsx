"use client";
import { trpc } from "@/client/trpc";
//import LoadingView from "@/components/global/Loading";
//import ErrorView from "@/components/global/Error";
import { type Activity } from "@/server/types";
import ActivityCard from "./_components/ActivityCard";
import ActivityHero from "./_components/ActivityHero";

export const data =[
  {
    id: 1,
  name: 1,
  type: "string",
  department_id: 'department_id',
  time: "20:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  },
  {
    id: 2,
  name: 1,
  type: "string",
  department_id: 'department_id',
  time: "20:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  },
  {
    id: 155,
  name: 1777,
  type: "string",
  department_id: 'department_id',
  time: "20:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  },
  {
    id: 1888,
  name: 188,
  type: "string",
  department_id: 'department_id',
  time: "20:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  },
  {
    id: 1999,
  name: 111,
  type: "string",
  department_id: 'department_id',
  time: "20:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  },
  {
    id: 18765,
  name: 1761,
  type: "string",
  department_id: 'department_id',
  time: "7:00 pm",
  date: "2023-01-01",
  link: "https://zoom.us",
  description:"This is a description",
  values: ["value1", "value2", "value3"],
  }
]

export default function ActivitiesPage() {
  //const { data, isLoading, error } = trpc.activity.getAll.useQuery();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ActivityHero />
      {/* { isLoading && <LoadingView />}
      { error && <ErrorView />} */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {data.map((activity: Activity) => (
          <ActivityCard key={activity.id} {...{ activity }} />
        ))}
      </div>
    </div>
  );
}
