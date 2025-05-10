import { updateFormSchema } from "@/lib/dtos";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import SFormField from "@/components/global/SFormField";
import Section from "./_common/section-wrapper";

const formSchema = updateFormSchema.pick({ careerTasks: true });
type FormData = z.infer<typeof formSchema>;

export default function ProfessionalSummarySection({
  data,
}: {
  data: FormData;
}) {
  const [viewedData, setViewedData] = useState(data);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });
  const [editing, setEditing] = useState<boolean>(false);
  const onSubmit = form.handleSubmit((arg: any) => {
    setViewedData(arg);
    setEditing(false);
  });
  return (
    <Section
      {...{
        editing,
        setEditing,
        onSubmit,
        title: "Professional Summary",
        id: "professional-summary",
      }}
    >
      {!editing ? (
        <>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {viewedData.careerTasks}
          </div>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <SFormField
              control={form.control}
              type="text"
              label=""
              name="careerTasks"
              placeholder="Career description"
            />
          </form>
        </Form>
      )}
    </Section>
  );
}
