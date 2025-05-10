import { SetStateAction } from "react";
import { SmallRectangle } from "./small-rectangle";

export default function RectanglesGroup({
  data,
  setData,
}: {
  data: string[];
  setData: (arg: SetStateAction<string[]>) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 mb-0">
      {data.map((skill, index) => (
        <SmallRectangle
          skill={skill}
          onClick={() => {
            setData(data.slice(0, index).concat(data.slice(index + 1)));
          }}
        />
      ))}
    </div>
  );
}
