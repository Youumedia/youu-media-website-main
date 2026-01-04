"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSlider } from "./newsletter-slider";
import { ContentManagementSlider } from "./content-management-slider";
import { portfolioVideos } from "@/lib/portfolio-videos";

export function LandingPortfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const isScrollingRef = useRef(false);

  // Create looped items (3 copies for seamless looping)
  const loopedItems = [
    ...portfolioVideos,
    ...portfolioVideos,
    ...portfolioVideos,
  ];

  // Calculate item width including gap
  const getItemWidth = () => {
    if (typeof window !== "undefined") {
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
      const singleSetWidth = portfolioVideos.length * itemWidth;
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
      {/* Background Shapes - kept within section bounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - positioned to stay within bounds */}
        <div
          className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[15%] right-[12%] w-[420px] h-[420px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[20%] left-[30%] w-[360px] h-[360px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[12%] left-[55%] w-[380px] h-[380px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-fast"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute bottom-[12%] right-[35%] w-[400px] h-[400px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute top-[35%] right-[5%] w-[340px] h-[340px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[8%] w-[370px] h-[370px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-fast"
          style={{ animationDelay: "1.7s" }}
        />
        <div
          className="absolute top-[60%] left-[45%] w-[390px] h-[390px] bg-[#BE55FF]/19 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Geometric shapes with floating animations */}
        <div
          className="absolute top-[12%] right-[8%] w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="absolute bottom-[15%] left-[12%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium"
          style={{ animationDelay: "1.1s" }}
        />
        <div
          className="absolute top-[35%] right-[32%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast"
          style={{ animationDelay: "2.2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[30%] w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-float-slow"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute top-[60%] right-[18%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium"
          style={{ animationDelay: "1.4s" }}
        />
        <div
          className="absolute bottom-[20%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast"
          style={{ animationDelay: "0.9s" }}
        />
        <div
          className="absolute top-[18%] left-[65%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow"
          style={{ animationDelay: "1.6s" }}
        />
        <div
          className="absolute top-[45%] left-[5%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium"
          style={{ animationDelay: "0.4s" }}
        />
        <div
          className="absolute bottom-[30%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast"
          style={{ animationDelay: "1.8s" }}
        />
        <div
          className="absolute top-[55%] left-[60%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow"
          style={{ animationDelay: "1.0s" }}
        />
        <div
          className="absolute top-[28%] right-[55%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[35%] left-[50%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[70%] right-[12%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow"
          style={{ animationDelay: "1.3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </div>
      </div>

      {/* Video Production Portfolio Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Video Production{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Examples of our video production
          </p>
        </div>
      </div>

      {/* Swipe instruction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        <p className="text-center text-sm text-gray-500 opacity-60">
          Swipe left
        </p>
      </div>

      {/* Horizontal scroll container - full width edge to edge */}
      <div className="relative w-screen overflow-hidden -ml-[50vw] left-1/2">
        {/* Scroll buttons - always visible for infinite loop */}
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

            // Determine border styling based on serviceType
            const isCinematography = item.serviceType === "cinematography";
            const borderClass = isCinematography
              ? "border-4 border-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.6)]"
              : "border-4 border-[#C0C0C0] shadow-[0_0_12px_rgba(192,192,192,0.5)]";

            return (
              <div
                key={uniqueKey}
                className={`group flex-shrink-0 w-[400px] md:w-[500px] rounded-3xl overflow-hidden transition-all bg-transparent relative ${borderClass}`}
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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Try multiple fallback options
                          if (target.src.includes("maxresdefault")) {
                            target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                          } else if (target.src.includes("hqdefault")) {
                            target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
                          } else if (target.src.includes("mqdefault")) {
                            target.src = `https://img.youtube.com/vi/${item.youtubeId}/sddefault.jpg`;
                          } else if (target.src.includes("sddefault")) {
                            // Final fallback to 0.jpg (first frame)
                            target.src = `https://img.youtube.com/vi/${item.youtubeId}/0.jpg`;
                          }
                        }}
                        loading="lazy"
                      />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors z-10">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative pointer-events-none">
                          <Play className="h-10 w-10 text-white ml-1" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Quality Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-4">
        <p className="text-center text-sm text-gray-600 opacity-75">
          For the best viewing experience, tap the gear icon and set video
          quality to the highest resolution.
        </p>
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-sm"></div>
            <span className="text-sm text-gray-700">
              Cinematography service
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#C0C0C0] rounded-sm"></div>
            <span className="text-sm text-gray-700">Videography service</span>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
          <p>Youu Media&apos;s Cinematographer: Darius Shu</p>
          <p>Youu Media&apos;s Videographer: Khai Phillips</p>
        </div>
      </div>

      {/* Learn more CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-2 md:mt-4">
        <div className="text-center">
          <div className="md:mt-6">
            <Link href="/services/content-production">
              <Button className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Management Portfolio Slider */}
      <ContentManagementSlider
        showTitle={true}
        showCTA={true}
        showDetailsText={true}
      />

      {/* Newsletter Slider */}
      <NewsletterSlider />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
