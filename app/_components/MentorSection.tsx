"use client"
import { mentors } from "../mentorships/page"
import MentorCard from "../mentorships/_components/MentorCard"
import Link from "next/link"
export default function MentorSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full my-12 p-8">
        <div className="flex justify-between items-center w-full p-6">
        <div className="flex flex-col ">
            <h2 className="text-2xl font-bold mb-4 text-primary">Mentor Section</h2>
            <p className="text-lg mb-4 text-gray-500">Get a unique career guidance experience with the Nafeer Guidance team.</p>
        </div>
        <Link href="/mentorships" className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center min-w-[120px] mt-8" >Explore More</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {
            mentors.map((mentor, index) => (
                <MentorCard key={index} item={mentor} />
            ))
        }
        </div >
        </div>
    )
}