"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Title pending",
    category: "Event Videography",
    client: "Private Client",
    date: "December 2023",
    duration: "5:30",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
    description:
      "Cinematic wedding film capturing the elegance and emotion of a luxury celebration with multiple camera angles and drone footage.",
    team: ["Lead Videographer", "Second Shooter", "Drone Operator"],
    featured: true,
  },
  {
    id: 2,
    title: "Title pending",
    category: "Brand Content",
    client: "InnovateTech",
    date: "November 2023",
    duration: "2:15",
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
    description:
      "Dynamic brand story showcasing company culture and innovation through employee interviews and office cinematography.",
    team: ["Creative Director", "Videographer", "Editor"],
    featured: true,
  },
  {
    id: 3,
    title: "Title pending",
    category: "Brand Content",
    client: "Luxury Goods Co.",
    date: "October 2023",
    duration: "1:45",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
    description:
      "High-end product reveal with sophisticated lighting and macro cinematography highlighting premium craftsmanship.",
    team: ["Product Specialist", "Lighting Director"],
    featured: false,
  },
  {
    id: 4,
    title: "Title pending",
    category: "Corporate",
    client: "Global Corp",
    date: "September 2023",
    duration: "8:20",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
    description:
      "Comprehensive event coverage including keynote speeches, networking sessions, and attendee interviews.",
    team: ["Event Team Lead", "3 Videographers", "Audio Specialist"],
    featured: false,
  },
  {
    id: 5,
    title: "Title pending",
    category: "Photography",
    client: "Artisan Bistro",
    date: "August 2023",
    duration: "Photo Series",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
    description:
      "Food photography and restaurant ambiance shots for social media and marketing materials.",
    team: ["Food Photographer", "Stylist"],
    featured: false,
  },
  {
    id: 6,
    title: "Title pending",
    category: "Corporate",
    client: "Enterprise Solutions",
    date: "July 2023",
    duration: "12:45",
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
    description:
      "Multi-part training video series with professional interviews and instructional content.",
    team: ["Training Specialist", "Editor", "Graphics Designer"],
    featured: false,
  },
  {
    id: 7,
    title: "Title pending",
    category: "AI Content",
    client: "Tech Innovations",
    date: "June 2023",
    duration: "3:45",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
    description:
      "AI-generated video content showcasing cutting-edge technology and creative innovation with machine learning.",
    team: ["AI Specialist", "Creative Director", "Video Editor"],
    featured: false,
  },
  {
    id: 8,
    title: "Title pending",
    category: "Photography",
    client: "Fashion Forward",
    date: "May 2023",
    duration: "Photo Series",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
    description:
      "High-end fashion photography with studio lighting and post-production enhancement for brand campaign.",
    team: ["Fashion Photographer", "Stylist", "Makeup Artist"],
    featured: false,
  },
];

export function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const featuredItems = portfolioItems.filter((item) => item.featured);
  const regularItems = portfolioItems.filter((item) => !item.featured);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredItems.map((item, index) => {
                const featuredGradients = [
                  "bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200",
                  "bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200",
                ];

                return (
                  <Card
                    key={item.id}
                    className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${featuredGradients[index]} relative`}
                  >
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-10 z-0">
                      <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl"></div>
                      <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl"></div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                      <div className="w-full h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-l from-[#70BFFF] to-[#BE55FF] rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        <div className="w-24 h-24 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 shadow-2xl relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white ml-1" />
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-lg opacity-70"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Watch Project
                        </Button>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium border border-white/20">
                        {item.duration}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white px-4 py-2 text-sm shadow-xl">
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-[#BE55FF] group-hover:to-[#70BFFF] group-hover:bg-clip-text group-hover:text-transparent transition-colors bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {item.client}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-pretty leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-[#70BFFF]" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-[#70BFFF]" />
                          <span>{item.team.length} team members</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((item, index) => {
            const portfolioGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
              "bg-gradient-to-br from-orange-300 via-red-100 to-pink-200",
              "bg-gradient-to-br from-purple-300 via-indigo-100 to-blue-200",
            ];

            return (
              <Card
                key={item.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${
                  portfolioGradients[index % 6]
                } relative`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10 z-0">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  {/* Blank video placeholder with enhanced background */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-l from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl animate-pulse"></div>
                    </div>

                    <div className="flex flex-col items-center justify-center relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-xl relative">
                        <Play className="h-7 w-7 text-white ml-1" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      </div>
                      <p className="text-white/90 text-sm font-medium">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-sm font-medium border border-white/20">
                    {item.duration}
                  </div>
                </div>

                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-[#BE55FF] group-hover:to-[#70BFFF] group-hover:bg-clip-text group-hover:text-transparent transition-colors bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {item.client}
                  </p>
                  <p className="text-gray-700 text-sm text-pretty leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white border-0"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
