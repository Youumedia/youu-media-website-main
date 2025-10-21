import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Title pending",
    category: "Brand Content",
    description:
      "A cinematic brand story showcasing innovation and company culture.",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Title pending",
    category: "Event Videography",
    description:
      "Emotional wedding day captured with multiple cameras and drone footage.",
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Title pending",
    category: "Commercial",
    description:
      "High-end product reveal with dynamic camera movements and lighting.",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
    duration: "1:45",
  },
  {
    id: 4,
    title: "Title pending",
    category: "Corporate",
    description:
      "Multi-day event documentation with interviews and keynote highlights.",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
    duration: "8:20",
  },
  {
    id: 5,
    title: "Title pending",
    category: "AI Content",
    description:
      "AI-generated video content showcasing cutting-edge technology and creative innovation.",
    thumbnail: "/ai-generated-content-thumbnail.jpg",
    duration: "3:45",
  },
  {
    id: 6,
    title: "Title pending",
    category: "Photography",
    description:
      "Professional product photography with studio lighting and post-production enhancement.",
    thumbnail: "/product-photography-thumbnail.jpg",
    duration: "2:15",
  },
];

export function PortfolioPreview() {
  console.log("PortfolioPreview rendered with", portfolioItems.length, "items");
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
              Latest Work
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Discover the cinematic quality and professional delivery that sets
            our work apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => {
            const portfolioGradients = [
              "bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200",
              "bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200",
              "bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200",
              "bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
            ];

            return (
              <Card
                key={item.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${portfolioGradients[index]} relative`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl"></div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  {/* Blank video placeholder with enhanced background */}
                  <div className="w-full h-64 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-l from-[#70BFFF] to-[#BE55FF] rounded-full blur-2xl animate-pulse"></div>
                    </div>

                    <div className="flex flex-col items-center justify-center relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                        <Play className="h-10 w-10 text-white ml-1" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      </div>
                      <p className="text-white/90 text-base font-medium">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg text-white text-sm font-medium border border-white/20">
                    {item.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                    {item.category}
                  </div>
                </div>

                {/* Removed titles and descriptions - keeping only colored outline */}
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="group bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white border-0"
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
