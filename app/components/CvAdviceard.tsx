import Image from "next/image";
import Link from "next/link";

interface CvAdviceardProps {
  title:string;
  listItems: string[];
}

const CvAdviceard: React.FC<CvAdviceardProps> = ({title, listItems}) => {
  return (
      <div className="flex w-full p-6 flex-col">
        <div className="mb-4 flex flex-col gap-2">
            <h2 className="font-semibold text-2xl text-orange-700/60">Get an ATS-compliant resume</h2>
          
            <p className="text-gray-500">
            Get an ATS-compliant resume to ensure you have a better chance of landing your dream job. Make a great first impression!
            </p>
            <Link href="/login" className="my-10 w-full bg-primary text-white p-4 rounded-lg text-center">Login</Link>
        </div>

        <h3 className="font-semibold text-2xl text-orange-700/60">{title}</h3>
        <ul className="text-gray-500 flex flex-col gap-2 mt-8">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
            <Image src="/icons/stars.png" alt="check Icon" width={20} height={20} />    
             <p>{item}</p>
             </li>
          ))}
        </ul>
      </div>
  );
};

export default CvAdviceard;