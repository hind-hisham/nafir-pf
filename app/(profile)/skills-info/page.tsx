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

export default function SkillsInfo () {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillName, setSkillName] = useState("");

  const handleAddSkill = () => {
    if (skillName && !skills.includes(skillName)) {
      setSkills([...skills, skillName]);
      setSkillName("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/upload-cv"
    >
    <form className="flex flex-col gap-1 md:gap-40">
        <div>
    <Label className="block">Skills</Label>
      <div className="flex gap-1 items-center">
        <Input
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="mt-1 w-full flex-1"
          placeholder="e.g : Figma"
        />
        <Button type="button" onClick={handleAddSkill}>
         + Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <span key={skill} className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded">
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(skill)}
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
