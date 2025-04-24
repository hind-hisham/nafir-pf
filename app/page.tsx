"use client";
import { trpc } from "@/client/trpc";
// import MentorshipCard  from '../app/components/mentorshipcard'
import MentorshipsPage from "./pages/mentorshipspage";

export default function Home() {
  // const { user, dispatch }:any = { dispatch : () => {}, user : null };

  // console.log("current user", user);
  const { data, isLoading, isError } = trpc.test.getMentorships.useQuery();

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <MentorshipsPage />
      {/* <h1>to do :Home page</h1> */}
    </div>
  );
}
