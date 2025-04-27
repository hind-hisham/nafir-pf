import { ReactNode } from "react";
import CvTemp from "../CvTemp";

interface CvBuilderLayoutProps {
  children: ReactNode;
  formData: {
    name: string;
    email:string;
    phone:string
  }
  template:string | null
}

const CvBuilderLayout: React.FC<CvBuilderLayoutProps> = ({ children,formData,template}) => {
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
      <CvTemp
        template={template}
        formData={formData}
      />
      </div>
    </div>
    </>
  );
};

export default CvBuilderLayout;