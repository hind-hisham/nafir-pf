import { updateFormSchema } from "@/lib/dtos";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import SFormField from "@/components/global/SFormField";
import Section from "./_common/section-wrapper";
import { Mail, Phone, MapPinIcon } from "lucide-react";
const formSchema = updateFormSchema.pick({ phoneNumber: true });
type FormData = z.infer<typeof formSchema>;

export default function ContactInfoSection({ data }: { data: FormData }) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });
  const [viewedData, setViewedData] = useState(data);
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
        title: "Contact Info",
        id: "contact-info",
      }}
    >
      <ul className="flex flex-col space-y-2">
        <li className="flex items-center">
          <MapPinIcon className="w-4 h-4 mr-2 text-gray-500" />
          <span>Nowhere, Neverland</span>
        </li>
        <li className="flex items-center">
          <Mail className="w-4 h-4 mr-2 text-gray-500" />{" "}
          <span>test@test.org</span>
        </li>
        <li className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-gray-500" />{" "}
          {!editing ? (
            <>
              <span>{viewedData.phoneNumber}</span>
            </>
          ) : (
            <Form {...form}>
              <form onSubmit={onSubmit}>
                <SFormField
                  control={form.control}
                  type="text"
                  label=""
                  name="phoneNumber"
                  placeholder="Phone number"
                />
              </form>
            </Form>
          )}
        </li>
      </ul>
    </Section>
  );
}
