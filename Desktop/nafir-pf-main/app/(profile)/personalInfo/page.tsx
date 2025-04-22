import FormLayout from "@/app/components/layouts/FormLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const listItems = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem, ipsum dolor sit ametr adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur.",
  "Lorem, ipsum dolor sit amet adipisicing elit.",
];

export default function PersonalInfo() {
  return (
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/profile-img"
    >
        <form className="flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" placeholder="Phone" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Bio</Label>
              <textarea className="border rounded-2xl p-4" rows={4} cols={50} placeholder="Enter your bio"></textarea>
        </div>
        <Button size={"lg"} className="mt-24 w-full">
          Continue
        </Button>
      </form>

    </FormLayout>
  );
}
