"use client";
import React, { useState } from 'react';
import { Bolt, ShieldCheck, Layers, Smartphone, ArrowRight, Wallet, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const INSTALL_LINK = "https://expo.dev/accounts/kadobitech/projects/kadobipay/builds/3e8144d7-7757-4485-8df0-18e07b1fecdc";
  
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 relative overflow-hidden rounded-lg md:rounded-xl shadow-lg">
              <img src="/splash.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl md:text-2xl font-black text-[#003366] tracking-tight">KadobiPay</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-slate-600 font-bold hover:text-[#003366]">Architecture</button>
            <a href={INSTALL_LINK} className="flex items-center gap-2 bg-[#003366] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm md:text-base hover:bg-blue-800 transition-all shadow-md">
              <span className="hidden sm:inline">Get Beta</span>
              <span className="sm:hidden">Beta</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 md:pt-48 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#003366] font-bold text-xs md:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              ZAMBIA'S NEXT-GEN FINTECH
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#003366] leading-[1] md:leading-[0.9] tracking-tighter">
              The evolution <br />
              <span className="text-blue-600">of payments.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience a premium interface designed for speed and sovereignty. Powered by KadobiTech for the Zambian digital economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={INSTALL_LINK} className="px-8 py-4 md:px-10 md:py-5 bg-[#003366] text-white rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                <Smartphone size={20} /> Install App
              </a>
              <button className="px-8 py-4 md:px-10 md:py-5 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                The Roadmap
              </button>
            </div>
          </div>

          {/* APP MOCKUP */}
          <div className="relative flex justify-center lg:justify-end scale-75 sm:scale-90 md:scale-100 mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/20 blur-[80px] md:blur-[120px] rounded-full"></div>
            <div className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px] bg-[#003366] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-900 shadow-2xl overflow-hidden group">
               <div className="absolute top-0 w-full h-6 md:h-8 bg-slate-900 flex justify-center items-end pb-1">
                  <div className="w-16 md:w-20 h-3 md:h-4 bg-black rounded-full"></div>
               </div>
               <div className="h-full flex flex-col items-center justify-center p-6 md:p-8 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-2xl overflow-hidden mb-6 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                    <img src="/splash.png" alt="Splash" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-white text-xl md:text-2xl font-bold">KadobiPay</h2>
                  <p className="text-blue-200 text-[10px] md:text-xs mt-2 font-mono uppercase tracking-widest">payments made easier</p>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[300px]">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-[#003366] rounded-xl md:rounded-2xl flex items-center justify-center mb-6">
                  <Layers size={28} />
               </div>
               <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#003366] mb-4">The KadobiTech Core</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Our mission is to revolutionize the Zambian economy by providing innovative solutions to everyday problems.
                  </p>
               </div>
            </div>

            <div className="bg-[#003366] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col justify-end min-h-[200px] relative overflow-hidden">
               <ShieldCheck className="absolute -top-4 -right-4 opacity-10" size={100} />
               <h3 className="text-xl font-bold mb-2">Zero-Trust Security</h3>
               <p className="text-blue-100 text-sm">Biometric auth locked to your device's hardware ID.</p>
            </div>

            <div className="bg-blue-600 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col justify-end min-h-[200px]">
               <Bolt size={32} className="mb-4" />
               <h3 className="text-xl font-bold mb-2">Instant Settlement</h3>
               <p className="text-blue-50 text-sm">Send and receive funds in milliseconds.</p>
            </div>

            <div className="md:col-span-1 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 flex items-center gap-4">
               <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                  <Wallet size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-[#003366]">Low Fees</h3>
                  <p className="text-slate-500 text-xs">Built for the young entrepreneur.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WAITLIST SECTION --- */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-[#003366] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
          <div className="relative z-10">
            {isSubmitted ? (
              <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black">You're in.</h2>
                <p className="text-blue-100 text-base md:text-lg">We'll notify you when we go live.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8">Join the inner circle.</h2>
                <p className="text-blue-100 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto">Secure your spot on the waitlist for the iOS and Web launch.</p>
                <form onSubmit={handleWaitlist} className="flex flex-col gap-3 max-w-md mx-auto">
                  <input 
                    type="email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none"
                  />
                  <button type="submit" className="w-full px-8 py-4 bg-white text-[#003366] font-extrabold rounded-2xl hover:bg-blue-50 transition-all active:scale-95">
                    Join Waitlist
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 md:py-16 text-center border-t border-slate-100 bg-white px-6">
        <p className="text-slate-400 font-bold tracking-[0.3em] text-[10px] mb-4 uppercase">A Product of</p>
        <h3 className="text-2xl md:text-3xl font-black text-[#003366] mb-8 tracking-tighter uppercase">Kadobitech</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-slate-400 font-medium text-sm">
          <a href="#" className="hover:text-[#003366]">Privacy</a>
          <a href="#" className="hover:text-[#003366]">Terms</a>
          <a href="#" className="hover:text-[#003366]">Twitter</a>
        </div>
        <p className="text-slate-400 text-[10px] md:text-xs">© 2025 KadobiPay. Built for Africa.</p>
      </footer>
    </div>
  );
}