"use client";

import Image from "next/image";
import Link from "next/link";

export function StickyLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed -top-2 left-1 md:top-1 md:left-6 z-[9999]">
      <Link
        href="#hero"
        onClick={scrollToTop}
        className="block transition-all hover:scale-105 pb-3 md:pb-0"
        aria-label="Youu Media - Go to top"
      >
        <Image
          src="/images/youu-main-logo.png"
          alt="Youu Media"
          width={490}
          height={157}
          className="h-28 md:h-[140px] w-auto"
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
