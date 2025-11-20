"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videoItems = [
  {
    id: 1,
    title: "Portfolio Video 1",
    category: "Portfolio",
    youtubeId: "xkMZtQnHDOE",
    embedUrl: "https://www.youtube.com/embed/xkMZtQnHDOE?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 2,
    title: "Portfolio Video 2",
    category: "Portfolio",
    youtubeId: "IJv94hCtnJU",
    embedUrl: "https://www.youtube.com/embed/IJv94hCtnJU?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 3,
    title: "Portfolio Video 3",
    category: "Portfolio",
    youtubeId: "lErDN_bLkaI",
    embedUrl: "https://www.youtube.com/embed/lErDN_bLkaI?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 4,
    title: "Portfolio Video 4",
    category: "Portfolio",
    youtubeId: "pUu0xgPwOpU",
    embedUrl: "https://www.youtube.com/embed/pUu0xgPwOpU?rel=0&modestbranding=1&playsinline=1",
  },
  {
    id: 5,
    title: "Portfolio Video 5",
    category: "Portfolio",
    youtubeId: "wSpapekkDyc",
    embedUrl: "https://www.youtube.com/embed/wSpapekkDyc?rel=0&modestbranding=1&playsinline=1",
  },
];

const photoItems = [
  {
    id: 1,
    title: "Brand Photography",
    category: "Photography",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Event Coverage",
    category: "Event",
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Product Shots",
    category: "Commercial",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
  },
  {
    id: 4,
    title: "Corporate Headshots",
    category: "Corporate",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
  },
  {
    id: 5,
    title: "Creative Portraits",
    category: "Creative",
    thumbnail: "/ai-generated-content-thumbnail.jpg",
  },
  {
    id: 6,
    title: "Studio Work",
    category: "Studio",
    thumbnail: "/product-photography-thumbnail.jpg",
  },
];

