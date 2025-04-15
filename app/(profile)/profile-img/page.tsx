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

export default function ProfileImg() {
  return (
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={7} 
      linkUrl="/career"
    >
        <form className="flex flex-col gap-4">
        <div className="flex w-full max-w-sm items-center gap-6">
            <div className="size-44 rounded-full bg-gray-200">
                <Label htmlFor="profile-img" className="flex flex-col items-center justify-center p-5 h-full">
                    <Image src="/icons/camera.png" alt="Nafir Logo" width={30} height={30}></Image>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Upload Profile Image</span>
              <Input type="file" id="profile-img" className="hidden"/>
              </Label>
            </div>
            <div className="h-full flex flex-col justify-between gap-2">
                <p className="font-semibold">Mohmed Ahmed</p>
                <p className="text-gray-500">Software Engineer</p>
                <p className="text-gray-500">Sudan</p>
            </div>
        </div>
        <p className="text-gray-500 mt-6">Upload a clear, professional, high-quality image in JPEG or PNG format.</p>

        <Button size={"lg"} className="mt-24 w-full">
          Continue
        </Button>
      </form>

    </FormLayout>
  );
}
