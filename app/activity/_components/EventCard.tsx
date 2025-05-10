import { Activity } from "@/server/types";
import Image from "next/image";

export default function EventCard({ event }: { event: Activity }) {
    return (
        <div key={event.id} className="w-full max-w-sm h-full flex gap-4">
            <Image
        src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
        alt="Test image"
        width={302}
        height={226}
        className="rounded-md h-full w-[40%] object-cover"
        unoptimized
      />
      <div className="flex flex-col justify-between">
        <h2 >{event.type}</h2>
        <p className="text-xs bg-gray-100 p-2 rounded-md flex items-center gap-2">
        <Image src="/icons/calendar.png" alt="calendar" width={20} height={20}/> {event.time} - {event.date}
        </p>
      </div>
        </div>
    )
}