"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const portfolioItems = [
  {
    id: 3,
    title: "Portfolio Video 3",
    youtubeId: "lErDN_bLkaI",
    embedUrl: "https://www.youtube.com/embed/lErDN_bLkaI?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 1,
    title: "Portfolio Video 1",
    youtubeId: "xkMZtQnHDOE",
    embedUrl: "https://www.youtube.com/embed/xkMZtQnHDOE?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 2,
    title: "Portfolio Video 2",
    youtubeId: "IJv94hCtnJU",
    embedUrl: "https://www.youtube.com/embed/IJv94hCtnJU?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 4,
    title: "Portfolio Video 4",
    youtubeId: "pUu0xgPwOpU",
    embedUrl: "https://www.youtube.com/embed/pUu0xgPwOpU?rel=0&modestbranding=1&playsinline=1",
  },
];

export function LandingPortfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const isScrollingRef = useRef(false);

  // Create looped items (3 copies for seamless looping)
  const loopedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];
  
  // Calculate item width including gap
  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 500 + 24 : 400 + 24; // width + gap
    }
    return 424;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate dimensions
    const calculateDimensions = () => {
      const itemWidth = getItemWidth();
      const singleSetWidth = portfolioItems.length * itemWidth;
      const padding = window.innerWidth >= 768 ? 48 : 32; // pl-6/pr-6 = 48px, pl-4/pr-4 = 32px
      return { itemWidth, singleSetWidth, padding };
    };

    // Start in the middle section
    const { singleSetWidth } = calculateDimensions();
    container.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (!container || isScrollingRef.current) return;

      const { scrollLeft } = container;
      const { singleSetWidth } = calculateDimensions();
      const threshold = 50; // Small threshold to prevent flickering
      
      // If scrolled past the second set (near the end), jump to the middle set
      if (scrollLeft >= singleSetWidth * 2 - threshold) {
        isScrollingRef.current = true;
        const newScrollLeft = scrollLeft - singleSetWidth;
        container.scrollLeft = newScrollLeft;
        // Use requestAnimationFrame to ensure the scroll position is set before resetting the flag
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }
      // If scrolled before the first set (near the beginning), jump to the middle set
      else if (scrollLeft <= threshold) {
        isScrollingRef.current = true;
        const newScrollLeft = singleSetWidth + scrollLeft;
        container.scrollLeft = newScrollLeft;
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }
    };

    const handleResize = () => {
      const { singleSetWidth } = calculateDimensions();
      // Reset to middle section on resize
      container.scrollLeft = singleSetWidth;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const itemWidth = getItemWidth();
      const scrollAmount = itemWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A look at some of the brands and projects we have supported.
          </p>
        </div>
      </div>

      {/* Horizontal scroll container - full width edge to edge */}
      <div className="relative w-screen overflow-hidden -ml-[50vw] left-1/2">
        {/* Scroll buttons - always visible for infinite loop */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth pl-4 md:pl-6 lg:pl-8 pr-4 md:pr-6 lg:pr-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopedItems.map((item, index) => {
            // Use a unique key that includes the index to handle duplicates
            const uniqueKey = `${item.id}-${index}`;
            // Track playing state by original item id, not the looped index
            const isPlaying = playingVideoId === item.id;
            
            const handleVideoClick = (e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              if (!isPlaying) {
                setPlayingVideoId(item.id);
              }
            };
            
            return (
              <div
                key={uniqueKey}
                className="group flex-shrink-0 w-[400px] md:w-[500px] rounded-3xl overflow-hidden transition-all bg-transparent relative"
              >

                <div 
                  className="aspect-video relative overflow-hidden bg-black rounded-t-3xl cursor-pointer"
                  onClick={handleVideoClick}
                >
                  {isPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`${item.embedUrl}&autoplay=1`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ border: "none" }}
                    />
                  ) : (
                    <>
                      {/* YouTube thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                        draggable={false}
                      />
                      
                      {/* Play button overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors z-10"
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative pointer-events-none">
                          <Play className="h-10 w-10 text-white ml-1" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Hover arrow - only show when not playing */}
                {!isPlaying && (
                  <div className="absolute bottom-4 right-4 z-20 text-2xl text-[#70BFFF] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                    ↗
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
