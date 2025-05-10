"use client";

import { type updateFormSchema, educationSchema } from "@/lib/dtos";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import SFormField from "@/components/global/SFormField";
import Section from "./_common/section-wrapper";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = educationSchema;
type FormData = z.infer<typeof updateFormSchema>;

export default function CertificationSection({ data }: { data: FormData }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      university: "",
      certificate: "",
      degree: "",
      period: {
        startDate: new Date(),
        endDate: new Date(),
      },
      description: "",
    },
  });
  const [viewedData, setViewedData] = useState(data.educations);
  const [editing, setEditing] = useState<boolean>(false);
  const onSubmit = form.handleSubmit((values) => {
    setViewedData(viewedData.concat(values));
    setEditing(false);
  });

  return (
    <Section
      {...{
        onSubmit,
        editing,
        setEditing,
        id: "certifications",
        editText: "Add",
        title: "Certifications",
      }}
    >
      <div className="space-y-6">
        {viewedData.map((certification, index) => (
          <CertificationItem key={index} certification={certification} />
        ))}
      </div>

      {editing && (
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4 mt-6">
            <SFormField
              control={form.control}
              name="certificate"
              label=""
              placeholder="Certificate"
            />
            <SFormField
              control={form.control}
              name="university"
              label=""
              placeholder="Instuition"
            />
            <div className="grid grid-cols-2 gap-4">
              <SFormField
                control={form.control}
                name="period.startDate"
                label=""
                placeholder="Start date"
                type="text"
              />
              <SFormField
                control={form.control}
                name="period.endDate"
                label=""
                placeholder="End date"
                type="text"
              />
            </div>
            <SFormField
              control={form.control}
              name="description"
              type="textarea"
              placeholder="Description"
              label=""
            />
            <Button type="submit" className="mt-4">
              Add
            </Button>
          </form>
        </Form>
      )}
    </Section>
  );
}

type CertificationItemProps = {
  certification: z.infer<typeof educationSchema>;
};

function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <div className="mb-4 p-4 border-l-4 border-blue-500 bg-white shadow rounded">
      <h3 className="text-lg font-bold">{certification.certificate}</h3>
      <p className="text-sm text-gray-600">{certification.university}</p>
      <p className="text-sm text-gray-600">
        {/* {certification.period.startDate} - {certification.period.endDate} */}
        {JSON.stringify(certification.period)}
      </p>
      <p className="mt-2">{certification.description}</p>
    </div>
  );
}
