import { FileText, Download, Trash2, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CVSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6" id="cv">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">CV/Resume</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add
          </Button>
          <Button variant="outline" size="sm">
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 border rounded-lg">
          <FileText className="h-10 w-10 text-primary" />
          <div className="flex-1">
            <h3 className="font-medium">Ahmed Mohammed IT Engineer</h3>
            <p className="text-sm text-gray-500">Uploaded on: 12/12/2023</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
            <Button variant="ghost" size="sm" className="text-red-500">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button className="w-full" variant="default">
          Update CV to improve your chances
        </Button>
      </div>
    </div>
  );
}
