"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

export function LandingContact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 relative overflow-hidden"
    >
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

        <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] hover:bg-white/25 hover:border-white/40 transform hover:scale-[1.01] transition-all overflow-hidden group">
          {/* 3D Glass effect layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-60" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl" />
          {/* Subtle inner glow */}
          <div className="absolute inset-[1px] bg-gradient-to-br from-[#70BFFF]/5 via-transparent to-[#BE55FF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

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
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12">
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
