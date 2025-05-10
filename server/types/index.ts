import { ObjectIdSchema } from "@/lib/dtos";

export type APIDate = string;

export type LikesState = {
  liked_by_user: boolean;
  likes_count: number;
};
export type Activity = {
  id: ObjectIdSchema;
  name: number;
  type: string;
  department_id: string;
  time: string;
  date: string;
  //extra: LikesState;
};

export type ActivityRequestResult = {
  id: ObjectIdSchema;
  activity_id: ObjectIdSchema;
  participant_id: ObjectIdSchema;
  note: string | null;
  created_at: APIDate;
  updated_at: APIDate;
  activity: {
    passcode: string | null;
    link: string | null;
    instructions: string | null;
  };
};

export type ActivityRequestResult = {
  id: ObjectIdSchema;
  activity_id: ObjectIdSchema;
  participant_id: ObjectIdSchema;
  note: string | null;
  created_at: APIDate;
  updated_at: APIDate;
  activity: {
    passcode: string | null;
    link: string | null;
    instructions: string | null;
  };
};

export type Blog = {
  id: ObjectIdSchema;
  img: string;
  author_id: string;
  title: string;
  department_id: string;
  content: string;
  featured: boolean;
  slug: string;
  extra: LikesState;
};

export * from "./user";
