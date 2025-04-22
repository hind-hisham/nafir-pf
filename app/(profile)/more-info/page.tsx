"use client";

import { useState } from "react";
import FormLayout from "@/app/components/layouts/FormLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const listItems = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem, ipsum dolor sit ametr adipisicing elit.",
    "Lorem, ipsum dolor sit amet consectetur.",
    "Lorem, ipsum dolor sit amet adipisicing elit.",
  ];

export default function MoreInfo () {
  const [info, setInfo] = useState<string[]>([]);
  const [infoName, setInfoName] = useState("");

  const[hobbies, setHobbies] = useState<string[]>([]);
  const [hobbiesName, setHobbiesName] = useState("");

  const[business, setBusiness] = useState<string[]>([]);
  const [businessName, setBusinessName] = useState("");


  const handleAddInfo = () => {
    if (infoName && !info.includes(infoName)) {
      setInfo([...info, infoName]);
      setInfoName("");
    }
  };
  const handleRemoveInfo = (inf: string) => {
    setInfo(info.filter((s) => s !== inf));
  };

  const handleAddHobbies = () => {
    if (hobbiesName && !hobbies.includes(hobbiesName)) {
      setHobbies([...hobbies, hobbiesName]);
      setHobbiesName("");
    }
  };
  const handleRemoveHobbies = (inf: string) => {
    setHobbies(hobbies.filter((s) => s !== inf));
  };

  const handleAddBusiness = () => {
    if (businessName && !business.includes(businessName)) {
      setBusiness([...business, businessName]);
      setBusinessName("");
    }
  };
  const handleRemoveBusiness = (inf: string) => {
    setBusiness(business.filter((s) => s !== inf));
  };
  return (
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/upload-cv"
    >
    <form className="flex flex-col gap-2">
        <div className="mb-2">
    <Label className="block">Professional fields</Label>
      <div className="flex gap-1 items-center">
        <Input
          type="text"
          value={infoName}
          onChange={(e) => setInfoName(e.target.value)}
          className="mt-1 w-full flex-1"
          placeholder="e.g : Data analysis"
        />
        <Button type="button" onClick={handleAddInfo}>
         + Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {info.map((info) => (
          <span key={info} className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded">
            {info}
            <button
              type="button"
              onClick={() => handleRemoveInfo(info)}
              className="ml-2 text-red-500"
            >
              <X size={16} />
            </button>
          </span>
        ))}
      </div>
      </div>

      <div>
    <Label className="block">Hobbies</Label>
      <div className="flex gap-1 items-center">
        <Input
          type="text"
          value={hobbiesName}
          onChange={(e) => setHobbiesName(e.target.value)}
          className="mt-1 w-full flex-1"
          placeholder="e.g : Reading"
        />
        <Button type="button" onClick={handleAddHobbies}>
         + Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {hobbies.map((info) => (
          <span key={info} className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded">
            {info}
            <button
              type="button"
              onClick={() => handleRemoveHobbies(info)}
              className="ml-2 text-red-500"
            >
              <X size={16} />
            </button>
          </span>
        ))}
      </div>
      </div>

      <div>
    <Label className="block">Business development</Label>
      <div className="flex gap-1 items-center">
        <Input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="mt-1 w-full flex-1"
          placeholder="e.g : Developing personal identity"
        />
        <Button type="button" onClick={handleAddBusiness}>
         + Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {business.map((info) => (
          <span key={info} className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded">
            {info}
            <button
              type="button"
              onClick={() => handleRemoveBusiness(info)}
              className="ml-2 text-red-500"
            >
              <X size={16} />
            </button>
          </span>
        ))}
      </div>
      </div>


      <Button size={"lg"} className="mt-1 md:mt-5 w-full">
          Continue
        </Button>
    </form>
    </FormLayout>
  );
};
