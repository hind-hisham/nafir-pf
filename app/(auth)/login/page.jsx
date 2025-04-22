"use client";
// import Image from "next/image";?
import { signIn } from "@/auth";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useState } from "react";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      setError(null);
      console.log("Login successful");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

const handellog = ()=>{
  console.log('dfdffd')

}

  return (
    <div dir="rtl" className='flex justify-center'>
    <div className="grid grid-cols-7 max-w-[1062px]  py-12 p-4 lg:px-8 bg-white rounded-lg shadow">
      <div className="col-span-3 w-[410px] rounded-lg bg-gradient-to-b from-green-100 to-orange-300 flex flex-col items-center justify-center">
        {/* <Image src="/nafir.svg" alt="Nafir Logo" width={250} height={250} /> */}
        <span className="text-2xl mb-4">Welcome</span>
        <p className="font-semibold text-3xl mb-8 opacity-60">In Nafir Community</p>
        {/* <Image src="/Group.png" alt="Slider" width={300} height={150} /> */}
      </div>
      <div className="p-10 col-span-4">
        <h1 className="text-4xl font-semibold mb-3">تسجيل دخول</h1>
        <p className="text-gray-500 mb-8">
        قم بالتسجيل في مجتمع المبادرة واحصل على افضل الخدمات 
        </p>
        <form 
        
        action={async () => {
          "use server"
          await signIn("google")
        }}
        
        className="flex flex-col gap-4 text-gray-500" onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">بريد إلكتروني</Label>
              <Input
                type="email"
                id="email"
                placeholder="بريد إلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">كلمة السر</Label>
              <Input
                type="password"
                id="password"
                placeholder="كلمة السر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="button"
        onClick={handleLogin}
              size="lg"
              className="mt-4"
            >
              تسجيل الدخول
            </Button>


            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
            {token && (
              <div className="text-green-500 text-sm mt-2">
                تم تسجيل الدخول بنجاح
              </div>
            )}

            <div className="w-full relative bg-gray-300 h-[1px] my-4">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                أو
              </span>
            </div>

            <button type="submit">Signin with Google</button>

          </form>
      </div>
    </div>
    </div>
  );
};