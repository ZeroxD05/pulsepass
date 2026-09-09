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
        <nav className="bg-mc-wood py-3 px-8 flex items-center justify-between sticky top-0 z-50">
          
          {/* Left: Logo */}
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* 3D Gold/Blue Block Logo */}
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#ffd700] border-4 border-[#ccaa00] z-20 shadow-[-2px_2px_0_#005ce6]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#005ce6] border-4 border-[#003380] z-10"></div>
              </div>
              <span className="text-4xl font-bold tracking-widest mc-text-shadow mt-1">
                <span className="text-[#ffd700]">PULSE</span><span className="text-[#005ce6]">PASS</span>
              </span>
            </Link>
          </div>
          
          {/* Center: Links & Buttons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex justify-center items-center gap-10">
            <Link href="/#products" className="text-2xl text-white hover:text-gray-300 transition-colors mc-text-shadow">PRODUCTS</Link>
            <Link href="/#solutions" className="text-2xl text-white hover:text-gray-300 transition-colors mc-text-shadow">SOLUTIONS</Link>
            <Link href="/#pricing" className="text-2xl text-white hover:text-gray-300 transition-colors mc-text-shadow">PLANS</Link>
            <Link href="/#support" className="text-2xl text-white hover:text-gray-300 transition-colors mc-text-shadow">SUPPORT</Link>
            
            {session ? (
              <>
                <Link href="/dashboard" className="mc-btn-blue text-xl">
                  DASHBOARD
                </Link>
                <div className="cursor-pointer mc-btn-blue" style={{backgroundColor: '#e60000', borderBottomColor: '#800000', borderRightColor: '#800000', borderTopColor: '#ff5a5a', borderLeftColor: '#ff5a5a'}}>
                  <LogoutButton />
                </div>
              </>
            ) : (
              <Link href="/login" className="mc-btn-blue text-2xl px-6 py-2">
                COMMUNITY
              </Link>
            )}
          </div>

          {/* Right: Empty for balance */}
          <div className="w-24"></div>
        </nav>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
