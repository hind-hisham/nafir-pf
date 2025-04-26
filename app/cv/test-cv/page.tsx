"use client";

import { useState } from "react";
import CvLayout from "../../components/layouts/CvLayout";
import { Progress, Steps } from 'antd';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { ProgressProps } from 'antd';

const listItems = [
  "Lorem, ipsum dolor sit amet consectetur",
  "Lorem, ipsum dolor sit ametr adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur.",
  "Lorem, ipsum dolor sit amet adipisicing elit.",
];

// const description = 'This is a description.';
const items = [
  {
    title: 'Upload CV',
  },
  {
    title: 'In Progress',
  },
  {
    title: 'Result',
  },
];
const isLoading = false;
const isError = false;


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
export default function TestCV() {
  const [step,setStep]=useState(0);

  //status = wait | process | finish
 // const [stepStatus,setStepStatus]=useState("wait");

 const oneColors: ProgressProps['strokeColor'] = "#79B055";
 const twoColors: ProgressProps['strokeColor'] = "#79B055";
 const twoStroke: ProgressProps['strokeWidth'] = 10;
  return (
    <CvLayout
    title="Resume Advice" 
    listItems={listItems} 
    >
      <div>
        <div>
        <Steps current={step} status={isError ? "error" : "process"} labelPlacement="vertical" items={items} />
        </div>
        {/* step one */}
        {step == 0 && (
          isLoading? <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : <div className="min-h-[100vh] flex items-center justify-center w-full">
            <form className="w-full h-full">
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
        <Button size={"lg"} className="mt-24 w-full" onClick={()=>{
          setStep(1);
        }}>
          Continue
        </Button>
      </form>

          </div>
        )}

        {/* step one */}
        {step == 1 && (
          isLoading? 
          <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
          <Progress type="circle" strokeColor={oneColors} percent={75} />
        <h3 className="text-2xl font-semibold mt-6">Your resume is being evaluated.</h3>
        <p className="text-gray-500">It may take some time.</p>
        <Button size={"lg"} className="mt-24 w-full" onClick={()=>{
          setStep(2);
        }}>
          Continue
        </Button>

          </div>
        )}

         {/* step one */}
         {step == 2 && (
          isLoading? 
          <div className="flex items-center justify-center mt-10"><LoaderCircle className="animate-spin text-primary" size={50} /></div>
          :!isLoading && isError ? 
            <ErrorUI/>
          : <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">
            <div className="w-full flex flex-col gap-2 border rounded-lg p-6">
              <h3 className="text-2xl font-semibold">Overall rating</h3>
              <p className="text-gray-500 mb-6">Your resume is very good and professional, closely matching professional resumes. Your resume needs improvement in the certifications section and some improvements in the experience section.</p>
              <Progress percent={50} status="active" />
              <div className="flex gap-2 mt-8">
                <Button className="py-6 px-10">Improve your CV</Button>
                <Button className="py-6 px-10" variant={"secondary"}>Contact a specialist</Button>
              </div>
            </div>

            <div className="flex py-6 rounded-lg border justify-between w-full mt-8 flex-wrap">
              <div className="flex flex-col items-center gap-2 p-6">
                <h4 className="text-xl font-semibold mb-4">Personal info</h4>
                <Progress type="circle" percent={90} strokeColor={twoColors} strokeWidth={twoStroke} />
              </div>
              <div className="border-r border-gray-300"></div>
              <div className="flex flex-col items-center gap-2 p-6">
                <h4 className="text-xl font-semibold mb-4">Experiences</h4>
                <Progress type="circle" percent={80} strokeColor={twoColors} strokeWidth={twoStroke} />
              </div>
              <div className="border-r border-gray-300"></div>
              <div className="flex flex-col items-center gap-2  p-6">
                <h4 className="text-xl font-semibold mb-4">Certificates</h4>
                <Progress type="circle" percent={30} strokeColor={twoColors} strokeWidth={twoStroke} />
              </div>
              <div className="border-r border-gray-300"></div>
              <div className="flex flex-col items-center gap-2 p-6">
                <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
                <Progress type="circle" percent={60} strokeColor={twoColors} strokeWidth={twoStroke} />
              </div>
            </div>

          </div>
        )}
      </div>
      </CvLayout>
  )}