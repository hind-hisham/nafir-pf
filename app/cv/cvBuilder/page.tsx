"use client";

import { useState } from "react";
import {  Steps } from 'antd';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Pencil, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import CvBuilderLayout from "@/app/components/layouts/CvBuilderLayout";

//cv templet
const templates = [
  { id: "1", name: "simple",imgUrl:"/cv/1.jpg", usage: 450 , recommended: true},
  { id: "2", name: "modern", usage: 200 ,imgUrl:"/cv/2.jpg"},
];

// const description = 'This is a description.';
const items = [
  {
    title: 'Personal Info',
  },
  {
    title: 'Experience',
  },
  {
    title: 'Education',
  },
  {
    title: 'Projects',
  },
  {
    //skills and languages and Awards and Certifications and Courses & Workshops and Publications
    title: 'Skills',
  },
  
];
const isLoading = false;
const isError = false;

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  whatsNum: string;
  specialization: string;
  summery: string;
  links: {
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
  },
  image: string;
  location: string;
}
interface Experience {
  jobTitle: string;
  companyName: string;
  startDate: Date | null;
  endDate: Date | null;
  jobDescription: string;
}

interface Education {
  university: string;
  certificate: string;
  degree: string;
  startDate: Date | null;
  endDate: Date | null;
  details: string;
}

