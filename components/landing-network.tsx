"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingNetwork() {
  return (
    <section
      id="network"
      className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden"
    >
      {/* Corporate background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Corporate border accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e40af]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e40af]/30 to-transparent" />
        
        {/* Mixed directional LED lines - Left side */}
        <div className="absolute top-[12%] left-[4%] w-0.5 h-16 bg-[#1e40af] opacity-70 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[12%] left-[4%] w-2 h-2 border-t-2 border-l-2 border-[#1e40af] opacity-70" />
        
        <div className="absolute top-[35%] left-[6%] w-0.5 h-20 bg-[#1e40af] opacity-60 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "1.2s", transform: 'scaleY(-1)' }} />
        <div className="absolute top-[35%] left-[6%] w-2 h-2 border-b-2 border-l-2 border-[#1e40af] opacity-60" />
        
        <div className="absolute top-[55%] left-[3%] w-0.5 h-14 bg-[#1e40af] opacity-80 shadow-[0_0_12px_#1e40af] animate-pulse" style={{ animationDelay: "0.6s" }} />
        <div className="absolute top-[55%] left-[3%] w-2 h-2 border-t-2 border-l-2 border-[#1e40af] opacity-80" />
        
        <div className="absolute bottom-[25%] left-[5%] w-0.5 h-18 bg-[#1e40af] opacity-65 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "1.5s", transform: 'scaleY(-1)' }} />
        <div className="absolute bottom-[25%] left-[5%] w-2 h-2 border-b-2 border-l-2 border-[#1e40af] opacity-65" />
        
        <div className="absolute bottom-[12%] left-[7%] w-0.5 h-12 bg-[#1e40af] opacity-75 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-[12%] left-[7%] w-2 h-2 border-t-2 border-l-2 border-[#1e40af] opacity-75" />
        
        {/* Mixed directional LED lines - Right side */}
        <div className="absolute top-[18%] right-[5%] w-0.5 h-22 bg-[#1e40af] opacity-70 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "0.8s", transform: 'scaleY(-1)' }} />
        <div className="absolute top-[18%] right-[5%] w-2 h-2 border-b-2 border-r-2 border-[#1e40af] opacity-70" />
        
        <div className="absolute top-[40%] right-[7%] w-0.5 h-16 bg-[#1e40af] opacity-80 shadow-[0_0_12px_#1e40af] animate-pulse" style={{ animationDelay: "1.1s" }} />
        <div className="absolute top-[40%] right-[7%] w-2 h-2 border-t-2 border-r-2 border-[#1e40af] opacity-80" />
        
        <div className="absolute top-[65%] right-[4%] w-0.5 h-14 bg-[#1e40af] opacity-60 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "0.5s", transform: 'scaleY(-1)' }} />
        <div className="absolute top-[65%] right-[4%] w-2 h-2 border-b-2 border-r-2 border-[#1e40af] opacity-60" />
        
        <div className="absolute bottom-[30%] right-[6%] w-0.5 h-20 bg-[#1e40af] opacity-75 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "1.3s" }} />
        <div className="absolute bottom-[30%] right-[6%] w-2 h-2 border-t-2 border-r-2 border-[#1e40af] opacity-75" />
        
        <div className="absolute bottom-[15%] right-[8%] w-0.5 h-16 bg-[#1e40af] opacity-65 shadow-[0_0_10px_#1e40af] animate-pulse" style={{ animationDelay: "0.9s", transform: 'scaleY(-1)' }} />
        <div className="absolute bottom-[15%] right-[8%] w-2 h-2 border-b-2 border-r-2 border-[#1e40af] opacity-65" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Corporate frame container */}
        <div className="relative">
          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#1e40af]/20" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#1e40af]/20" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#1e40af]/20" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#1e40af]/20" />
          
          {/* Logo - centered above */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/the youu network - Logo Transparent.PNG"
            alt="The Youu Network"
            className="w-auto h-40 md:h-52 lg:h-64"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              The Power of <span className="text-[#1e40af]">Community</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Connect with entrepreneurs, investors, and professionals who understand that 
              <span className="font-semibold text-black"> your network is your net worth</span>.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm border border-[#1e40af]/10 rounded-lg p-6 md:p-8 shadow-sm">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Join our <span className="font-semibold text-black">WhatsApp community</span> for daily insights, 
                opportunities, and meaningful connections. We host regular 
                <span className="font-semibold text-black"> in-person networking events</span> where 
                professionals come together to build relationships, share knowledge, and create opportunities.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#1e40af]/20">
              <p className="text-sm md:text-base text-gray-600 italic">
                "The strength of your network determines the strength of your future."
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              size="lg"
              asChild
              className="!bg-[#1e40af] hover:!bg-[#1e3a8a] !text-white px-10 py-6 text-base font-semibold rounded-sm shadow-lg hover:shadow-xl transition-all duration-200 border border-[#1e3a8a]/20"
            >
              <Link
                href="https://chat.whatsapp.com/LMHrYWeo9ttFWDs7es2qaT?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join The Network
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
