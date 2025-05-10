"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import {data} from "../page"
import ActivityCard from "../_components/ActivityCard";
import { Activity } from "@/server/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EventCard from "../_components/EventCard";

export default function EventsPage() {

    const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <>
    <h3 className="p-8 text-2xl font-semibold">Upcoming Events</h3>
<div className="flex justify-between gap-6 p-8"> 
 <div className="flex-1 bg-white p-6 rounded-lg shadow-md gap-6">
    <div className="flex items-center justify-between mb-6">
    <h4 className="text-lg font-semibold ">{date?.toDateString()}</h4>
    <Button variant="secondary" className="flex items-center gap-2">
        <Image src="/icons/heart.png" alt="save icon" width={20} height={20}/>
        <span>Saved Events</span> 
    </Button>
    </div>
 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
 
 {data.map((activity: Activity) => (
          <ActivityCard key={activity.id} {...{ activity }} />
        ))}
 </div>
      </div>


        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md ">
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md w-full p-4 border"
  />
      {/* Events Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <div className="grid gap-6 mt-4">
          {data.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}