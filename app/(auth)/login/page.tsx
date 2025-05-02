
import Image from "next/image";
import { signIn as serverSignIn } from "@/auth";
import { Button } from "@/components/ui/button";
import FormContent from "./_components/form-content";

export default function Login() {

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
             action={async (formData) => {
               "use server"
               await serverSignIn("credentials", formData)
             }}

            className="flex flex-col gap-4 text-gray-500"
          >
            <FormContent />
          </form>
          <button formAction={
            async () => {
              "use server";
              await serverSignIn("google")
            }
          }>Continue with Google</button>
        </div>
      </div>
    </div>
  );
}
