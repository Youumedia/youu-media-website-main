"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingNetwork() {
  return (
    <section
      id="network"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo in white space above the box */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/the youu network - Logo Transparent.PNG"
            alt="The Youu Network"
            className="w-auto h-28 md:h-36 lg:h-44 opacity-90"
            onError={(e) => {
              // Hide image if it fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Enhanced creative box design */}
        <div className="relative bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-3xl p-12 md:p-16 border-2 border-[#70BFFF]/30 shadow-2xl overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(112,191,255,0.3)] transition-all duration-500">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/5 via-transparent to-[#BE55FF]/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Animated border glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#70BFFF]/20 via-[#BE55FF]/20 to-[#70BFFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

          {/* Content with relative positioning */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                The Youu Network
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
                A professional ecosystem for entrepreneurs, investors, creatives
                and corporate leaders.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-700 text-center mb-10 leading-relaxed max-w-3xl mx-auto">
              The Youu Network brings together ambitious individuals who value
              connection, growth and opportunity. Members gain access to
              networking events, insights and a supportive community focused on
              personal and professional development. It is a space for
              collaboration and meaningful relationships.
            </p>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
              >
                <Link
                  href="https://chat.whatsapp.com/LMHrYWeo9ttFWDs7es2qaT?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">Join The Network</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
