"use client";
import { trpc } from "@/client/trpc";
// import MentorshipCard  from '../app/components/mentorshipcard'
import MentorshipsPage from "./pages/mentorshipspage";
<<<<<<< HEAD
import BlogsCard from "./components/blogscard";
import BlogsPage from "./pages/blogspage";
import ActivitesCard from "./components/activitescard";
import ActivitesPage from "./pages/activites";
=======

>>>>>>> d1c8466f02fcacf3c495eb927ee253002c9cf297
export default function Home() {
  // const { user, dispatch }:any = { dispatch : () => {}, user : null };

  // console.log("current user", user);
  const { data, isLoading, isError } = trpc.test.getMentorships.useQuery();

  return (
    <div>
<<<<<<< HEAD
      <ActivitesPage />
      {/* <MentorshipsPage /> */}
=======
      <pre>{JSON.stringify(data)}</pre>
      <MentorshipsPage />
>>>>>>> d1c8466f02fcacf3c495eb927ee253002c9cf297
      {/* <h1>to do :Home page</h1> */}
    </div>
  );
}
