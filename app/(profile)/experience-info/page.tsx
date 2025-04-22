"use client";
import React, { useState } from "react";
import FormLayout from "@/app/components/layouts/FormLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Pencil, Trash } from "lucide-react";



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
    const [editMode,setEditMode] = useState(false);
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewExperience({ ...newExperience, [name]: new Date(value) });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewExperience({ ...newExperience, [name]: value });
    };
  
    const handleAddExperience = () => {
      if (!newExperience.jobTitle || !newExperience.companyName) {
        toast("Please fill in all required fields.");
        return;
      }
  
      if (newExperience.startDate && newExperience.endDate && newExperience.startDate > newExperience.endDate) {
        toast("Start date cannot be after end date.");
        return;
      }
  
      if (newExperience.startDate && newExperience.endDate && newExperience.startDate > new Date()) {
        toast("Start date cannot be in the future.");
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
  
    const handleEditExperience = (index: number) => {
      setEditMode(true);
      const experienceToEdit = experiences[index];
      setNewExperience({ ...experienceToEdit });
    };
  
    return (  
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/education-info"
    >
      <div className="w-full">
      <form className="flex flex-col gap-5 w-full">
      <div className="w-full grid items-center gap-1.5">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" name="jobTitle" id="jobTitle" placeholder="Job Title"  value={newExperience.jobTitle}
            onChange={handleChange} />
        </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="companyName">Company Name</Label>
        <Input type="text" name="companyName" id="companyName" placeholder="Company Name" value={newExperience.companyName}
            onChange={handleChange} />
      </div>
      <div className="w-full flex items-center gap-2">
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate" name="startDate"
         value={newExperience.startDate ? newExperience.startDate.toISOString().split("T")[0] : ""}
            onChange={handleDateChange} />
      </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate" name="endDate"
         value={newExperience.endDate ? newExperience.endDate.toISOString().split("T")[0] : ""} 
         onChange={handleDateChange} />
      </div>
</div>

      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="jobDescription">Job Description</Label>
        <Textarea id="jobDescription" name="jobDescription" value={newExperience.jobDescription} onChange={handleChange}/>

        </div>
        <Button type="button" variant={"outline"} onClick={handleAddExperience}>
          + Add
        </Button>
        <Button size={"lg"} className="mt-5 w-full">
          Continue
        </Button>
      </form>
      <ul className="mt-5 flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <li key={index}>
            <div className="flex flex-col bg-gray-100 p-6 gap-4 rounded-md">
              <div className="flex gap-3 justify-end">
              <button className="flex items-center text-red-600 cursor-pointer" type="button" onClick={() => handleDeleteExperience(index)}>
             <Trash size={16} /> delete
            </button>
            <button type="button" className="flex items-center text-primary cursor-pointer" onClick={() => handleEditExperience(index)}>
            <Pencil size={16} /> <span>edit</span>
            </button>
              </div>
            <h2 className="font-semibold text-2xl">{experience.jobTitle}</h2>
            <p className="font-semibold">{experience.companyName}</p>
            <div className="flex gap-1 text-gray-500">
            <p>{experience.startDate ? experience.startDate.toISOString().split("T")[0] : ""}</p>
            -
            <p>{experience.endDate? experience.endDate.toISOString().split("T")[0] : ""}</p>
            </div>
            
            <div className="text-gray-500 mt-3">{ experience.jobDescription ? experience.jobDescription.split("\n").map((paragraph, index) => <p key={index}>&#9679; {paragraph}</p>) : ""}</div>
            </div>
          </li>
        ))}
      </ul>
      </div>
        
    </FormLayout>
  );
}
