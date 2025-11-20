"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingNetwork() {
  return (
    <section
      id="network"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      {/* Glowing LED Lights in dark blue */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left LED */}
        <div className="absolute top-[10%] left-[5%] w-3 h-3 bg-[#1e40af] rounded-full shadow-[0_0_20px_#1e40af,0_0_40px_#1e40af] animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[10%] left-[5%] w-3 h-3 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Top right LED */}
        <div className="absolute top-[15%] right-[8%] w-3 h-3 bg-[#1e40af] rounded-full shadow-[0_0_20px_#1e40af,0_0_40px_#1e40af] animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[15%] right-[8%] w-3 h-3 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Middle left LED */}
        <div className="absolute top-[50%] left-[3%] w-4 h-4 bg-[#1e40af] rounded-full shadow-[0_0_25px_#1e40af,0_0_50px_#1e40af] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[50%] left-[3%] w-4 h-4 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Middle right LED */}
        <div className="absolute top-[45%] right-[5%] w-3 h-3 bg-[#1e40af] rounded-full shadow-[0_0_20px_#1e40af,0_0_40px_#1e40af] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[45%] right-[5%] w-3 h-3 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Bottom left LED */}
        <div className="absolute bottom-[20%] left-[7%] w-3 h-3 bg-[#1e40af] rounded-full shadow-[0_0_20px_#1e40af,0_0_40px_#1e40af] animate-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-[20%] left-[7%] w-3 h-3 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Bottom right LED */}
        <div className="absolute bottom-[15%] right-[6%] w-4 h-4 bg-[#1e40af] rounded-full shadow-[0_0_25px_#1e40af,0_0_50px_#1e40af] animate-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-[15%] right-[6%] w-4 h-4 bg-[#1e40af] rounded-full opacity-50 blur-sm" />
        
        {/* Additional scattered LEDs */}
        <div className="absolute top-[30%] left-[10%] w-2 h-2 bg-[#1e40af] rounded-full shadow-[0_0_15px_#1e40af,0_0_30px_#1e40af] animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-[70%] right-[12%] w-2 h-2 bg-[#1e40af] rounded-full shadow-[0_0_15px_#1e40af,0_0_30px_#1e40af] animate-pulse" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-[35%] left-[12%] w-2 h-2 bg-[#1e40af] rounded-full shadow-[0_0_15px_#1e40af,0_0_30px_#1e40af] animate-pulse" style={{ animationDelay: "1.3s" }} />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-[#1e40af] rounded-full shadow-[0_0_15px_#1e40af,0_0_30px_#1e40af] animate-pulse" style={{ animationDelay: "0.4s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Join our <span className="font-semibold text-black">WhatsApp community</span> for daily insights, 
              opportunities, and meaningful connections. We host regular 
              <span className="font-semibold text-black"> in-person networking events</span> where 
              professionals come together to build relationships, share knowledge, and create opportunities.
            </p>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-500 italic">
                "The strength of your network determines the strength of your future."
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              size="lg"
              asChild
              className="!bg-[#1e40af] hover:!bg-[#1e3a8a] !text-white px-10 py-6 text-base font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
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
    </section>
  );
}
