import FormLayout from "@/app/components/layouts/FormLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const listItems = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem, ipsum dolor sit ametr adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur.",
  "Lorem, ipsum dolor sit amet adipisicing elit.",
];

export default function UploadCV() {
  return (
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={2} 
      progressTotal={5} 
      linkUrl="/next-step"
    >
        <form>
        <div className="border rounded-2xl p-8">
          <Label className="w-full h-full flex flex-col items-center justify-center">
            <Image
              src="/icons/upload.svg"
              alt="upload Icon"
              width={50}
              height={50}
            />
            <p className="font-normal text-2xl mt-4 mb-2">Upload your CV</p>
            <p className="text-gray-500">
              The CV must be in PDF or Word format
            </p>
            <Input type="file" className="hidden" />
          </Label>
        </div>
        <Button size={"lg"} className="mt-24 w-full">
          Continue
        </Button>
      </form>

    </FormLayout>
  );
}
