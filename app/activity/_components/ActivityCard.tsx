//import BLink from "@/components/global/BLink";
//import Likes from "@/app/_components/Likes";
import { trpc } from "@/client/trpc";
import { Activity } from "@/server/types";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";


const actAdmin=[
  {
    id:1,
    img:"/profile.jpg",
    name:"John Doe",

  },
  {
    id:2,
    img:"/profile.jpg",
    name:"mohamed",
  },
  {
    id:3,
    img:"/profile.jpg",
    name:"ahmed",
  }
]

export default function ActivityCard({ activity }: { activity: any }) {
  return (
    <div
      key={activity.id}
      onClick={() =>{
        window.location.href=`/activity/${activity.id}`
      }}
      className="w-full max-w-sm h-full flex flex-col bg-white shadow-md p-6 rounded-lg"
    >
      <Image
        src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
        alt="Test image"
        width={302}
        height={226}
        className="rounded-md w-full h-[226px] object-cover"
        unoptimized
      />

      <div className="w-full px-4 py-2">
        <h2 className="text-xl font-bold mb-1">{activity.type}</h2>

        <div className="w-full flex my-4">
        <div className="relative w-[40%] h-10">
      {actAdmin.map((user, index) => (
        <div
          key={user.id}
          className={`absolute size-10 rounded-full overflow-hidden border-2 border-white ${
            index === 0 ? `left-0 z-10` : `left-${index + 2} z-${index * 10}`
          }`}
        >
          <Image src={user.img} alt={user.name} width={64} height={64} className="object-cover" />
        </div>
      ))}
      </div>
      <div className="flex items-center w-full flex-wrap">
        {actAdmin.map((user, index) => (
           <span key={user.id} className="text-sm inline">{user.name} {index !== actAdmin.length - 1 &&  "," }</span>
        ))}
        </div>
      </div>

        <p className="text-sm bg-gray-100 p-2 rounded-md flex items-center gap-2">
        <Image src="/icons/calendar.png" alt="calendar" width={20} height={20}/> {activity.time} - {activity.date}
        </p>

      </div>
      <div className="flex flex-col justify-end flex-grow px-4 py-2">
        {/* <div className="flex items-center justify-between mt-auto">
          <Likes
            target={activity.id}
            update={trpc.activity.setIsLiked}
            isLiked={activity.extra.liked_by_user}
            likesCount={activity.extra.likes_count}
          />
          <BLink
            href={`/activities/${activity.id}`}
            linkProps={{
              scroll: false,
            }}
          >
            View
          </BLink>
        </div> */}
        <div className="flex items-center justify-between gap-4">
          <Button variant={"ghost"}><Heart className="size-6"/></Button>
          <Button className="flex-1" onClick={() =>{window.location.href=`/activity/${activity.id}`}}>View</Button>

        </div>
      </div>
    </div>
  );
}
