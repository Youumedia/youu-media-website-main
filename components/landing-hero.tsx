"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function LandingHero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-4 md:pb-6"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center pt-12 md:pt-16">
        {/* Creative headline with animated gradient */}
        <div className="mb-6 md:mb-8">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-6xl md:text-7xl lg:text-9xl font-black text-gray-900 tracking-tight">
              Youu
            </span>
            <span className="text-6xl md:text-7xl lg:text-9xl font-black bg-gradient-to-r from-[#70BFFF] via-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Media
            </span>
            <span className="text-6xl md:text-7xl lg:text-9xl font-black text-gray-900">
              .
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-[#70BFFF] via-gray-900 to-[#BE55FF] bg-clip-text text-transparent pb-2">
              Strategic visual content
            </span>
            <span className="block bg-gradient-to-r from-[#BE55FF] via-gray-900 to-[#70BFFF] bg-clip-text text-transparent">
              for brands that want to stand out.
            </span>
          </h1>
        </div>

        {/* Sub headline with creative styling */}
        <div className="mb-8 md:mb-10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed relative">
            <span className="absolute -left-4 top-0 text-4xl text-[#70BFFF]/30">
              "
            </span>
            We help corporate and professional brands attract clients, build
            trust and communicate authority through powerful visual
            storytelling.
            <span className="absolute -right-4 bottom-0 text-4xl text-[#BE55FF]/30">
              "
            </span>
          </p>
        </div>

        {/* Creative CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6 md:mb-8">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-bold rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(112,191,255,0.4)] transition-all transform hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Consultation
              <span className="text-xl md:text-2xl">→</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] opacity-0 group-hover:opacity-70 blur-2xl transition-opacity" />
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPortfolio}
            className="group bg-white border-2 border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-[#70BFFF]/5 hover:to-[#BE55FF]/5 hover:border-[#70BFFF]/50 px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <span className="text-lg md:text-xl">↗</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF]/0 via-[#BE55FF]/0 to-[#70BFFF]/0 group-hover:from-[#70BFFF]/10 group-hover:via-[#BE55FF]/10 group-hover:to-[#70BFFF]/10 transition-all" />
          </Button>
        </div>
      </div>

      {/* Creative scroll indicator */}
      <div className="relative z-10 mt-auto mb-2 md:mb-4">
        <div className="flex flex-col items-center gap-1.5 md:gap-2">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full animate-bounce" />
          </div>
          <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
