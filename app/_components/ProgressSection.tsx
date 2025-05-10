import Link from "next/link";
// import { ChevronRight } from "lucide-react";
import CircularProgressBar from "./CircularProgressBar";
import Image from "next/image";

interface ProgressSectionProps {
  title:string;
  listItems: string[];
  progressValue: number;
  progressTotal: number;
  linkUrl: string;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({title, listItems, progressValue, progressTotal, linkUrl }) => {
  return (
    <>
      <Link href={linkUrl} className="text-primary flex items-center justify-end mb-5">
        {/* Skip <ChevronRight /> */}
      </Link>
      <div className="flex w-full py-12 flex-col items-center justify-center">
        <CircularProgressBar value={progressValue} total={progressTotal} size={150} />
        <h3 className="font-semibold text-2xl mt-4">{title}</h3>
        <ul className="text-gray-500 flex flex-col gap-2 mt-8">
          {listItems.map((item, index) => (
            <li key={index} className="flex gap-2">
            <Image src="/icons/stars.png" alt="check Icon" width={20} height={20} />    
             <p>{item}</p>
             </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProgressSection;