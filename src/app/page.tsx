import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-gray-300 font-sans">
      
      {/* Hero Section */}
      <section className="py-24 px-6 border-b border-gray-800 overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col items-start text-left gap-6 z-10">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Stop wasting time with unreadable config files.
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mt-2">
              A fast, customizable UI-based Battle Pass for Minecraft servers. Built for Server Owners to easily set up rewards, save hours of configuration, and monetize their player base.
            </p>
            <div className="flex gap-4 mt-6">
              <Link 
                href="#pricing"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Get PulsePass
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Benefit Showcase */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000 z-10 mt-10 lg:mt-0">
            <style>{`
              @keyframes fade-out-in {
                0%, 45% { opacity: 1; transform: translateY(0) scale(1); }
                50%, 95% { opacity: 0; transform: translateY(-10px) scale(0.95); pointer-events: none; }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes fade-in-out {
                0%, 45% { opacity: 0; transform: translateY(10px) scale(0.95); pointer-events: none; }
                50%, 95% { opacity: 1; transform: translateY(0) scale(1); }
                100% { opacity: 0; transform: translateY(10px) scale(0.95); pointer-events: none; }
              }
              .anim-yaml { animation: fade-out-in 8s ease-in-out infinite; }
              .anim-ui { animation: fade-in-out 8s ease-in-out infinite; }
            `}</style>
            
            {/* Soft background glow behind the window */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative bg-[#0d1117] border border-gray-800 rounded-xl shadow-2xl overflow-hidden h-64 text-left">
              {/* Window Controls */}
              <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs text-gray-500 font-mono tracking-widest">quests.yml  vs  PulsePass</div>
              </div>
              
              {/* State 1: Messy YAML */}
              <div className="absolute top-12 left-0 right-0 bottom-0 p-6 flex flex-col gap-1 font-mono text-sm anim-yaml">
                <div className="text-red-400 mb-2">ERROR: Expected block end at line 42</div>
                <div className="text-purple-400">rewards:</div>
                <div className="text-gray-300 ml-4"><span className="text-blue-400">- item:</span> DIAMOND_SWORD</div>
                <div className="text-gray-300 ml-4"><span className="text-blue-400">  amount:</span> 1</div>
                <div className="text-gray-300 ml-4"><span className="text-blue-400">  enchantments:</span></div>
                <div className="text-gray-300 ml-6 flex items-center gap-2">
                  <span className="text-blue-400">-</span> "SHARPNESS: 5" 
                  <span className="text-red-500 text-xs px-2 py-0.5 bg-red-500/10 rounded">&lt;-- Syntax Error</span>
                </div>
              </div>
              
              {/* State 2: PulsePass UI */}
              <div className="absolute top-12 left-0 right-0 bottom-0 p-6 flex items-center justify-center anim-ui bg-[#0d1117]">
                <div className="bg-[#161b22] border border-blue-500/30 p-4 rounded-xl flex items-center gap-4 w-full max-w-sm shadow-xl shadow-blue-500/5">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center text-3xl">💎</div>
                  <div className="flex-grow">
                    <div className="text-white font-sans font-bold text-lg">Diamond Sword</div>
                    <div className="text-blue-400 font-sans text-xs uppercase tracking-wide mt-1">Sharpness V • Add Reward</div>
                  </div>
                  <div className="bg-blue-600 hover:bg-blue-500 cursor-pointer p-2 rounded-lg text-white transition-colors flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-b border-gray-800 bg-[#161b22]" id="why-us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Why choose PulsePass?</h2>
            <p className="text-gray-400 mt-4 text-lg">Server owners pay for time savings and better monetization.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0d1117] p-8 rounded-xl border border-gray-800 flex flex-col gap-4">
              <div className="w-10 h-10 bg-blue-900/50 text-blue-400 rounded-md flex items-center justify-center text-lg font-bold">1</div>
              <h3 className="text-xl font-bold text-white">UI instead of Text Files</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No more YAML errors. Create tasks and rewards directly in an ingame menu with simple clicks. Start in under 10 minutes.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#0d1117] p-8 rounded-xl border border-gray-800 flex flex-col gap-4">
              <div className="w-10 h-10 bg-blue-900/50 text-blue-400 rounded-md flex items-center justify-center text-lg font-bold">2</div>
              <h3 className="text-xl font-bold text-white">PC & Mobile Ready</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Looks perfect on Java Edition and Bedrock Edition instantly. 3D models for weapons and hats are fully supported.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[#0d1117] p-8 rounded-xl border border-gray-800 flex flex-col gap-4">
              <div className="w-10 h-10 bg-blue-900/50 text-blue-400 rounded-md flex items-center justify-center text-lg font-bold">3</div>
              <h3 className="text-xl font-bold text-white">Instant ROI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Players play for free, but buy the premium pass for extras. The mod pays for itself immediately through your server earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="py-16 px-6 bg-blue-900/20 border-b border-blue-900/50">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white">4 Ready-to-use Themes included</h2>
          <p className="text-blue-200">
            Summer, Halloween, Winter, and PvP themes are ready out of the box. <br/>
            Einfachheit gewinnt: Wer Server-Besitzern lästige Arbeit erspart, setzt sich sofort gegen die Konkurrenz durch.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-[#0d1117]" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Simple Pricing</h2>
            <p className="text-gray-400 mt-2">Pick the plan that fits your server.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Setup Help */}
            <div className="p-8 rounded-xl bg-[#161b22] border border-gray-800 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-1">Setup Help</h3>
              <p className="text-gray-500 text-sm mb-6">Expert assistance.</p>
              <div className="text-4xl font-bold text-white mb-8">€50<span className="text-sm font-normal text-gray-500"> / once</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Server installation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Config troubleshooting
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Discord support
                </li>
              </ul>
              <Link href="/product/cmtswkhbv0006g1ragtgdha31" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-lg text-center transition-colors text-sm border border-gray-700">
                Buy Setup Help
              </Link>
            </div>
            
            {/* Base Mod */}
            <div className="p-8 rounded-xl bg-[#161b22] border-2 border-blue-600 flex flex-col relative transform md:-translate-y-2 shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-white mb-1 mt-2">Base Mod</h3>
              <p className="text-blue-300 text-sm mb-6">The complete PulsePass core.</p>
              <div className="text-4xl font-bold text-white mb-8">€24.99<span className="text-sm font-normal text-blue-300"> / once</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  UI configuration
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  PC & Mobile ready
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Free & Paid tiers
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  4 included themes
                </li>
              </ul>
              <Link href="/product/cmtswkhbu0002g1rays83ttc2" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-center transition-colors text-sm">
                Buy Base Mod
              </Link>
            </div>
            
            {/* Monthly Templates */}
            <div className="p-8 rounded-xl bg-[#161b22] border border-gray-800 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-1">Monthly Templates</h3>
              <p className="text-gray-500 text-sm mb-6">Fresh content for your server.</p>
              <div className="text-4xl font-bold text-white mb-8">€9.99<span className="text-sm font-normal text-gray-500"> / mo</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  New missions monthly
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Premium 3D items
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Seasonal themes
                </li>
              </ul>
              <Link href="/product/cmtswkhbu0004g1ra1zld3r1b" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-lg text-center transition-colors text-sm border border-gray-700">
                Subscribe Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#161b22] border-b border-gray-800" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <details className="group bg-[#0d1117] rounded-xl border border-gray-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-bold text-white p-6 cursor-pointer select-none flex justify-between items-center hover:bg-gray-800/30 transition-colors">
                Do I need any programming knowledge?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                No, absolutely not. The entire setup is done directly in Minecraft via our beautiful click-based UI. No more editing YAML files or hunting for syntax errors.
              </div>
            </details>
            
            <details className="group bg-[#0d1117] rounded-xl border border-gray-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-bold text-white p-6 cursor-pointer select-none flex justify-between items-center hover:bg-gray-800/30 transition-colors">
                Does this work for Bedrock players?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Yes! PulsePass is fully compatible with Geyser and Floodgate. The UI renders perfectly for both Java and Bedrock players simultaneously.
              </div>
            </details>
            
            <details className="group bg-[#0d1117] rounded-xl border border-gray-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-bold text-white p-6 cursor-pointer select-none flex justify-between items-center hover:bg-gray-800/30 transition-colors">
                Can I add my own 3D models?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Yes, PulsePass seamlessly integrates with resource pack engines like Oraxen and ItemsAdder so you can use custom cosmetics as pass rewards.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0d1117] border-t border-gray-800 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PulsePass. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/imprint" className="text-gray-400 hover:text-white transition-colors">Legal Notice</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refunds" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
