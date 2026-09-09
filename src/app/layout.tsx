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
        <nav className="bg-mc-wood border-b-4 border-[#111] py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Golden Compass/Star Icon */}
              <div className="relative w-10 h-10 bg-yellow-400 border-4 border-yellow-600 rounded-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.8)] transform group-hover:rotate-45 transition-transform duration-300 flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-200 rotate-45 border border-yellow-700"></div>
              </div>
              <span className="text-4xl font-bold tracking-widest text-[#ffd700] mc-text-shadow mt-1">
                PULSE<span className="text-[#005ce6]">PASS</span>
              </span>
            </Link>
          </div>
          
          {/* Center: Links */}
          <div className="hidden md:flex flex-2 justify-center items-center gap-10">
            <Link href="/#products" className="text-2xl text-white hover:text-yellow-400 transition-colors mc-text-shadow">PRODUCTS</Link>
            <Link href="/#solutions" className="text-2xl text-white hover:text-yellow-400 transition-colors mc-text-shadow">SOLUTIONS</Link>
            <Link href="/#pricing" className="text-2xl text-white hover:text-yellow-400 transition-colors mc-text-shadow">PLANS</Link>
            <Link href="/#support" className="text-2xl text-white hover:text-yellow-400 transition-colors mc-text-shadow">SUPPORT</Link>
          </div>

          {/* Right: Auth / Community */}
          <div className="flex-1 flex justify-end gap-4 items-center">
            {session ? (
              <>
                <Link href="/dashboard" className="mc-btn-blue text-xl mr-4">
                  DASHBOARD
                </Link>
                <div className="cursor-pointer mc-btn-blue bg-red-600 border-red-800 border-t-red-400 border-l-red-400 hover:bg-red-500">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <Link href="/login" className="mc-btn-blue text-2xl px-6 py-2">
                COMMUNITY
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
