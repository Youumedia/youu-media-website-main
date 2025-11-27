"use client";

import { useState } from "react";
import { Smile, X } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/services/newsletter", label: "Newsletter" },
  { href: "/#network", label: "The Youu Network" },
  { href: "/#portfolio", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

export function NavigationBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-4 md:bottom-10 md:right-6 z-50">
      {/* Navigation Panel */}
      {isOpen && (
        <div className="absolute bottom-20 md:bottom-24 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[220px] animate-in slide-in-from-bottom-4 fade-in duration-200">
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
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#70BFFF]/10 hover:to-[#BE55FF]/10 rounded-lg transition-all hover:text-gray-900 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Smiley Face Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center text-white animate-bounce-subtle"
        aria-label="Navigation menu"
      >
        <Smile className="h-8 w-8 md:h-10 md:w-10" />
      </button>
    </div>
  );
}
