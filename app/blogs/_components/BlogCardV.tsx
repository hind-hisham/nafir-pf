import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title:string;
    content: string;
    imgUrl: string;
    linkUrl: string
}
const BlogCardV: React.FC<BlogCardProps>=({title,content, imgUrl, linkUrl}) =>{
    return (
        <div key={title} className="flex flex-col gap-4 w-full m-6 relative max-w-[370px]">
            <button className="bg-white rounded-sm absolute top-2 right-2 border p-1">
            <Heart strokeWidth={0.5} />
            </button>
                        <div className="rounded overflow-hidden">
                            <Image src={imgUrl} alt="Nafir Logo" width={700} height={700}/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                            <h1 className="text-xl font-semibold mb-4">{title}</h1> 
                            <p>
                                {content.length > 100
                                    ? content.slice(0, 100) + "..."
                                    : content}
                            </p>
                            </div>
                            <Link href={linkUrl} type="button" className="underline mt-4">
                                Read More
                            </Link>
                    </div>                    
                </div>
    );
}

export default BlogCardV