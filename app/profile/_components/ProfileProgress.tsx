import { Progress } from "@/components/ui/progress"

export default function ProfileProgress() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Profile Completion</span>
        <span className="text-sm font-medium">60%</span>
      </div>
      <Progress value={60} className="h-2 mb-6" />

      <div className="space-y-4">
        <h4 className="font-medium">2 Pending Responses</h4>
        <p className="text-sm text-gray-500">
          Complete your profile to increase your chances of getting hired (50% more likely).
        </p>
      </div>

      <div className="mt-6">
        <h4 className="font-medium mb-2">Skills</h4>
        <p className="text-sm text-gray-500">Add skills to your profile to increase your visibility to employers.</p>
      </div>
    </div>
  )
}
