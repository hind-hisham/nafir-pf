import { Button } from "@/components/ui/button";
import { Pencil, Check, Trash } from "lucide-react";
import { ReactNode } from "react";
export type SectionProps = {
  onSubmit: any;
  editing: boolean;
  setEditing: (state: boolean) => void;
  title: string;
  id: string;
  children: ReactNode;
  editText?: string;
};
export default function Section({
  onSubmit,
  editing,
  setEditing,
  title,
  id,
  children,
  editText = "Edit",
}: SectionProps) {
  const handleClick = () => {
    if (editing) onSubmit();
    else setEditing(true);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-6" id={id}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        {editText !== "NO" ? (
          editing ? (
            <div>
              <Button variant="outline" size="sm" onClick={onSubmit}>
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditing(false)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditing(true)}
              >
                <Pencil className="h-4 w-4 mr-2" /> {editText}
              </Button>
            </>
          )
        ) : (
          <></>
        )}
      </div>
      {children}
    </div>
  );
}
