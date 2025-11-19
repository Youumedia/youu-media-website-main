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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF] via-[#BE55FF] to-[#70BFFF] opacity-90">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF]/30 via-[#BE55FF]/40 to-[#70BFFF]/30 animate-gradient-x" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Youu Media.
          <br />
          <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            Strategic visual content for brands that want to stand out.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          We help corporate and professional brands attract clients, build trust
          and communicate authority through powerful visual storytelling.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-[#70BFFF] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPortfolio}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-white/80" />
      </div>
    </section>
  );
}
