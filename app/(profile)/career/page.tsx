import FormLayout from "@/app/components/layouts/FormLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const listItems = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem, ipsum dolor sit ametr adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur.",
  "Lorem, ipsum dolor sit amet adipisicing elit.",
];

export default function Career() {
  return (
    <FormLayout
      title="Tasks and responsibilities" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/experience-info"
    >
        <form className="flex flex-col gap-4">
        <div className="w-full gap-1.5">
              <Label htmlFor="phone">Tasks and responsibilities <span className="text-gray-500">(optional)</span></Label>
              <textarea className="border rounded-2xl p-4 w-full h-full mt-2" rows={6} placeholder="Enter your career tasks and responsibilities"></textarea>
        </div>
        <Button size={"lg"} className="mt-24 w-full">
          Continue
        </Button>
      </form>
    </FormLayout>
  );
}
