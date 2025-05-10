"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";


import Image from "next/image";
import { LoaderCircle, Pencil, Trash, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CvBuilderLayout from "@/app/components/layouts/CvBuilderLayout";
import { format } from "date-fns";



//cv templet
const templates = [
  {
    id: "1",
    name: "simple",
    imgUrl: "/cv/1.jpg",
    usage: 450,
    recommended: true,
  },
  { id: "2", name: "modern", usage: 200, imgUrl: "/cv/2.png" },
  { id: "3", name: "minimal", usage: 200, imgUrl: "/cv/3.png" },
];

// const description = 'This is a description.';
const items = [
  {
    title: "Personal Info",
  },
  {
    title: "Experience",
  },
  {
    title: "Education",
  },
  {
    title: "Projects",
  },
  {
    //skills and languages and Awards and Courses & Workshops and Publications
    title: "Skills",
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
  };
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
interface Project {
  projectName: string;
  startDate: Date | null;
  endDate: Date | null;
  details: string;
  link: string | null;
}

interface Courses {
    courseName:string;
    courseProvider:string;
    startDate: Date | null;
    endDate: Date | null;
}

interface workshop {
    workshopName:string;
    workshopProvider:string;
    startDate: Date | null;
    endDate: Date | null;
}


const ErrorUI = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full py-2 md:py-4 lg:py-8">
      <Image
        src="/404.svg"
        alt="404"
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className="text-2xl font-semibold ">
        An error occurred during processing.
      </p>
      <p className="text-gray-500">
        Check your internet connection and try again.
      </p>
      <Button type="button" className="mt-4 px-20 py-5">
        Try Again
      </Button>
    </div>
  );
};

