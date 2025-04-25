"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";
type Blogs = {
    id: number;
    author_id: number;
    title: string;
    department_id: string;
    content: string;
    created_at: string;

  };
export default function BlogPage() {
const { id } = useParams();
const [blog, setBlog] = useState<Blogs | null>(null);
const [author, setAuthor] = useState<any | null>(null);




const getpost = async () => {
    const res = await axios.get(`http://localhost:8000/api/post/${id}`);    
    setBlog(res.data.data);
    console.log(res.data.data)
}

useEffect(() => {
    if (!id) return;
    getpost();
}
, [id]);


    return (

<div className="max-w-7xl mx-auto px-4 sm:px-6 ">
    <div className="max-w-3xl mx-auto">
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">{blog?.title}</h1>
            <p className="text-gray-500 text-sm">`Published on {blog?.created_at}`</p>
        </div>

        <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" className="w-full h-auto mb-8" />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p>{blog?.content}</p>
       
        </div>
    </div>
</div>


    );  
    }
        