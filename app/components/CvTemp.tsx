import TemOne from "./cv-templates/TemOne";
import TemTwo from "./cv-templates/TemTwo";
interface CvTempProps {
  formData?: string[];
  template?: string;
}

const CvTemp: React.FC<CvTempProps> = ({template ,formData}) => {
  return (
      <div className="flex w-full p-6 flex-col">
        {!template && <p>just nothing!</p>}
        {template == "1" && <TemOne data={formData} />} 
        {template == "2" && <TemTwo data={formData } />} 
      </div>
  );
};

export default CvTemp;