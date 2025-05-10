import { Badge } from "@/components/ui/badge";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RectanglesGroup2 } from "./_common/rectangles-group2";
import { useState } from "react";

export default function DesiredJobsSection() {
  const [jobTitles, setJobTitles] = useState<string[]>([
    "UI/UX Designer",
    "UI/UX Designer",
    "UI/UX Designer",
    "UI/UX Designer",
  ]);

  const [locations, setLocations] = useState<string[]>([
    "Saudi Arabia",
    "Remote",
  ]);

  const [industries, setIndustries] = useState<string[]>([
    "Software Development",
    "IT",
  ]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6" id="desired-section">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Desired Jobs</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Job Titles</h3>
          <RectanglesGroup2 value={jobTitles} onChange={setJobTitles} />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Geographic Location</h3>
          <RectanglesGroup2 value={locations} onChange={setLocations} />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Target Industry</h3>
          <RectanglesGroup2 value={industries} onChange={setIndustries} />
        </div>
      </div>
    </div>
  );
}
