"use client";
import { trpc } from "@/client/trpc";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  
  const { data, isLoading, isError } = trpc.test.getMentorships.useQuery();

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="flex justify-start flex-col  mb-8">
        <h2 className="text-2xl font-bold text-hray-800">
          Welcome Back, <span className="text-primary"> {session?.user?.name || "Guest"} </span>
        </h2>
        <p className="text-lg text-gray-600">Here's what we've been up to!</p>
      </header>

      
      
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
