"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

export function LandingContact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work With Us
          </h2>
          <p className="text-xl text-gray-600">
            Let's create content that supports your business goals.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          {/* Calendly Link */}
          <div className="text-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Link
                href="https://calendly.com/youumedia-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30 Minute Call
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
              <span className="text-xs text-gray-500">
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
              <span className="text-xs text-gray-500">07958189989</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
