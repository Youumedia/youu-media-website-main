"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

interface Newsletter {
  id: string;
  date: string;
  dateFormatted: string;
  title: string;
  description: string;
  previewImage?: string;
  slug: string;
}

const newsletters: Newsletter[] = [
  {
    id: "2026-01-01",
    date: "2026-01-01",
    dateFormatted: "1st January 2026",
    title: "New Year, New Strategic Vision: Setting Up 2026 for Success",
    description:
      "Start the year with clarity and purpose. Learn how to establish your strategic vision, set measurable goals, and create a content framework that drives meaningful results throughout 2026.",
    slug: "2026-01-01-new-year-strategic-vision",
    previewImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-12-01",
    date: "2025-12-01",
    dateFormatted: "1st December 2025",
    title: "Year-End Content Strategy: Maximising Q4 Impact and Planning for 2026",
    description: "Strategic approaches to finishing the year strong while building the foundation for 2026 success through content planning and analysis.",
    slug: "2025-12-01-year-end-content-strategy",
    previewImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-11-24",
    date: "2025-11-24",
    dateFormatted: "24th November 2025",
    title: "AI Video Tools Revolutionise Content Creation",
    description: "Discover how AI-powered video tools are transforming content creation workflows and what this means for brands in 2025.",
    slug: "2025-11-24-ai-video-tools-revolution",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-11-17",
    date: "2025-11-17",
    dateFormatted: "17th November 2025",
    title: "Short-Form Video Strategy: What's Working Now",
    description: "Latest trends in short-form video content across TikTok, Instagram Reels, and YouTube Shorts that are driving engagement.",
    slug: "2025-11-17-short-form-video-strategy",
    previewImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-11-10",
    date: "2025-11-10",
    dateFormatted: "10th November 2025",
    title: "Brand Storytelling in the Age of Authenticity",
    description: "How authentic storytelling is replacing polished perfection in brand communications and why it's more effective.",
    slug: "2025-11-10-brand-storytelling-authenticity",
    previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-11-03",
    date: "2025-11-03",
    dateFormatted: "3rd November 2025",
    title: "Meta Algorithm Updates: What You Need to Know",
    description: "Breaking down the latest Meta algorithm changes affecting Instagram and Facebook content performance.",
    slug: "2025-11-03-meta-algorithm-updates",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-10-27",
    date: "2025-10-27",
    dateFormatted: "27th October 2025",
    title: "Video Production Trends: Cinematic Mobile Content",
    description: "The rise of cinematic mobile video production and how brands are creating Hollywood-quality content with smartphones.",
    slug: "2025-10-27-cinematic-mobile-content",
    previewImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2025-10-20",
    date: "2025-10-20",
    dateFormatted: "20th October 2025",
    title: "Content Repurposing: Maximise Your Media Investment",
    description: "Strategic approaches to repurposing video content across multiple platforms to maximise ROI and reach.",
    slug: "2025-10-20-content-repurposing-strategy",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  },
];

export function NewsletterSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="newsletter" className="mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
            Weekly Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
              Newsletter
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Weekly insights, trends, and content strategy tips delivered every Monday.
          </p>
        </div>
      </div>

      {/* Swipe instruction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        <p className="text-center text-sm text-gray-500 opacity-60">Swipe left to view older newsletters</p>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative w-screen overflow-hidden -ml-[50vw] left-1/2">
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
        >
          {newsletters.map((newsletter) => (
            <Link
              key={newsletter.id}
              href={`/newsletters/${newsletter.slug}`}
              className="group flex-shrink-0 w-[320px] md:w-[350px] bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-white/40"
            >
              <div className="relative h-[200px] overflow-hidden">
                {newsletter.previewImage ? (
                  <>
                    <img 
                      src={newsletter.previewImage} 
                      alt={newsletter.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center">
                    <FileText className="h-16 w-16 text-white/80" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-gray-900">{newsletter.dateFormatted.split(' ')[0]} {newsletter.dateFormatted.split(' ')[1].substring(0, 3)}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#70BFFF] transition-colors">
                  {newsletter.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {newsletter.description}
                </p>
                <div className="flex items-center text-[#70BFFF] font-semibold text-sm">
                  Read Full Newsletter
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

