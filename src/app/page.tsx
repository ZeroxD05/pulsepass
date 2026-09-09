import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#5d5d5d] text-white">
      
      {/* Hero Section */}
      <section className="py-24 px-6 border-b-[8px] border-[#3f3f3f] bg-[#866043] overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col items-start text-left gap-6 z-10">
            <h1 className="text-5xl lg:text-6xl text-white leading-tight mc-title-shadow">
              Stop wasting time with unreadable config files.
            </h1>
            <p className="text-2xl text-gray-200 max-w-xl mt-2 mc-text-shadow">
              A fast, customizable UI-based Battle Pass for Minecraft servers. Built for Server Owners to easily set up rewards, save hours of configuration, and monetize their player base.
            </p>
            <div className="flex gap-4 mt-6">
              <Link 
                href="#pricing"
                className="mc-button text-2xl"
              >
                Get PulsePass
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Benefit Showcase */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000 z-10 mt-10 lg:mt-0">
            <style>{`
              @keyframes bounce-block {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              .anim-bounce { animation: bounce-block 2s infinite steps(4); }
            `}</style>
            
            <div className="relative mc-panel p-2 shadow-2xl overflow-hidden h-64 text-left anim-bounce mx-auto w-3/4">
              <div className="flex items-center px-4 py-3 bg-[#3f3f3f] text-white">
                <div className="mx-auto text-xl mc-text-shadow tracking-widest">PulsePass UI</div>
              </div>
              
              <div className="absolute top-16 left-0 right-0 bottom-0 p-6 flex items-center justify-center bg-[#8b8b8b]">
                <div className="mc-panel p-4 flex items-center gap-4 w-full shadow-xl">
                  <div className="w-14 h-14 bg-blue-500/30 border-4 border-[#3f3f3f] flex items-center justify-center text-3xl">💎</div>
                  <div className="flex-grow text-[#3f3f3f]">
                    <div className="font-bold text-2xl mc-text-shadow text-white">Diamond Sword</div>
                    <div className="text-xl tracking-wide mt-1">Sharpness V</div>
                  </div>
                  <div className="mc-button p-2 flex-shrink-0 text-xl">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-b-[8px] border-[#3f3f3f] bg-[#55aa55]" id="why-us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white tracking-tight mc-title-shadow">Why choose PulsePass?</h2>
            <p className="text-gray-100 mt-4 text-2xl mc-text-shadow">Server owners pay for time savings and better monetization.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="mc-panel p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#3f3f3f] text-white flex items-center justify-center text-2xl mc-text-shadow">1</div>
              <h3 className="text-3xl text-[#3f3f3f]">UI instead of Text Files</h3>
              <p className="text-xl text-[#555555] leading-relaxed">
                No more YAML errors. Create tasks and rewards directly in an ingame menu with simple clicks. Start in under 10 minutes.
              </p>
            </div>
            
            <div className="mc-panel p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#3f3f3f] text-white flex items-center justify-center text-2xl mc-text-shadow">2</div>
              <h3 className="text-3xl text-[#3f3f3f]">PC & Mobile Ready</h3>
              <p className="text-xl text-[#555555] leading-relaxed">
                Looks perfect on Java Edition and Bedrock Edition instantly. 3D models for weapons and hats are fully supported.
              </p>
            </div>
            
            <div className="mc-panel p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#3f3f3f] text-white flex items-center justify-center text-2xl mc-text-shadow">3</div>
              <h3 className="text-3xl text-[#3f3f3f]">Instant ROI</h3>
              <p className="text-xl text-[#555555] leading-relaxed">
                Players play for free, but buy the premium pass for extras. The mod pays for itself immediately through your server earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="py-16 px-6 bg-blue-500 border-b-[8px] border-blue-700">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-4xl text-white mc-title-shadow">4 Ready-to-use Themes included</h2>
          <p className="text-2xl text-blue-100 mc-text-shadow">
            Summer, Halloween, Winter, and PvP themes are ready out of the box. <br/>
            Einfachheit gewinnt: Wer Server-Besitzern lästige Arbeit erspart, setzt sich sofort gegen die Konkurrenz durch.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-[#5d5d5d]" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl text-white mc-title-shadow">Simple Pricing</h2>
            <p className="text-gray-200 mt-2 text-2xl mc-text-shadow">Pick the plan that fits your server.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 mc-panel flex flex-col">
              <h3 className="text-2xl text-[#3f3f3f] mb-1">Setup Help</h3>
              <p className="text-[#555555] text-xl mb-6">Expert assistance.</p>
              <div className="text-5xl text-[#3f3f3f] mb-8">€50<span className="text-xl"> / once</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-xl text-[#555555]">
                <li>+ Server installation</li>
                <li>+ Config troubleshooting</li>
                <li>+ Discord support</li>
              </ul>
              <Link href="/product/cmtswkhbv0006g1ragtgdha31" className="mc-button">
                Buy Setup Help
              </Link>
            </div>
            
            <div className="p-8 mc-panel border-[#55ffff] flex flex-col relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#55ffff] text-[#3f3f3f] border-4 border-[#3f3f3f] px-3 py-1 text-xl uppercase tracking-wide shadow-lg">
                Most Popular
              </div>
              <h3 className="text-2xl text-[#3f3f3f] mb-1 mt-4">Base Mod</h3>
              <p className="text-[#555555] text-xl mb-6">The complete PulsePass core.</p>
              <div className="text-5xl text-[#3f3f3f] mb-8">€24.99<span className="text-xl"> / once</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-xl text-[#555555]">
                <li>+ UI configuration</li>
                <li>+ PC & Mobile ready</li>
                <li>+ Free & Paid tiers</li>
                <li>+ 4 included themes</li>
              </ul>
              <Link href="/product/cmtswkhbu0002g1rays83ttc2" className="mc-button bg-[#55ffff]">
                Buy Base Mod
              </Link>
            </div>
            
            <div className="p-8 mc-panel flex flex-col">
              <h3 className="text-2xl text-[#3f3f3f] mb-1">Monthly Templates</h3>
              <p className="text-[#555555] text-xl mb-6">Fresh content for your server.</p>
              <div className="text-5xl text-[#3f3f3f] mb-8">€9.99<span className="text-xl"> / mo</span></div>
              <ul className="mb-8 flex flex-col gap-3 flex-grow text-xl text-[#555555]">
                <li>+ New missions monthly</li>
                <li>+ Premium 3D items</li>
                <li>+ Seasonal themes</li>
              </ul>
              <Link href="/product/cmtswkhbu0004g1ra1zld3r1b" className="mc-button">
                Subscribe Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#3f3f3f] border-b-[8px] border-[#1e1e1e]" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl text-white mc-title-shadow">Frequently Asked Questions</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="mc-panel p-6">
              <h3 className="text-2xl text-[#3f3f3f] font-bold">Do I need any programming knowledge?</h3>
              <p className="text-xl text-[#555555] mt-2">No, absolutely not. The entire setup is done directly in Minecraft via our beautiful click-based UI. No more editing YAML files or hunting for syntax errors.</p>
            </div>
            <div className="mc-panel p-6">
              <h3 className="text-2xl text-[#3f3f3f] font-bold">Does this work for Bedrock players?</h3>
              <p className="text-xl text-[#555555] mt-2">Yes! PulsePass is fully compatible with Geyser and Floodgate. The UI renders perfectly for both Java and Bedrock players simultaneously.</p>
            </div>
            <div className="mc-panel p-6">
              <h3 className="text-2xl text-[#3f3f3f] font-bold">Can I add my own 3D models?</h3>
              <p className="text-xl text-[#555555] mt-2">Yes, PulsePass seamlessly integrates with resource pack engines like Oraxen and ItemsAdder so you can use custom cosmetics as pass rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1e1e1e] text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-xl">
            © {new Date().getFullYear()} PulsePass. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xl">
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
