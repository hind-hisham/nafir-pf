"use client";
import BlogCardV from "./_components/BlogCardV";
import { useState } from "react";


const filterOptions = ["All", "CV", "Book Club", "English Club","Tips","Carrer","Leadership"]; 

export const blogs=[
  {
      id:"1",
      title:"title tiltle 1",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur ,Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"Carrer"
  },
  {
      id:"2",
      title:"title tiltle 2",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["Book Club","Tips"],
      date:"01-01-2023",
      author:"Doe foo",
      category:"Book Club"
  },
  {
      id:"3",
      title:"title tiltle 3",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["Carrer","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"Leadership"
  },
  {
      id:"4",
      title:"title tiltle 4",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur ,Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"English Club"
  },
  {
      id:"5",
      title:"title tiltle 5",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"Leadership"
  },
  {
      id:"6",
      title:"title tiltle 6",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"CV"
  },
  {
      id:"7",
      title:"title tiltle 7",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur ,Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"CV"
  },
  {
      id:"8",
      title:"title tiltle 8",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"Book Club"
  },
  {
      id:"9",
      title:"title tiltle 9",
      content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      imgUrl:"/blog.png",
      linkUrl:"/",
      tags:["CV","Leadership"],
      date:"01-01-2023",
      author:"John Doe",
      category:"English Club"
  }
]
export default function BlogsPage() {

  const [filter, setFilter] = useState("All");

  // const { data: posts } = useQuery({
	// 	queryKey: ["posts"],
	// 	queryFn: async () => {
	// 		const res = await axiosInstance.get("/posts");
	// 		return res.data;
	// 	},
	// });

  
  const filteredBlogs = blogs.filter((blog) => {
    if (filter === "All") {
      return true;
    }
    return blog.category == filter;
  })
  
  return (
    <div className="flex b-white flex-col items-center justify-center  w-full">
        <div className="flex flex-col  pt-20 pb-30 p-8 hero-bg w-full">
          <h3 className="text-3xl font-bold text-primary mb-8">Blogs Section</h3>
          <p className="text-2xl font-bold mb-4">Tips, paths, and success stories to help you <span className="text-orange-300">advance your career</span> through Nafeer.</p>
             <p>Learn a lot from the Nafeer blog for the best advice and guidance.</p>

        </div>
  
            <div className="flex flex-col gap-2 p-8 w-full bg-white">
            
              <h2 className="text-2xl font-bold mb-4 mt-6">latest blogs</h2>
              <div className="flex justify-between items-center w-full">

             
              { filterOptions.map((option) => (
                  <button key={option} className=" bg-yellow-100 px-3 py-2 min-w-[100px] text-gray-800 rounded-full hover:bg-yellow-100 text-sm"
                  onClick={() => setFilter(option)}
                  >
                    {option}
                  </button>
                ))
              }

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-white">
            {
               filteredBlogs.length === 0 ? <h2 className="text-2xl font-bold mb-4 mt-6 bg-white w-full text-center">No blogs found</h2> : filteredBlogs.map((blog) => (
                <BlogCardV key={blog.title} title={blog.title} content={blog.content} imgUrl={blog.imgUrl} linkUrl={blog.linkUrl} />
              ))
              }
          </div>
        </div>
  );
}
