"use client";

import Image from "next/image";
import Link from "next/link";

export function StickyLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[9999]">
      <Link
        href="#hero"
        onClick={scrollToTop}
        className="block transition-all hover:scale-105 bg-white rounded-lg p-3 shadow-xl border-2 border-gray-200 hover:border-[#70BFFF]/50"
        aria-label="Youu Media - Go to top"
      >
        <Image
          src="/images/youu-logo-updated.png"
          alt="Youu Media"
          width={140}
          height={45}
          className="h-8 md:h-10 w-auto"
          priority
          onError={(e) => {
            // Fallback if image doesn't load
            console.error("Logo image failed to load");
          }}
        />
      </Link>
    </div>
  );
}
