import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Sign in to your account</p>
        </div>
        
        <LoginForm />

        <div className="text-center mt-4">
          <Link href="/" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
