import { ClipboardCheck, ClipboardList, ClipboardPenLine, MessageSquareMore } from "lucide-react";
import CvLayout from "../components/layouts/CvLayout";
import BlogCard from "../components/BlogCard";

const listItems = [
    "Lorem, ipsum dolor sit amet consectetur",
    "Lorem, ipsum dolor sit ametr adipisicing elit.",
    "Lorem, ipsum dolor sit amet consectetur.",
    "Lorem, ipsum dolor sit amet adipisicing elit.",
  ];

const blogs=[
    {
        title:"title tiltle 1",
        content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
        imgUrl:"/blog.png",
        linkUrl:"/"
    },
    {
        title:"title tiltle 2",
        content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
        imgUrl:"/blog.png",
        linkUrl:"/"
    },
    {
        title:"title tiltle 3",
        content:"Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
        imgUrl:"/blog.png",
        linkUrl:"/"
    }
]
export default function Cv() {
    return (
        <CvLayout
        title="Resume Advice" 
        listItems={listItems} 
        >
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="col-span-1 md:col-span-2 bg-purple-100 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-3"> <ClipboardCheck className="text-purple-800 bg-purple-300 p-1 rounded" size={30} /> <h1 className="text-xl font-semibold">CV evaluation</h1></div>
                        <p>Voluptas, rerum eveniet! Nam vero ratione consequatur dolores tenetur possimus!</p>
                    </div>
                    <div className="col-span-1 md:col-span-2 bg-blue-100 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-3"> <ClipboardPenLine className="text-blue-800 bg-blue-300 p-1 rounded" size={30} /> <h1 className="text-xl font-semibold">CV evaluation</h1></div>
                        <p>Voluptas, rerum eveniet! Nam vero ratione consequatur dolores tenetur possimus!</p>
                    </div>
                    <div className="col-span-1 md:col-span-2 bg-green-100 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-3"> <ClipboardList  className="text-green-800 bg-green-300 p-1 rounded" size={30} /> <h1 className="text-xl font-semibold">CV evaluation</h1></div>
                        <p>Voluptas, rerum eveniet! Nam vero ratione consequatur dolores tenetur possimus!</p>
                    </div>
                    <div className="col-span-1 md:col-span-2 bg-yellow-100 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-3"> <MessageSquareMore className="text-yellow-800 bg-yellow-300 p-1 rounded" size={30} /> <h1 className="text-xl font-semibold">CV evaluation</h1></div>
                        <p>Voluptas, rerum eveniet! Nam vero ratione consequatur dolores tenetur possimus!</p>
                    </div>
                </div>

                {/* blogs */}
                
                {/* <div className="bg-gray-100 rounded-lg p-6 flex flex-col gap-4 mt-6"> */}
                <div className="flex flex-col gap-4 mt-8">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-600">Blogs</h1>
                    {blogs.map((b) =>
                        <BlogCard
                            key={b.title}
                            title={b.title}
                            content={b.content}
                            imgUrl={b.imgUrl}
                            linkUrl={b.linkUrl}
                        />
                   )}
                </div>
            </div>
        </CvLayout>
    );
}