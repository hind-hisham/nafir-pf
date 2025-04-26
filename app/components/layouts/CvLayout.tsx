import { ReactNode } from "react";
import CvAdviceard from "../CvAdviceard";

interface CvLayoutProps {
  children: ReactNode;
  title: string;
  listItems: string[];
}

const CvLayout: React.FC<CvLayoutProps> = ({ children, title,listItems }) => {
  return (
    <>
      <h1 className="font-semibold text-2xl">CV Optimazation</h1>
      <p className="text-gray-500 mb-10">Achieve your goal with a professional CV</p>
    <div className="grid grid-cols-5 gap-16 bg-white border rounded-lg p-8">
    <div className="col-span-5 md:col-span-3 ">
     {/* the left side */}
        {children}
      </div>
      {/* the advice card section */}
      <div className="hidden md:block col-span-2 rounded-lg bg-gradient-to-b from-green-100 to-orange-300 h-[100vh] min-h-fit">
      <CvAdviceard
        title={title}
        listItems={listItems} 
      />
      </div>
    </div>
    </>
  );
};

export default CvLayout;