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

interface Education {
  university: string;
  certificate: string;
  degree: string;
  startDate: Date | null;
  endDate: Date | null;
  details: string;
}
export default function EducationInfo() {
    const [educations, setEducations] = useState<Education[]>([]);
    const [newEducation, setNewEducation] = useState<Education>({
      university: '',
      certificate: '',
      degree: '',
      startDate:null,
      endDate: null,
      details: '',
    });
    const [editMode,setEditMode] = useState(false);
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewEducation({ ...newEducation, [name]: new Date(value) });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewEducation({ ...newEducation, [name]: value });
    };
  
    const handleAddEducation = () => {
      if (!newEducation.university || !newEducation.degree || !newEducation.certificate) {
        toast("Please fill in all required fields.");
        return;
      }
  
      if (newEducation.startDate && newEducation.endDate && newEducation.startDate > newEducation.endDate) {
        toast("Start date cannot be after end date.");
        return;
      }
  
      if (newEducation.startDate && newEducation.endDate && newEducation.startDate > new Date()) {
        toast("Start date cannot be in the future.");
        return;
      }
    
      setEducations([...educations, newEducation]);
      setNewEducation({ university: '', degree: '',certificate:'', startDate: null, endDate: null, details: '' });
    };
  
    const handleDeleteEducation = (index: number) => {
      const updatedEducations = [...educations];
      updatedEducations.splice(index, 1);
      setEducations(updatedEducations);
    };
  
    const handleEditEducation = (index: number) => {
      setEditMode(true);
      const educationToEdit = educations[index];
      setNewEducation({ ...educationToEdit });
    };
  
    return (  
    <FormLayout
      title="The Resume Progress" 
      listItems={listItems} 
      progressValue={4} 
      progressTotal={5} 
      linkUrl="/skills-info"
    >
      <div className="w-full">
      <form className="flex flex-col gap-5 w-full">
      <div className="w-full grid items-center gap-1.5">
              <Label htmlFor="university">University Name</Label>
              <Input type="text" name="university" id="university" placeholder="University Name"  value={newEducation.university}
            onChange={handleChange} />
        </div>
      <div className="w-full grid items-center gap-1.5">
              <Label htmlFor="university">Certificate</Label>
              <Input type="text" name="certificate" id="certificate" placeholder="certificate"  value={newEducation.certificate}
            onChange={handleChange} />
        </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="degree">Degree</Label>
        <Input type="text" name="degree" id="degree" placeholder="Degree" value={newEducation.degree}
            onChange={handleChange} />
      </div>
      <div className="w-full flex items-center gap-2">
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate" name="startDate"
         value={newEducation.startDate ? newEducation.startDate.toISOString().split("T")[0] : ""}
            onChange={handleDateChange} />
      </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate" name="endDate"
         value={newEducation.endDate ? newEducation.endDate.toISOString().split("T")[0] : ""} 
         onChange={handleDateChange} />
      </div>
</div>

      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="details">Job Description</Label>
        <Textarea id="details" name="details" value={newEducation.details} onChange={handleChange}/>

        </div>
        <Button type="button" variant={"outline"} onClick={handleAddEducation}>
          + Add
        </Button>
        <Button size={"lg"} className="mt-5 w-full">
          Continue
        </Button>
      </form>
      <ul className="mt-5 flex flex-col gap-4">
        {educations.map((education, index) => (
          <li key={index}>
            <div className="flex flex-col bg-gray-100 p-6 gap-4 rounded-md">
              <div className="flex gap-3 justify-end">
              <button className="flex items-center text-red-600 cursor-pointer" type="button" onClick={() => handleDeleteEducation(index)}>
             <Trash size={16} /> delete
            </button>
            <button type="button" className="flex items-center text-primary cursor-pointer" onClick={() => handleEditEducation(index)}>
            <Pencil size={16} /> <span>edit</span>
            </button>
              </div>
            <h2 className="font-semibold text-2xl">{education.university}</h2>
            <p className="font-semibold">{education.degree}</p>
            <div className="flex gap-1 text-gray-500">
            <p>{education.startDate ? education.startDate.toISOString().split("T")[0] : ""}</p>
            -
            <p>{education.endDate? education.endDate.toISOString().split("T")[0] : ""}</p>
            </div>
            
            <div className="text-gray-500 mt-3">{ education.details ? education.details.split("\n").map((paragraph, index) => <p key={index}>&#9679; {paragraph}</p>) : ""}</div>
            </div>
          </li>
        ))}
      </ul>
      </div>
        
    </FormLayout>
  );
}
