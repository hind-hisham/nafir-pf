"use client";
import useAuthContext from "../app/hooks/authprovider";
// import MentorshipCard  from '../app/components/mentorshipcard'
import MentorshipsPage from "./pages/mentorshipspage";
export default function Home() {
  // const { user, dispatch }:any = useAuthContext();

  // console.log("current user", user);

  return (
    <div>
      
      <MentorshipsPage />
      {/* <h1>to do :Home page</h1> */}
    </div>
  );
}
