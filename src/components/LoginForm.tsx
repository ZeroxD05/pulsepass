"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <button 
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm"
      >
        Sign in with Google
      </button>

      <button 
        onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
        className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm"
      >
        Sign in with Discord
      </button>
    </div>
  );
}
