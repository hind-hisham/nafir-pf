"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuthContext from "../hooks/authprovider";

export default function GoogleSignInButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { dispatch } = useAuthContext();

  useEffect(() => {
    let didRun = false;
  
    const sendToBack = async () => {
      if (!didRun && session?.user?.email) {
        didRun = true;
        try {
          const res = await axios.post("http://localhost:8000/api/sauth", {
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
          });
  
          console.log("Backend login success:", res.data);
          if (res.status === 200) {
            dispatch({ type: "LOGIN", payload: res.data });
            router.push("/");
          }
        } catch (err: any) {
          console.error("Backend login error:", err);
        }
      }
    };
  
    if (status === "authenticated") {
      sendToBack();
    }
  
    return () => {
      didRun = true; // ensure cleanup
    };
  }, [session, status]);
  
  
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google"); 
    } catch (error:any) {
      console.error("Google sign-in error:", error);
      console.log(error.message)
    }
  };

  return (
    <Button
      variant="outline"
      className="flex items-center justify-center gap-2 border w-full"
      onClick={handleGoogleSignIn}
    >
      Sign In with Google
    </Button>
  );
}
