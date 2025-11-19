"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

export function LandingContact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      {/* Plain light blue background with creative shapes */}
      <div className="absolute inset-0 bg-[#E6F2FF]"></div>

      {/* Floating orbs and creative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Let's create content that supports your business goals.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 overflow-hidden group">
          {/* Creative background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/5 via-[#BE55FF]/5 to-[#70BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Calendly Link */}
          <div className="text-center mb-12 relative z-10">
            <Button
              size="lg"
              asChild
              className="group/btn relative bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-10 py-7 text-lg font-bold rounded-full shadow-xl hover:shadow-[0_0_40px_rgba(112,191,255,0.4)] transition-all transform hover:scale-105 overflow-hidden"
            >
              <Link
                href="https://calendly.com/youumedia-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-2"
              >
                Book a 30 Minute Call
                <span className="text-xl">→</span>
              </Link>
            </Button>
          </div>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Link
              href="https://www.linkedin.com/company/youu-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                LinkedIn
              </span>
            </Link>

            <Link
              href="mailto:Contact@youumedia.com"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Email</span>
              <span className="text-xs text-gray-600">
                Contact@youumedia.com
              </span>
            </Link>

            <Link
              href="tel:07958189989"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Phone</span>
              <span className="text-xs text-gray-600">07958189989</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