export function FuturisticPortfolioCarousel() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);

  // Center the active items on mount
  useEffect(() => {
    const centerActiveItems = () => {
      if (videoContainerRef.current) {
        const container = videoContainerRef.current;
        const itemWidth = 320 + 24;
        const containerWidth = container.clientWidth;
        const scrollLeft = (activeVideoIndex * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
        container.scrollLeft = Math.max(0, scrollLeft);
      }
      if (photoContainerRef.current) {
        const container = photoContainerRef.current;
        const itemWidth = 320 + 24;
        const containerWidth = container.clientWidth;
        const scrollLeft = (activePhotoIndex * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
        container.scrollLeft = Math.max(0, scrollLeft);
      }
    };

    // Delay to ensure containers are rendered
    setTimeout(centerActiveItems, 100);
  }, [activeVideoIndex, activePhotoIndex]);

  const scrollToVideo = (index: number) => {
    setActiveVideoIndex(index);
    if (videoContainerRef.current) {
      const container = videoContainerRef.current;
      const itemWidth = 320 + 24; // 320px width + 24px gap
      const containerWidth = container.clientWidth;
      const scrollLeft = (index * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  };

  const scrollToPhoto = (index: number) => {
    setActivePhotoIndex(index);
    if (photoContainerRef.current) {
      const container = photoContainerRef.current;
      const itemWidth = 320 + 24; // 320px width + 24px gap
      const containerWidth = container.clientWidth;
      const scrollLeft = (index * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Videos Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
                Video Portfolio
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Slide through our cinematic work - only the center video is active
            </p>
          </div>

          {/* Video Carousel Container */}
          <div className="relative">
            <div
              ref={videoContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {videoItems.map((item, index) => {
                const isActive = index === activeVideoIndex;
                const distance = Math.abs(index - activeVideoIndex);
                const scale = distance === 0 ? 1 : 0.8 - distance * 0.1;
                const opacity = distance === 0 ? 1 : 0.6 - distance * 0.2;

                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0 cursor-pointer transition-all duration-500"
                    style={{
                      transform: `scale(${Math.max(scale, 0.6)})`,
                      opacity: Math.max(opacity, 0.3),
                    }}
                    onClick={() => scrollToVideo(index)}
                  >
                    <Card
                      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 ${
                        isActive
                          ? "border-gradient-to-r border-[#BE55FF] shadow-2xl"
                          : "border-transparent hover:border-[#BE55FF]/50"
                      } relative`}
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(190, 85, 255, 0.1), rgba(112, 191, 255, 0.1))"
                          : "linear-gradient(135deg, rgba(190, 85, 255, 0.05), rgba(112, 191, 255, 0.05))",
                      }}
                    >
                      {/* Glowing border effect for active item */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] opacity-20 rounded-lg blur-sm"></div>
                      )}

                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                        <div className="w-80 h-48 relative">
                          {isActive ? (
                            <iframe
                              className="w-full h-full"
                              src={item.embedUrl}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              style={{ border: "none" }}
                            />
                          ) : (
                            <>
                              {/* Thumbnail with play button overlay */}
                              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                                {/* Animated background elements */}
                                <div className="absolute inset-0 opacity-20">
                                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full blur-3xl animate-pulse"></div>
                                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-l from-[#70BFFF] to-[#BE55FF] rounded-full blur-2xl animate-pulse"></div>
                                </div>

                                {/* YouTube thumbnail */}
                                <img
                                  src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                                  alt={item.title}
                                  className="w-full h-full object-cover opacity-60"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    // Try multiple fallback options
                                    if (target.src.includes('maxresdefault')) {
                                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                                    } else if (target.src.includes('hqdefault')) {
                                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
                                    } else if (target.src.includes('mqdefault')) {
                                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/sddefault.jpg`;
                                    } else if (target.src.includes('sddefault')) {
                                      // Final fallback to 0.jpg (first frame)
                                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/0.jpg`;
                                    }
                                  }}
                                  loading="lazy"
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-16 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative cursor-pointer">
                                    <Play className="h-8 w-8 text-white ml-1" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                  </div>
                                </div>

                                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg z-10">
                                  {item.category}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Video Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {videoItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeVideoIndex
                      ? "bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                Photo Gallery
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Browse through our professional photography collection
            </p>
          </div>

          {/* Photo Carousel Container */}
          <div className="relative">
            <div
              ref={photoContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {photoItems.map((item, index) => {
                const isActive = index === activePhotoIndex;
                const distance = Math.abs(index - activePhotoIndex);
                const scale = distance === 0 ? 1 : 0.8 - distance * 0.1;
                const opacity = distance === 0 ? 1 : 0.6 - distance * 0.2;

                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0 cursor-pointer transition-all duration-500"
                    style={{
                      transform: `scale(${Math.max(scale, 0.6)})`,
                      opacity: Math.max(opacity, 0.3),
                    }}
                    onClick={() => scrollToPhoto(index)}
                  >
                    <Card
                      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 ${
                        isActive
                          ? "border-gradient-to-r border-[#70BFFF] shadow-2xl"
                          : "border-transparent hover:border-[#70BFFF]/50"
                      } relative`}
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(112, 191, 255, 0.1), rgba(190, 85, 255, 0.1))"
                          : "linear-gradient(135deg, rgba(112, 191, 255, 0.05), rgba(190, 85, 255, 0.05))",
                      }}
                    >
                      {/* Glowing border effect for active item */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] opacity-20 rounded-lg blur-sm"></div>
                      )}

                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                        <div className="w-80 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                          {/* Animated background elements */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-l from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl animate-pulse"></div>
                          </div>

                          <div className="flex flex-col items-center justify-center relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>
                            <p className="text-white/90 text-sm font-medium">
                              {isActive ? "View Photo" : "Photo Coming Soon"}
                            </p>
                          </div>

                          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs font-medium border border-white/20">
                            {item.category}
                          </div>
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg">
                            Photo
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Photo Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {photoItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activePhotoIndex
                      ? "bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
