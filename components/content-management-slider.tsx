"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PortfolioImage {
  id: string;
  imageUrl: string;
  alt: string;
}

const portfolioImages: PortfolioImage[] = [
  {
    id: "neuralfund-1",
    imageUrl: "/images/content-management/neuralfund-1.jpg",
    alt: "NEURALFUND Community Spotlight",
  },
  {
    id: "neuralfund-2",
    imageUrl: "/images/content-management/neuralfund-2.jpg",
    alt: "NEURALFUND Smart Crypto Traders",
  },
  {
    id: "neuralfund-3",
    imageUrl: "/images/content-management/neuralfund-3.jpg",
    alt: "NEURALFUND Crypto Security",
  },
  {
    id: "health-1",
    imageUrl: "/images/content-management/health-1.jpg",
    alt: "Health & Wellness Content",
  },
  {
    id: "health-2",
    imageUrl: "/images/content-management/health-2.jpg",
    alt: "Health & Wellness Content",
  },
  {
    id: "bluegrass-1",
    imageUrl: "/images/content-management/bluegrass-1.jpg",
    alt: "BLUEGRASS Gardening Content",
  },
  {
    id: "bluegrass-2",
    imageUrl: "/images/content-management/bluegrass-2.jpg",
    alt: "BLUEGRASS Gardening Content",
  },
  {
    id: "zytec-1",
    imageUrl: "/images/content-management/zytec-1.jpg",
    alt: "ZYTEC Solutions Content",
  },
  {
    id: "zytec-2",
    imageUrl: "/images/content-management/zytec-2.jpg",
    alt: "ZYTEC Solutions Content",
  },
  {
    id: "countach-1",
    imageUrl: "/images/content-management/countach-1.jpg",
    alt: "Countach Properties Content",
  },
  {
    id: "countach-2",
    imageUrl: "/images/content-management/countach-2.jpg",
    alt: "Countach Properties Content",
  },
  {
    id: "momartech-1",
    imageUrl: "/images/content-management/momartech-1.jpg",
    alt: "MO MarTech Content",
  },
  {
    id: "momartech-2",
    imageUrl: "/images/content-management/momartech-2.jpg",
    alt: "MO MarTech Content",
  },
  {
    id: "ai-career-1",
    imageUrl: "/images/content-management/ai-career-1.jpg",
    alt: "AI Career Makeover Content",
  },
  {
    id: "ai-career-2",
    imageUrl: "/images/content-management/ai-career-2.jpg",
    alt: "AI Career Makeover Content",
  },
  {
    id: "findable-1",
    imageUrl: "/images/content-management/findable-1.jpg",
    alt: "Findable Content",
  },
  {
    id: "findable-2",
    imageUrl: "/images/content-management/findable-2.jpg",
    alt: "Findable Content",
  },
  {
    id: "healhub-1",
    imageUrl: "/images/content-management/healhub-1.jpg",
    alt: "HealHuB Content",
  },
  {
    id: "healhub-2",
    imageUrl: "/images/content-management/healhub-2.jpg",
    alt: "HealHuB Content",
  },
  {
    id: "vh-property-1",
    imageUrl: "/images/content-management/vh-property-1.jpg",
    alt: "VH Property Content",
  },
  {
    id: "vh-property-2",
    imageUrl: "/images/content-management/vh-property-2.jpg",
    alt: "VH Property Content",
  },
  {
    id: "vagajobs-1",
    imageUrl: "/images/content-management/vagajobs-1.jpg",
    alt: "VagaJobs Content",
  },
  {
    id: "vagajobs-2",
    imageUrl: "/images/content-management/vagajobs-2.jpg",
    alt: "VagaJobs Content",
  },
];

interface ContentManagementSliderProps {
  showTitle?: boolean;
  showCTA?: boolean;
  showDetailsText?: boolean;
}

export function ContentManagementSlider({ 
  showTitle = true, 
  showCTA = false,
  showDetailsText = true 
}: ContentManagementSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Create looped items for seamless infinite scroll
  const loopedImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];

  // Handle seamless loop on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft } = container;
      const singleSetWidth = portfolioImages.length * 360;
      const threshold = 50;

      // If scrolled past the second set, jump to the middle set
      if (scrollLeft >= singleSetWidth * 2 - threshold) {
        container.scrollLeft = scrollLeft - singleSetWidth;
      }
      // If scrolled before the first set, jump to the middle set
      else if (scrollLeft <= threshold) {
        container.scrollLeft = singleSetWidth + scrollLeft;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused || isUserInteracting) return;

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (container && !isPaused && !isUserInteracting) {
          const scrollAmount = 360; // Card width + gap
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }, 3000); // Move every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused, isUserInteracting]);

  // Handle user interaction
  const handleInteractionStart = () => {
    setIsUserInteracting(true);
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    setIsUserInteracting(false);
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 3000); // Resume after 3 seconds of no interaction
  };

  // Initialize scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const singleSetWidth = portfolioImages.length * 360;
      container.scrollLeft = singleSetWidth; // Start at middle section
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    handleInteractionStart();
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
    // Resume after user interaction ends
    setTimeout(() => {
      handleInteractionEnd();
    }, 3500); // Resume after 3.5 seconds
  };

  return (
    <div className="mt-16 md:mt-24">
      {showTitle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Content Management{" "}
              <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Examples of our social media content management and design work.
            </p>
          </div>
        </div>
      )}

      {/* Horizontal scroll container */}
      <div 
        className="relative w-screen overflow-hidden -ml-[50vw] left-1/2 bg-white/20 backdrop-blur-xl"
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-xl rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/30 hover:border-white/50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-xl rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/30 hover:border-white/50"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth pl-4 md:pl-6 lg:pl-8 pr-4 md:pr-6 lg:pr-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleInteractionStart}
        >
          {loopedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-[340px] md:w-[360px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] bg-white/80 backdrop-blur-xl border border-white/40"
            >
              <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA and details text */}
      {(showCTA || showDetailsText) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
          <div className="text-center space-y-4">
            {showCTA && (
              <Link href="/services/social-management">
                <Button
                  className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Learn more
                </Button>
              </Link>
            )}
            {showDetailsText && (
              <p className="text-sm text-gray-600 opacity-75">
                Further details can be obtained on request.
              </p>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

