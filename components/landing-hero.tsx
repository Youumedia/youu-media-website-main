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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E6F2FF]"
    >
      {/* Creative floating orbs and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-3/4 left-1/6 w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div
          className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 right-1/5 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Creative headline with animated gradient */}
        <div className="mb-8">
          <div className="inline-block mb-4">
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-[#70BFFF] via-gray-900 to-[#BE55FF] bg-clip-text text-transparent mb-2">
              Strategic visual content
            </span>
            <span className="block bg-gradient-to-r from-[#BE55FF] via-gray-900 to-[#70BFFF] bg-clip-text text-transparent">
              for brands that want to stand out.
            </span>
          </h1>
        </div>

        {/* Sub headline with creative styling */}
        <div className="mb-12 max-w-3xl mx-auto">
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
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-12 py-8 text-lg font-bold rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(112,191,255,0.4)] transition-all transform hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Consultation
              <span className="text-2xl">→</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] opacity-0 group-hover:opacity-70 blur-2xl transition-opacity" />
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPortfolio}
            className="group bg-white border-2 border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-[#70BFFF]/5 hover:to-[#BE55FF]/5 hover:border-[#70BFFF]/50 px-12 py-8 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <span className="text-xl">↗</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF]/0 via-[#BE55FF]/0 to-[#70BFFF]/0 group-hover:from-[#70BFFF]/10 group-hover:via-[#BE55FF]/10 group-hover:to-[#70BFFF]/10 transition-all" />
          </Button>
        </div>
      </div>

      {/* Creative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full animate-bounce" />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
