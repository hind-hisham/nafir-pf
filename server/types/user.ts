import { ObjectIdSchema } from "@/lib/dtos";
import { DefaultSession } from "next-auth";

export type TransmittedUser = {
  id: ObjectIdSchema;
  name: string;
  email: string;
  profile_pic: string;
  authToken: string;
  role: "mentor" | "user" | "_unregistered";
} & DefaultSession["user"];
