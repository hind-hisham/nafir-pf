"use client";
import useAuthContext from "../app/hooks/authprovider";
// import MentorshipCard  from '../app/components/mentorshipcard'
import MentorshipsPage from "./pages/mentorshipspage";
import BlogsCard from "./components/blogscard";
import BlogsPage from "./pages/blogspage";
import ActivitesCard from "./components/activitescard";
import ActivitesPage from "./pages/activites";
export default function Home() {
  // const { user, dispatch }:any = useAuthContext();

  // console.log("current user", user);

  return (
    <div>
      <ActivitesPage />
      {/* <MentorshipsPage /> */}
      {/* <h1>to do :Home page</h1> */}
    </div>
  );
}
