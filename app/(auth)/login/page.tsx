"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import GoogleSignInButton from "@/app/components/googelauth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { dispatch } = { dispatch: () => {} };

  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (res.status === 200) {
        dispatch({ type: "LOGIN", payload: res.data });
        router.push("/");
      }
    } catch (err: any) {
      console.error(err);
      setError("فشل تسجيل الدخول، تأكد من البيانات");
    } finally {
      setLoading(false);
    }
  };

  // if(loading){
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <Image src="/loading.gif" alt="Loading" width={100} height={100} />
  //     </div>
  //   );
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid lg:grid-cols-5 grid-cols-1   py-12 pX-4 lg:px-8 bg-white rounded-lg shadow">
        <div className="col-span-2 p-4 rounded-lg bg-gradient-to-b from-green-100 to-orange-300 flex flex-col items-center justify-center">
          <Image src="/nafir.svg" alt="Nafir Logo" width={250} height={250} />
          <span className="text-2xl mb-4">Welcome</span>
          <p className="font-semibold text-3xl mb-8 opacity-60">
            In Nafir Community
          </p>
          <Image src="/Group.png" alt="Slider" width={300} height={150} />
        </div>
        <div className="p-10 col-span-3">
          <h1 className="text-4xl font-semibold mb-3">Login Account</h1>
          <p className="text-gray-500 mb-8">
            Join our community and start your journey today.
          </p>
          <form
            onSubmit={handleSubmit}
            // action={async () => {
            //   "use server"
            //   await signIn("google")
            // }}

            className="flex flex-col gap-4 text-gray-500"
          >
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="email"
                placeholder="Email"
              />
            </div>

            <Button
              onClick={handleSubmit}
              type="submit"
              size={"lg"}
              className="mt-4"
            >
              login
            </Button>
            <div className="w-full relative bg-gray-300 h-[1px] my-4">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                OR
              </span>
            </div>
            <Button
              type="submit"
              onClick={handleGoogleSignIn}
              size={"lg"}
              variant="outline"
            >
              Sign Up with Google
            </Button>
            {/* <button className="border py-1.5 px-1.5 rounded-md" onClick={() => signIn("google", { callbackUrl: "/" })}> Sign Up with Google</button> */}
            {/* <GoogleSignInButton /> */}
          </form>
        </div>
      </div>
    </div>
  );
}
