"use client";
import { useParams } from "next/navigation";
import { blogs } from "../page";
import Image from "next/image";
import { Heart } from "lucide-react";

interface Blog {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
    linkUrl: string;
    tags: string[];
    date: string;
    author: string;
    category: string;
}

export default function BlogPost() {
    const { blogID } = useParams();

    // {
    //     id:9,
    //     title:"title tiltle 9",
    //     content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
    //     imgUrl:"/blog.png",
    //     linkUrl:"/",
    //     tags:["CV","Leadership"],
    //     date:"01-01-2023",
    //     author:"John Doe",
    //     category:"English Club"
    // }

    const blog = blogs.find((blog: Blog) => blog.id === blogID);
    return (
        <div className="w-full p-8 bg-white">
            <h2 className="text-3xl font-bold mb-8">Blogs Section</h2>
            <div className="relative w-full h-screen rounded-lg overflow-hidden">
            <button className="bg-white rounded-sm absolute top-2 right-2 border p-1 z-50 shadow">
            <Heart strokeWidth={0.5} />
            </button>
                <Image
                    src={blog?.imgUrl}
                    alt={blog?.title}
                    layout="fill"
                    objectFit="cover"
                />
            <div className="absolute bottom-0 left-0 p-4">
            { blog?.tags?.map((tag) => (
                <span key={tag}
                 className="bg-gray-200/30 shadow inset-0  backdrop-blur-md text-gray-800 text-xs font-medium mr-2 px-5 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300 ">{tag}</span>
            ))}
            </div>
                </div>
            <p className="mb-2 text-sm mt-4">{blog?.date}</p>
            <h1 className="text-3xl font-bold mt-4 text-primary">{blog?.title}</h1>
            <p className="text-lg">{blog?.category}</p>
            
            <p className="text-lg font-bold mb-4">by: {blog?.author}</p>
           
            <p className="mb-4">{blog?.content}</p>
        </div>
    );
}