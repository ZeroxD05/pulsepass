import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full flex-grow flex flex-col items-center justify-center min-h-[85vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg_landscape.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Pillars (Left and Right) */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 z-10 flex flex-col">
          <div className="flex-1 bg-mc-stone border-r-4 border-[#333]"></div>
          <div className="h-16 bg-[#4d3319] border-r-4 border-t-4 border-[#2b1d14] flex-shrink-0"></div> {/* Grass Foundation */}
        </div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 z-10 flex flex-col">
          <div className="flex-1 bg-mc-stone border-l-4 border-[#333]"></div>
          <div className="h-16 bg-[#4d3319] border-l-4 border-t-4 border-[#2b1d14] flex-shrink-0"></div> {/* Grass Foundation */}
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-5xl flex flex-col items-center px-4">
          
          {/* Glass Panel */}
          <div className="mc-glass-panel py-12 px-10 text-center w-full flex flex-col items-center gap-6">
            <h1 className="text-5xl md:text-7xl mc-title-shadow leading-tight uppercase tracking-wide">
              <span className="text-[#ffd700]">UNLEASH YOUR </span> <br /> 
              <span className="text-white">SERVER'S POTENTIAL</span>
            </h1>
            <p className="text-2xl text-white mc-text-shadow">
              Battlepasses, Custom Systems, and 3D Assets for Modern Minecraft Communities
            </p>
            <Link href="#products" className="mc-btn-blue text-3xl mt-8 px-12 py-5 shadow-[0_0_30px_rgba(0,92,230,0.8)] group flex items-center gap-4">
              EXPLORE PRODUCTS
              <span className="text-[#5aa4ff] text-2xl group-hover:translate-x-2 transition-transform">-{">"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="bg-mc-wood border-t-8 border-[#111] py-16 px-8 z-20 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          {/* Card 1 */}
          <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
            <div className="w-40 h-40 relative mb-6 transform group-hover:scale-110 transition-transform">
              <Image src="/images/icon_battlepass.jpg" alt="Battlepass Cores" fill className="object-cover rounded-md border-2 border-[#333]" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mc-text-shadow mb-2">BATTLEPASS CORES</h3>
            <p className="text-gray-300 text-lg">Create Engaging Pass Systems</p>
          </div>

          {/* Card 2 */}
          <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
            <div className="w-40 h-40 relative mb-6 transform group-hover:scale-110 transition-transform">
              <Image src="/images/icon_systems.jpg" alt="Custom Systems" fill className="object-cover rounded-md border-2 border-[#333]" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mc-text-shadow mb-2">CUSTOM SYSTEMS</h3>
            <p className="text-gray-300 text-lg">3D-modelled Pickaxe</p>
          </div>

          {/* Card 3 */}
          <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
            <div className="w-40 h-40 relative mb-6 transform group-hover:scale-110 transition-transform">
              <Image src="/images/icon_assets.jpg" alt="3D Assets" fill className="object-cover rounded-md border-2 border-[#333]" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mc-text-shadow mb-2">3D ASSETS</h3>
            <p className="text-gray-300 text-lg">3D Cosmetic models</p>
          </div>

          {/* Card 4 */}
          <div className="mc-card p-6 flex flex-col items-center text-center cursor-pointer group">
            <div className="w-40 h-40 relative mb-6 transform group-hover:scale-110 transition-transform">
              <Image src="/images/icon_setups.jpg" alt="Server Setups" fill className="object-cover rounded-md border-2 border-[#333]" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mc-text-shadow mb-2">SERVER SETUPS</h3>
            <p className="text-gray-300 text-lg">Plug & Play Solutions</p>
          </div>

        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="bg-mc-wood border-t-8 border-[#111] py-12 z-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-6">
          <span className="text-white mc-text-shadow text-3xl font-bold">CUSTOMER SERVERS</span>
          <div className="flex flex-wrap justify-center gap-16 items-center">
            <span className="text-4xl font-bold mc-text-shadow text-[#005ce6]">PULSEPASS</span>
            <span className="text-4xl font-bold mc-text-shadow text-[#ffd700]">PULSEPASS</span>
            <span className="text-4xl font-bold mc-text-shadow text-white">Gif16ram</span>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#050505] border-t-4 border-black py-8 text-center relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
          
          <div className="text-2xl font-bold text-green-500 mc-text-shadow tracking-widest">
            FASTMARINE SERVER
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-xl font-bold">
            <Link href="#" className="text-white hover:text-yellow-400 mc-text-shadow">PRODUCTS ^</Link>
            <Link href="#" className="text-white hover:text-yellow-400 mc-text-shadow">LINK ^</Link>
            <Link href="#" className="text-white hover:text-yellow-400 mc-text-shadow">PLANS</Link>
            <Link href="#" className="text-white hover:text-yellow-400 mc-text-shadow flex items-center gap-2">
              SIGN <span className="text-[#5aa4ff] text-xl">-{">"}</span>
            </Link>
          </div>
          
          {/* Social Media */}
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-[#005ce6] rounded-full flex items-center justify-center text-white border-2 border-black hover:bg-[#0073ff] shadow-[0_0_10px_rgba(0,92,230,0.8)]">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#005ce6] rounded-full flex items-center justify-center text-white border-2 border-black hover:bg-[#0073ff] shadow-[0_0_10px_rgba(0,92,230,0.8)]">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#005ce6] rounded-full flex items-center justify-center text-white border-2 border-black hover:bg-[#0073ff] shadow-[0_0_10px_rgba(0,92,230,0.8)]">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#005ce6] rounded-full flex items-center justify-center text-white border-2 border-black hover:bg-[#0073ff] shadow-[0_0_10px_rgba(0,92,230,0.8)]">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#005ce6] rounded-full flex items-center justify-center text-white border-2 border-black hover:bg-[#0073ff] shadow-[0_0_10px_rgba(0,92,230,0.8)]">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
