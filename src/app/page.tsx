import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      
      {/* Hero & Background Section */}
      <section className="relative w-full flex-grow flex flex-col items-center justify-start pt-16 pb-12 px-6 min-h-[85vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg_landscape.jpg')" }}
        >
          {/* Inner shadow overlay for depth */}
          <div className="absolute inset-0 bg-black/20 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
        </div>

        {/* Framing Pillars (visual effect matching the screenshot) */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-6xl flex flex-col items-center gap-10 mt-8">
          
          {/* Hero Text Panel */}
          <div className="mc-glass-panel py-10 px-8 text-center max-w-4xl w-full flex flex-col items-center gap-6 border-b-4 border-r-4 border-black/50">
            <h1 className="text-5xl md:text-7xl text-white mc-title-shadow leading-none uppercase tracking-wide">
              Unleash Your <br /> Server's Potential
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mc-text-shadow">
              Battlepasses, Custom Systems, and 3D Assets <br /> for Modern Minecraft Communities
            </p>
            <Link href="#products" className="mc-btn-blue text-2xl mt-6 px-10 py-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              Explore Products ⏵
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6 px-4">
            
            {/* Card 1 */}
            <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
              <div className="w-32 h-32 relative mb-4 transform group-hover:scale-110 transition-transform">
                <Image src="/images/icon_battlepass.jpg" alt="Battlepass" fill className="object-cover rounded-xl shadow-lg border-2 border-[#4d4d4d]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mc-text-shadow mb-1">Battlepass Cores</h3>
              <p className="text-gray-400 text-sm">Create Engaging Pass Systems</p>
            </div>

            {/* Card 2 */}
            <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
              <div className="w-32 h-32 relative mb-4 transform group-hover:scale-110 transition-transform">
                <Image src="/images/icon_systems.jpg" alt="Custom Systems" fill className="object-cover rounded-xl shadow-lg border-2 border-[#4d4d4d]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mc-text-shadow mb-1">Custom Systems</h3>
              <p className="text-gray-400 text-sm">3D-modeled Pickaxes & More</p>
            </div>

            {/* Card 3 */}
            <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
              <div className="w-32 h-32 relative mb-4 transform group-hover:scale-110 transition-transform">
                <Image src="/images/icon_assets.jpg" alt="3D Assets" fill className="object-cover rounded-xl shadow-lg border-2 border-[#4d4d4d]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mc-text-shadow mb-1">3D Assets</h3>
              <p className="text-gray-400 text-sm">3D Cosmetic Models</p>
            </div>

            {/* Card 4 */}
            <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
              <div className="w-32 h-32 relative mb-4 transform group-hover:scale-110 transition-transform">
                <Image src="/images/icon_setups.jpg" alt="Server Setups" fill className="object-cover rounded-xl shadow-lg border-2 border-[#4d4d4d]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mc-text-shadow mb-1">Server Setups</h3>
              <p className="text-gray-400 text-sm">Plug & Play Solutions</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Customer Servers */}
      <section className="bg-[#111111] border-t-4 border-[#222222] py-8 z-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6">
          <span className="text-gray-500 uppercase tracking-widest text-xl font-bold">Customer Servers</span>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-[#5aa4ff] border-2 border-white rounded-sm shadow-md"></div><span className="text-2xl font-bold mc-text-shadow">PulsePass</span></div>
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-yellow-500 border-2 border-white rounded-sm shadow-md"></div><span className="text-2xl font-bold mc-text-shadow">PulsePass</span></div>
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-orange-600 border-2 border-white rounded-sm shadow-md"></div><span className="text-2xl font-bold mc-text-shadow">Gif16ram</span></div>
          </div>
        </div>
      </section>
      
      {/* Bottom Legal Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-lg text-gray-500 gap-4">
          <div className="font-bold text-[#333333]">FASTMARINE SERVER</div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">PRODUCTS</Link>
            <Link href="#" className="hover:text-white transition-colors">LINK</Link>
            <Link href="#" className="hover:text-white transition-colors">PLANS</Link>
            <Link href="#" className="hover:text-white transition-colors">SLUG</Link>
          </div>
          <div className="flex gap-6 text-2xl">
            <span className="cursor-pointer hover:text-white">🐦</span>
            <span className="cursor-pointer hover:text-white">📘</span>
            <span className="cursor-pointer hover:text-white">📷</span>
            <span className="cursor-pointer hover:text-white">👾</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
