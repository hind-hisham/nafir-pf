import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function Signup() {
  return (
    <div className="grid grid-cols-5 py-12 pX-4 lg:px-8 bg-white rounded-lg shadow">
      <div className="col-span-2 rounded-lg bg-gradient-to-b from-green-100 to-orange-300 flex flex-col items-center justify-center">
        <Image src="/nafir.svg" alt="Nafir Logo" width={250} height={250} />
        <span className="text-2xl mb-4">Welcome</span>
        <p className="font-semibold text-3xl mb-8 opacity-60">In Nafir Community</p>
        <Image src="/Group.png" alt="Slider" width={300} height={150} />
      </div>
      <div className="p-10 col-span-3">
        <h1 className="text-4xl font-semibold mb-3">Create New Account</h1>
        <p className="text-gray-500 mb-8">
          Join our community and start your journey today.
        </p>
        <form className="flex flex-col gap-4 text-gray-500">
          <div className="flex w-full gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="first-name">First Name</Label>
              <Input type="text" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="last-name">Last Name</Label>
              <Input type="text" id="email" placeholder="Email" />
            </div>
          </div>

        <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="email" placeholder="Email" />
    </div>
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="confirm-password">Confirm Password</Label>
      <Input type="password" id="email" placeholder="Email" />
    </div>

          <Button size={"lg"} className="mt-4">
            Sign Up
          </Button>
          <div className="w-full relative bg-gray-300 h-[1px] my-4">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">OR</span></div>
          <Button size={"lg"} variant="outline">
            Sign Up with Google
          </Button>
        </form>
      </div>
    </div>
  );
};