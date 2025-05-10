"use client";
import Link from "next/link";
import ActivityCard from "../activity/_components/ActivityCard"
const activities = [
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
export default function ActivitySection() {
  
      
    return (
        <div className="flex flex-col items-center justify-center w-full my-12 p-8">
        <div className="flex justify-between items-center w-full p-6">
        <div className="flex flex-col ">
            <h2 className="text-2xl font-bold mb-4 text-primary">Mentor Section</h2>
            <p className="text-lg mb-4 text-gray-500">Get a unique career guidance experience with the Nafeer Guidance team.</p>
        </div>
        <Link href="/activity" className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center min-w-[120px] mt-8" >Explore More</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {
            activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))
        }
        </div>
        </div>
    )
}