import { experienceSchema, updateFormSchema } from "@/lib/dtos";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import SFormField from "@/components/global/SFormField";
import Section from "./_common/section-wrapper";
import { Button } from "@/components/ui/button";

const formSchema = experienceSchema;
type FormData = z.infer<typeof updateFormSchema>;

export default function ExperienceSection({ data }: { data: FormData }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [viewedData, setViewedData] = useState(data.experiences);
  const [editing, setEditing] = useState<boolean>(false);
  const onSubmit = form.handleSubmit((arg) => {
    setViewedData(viewedData.concat(arg));
    setEditing(false);
  });
  return (
    <Section
      {...{
        onSubmit,
        editing,
        setEditing,
        id: "experience",
        editText: "Add",
        title: "Experience",
      }}
    >
      {viewedData.map((exp, index) => (
        <ExperienceView exp={exp} key={`${exp}-${index}`} />
      ))}
      {editing && (
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <SFormField
              control={form.control}
              name="company"
              placeholder="Company"
              label=""
            />
            <SFormField
              control={form.control}
              name="title"
              placeholder="Title"
              label=""
            />
            <SFormField
              control={form.control}
              name="period.startDate"
              placeholder="Start date"
              label=""
            />
            <SFormField
              control={form.control}
              name="period.endDate"
              placeholder="End date"
              label=""
            />
            <SFormField
              control={form.control}
              name="description"
              type="textarea"
              placeholder="Role description"
              label=""
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      )}
    </Section>
  );
}

const ExperienceView = ({ exp }: { exp: z.infer<typeof experienceSchema> }) => {
  return (
    <div className="mb-4 p-4 border-l-4 border-blue-500 bg-white shadow rounded">
      <h3 className="text-lg font-bold">{exp.company}</h3>
      <p className="text-sm text-gray-600">{exp.title}</p>
      <p className="text-sm text-gray-600">
        {exp.period?.startDate} - {exp.period?.endDate}
      </p>
      <p className="mt-2">{exp.description}</p>
    </div>
  );
};
