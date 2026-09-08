import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulsePass | The Modern Battle Pass for Minecraft Servers",
  description: "Stop wasting time with text files. PulsePass is the modern Battle Pass for Minecraft Servers with a UI, Bedrock support, and built-in monetization.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col`}>
        <nav className="bg-gray-900 border-b border-gray-800 py-4 px-8 flex items-center justify-between sticky top-0 z-50">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="text-xl font-bold tracking-tight text-blue-500">
              PulsePass
            </Link>
          </div>
          
          {/* Center: Links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <Link href="/#why-us" className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Why Us</Link>
            <Link href="/#pricing" className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Pricing</Link>
            <Link href="/#faq" className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-colors">FAQ</Link>
          </div>

          {/* Right: Auth */}
          <div className="flex-1 flex justify-end gap-4 items-center">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-colors mr-2">Home</Link>
            {session ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg border border-gray-700 cursor-pointer">Dashboard</Link>
                <div className="text-sm font-medium text-gray-400 hover:text-white cursor-pointer px-2">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <Link href="/login" className="inline-flex items-center text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg border border-gray-700 transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Log in
              </Link>
            )}
          </div>
        </nav>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
