import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export default function ProfileHeader() {
  return (
    <div className="p-6 relative">
      <div className="flex items-center gap-6">
        {/* Profile Image - Left side */}
        <div className="relative">
          <Image
            src="/professional-headshot.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm h-8 w-8"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>

        {/* User Info - Right side */}
        <div className="flex-1">
          <h2 className="text-xl font-bold">Ahmed Mohammed</h2>
          <p className="text-gray-600">UI/UX Designer</p>

          {/* Status Indicators */}
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Available for work</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm">Available for freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">Available for mentorship</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Button - Top right */}
      <Button variant="outline" size="sm" className="absolute top-4 right-4">
        <Pencil className="h-4 w-4 mr-2" /> Edit
      </Button>
    </div>
  )
}
