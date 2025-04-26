import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title:string;
    content: string;
    imgUrl: string;
    linkUrl: string
}
const BlogCard: React.FC<BlogCardProps>=({title,content, imgUrl, linkUrl}) =>{
    return (
        <div key={title} className="flex gap-4 w-full bg-white rounded p-6 border">
                        <div className="rounded overflow-hidden">
                            <Image src={imgUrl} alt="Nafir Logo" width={700} height={700}/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                            <h1 className="text-xl font-semibold mb-2">{title}</h1> 
                            <p className="text-gray-500">{content}</p>
                            </div>
                            <Link href={linkUrl} type="button" className="underline text-primary self-end">
                                Read More
                            </Link>
                    </div>                    
                </div>
    );
}

export default BlogCard