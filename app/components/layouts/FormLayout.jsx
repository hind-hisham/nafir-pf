import { ReactNode } from "react";
import ProgressSection from "../ProgressSection";


const FormLayout = ({ children, title,listItems, progressValue, progressTotal, linkUrl }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
    <div className="col-span-3 bg-white border rounded-lg p-8">
      <h1 className="font-semibold text-2xl">Personal Information</h1>
      <p className="text-gray-500 mb-10">More Information About You</p>
     {/* the form */}
        {children}
      </div>
      {/* the progress bar section */}
      <div className="col-span-2 bg-white border p-4 rounded-lg">
      <ProgressSection
        title={title}
        listItems={listItems} 
        progressValue={progressValue} 
        progressTotal={progressTotal} 
        linkUrl={linkUrl} 
      />
      </div>
    </div>
  );
};

export default FormLayout;