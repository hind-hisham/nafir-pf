import Section from "./_common/section-wrapper";
import { updateFormSchema } from "@/lib/dtos";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { SmallRectangle } from "./_common/small-rectangle";
import RectanglesGroup from "./_common/reactangles-group";
import { RectanglesGroup2 } from "./_common/rectangles-group2";

const formSchema = updateFormSchema.pick({ skills: true });
type FormData = z.infer<typeof formSchema>;

export default function SkillsSection({ data }: { data: FormData }) {
  const [editing, setEditing] = useState<boolean>(false);
  const [viewedData, setViewedData] = useState<string[]>(data.skills);
  const onSubmit = (arg: any) => {
    viewedData.push("added");
    setEditing(false);
  };

  return (
    <Section
      {...{
        editing,
        setEditing,
        onSubmit,
        title: "Skills 2",
        id: "skills",
        editText: "NO",
      }}
    >
      <RectanglesGroup2 value={viewedData} onChange={setViewedData} />
    </Section>
  );
}
