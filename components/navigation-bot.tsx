"use client";

import { useState } from "react";
import { Smile, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "brands", label: "Brands" },
  { id: "mission", label: "Mission" },
  { id: "network", label: "The Youu Network" },
  { id: "contact", label: "Contact" },
];

export function NavigationBot() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Navigation Panel */}
      {isOpen && (
        <div className="absolute bottom-16 md:bottom-20 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[220px] animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Navigate</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#70BFFF]/10 hover:to-[#BE55FF]/10 rounded-lg transition-all hover:text-gray-900 font-medium"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Smiley Face Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center text-white"
        aria-label="Navigation menu"
      >
        <Smile className="h-6 w-6 md:h-7 md:w-7" />
      </button>
    </div>
  );
}
