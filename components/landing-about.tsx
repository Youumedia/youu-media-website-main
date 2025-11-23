"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LandingAbout() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 relative overflow-hidden bg-[#E6F2FF]"
    >
      {/* Background Shapes - kept within section bounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - positioned to stay within bounds (not going into top/bottom) */}
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[50%] left-[55%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] left-[10%] w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[12%] right-[30%] w-[350px] h-[350px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[18%] left-[35%] w-[380px] h-[380px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-fast" style={{ animationDelay: "0.3s" }} />
        <div className="absolute top-[25%] right-[10%] w-[320px] h-[320px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-[22%] right-[15%] w-[360px] h-[360px] bg-[#BE55FF]/16 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "1.2s" }} />

        {/* Geometric shapes with floating animations */}
        <div className="absolute top-[18%] left-[15%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" style={{ animationDelay: "0.2s" }} />
        <div className="absolute bottom-[20%] right-[20%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.1s" }} />
        <div className="absolute top-[40%] right-[35%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "2.2s" }} />
        <div className="absolute bottom-[25%] left-[25%] w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-float-slow" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-[55%] right-[18%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "1.4s" }} />
        <div className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "0.9s" }} />
        <div className="absolute top-[22%] left-[60%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.6s" }} />
        <div className="absolute top-[45%] left-[5%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.4s" }} />
        <div className="absolute bottom-[30%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "1.8s" }} />
        <div className="absolute top-[65%] left-[50%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.0s" }} />
        <div className="absolute top-[30%] right-[50%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[28%] left-[50%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[70%] right-[12%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Title with creative styling */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 blur-xl" />
            <div className="relative">
              <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
                Who We Are
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                About
                <br />
                <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                  Youu Media
                </span>
              </h2>
            </div>
          </div>

          {/* Right column - Content with glass card */}
          <div className="relative">
            <div className="relative rounded-3xl p-8 md:p-12 transition-all overflow-hidden group bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] hover:bg-white/25 hover:border-white/40 transform hover:scale-[1.02] hover:-translate-y-1">
              {/* 3D Glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-60" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-[#70BFFF]/5 via-transparent to-[#BE55FF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                  Youu Media is a creative agency built to help corporate and
                  commercial brands attract clients, build trust and communicate
                  authority through strategic visual content. We use expert
                  videography, photography and storytelling to help brands stand
                  out, influence decisions and achieve measurable results.
                </p>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From our founder's journey in London to building a powerful network of professionals, 
                  discover how we're creating opportunities and transforming brands through visual storytelling.
                </p>

                <div className="pt-4">
                  <Button
                    size="lg"
                    asChild
                    className="group/btn bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 py-6 text-base font-bold rounded-full shadow-xl hover:shadow-[0_0_40px_rgba(112,191,255,0.4)] transition-all transform hover:scale-105"
                  >
                    <Link href="/about" className="flex items-center gap-2">
                      Learn More About Us
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
