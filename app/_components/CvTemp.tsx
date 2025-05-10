import TemOne from "./cv-templates/TemOne";
import TemThree from "./cv-templates/TemThree";
import TemTwo from "./cv-templates/TemTwo";
interface CvTempProps {
  formData?: string[];
  template?: string;
}

const CvTemp: React.FC<CvTempProps> = ({template ,formData}) => {
  return (
      <div className="flex w-full flex-col items-center justify-center">
        {!template && <p>just nothing!</p>}
        {template == "1" && <TemOne data={formData} />} 
        {template == "2" && <TemTwo data={formData } />}
        {template == "3" && <TemThree data={formData } />} 
      </div>
  );
};

export default CvTemp;