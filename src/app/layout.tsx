import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulsePass | The Modern Battle Pass for Minecraft Servers",
  description: "Stop wasting time with text files. PulsePass is the modern Battle Pass for Minecraft Servers with a UI, Bedrock support, and built-in monetization.",
};

import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={`${vt323.className} text-xl bg-[#5d5d5d] text-white antialiased min-h-screen flex flex-col`} style={{ imageRendering: "pixelated" }}>
        <nav className="bg-[#1a1a1a] border-b-4 border-[#333333] py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-xl">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-yellow-500 border-2 border-yellow-300 flex items-center justify-center font-bold text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.3)] transform group-hover:scale-105 transition-transform">
                P
              </div>
              <span className="text-3xl font-bold tracking-widest text-[#5aa4ff] mc-text-shadow mt-1">
                PULSE<span className="text-white">PASS</span>
              </span>
            </Link>
          </div>
          
          {/* Center: Links */}
          <div className="hidden md:flex flex-2 justify-center items-center gap-8">
            <Link href="/#products" className="text-2xl text-gray-300 hover:text-white transition-colors mc-text-shadow">PRODUCTS</Link>
            <Link href="/#solutions" className="text-2xl text-gray-300 hover:text-white transition-colors mc-text-shadow">SOLUTIONS</Link>
            <Link href="/#pricing" className="text-2xl text-gray-300 hover:text-white transition-colors mc-text-shadow">PLANS</Link>
            <Link href="/#support" className="text-2xl text-gray-300 hover:text-white transition-colors mc-text-shadow">SUPPORT</Link>
          </div>

          {/* Right: Auth / Community */}
          <div className="flex-1 flex justify-end gap-4 items-center">
            {session ? (
              <>
                <Link href="/dashboard" className="text-2xl text-gray-300 hover:text-white mc-text-shadow transition-colors mr-4">DASHBOARD</Link>
                <div className="cursor-pointer">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <Link href="/login" className="mc-btn-blue text-2xl">
                COMMUNITY ⏵
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