export default function CvBuilder () {
  const [step, setStep] = useState(0);
  const totalSteps = 5;

  const [page, setPage] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    links: {
      website: "",
      github: "",
      linkedin: "",
      twitter: "",
    },
    summery: "",
    whatsNum: "",
    image: "",
    location: "",
  });
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: "",
    companyName: "",
    startDate: null,
    endDate: null,
    jobDescription: "",
  });
  const [educations, setEducations] = useState<Education[]>([]);
  const [newEducation, setNewEducation] = useState<Education>({
    university: "",
    certificate: "",
    degree: "",
    startDate: null,
    endDate: null,
    details: "",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    projectName: "",
    startDate: null,
    endDate: null,
    details: "",
    link: "",
  });

  const[courses,setCourses] = useState<Courses[]>([]);
  const[newCourse,setNewCourse]=useState<Courses>({
    courseName:"",
    courseProvider:"",
    startDate: null,
    endDate: null,
  })

  const [workshops, setWorkshops] = useState<workshop[]>([]);
  const [newWorkshop, setNewWorkshop] = useState<workshop>({
    workshopName: "",
    workshopProvider: "",
    startDate: null,
    endDate: null,
  })
  

  const [skills, setSkills] = useState<string[]>([]);
  const [skillName, setSkillName] = useState("");

  const [language, setLanguage] = useState<string[]>([]);
  const [languageName, setLanguageName] = useState("");

  
  const handleAddSkill = (
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (name && !list.includes(name)) {
      setList([...list, name]);
      setName("");
    }
  };

  const handleRemoveSkill = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList(list.filter((s) => s !== item));
  };

  const restExprinces = () => {
    setNewExperience({
      jobTitle: "",
      companyName: "",
      startDate: null,
      endDate: null,
      jobDescription: "",
    });
  };

  const restEducations = () => {
    setNewEducation({
      university: "",
      certificate: "",
      degree: "",
      startDate: null,
      endDate: null,
      details: "",
    });
  };

  const restProjects = () => {
    setNewProject({
      projectName: "",
      startDate: null,
      endDate: null,
      details: "",
      link: "",
    });
  };
  const handleInputChange = <T,>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<T>>
  ) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = <T,>(
    item: T,
    list: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    requiredFields: (keyof T)[]
  ) => {
    if (requiredFields.some((field) => !item[field])) {
      toast("Please fill in all required fields.");
      return;
    }

    setter([...list, item]);
    restExprinces();
    restEducations();
    restProjects();
  };

  const handleDeleteItem = <T,>(
    index: number,
    list: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    setter(list.filter((_, i) => i !== index));
  };

  // const handleEditItem = <T,>(
  //   index: number,
  //   list: T[],
  //   setter: React.Dispatch<React.SetStateAction<T[]>>,
  //   itemSetter?: React.Dispatch<React.SetStateAction<T>>
  // ) => {
  //   const itemToEdit = list[index];
  //   if (itemSetter) {
  //     itemSetter({ ...itemToEdit });
  //   }
  //   setter(list.filter((_, i) => i !== index));
  // };

  const formData = {
    personalInfo,
    experiences,
    educations,
    projects,
    skills,
    language,
    courses,
    workshops,
}

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const templet = selectedTemplate;
    
    console.log(formData);
  };
  const renderButtons = (step: number) => {
    return (
      <div className="flex gap-2">
      <Button
      variant={"secondary"}
        type="button"
         size={"lg"}
        className="mt-24 w-full"
        onClick={handleBack}
        disabled={step === 0}
      >
        Back
      </Button>
      <Button type={step === 4 ? "submit" : "button"}  size={"lg"}
        className="mt-24 w-full" onClick={(e : React.FormEvent)=> {
        if(step === 4) {
          handleSubmit(e);
        }else{
          setStep(step + 1);
        }
      }}>
        {step === 4 ? "Submit" : "Next"}
      </Button>
    </div>
    )
  }

  return (
    <CvBuilderLayout formData={formData} template={selectedTemplate}>

      {/* the template page */}
      {page == 1 && (
        <div>
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">📝 Templates</h2>
            <div className="grid grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedTemplate === template.id
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <h3 className="text-lg font-semibold">{template.name}</h3>
                  <Image
                    src={template.imgUrl}
                    alt={template.name}
                    width={200}
                    height={200}
                  />
                  <p className="text-gray-600">
                    It has used {template.usage} times
                  </p>
                  {template.recommended && (
                    <span className="text-blue-500"> ✅ Recommended</span>
                  )}
                </div>
              ))}
            </div>
            <Button onClick={() => setPage(2)} className="mt-4">
              Start
            </Button>
          </div>
        </div>
      )}


      {/* the form page */}
    {page == 2 && (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                index <= step ? "bg-primary" : "bg-primary/30",
                index < step && "bg-primary"
              )}
            />
            {index < totalSteps - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5",
                  index < step ? "bg-primary" : "bg-primary/30"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
            {/* step one  The Personal Information */}
            {step == 0 &&
              (isLoading ? (
                <div className="flex items-center justify-center mt-10">
                  <LoaderCircle
                    className="animate-spin text-primary"
                    size={50}
                  />
                </div>
              ) : !isLoading && isError ? (
                <ErrorUI />
              ) : (
                <div className="min-h-[100vh] flex flex-col mt-12 justify-center w-full">
                  <h4 className="text-2xl font-bold mb-8 self-start">
                    Personal Information
                  </h4>
                  <div className="w-full h-full flex flex-col gap-6 justify-center">
                    <div className="grid w-full  items-center gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="name"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="Phone">Phone</Label>
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="Phone">WhatsApp Number</Label>
                      <Input
                        type="tel"
                        id="whatsphone"
                        placeholder="Whatsapp Number"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            whatsNum: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        type="text"
                        id="specialization"
                        placeholder="Specialization"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            specialization: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="summery">Summery</Label>
                      <Textarea
                        id="summery"
                        placeholder="Summery"
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            summery: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="border rounded-2xl p-8">
                      <Label className="w-full h-full flex flex-col items-center justify-center">
                        <Image
                          src="/icons/upload.svg"
                          alt="upload Icon"
                          width={50}
                          height={50}
                        />
                        <p className="font-normal text-2xl mt-4 mb-2">
                          Personal Information
                        </p>
                        <p className="text-gray-500">
                          Upload Profational Image (Optional)
                        </p>
                        <p className="text-gray-500">
                          The file must be in JPEG or PNG format
                        </p>
                        <Input
                          type="file"
                          className="hidden"
                          onChange={(e) => console.log(e)}
                        />
                      </Label>
                    </div>
                    {renderButtons(0)}
                  </div>
                </div>
              ))}

            {/* step tow experience */}
            {step == 1 &&
              (isLoading ? (
                <div className="flex items-center justify-center mt-10">
                  <LoaderCircle
                    className="animate-spin text-primary"
                    size={50}
                  />
                </div>
              ) : !isLoading && isError ? (
                <ErrorUI />
              ) : (
                <div className="min-h-[100vh] flex flex-col items-center justify-center w-full mt-12">
                  <h4 className="text-2xl font-bold mb-8 self-start">
                    Experience
                  </h4>
                  <div className="flex flex-col gap-6 w-full">
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        required
                        placeholder="Job Title"
                        value={newExperience.jobTitle}
                        onChange={(e) => handleInputChange(e, setNewExperience)}
                      />
                    </div>
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        type="text"
                        name="companyName"
                        id="companyName"
                        required
                        placeholder="Company Name"
                        value={newExperience.companyName}
                        onChange={(e) => handleInputChange(e, setNewExperience)}
                      />
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={
                            newExperience.startDate
                              ? format(newExperience.startDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(e, setNewExperience)
                          }
                        />
                      </div>
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          type="date"
                          id="endDate"
                          name="endDate"
                          required
                          value={
                            newExperience.endDate
                              ? format(newExperience.endDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(e, setNewExperience)
                          }
                        />
                      </div>
                    </div>

                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Textarea
                        id="jobDescription"
                        name="jobDescription"
                        value={newExperience.jobDescription}
                        onChange={(e) => handleInputChange(e, setNewExperience)}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="mt-6 w-full"
                    onClick={() =>
                      handleAddItem(
                        newExperience,
                        experiences,
                        setExperiences,
                        ["jobTitle", "companyName", "startDate", "endDate"]
                      )
                    }
                  >
                    + Add
                  </Button>

                  <ul className="mt-5 flex flex-col gap-4 w-full">
                    {experiences.map((experience, index) => (
                      <li key={index}>
                        <div className="flex flex-col bg-gray-100 p-6 gap-4 rounded-md">
                          <div className="flex gap-3 justify-end">
                            <button
                              className="flex items-center text-red-600 cursor-pointer"
                              type="button"
                              onClick={() =>
                                handleDeleteItem(
                                  index,
                                  experiences,
                                  setExperiences
                                )
                              }
                            >
                              <Trash size={16} /> delete
                            </button>
                            {/* <button
                              type="button"
                              className="flex items-center text-primary cursor-pointer"
                              onClick={() =>
                                handleEditItem(
                                  index,
                                  experiences,
                                  setExperiences
                                )
                              }
                            >
                              <Pencil size={16} /> <span>edit</span>
                            </button> */}
                          </div>
                          <h2 className="font-semibold text-2xl">
                            {experience.jobTitle}
                          </h2>
                          <p className="font-semibold">
                            {experience.companyName}
                          </p>
                          <div className="flex gap-1 text-gray-500">
                            <p>
                              {experience.startDate
                                ? format(experience.startDate, "yyyy-MM-dd")
                                : ""}
                            </p>
                            -
                            <p>
                              {experience.endDate
                                ? format(experience.endDate, "yyyy-MM-dd")
                                : ""}
                            </p>
                          </div>

                          <div className="text-gray-500 mt-3">
                            {experience.jobDescription
                              ? experience.jobDescription
                                  .split("\n")
                                  .map((paragraph, index) => (
                                    <p key={index}>&#9679; {paragraph}</p>
                                  ))
                              : ""}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {renderButtons(1)}
                </div>
              ))}

            {/* step three the Education */}
            {step == 2 &&
              (isLoading ? (
                <div className="flex items-center justify-center mt-10">
                  <LoaderCircle
                    className="animate-spin text-primary"
                    size={50}
                  />
                </div>
              ) : !isLoading && isError ? (
                <ErrorUI />
              ) : (
                <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
                  <h4 className="text-2xl font-bold mb-8 self-start">
                    Education
                  </h4>
                  <div className="flex flex-col gap-6 w-full">
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="university">University Name</Label>
                      <Input
                        type="text"
                        name="university"
                        id="university"
                        placeholder="University Name"
                        required
                        value={newEducation.university}
                        onChange={(e) => handleInputChange(e, setNewEducation)}
                      />
                    </div>
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="university">Certificate</Label>
                      <Input
                        type="text"
                        name="certificate"
                        id="certificate"
                        placeholder="certificate"
                        required
                        value={newEducation.certificate}
                        onChange={(e) => handleInputChange(e, setNewEducation)}
                      />
                    </div>
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="degree">Degree</Label>
                      <Input
                        type="text"
                        name="degree"
                        id="degree"
                        placeholder="Degree"
                        required
                        value={newEducation.degree}
                        onChange={(e) => handleInputChange(e, setNewEducation)}
                      />
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={
                            newEducation.startDate
                              ? format(newEducation.startDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(e, setNewEducation)
                          }
                        />
                      </div>
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          type="date"
                          id="endDate"
                          name="endDate"
                          required
                          value={
                            newEducation.endDate
                              ? format(newEducation.endDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(e, setNewEducation)
                          }
                        />
                      </div>
                    </div>

                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="details">Job Description</Label>
                      <Textarea
                        id="details"
                        name="details"
                        value={newEducation.details}
                        onChange={(e) => handleInputChange(e, setNewEducation)}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="w-full mt-6"
                    onClick={() =>
                      handleAddItem(newEducation, educations, setEducations, [
                        "university",
                        "degree",
                        "certificate",
                      ])
                    }
                  >
                    + Add
                  </Button>

                  <ul className="mt-5 flex flex-col gap-4 w-full">
                    {educations.map((education, index) => (
                      <li key={index}>
                        <div className="flex flex-col bg-gray-100 p-6 gap-4 rounded-md">
                          <div className="flex gap-3 justify-end">
                            <button
                              className="flex items-center text-red-600 cursor-pointer"
                              type="button"
                              onClick={() =>
                                handleDeleteItem(
                                  index,
                                  educations,
                                  setEducations
                                )
                              }
                            >
                              <Trash size={16} /> delete
                            </button>
                            {/* <button
                              type="button"
                              className="flex items-center text-primary cursor-pointer"
                              onClick={() =>
                                handleEditItem(
                                  index,
                                  educations,
                                  setEducations,
                                  setNewEducation
                                )
                              }
                            >
                              <Pencil size={16} /> <span>edit</span>
                            </button> */}
                          </div>
                          <h2 className="font-semibold text-2xl">
                            {education.university}
                          </h2>
                          <p className="font-semibold">{education.degree}</p>
                          <div className="flex gap-1 text-gray-500">
                            <p>
                              {education.startDate
                                ? format(education.startDate, "yyyy-MM-dd")
                                : ""}
                            </p>
                            -
                            <p>
                              {education.endDate
                                ? format(education.endDate, "yyyy-MM-dd")
                                : ""}
                            </p>
                          </div>

                          <div className="text-gray-500 mt-3">
                            {education.details
                              ? education.details
                                  .split("\n")
                                  .map((paragraph, index) => (
                                    <p key={index}>&#9679; {paragraph}</p>
                                  ))
                              : ""}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {renderButtons(2)}
                </div>
              ))}

            {/* step three the Projects */}
            {step == 3 &&
              (isLoading ? (
                <div className="flex items-center justify-center mt-10">
                  <LoaderCircle
                    className="animate-spin text-primary"
                    size={50}
                  />
                </div>
              ) : !isLoading && isError ? (
                <ErrorUI />
              ) : (
                <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
                  <h4 className="text-2xl font-bold mb-8 self-start">
                    Projects
                  </h4>
                  <div className="flex flex-col gap-6 w-full">
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input
                        type="text"
                        name="projectName"
                        id="projectName"
                        placeholder="projectName"
                        required
                        value={newProject.projectName}
                        onChange={(e) => handleInputChange(e, setNewProject)}
                      />
                    </div>
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="link">Project Link</Label>
                      <Input
                        type="url"
                        name="link"
                        id="link"
                        placeholder="link"
                        required
                        value={newProject.link ? newProject.link : ""}
                        onChange={(e) => handleInputChange(e, setNewProject)}
                      />
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={
                            newProject.startDate
                              ? format(newProject.startDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) => handleInputChange(e, setNewProject)}
                        />
                      </div>
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          type="date"
                          id="endDate"
                          name="endDate"
                          required
                          value={
                            newProject.endDate
                              ? format(newProject.endDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) => handleInputChange(e, setNewProject)}
                        />
                      </div>
                    </div>

                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="details">Description</Label>
                      <Textarea
                        id="details"
                        name="details"
                        value={newProject.details}
                        onChange={(e) => handleInputChange(e, setNewProject)}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="w-full mt-6"
                    onClick={() =>
                      handleAddItem(newProject, projects, setProjects, [
                        "projectName",
                        "startDate",
                        "endDate",
                      ])
                    }
                  >
                    + Add
                  </Button>

                  <ul className="mt-5 flex flex-col gap-4 w-full">
                    {projects.map((pro, index) => (
                      <li key={index} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            className="flex items-center text-primary cursor-pointer"
                            onClick={() =>
                              handleDeleteItem(index, projects, setProjects)
                            }
                          >
                            <Trash size={16} /> delete
                          </button>
                          {/* <button
                            type="button"
                            className="flex items-center text-primary cursor-pointer"
                            onClick={() =>
                              handleEditItem(
                                index,
                                projects,
                                setProjects,
                                setNewProject
                              )
                            }
                          >
                            <Pencil size={16} /> <span>edit</span>
                          </button> */}
                        </div>
                        <h2 className="font-semibold text-2xl">
                          {pro.projectName}
                        </h2>
                        <p className="font-semibold">{pro.link}</p>
                        <div className="flex gap-1 text-gray-500">
                          <p>
                            {pro.startDate
                              ? format(pro.startDate, "yyyy-MM-dd")
                              : ""}
                          </p>
                          -
                          <p>
                            {pro.endDate
                              ? format(pro.endDate, "yyyy-MM-dd")
                              : ""}
                          </p>
                        </div>
                        <p>{pro.details}</p>
                      </li>
                    ))}
                  </ul>

                  {renderButtons(3)}
                </div>
              ))}

            {/* step three the skills */}
            {step == 4 &&
              (isLoading ? (
                <div className="flex items-center justify-center mt-10">
                  <LoaderCircle
                    className="animate-spin text-primary"
                    size={50}
                  />
                </div>
              ) : !isLoading && isError ? (
                <ErrorUI />
              ) : (
                <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
                  <h4 className="text-2xl font-bold mb-8 self-start">Skills</h4>
                  <div className="flex flex-col gap-6 w-full">
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
                        <Button
                          type="button"
                          onClick={() =>
                            handleAddSkill(
                              skillName,
                              setSkillName,
                              skills,
                              setSkills
                            )
                          }
                        >
                          + Add
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveSkill(skill, skills, setSkills)
                              }
                              className="ml-2 text-red-500"
                            >
                              <X size={16} />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="block">languages</Label>
                      <div className="flex gap-1 items-center">
                        <select
                          className="mt-1 w-full flex-1"
                          onChange={(e) => setLanguageName(e.target.value)}
                        >
                          <option value="English">English</option>
                          <option value="Arabic">Arabic</option>
                          <option value="French">French</option>
                          <option value="German">German</option>
                        </select>
                        <Button
                          type="button"
                          onClick={() =>
                            handleAddSkill(
                              languageName,
                              setLanguageName,
                              language,
                              setLanguage
                            )
                          }
                        >
                          + Add
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {language.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-1 bg-yellow-200 rounded"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveSkill(skill, language, setLanguage)
                              }
                              className="ml-2 text-red-500"
                            >
                              <X size={16} />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                        <h4>Courses</h4>

                        <div className="flex flex-col gap-6 w-full">
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="projectName">Course Name</Label>
                      <Input
                        type="text"
                        name="courseName"
                        id="courseName"
                        placeholder="Course Name"
                        required
                        value={newCourse.courseName}
                        onChange={(e) => handleInputChange(e, setNewCourse)}
                      />
                    </div>
                    <div className="w-full grid items-center gap-1.5">
                      <Label htmlFor="projectProvider">Course Provider</Label>
                      <Input
                        type="text"
                        name="courseProvider"
                        id="courseProvider"
                        placeholder="Course Provider"
                        required
                        value={newCourse.courseProvider}
                        onChange={(e) => handleInputChange(e, setNewCourse)}
                      />
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={
                            newCourse.startDate
                              ? format(newCourse.startDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) => handleInputChange(e, setNewCourse)}
                        />
                      </div>
                      
                      <div className="w-full grid items-center gap-1.5">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          type="date"
                          id="endDate"
                          name="endDate"
                          required
                          value={
                            newCourse.endDate
                              ? format(newCourse.endDate, "yyyy-MM-dd")
                              : ""
                          }
                          onChange={(e) => handleInputChange(e, setNewCourse)}
                        />
                      </div>
                    </div>
                  </div>
                        <Button className="mt-4 px-20 py-5 border w-full" variant={"secondary"} 
                        type="button" onClick={() => handleAddItem(newCourse, courses, setCourses,["courseName", "courseProvider", "startDate", "endDate"])}>
                            + Add
                        </Button>
                    </div>

                   {courses.length > 0 && <ul className="bg-gray-100 p-4 rounded flex flex-col gap-2 mt-8">
                      {courses.map((course, index) => (
                        <li key={index} >
                           <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            className="flex items-center text-red-500 cursor-pointer"
                            onClick={() => handleDeleteItem(index, courses, setCourses)}
                          >
                            <Trash size={16} /> delete
                          </button>
                          {/* <button
                            type="button"
                            className="flex items-center text-primary cursor-pointer"
                            onClick={() =>
                              handleEditItem(index, courses, setCourses)
                            }
                          >
                            <Pencil size={16} /> <span>edit</span>
                          </button> */}
                        </div>
                          <p className="font-semibold text-2xl">{course.courseName}</p>
                          <p>{course.courseProvider}</p>
                          <p>
                            {course.startDate && course.endDate
                              ? `${format(
                                  course.startDate,
                                  "yyyy-MM-dd"
                                )} - ${format(course.endDate, "yyyy-MM-dd")}`
                              : ""}
                          </p>
                        </li>
                      ))}
                    </ul>}


                    <div>
                      <h4>Workshops</h4>

                      <div className="flex flex-col gap-6 w-full">
                        <div className="w-full grid items-center gap-1.5">
                          <Label htmlFor="projectName">Workshop Name</Label>
                          <Input
                            type="text"
                            name="workshopName"
                            id="workshopName"
                            placeholder="Workshop Name"
                            required
                            value={newWorkshop.workshopName}
                            onChange={(e) => handleInputChange(e, setNewWorkshop)}
                          />
                        </div>
                        <div className="w-full grid items-center gap-1.5">
                          <Label htmlFor="projectProvider">Workshop Provider</Label>
                          <Input
                            type="text"
                            name="workshopProvider"
                            id="workshopProvider"
                            placeholder="Workshop Provider"
                            required
                            value={newWorkshop.workshopProvider}
                            onChange={(e) => handleInputChange(e, setNewWorkshop)}
                          />
                          </div>
                        <div className="w-full flex items-center gap-2">
                          <div className="w-full grid items-center gap-1.5">
                            <Label htmlFor="startDate">Start Date</Label>
                            <Input
                              type="date"
                              id="startDate"
                              name="startDate"
                              required
                              value={
                                newWorkshop.startDate
                                  ? format(newWorkshop.startDate, "yyyy-MM-dd")
                                  : ""
                              }
                              onChange={(e) => handleInputChange(e, setNewWorkshop)}
                            />
                          </div>
                          <div className="w-full grid items-center gap-1.5">
                            <Label htmlFor="endDate">End Date</Label>
                            <Input
                              type="date"
                              id="endDate"
                              name="endDate"
                              required
                              value={
                                newWorkshop.endDate
                                  ? format(newWorkshop.endDate, "yyyy-MM-dd")
                                  : ""
                              }
                              onChange={(e) => handleInputChange(e, setNewWorkshop)}
                            />
                          </div>
                          </div>
                        </div>
                        <Button className="mt-4 px-20 py-5 border w-full" variant={"secondary"} 
                        type="button" onClick={() => handleAddItem(newWorkshop, workshops, setWorkshops,["workshopName", "workshopProvider", "startDate", "endDate"])}>
                            + Add
                        </Button>
                        {workshops.length > 0 && <ul className="bg-gray-100 p-4 rounded flex flex-col gap-2 mt-8">
                          {workshops.map((workshop, index) => (
                            <li key={index} >
                               <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            className="flex items-center text-red-500 cursor-pointer"
                            onClick={() => handleDeleteItem(index, workshops, setWorkshops)}
                          >
                            <Trash size={16} /> delete
                          </button>
                          {/* <button
                            type="button"
                            className="flex items-center text-primary cursor-pointer"
                            onClick={() =>
                              handleEditItem(index, workshops, setWorkshops)
                            }
                          >
                            <Pencil size={16} /> <span>edit</span>
                          </button> */}
                        </div>
                              <p className="font-semibold text-2xl">{workshop.workshopName}</p>
                              <p>{workshop.workshopProvider}</p>
                              <p>
                                {workshop.startDate && workshop.endDate
                                  ? `${format(
                                      workshop.startDate,
                                      "yyyy-MM-dd"
                                    )} - ${format(workshop.endDate, "yyyy-MM-dd")}`
                                  : ""}
                              </p>
                            </li>
                          ))}
                        </ul>}
                    </div>
                  </div>
                 
                 {renderButtons(4)}
                </div>
              ))}
          </form>
    </div>)}
    </CvBuilderLayout>
  );
};
