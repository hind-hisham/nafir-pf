"use client";
import { Input } from "@/components/ui/input";
import { signIn as serverSignIn } from "@/auth";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

export default function FormContent() {
  return (
    <>
      <div className="grid w-full  items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="email" name="password" placeholder="Email" />
      </div>

      <Button type="submit" size={"lg"} className="mt-4">
        login
      </Button>
      <div className="w-full relative bg-gray-300 h-[1px] my-4">
        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
          OR
        </span>
      </div>
      {/* <button className="border py-1.5 px-1.5 rounded-md" onClick={() => signIn("google", { callbackUrl: "/" })}> Sign Up with Google</button> */}
      {/* <GoogleSignInButton /> */}
    </>
  );
}