const ErrorUI = () =>{
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full py-2 md:py-4 lg:py-8'>
      <Image src="/404.svg" alt="404" width={500} height={500} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
      <p className="text-2xl font-semibold ">An error occurred during processing.</p>
      <p className='text-gray-500'>Check your internet connection and try again.</p>
      <Button type="button" className="mt-4 px-20 py-5">Try Again</Button>
    </div>
  )
}
export default function CvBuilder() {
  const [page,setPage]=useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [step,setStep]=useState(0);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    links:{
      website:"",
      github:"",
      linkedin:"",
      twitter: ""
    },
    summery: '',
    whatsNum: '',
    image: '',
    location: '',
  })
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: '',
    companyName: '',
    startDate:null,
    endDate: null,
    jobDescription: '',
  });
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
  const handleDateExp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: new Date(value) });
  };
  const handleChangeExp = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleAddExperience = () => {
    if (!newExperience.jobTitle || !newExperience.companyName || !newExperience.startDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
  
    if (newExperience.endDate && newExperience.startDate && newExperience.endDate < newExperience.startDate) {
      toast.error("Start date cannot be after end date.");
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
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPersonalInfo({ ...personalInfo, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }
 const handelNext = () =>{setStep(step + 1);};
 const handelBack = () =>{setStep(step - 1);};


 const formData = {
  name: personalInfo.name,
  email: personalInfo.email,
  phone: personalInfo.phone,
 };
const handleSubmit = (e: React.FormEvent) =>{
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  console.log(formData)
}
  return (
    <CvBuilderLayout
    formData={formData}
    template={selectedTemplate}
    >
      {/* the template page */}
      {page == 1 && <div>
        <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📝 Templates</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedTemplate === template.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <h3 className="text-lg font-semibold">{template.name}</h3>
            <Image src={template.imgUrl} alt={template.name} width={200} height={200}/>
            <p className="text-gray-600">It has used {template.usage} times</p>
            {template.recommended && <span className="text-blue-500"> ✅ Recommended</span>}
          </div>
        ))}
      </div>
      <Button onClick={() => setPage(2)} className="mt-4">Start</Button>
    </div>

      </div>
      }
      
      {/* the form page */}
      {page == 2 && <div>
        <div>
        <Steps current={step} status={isError ? "error" : "process"} labelPlacement="vertical" items={items} />
        </div>
        <form onSubmit={handleSubmit}>
        {/* step one  The Personal Information */}
        {step == 0 && (
          isLoading ? <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : 
          <div className="min-h-[100vh] flex flex-col mt-12 justify-center w-full">
             <h4 className="text-2xl font-bold mb-8 self-start">Personal Information</h4>
            <div className="w-full h-full flex flex-col gap-6 justify-center">
            
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="name" onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
            </div>
            
        <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="Phone">Phone</Label>
      <Input type="tel" id="phone" placeholder="Phone" onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="Phone">WhatsApp Number</Label>
      <Input type="tel" id="whatsphone" placeholder="Whatsapp Number" onChange={(e) => setPersonalInfo({ ...personalInfo, whatsNum: e.target.value })} />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="specialization">Specialization</Label>
      <Input type="text" id="specialization" placeholder="Specialization" onChange={(e) => setPersonalInfo({ ...personalInfo, specialization: e.target.value })} />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="summery">Summery</Label>
      <Textarea id="summery" placeholder="Summery" onChange={(e) => setPersonalInfo({ ...personalInfo, summery: e.target.value })} />
    </div>

                <div className="border rounded-2xl p-8">
                  <Label className="w-full h-full flex flex-col items-center justify-center">
                    <Image
                      src="/icons/upload.svg"
                      alt="upload Icon"
                      width={50}
                      height={50}
                    />
                    <p className="font-normal text-2xl mt-4 mb-2">Personal Information</p>
                    <p className="text-gray-500">
                      Upload Profational Image (Optional)
                    </p>
                    <p className="text-gray-500">The file must be in JPEG or PNG format</p>
                    <Input type="file" className="hidden" onChange={handleFileChange} />
                  </Label>
                </div>
                <div className="flex gap-2">
                <Button type="button" size={"lg"} className="mt-24 w-full" onClick={handelNext}>
                    Next
                  </Button>
                </div>
            </div>

          </div>
        )}

        {/* step tow experience */}
        {step == 1 && (
          isLoading? 
          <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : 
        <div className="min-h-[100vh] flex flex-col items-center justify-center w-full mt-12">
          <h4 className="text-2xl font-bold mb-8 self-start">Experience</h4>
          <div className="flex flex-col gap-6 w-full">
          <div className="w-full grid items-center gap-1.5">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" name="jobTitle" id="jobTitle" placeholder="Job Title"  value={newExperience.jobTitle}
            onChange={handleChangeExp} />
        </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="companyName">Company Name</Label>
        <Input type="text" name="companyName" id="companyName" placeholder="Company Name" value={newExperience.companyName}
            onChange={handleChangeExp} />
      </div>
      <div className="w-full flex items-center gap-2">
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate" name="startDate"
         value={newExperience.startDate ? newExperience.startDate.toISOString().split("T")[0] : ""}
            onChange={handleDateExp} />
      </div>
      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate" name="endDate"
         value={newExperience.endDate ? newExperience.endDate.toISOString().split("T")[0] : ""} 
         onChange={handleDateExp} />
      </div>
      </div>

      <div className="w-full grid items-center gap-1.5">
        <Label htmlFor="jobDescription">Job Description</Label>
        <Textarea id="jobDescription" name="jobDescription" value={newExperience.jobDescription} onChange={handleChangeExp}/>

        </div>
        </div>
        <Button type="button" variant={"outline"} className="mt-6 w-full" onClick={handleAddExperience}>
          + Add
        </Button>

        <ul className="mt-5 flex flex-col gap-4 w-full">
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
        
       
         <div className="flex justify-start gap-2">
              
                <Button size={"lg"} variant={"secondary"} type="button" className="mt-24 w-full" onClick={handelBack}>
                    Back
                  </Button>
                  <Button size={"lg"} type="button"  className="mt-24 w-full" onClick={handelNext}>
                    Next
                  </Button>
          </div>

          </div>
        )}

         {/* step three the Education */}
         {step == 2 && (
          isLoading? 
          <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
             <h4 className="text-2xl font-bold mb-8 self-start">Education</h4>
                <div className="flex flex-col gap-6 w-full">
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
                </div>
                <Button type="button" variant={"outline"} className="w-full mt-6" onClick={handleAddEducation}>
          + Add
        </Button>

        <ul className="mt-5 flex flex-col gap-4 w-full">
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

      <div className="flex justify-start gap-2">
               
                <Button size={"lg"} variant={"secondary"} type="button" className="mt-24 w-full" onClick={handelBack}>
                    Back
                  </Button>
                  <Button size={"lg"} type="button"  className="mt-24 w-full" onClick={handelNext}>
                    Next
                  </Button>
          </div>
          </div>
        )}
        </form>
      </div>}
      </CvBuilderLayout>
  )}