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
      progressValue={5} 
      progressTotal={5} 
      linkUrl="/profile-img"
    >
        <form>
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Location</Label>
              
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Bio</Label>
              <textarea></textarea>
        </div>
        <Button size={"lg"} className="mt-24 w-full">
          Continue
        </Button>
      </form>

    </FormLayout>
  );
}
