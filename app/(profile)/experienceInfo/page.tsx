"use client";
import React, { useState } from "react";
import FormLayout from "@/app/components/layouts/FormLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"



const listItems = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem, ipsum dolor sit ametr adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur.",
  "Lorem, ipsum dolor sit amet adipisicing elit.",
];

interface Experience {
  jobTitle: string;
  companyName: string;
  startDate: Date | null;
  endDate: Date | null;
  jobDescription: string;
}
export default function ExperienceInfo() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [newExperience, setNewExperience] = useState<Experience>({
      jobTitle: '',
      companyName: '',
      startDate:null,
      endDate: null,
      jobDescription: '',
    });
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewExperience({ ...newExperience, [name]: new Date(value) });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewExperience({ ...newExperience, [name]: value });
    };
  
    const handleAddExperience = () => {
      if (!newExperience.jobTitle || !newExperience.companyName || !newExperience.startDate) {
        toast.error("يرجى ملء جميع الحقول المطلوبة");
        return;
      }
    
      if (newExperience.endDate && newExperience.startDate && newExperience.endDate < newExperience.startDate) {
        toast.error("تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء!");
        return;
      }
    
      setExperiences([...experiences, newExperience]);
      setNewExperience({ jobTitle: '', companyName: '', startDate: null, endDate: null, jobDescription: '' });
    };
  
    const handleDeleteExperience = (index: number) => {
      const updatedExperiences = [...experiences];
      updatedExperiences.splice(index, 1);
      setExperiences(updatedExperiences);
    };
  
    return (  
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/"
    >
      <div className="w-full">
      <form className="flex flex-col gap-5 w-full">
      <div className="w-full grid items-center gap-1.5">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" id="jobTitle" placeholder="Job Title"  value={newExperience.jobTitle}
            onChange={handleChange} />
        </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="companyName">Company Name</Label>
        <Input type="text" id="companyName" placeholder="Company Name" value={newExperience.companyName}
            onChange={handleChange} />
      </div>
      <div className="w-full flex items-center gap-2">
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate"
         value={newExperience.startDate ? newExperience.startDate.toISOString().split("T")[0] : ""}
            onChange={handleDateChange} />
      </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate"
         value={newExperience.endDate ? newExperience.endDate.toISOString().split("T")[0] : ""} 
         onChange={handleDateChange} />
      </div>
</div>

      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="jobDescription">Job Description</Label>
        <Textarea id="jobDescription" value={newExperience.jobDescription} onChange={handleChange}/>

        </div>
        <Button type="button" variant={"outline"} onClick={handleAddExperience}>
          + Add
        </Button>
        <Button size={"lg"} className="mt-5 w-full">
          Continue
        </Button>
      </form>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <h2>{experience.jobTitle}</h2>
            <p>{experience.companyName}</p>
            <p>{experience.jobDescription}</p>
            <button type="button" onClick={() => handleDeleteExperience(index)}>
              حذف
            </button>
          </li>
        ))}
      </ul>
      </div>
        
    </FormLayout>
  );
}
