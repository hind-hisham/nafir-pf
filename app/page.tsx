"use client";
import { trpc } from "@/client/trpc";
// import MentorshipCard  from '../app/components/mentorshipcard'
import MentorshipsPage from "./pages/mentorshipspage";
import BlogsCard from "./components/blogscard";
import BlogsPage from "./pages/blogspage";
import ActivitesCard from "./components/activitescard";
import ActivitesPage from "./pages/activites";
import { useSession } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession();

  // console.log(session?.user?.authToken);

  // console.log("current user", user);
  const { data, isLoading, isError } = trpc.test.getMentorships.useQuery();

  return (
    <div>
      
  {/* return <div>Welcome {session?.user?.authToken}</div>; */}
      <ActivitesPage />
      {/* <MentorshipsPage /> */}
</div>
  );
}