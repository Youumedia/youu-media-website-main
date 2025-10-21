import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

const videoItems = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Video 2", 
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
    duration: "4:15",
  },
];

const photoItems = [
  {
    id: 1,
    title: "Photo 1",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Photo 2",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
  },
];

export function PortfolioPreview() {
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

        {/* Videos Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Videos</h3>
          </div>
          <div className="flex justify-center gap-8">
            {videoItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  <div className="w-80 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                    <div className="flex flex-col items-center justify-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                        <Play className="h-8 w-8 text-white ml-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      </div>
                      <p className="text-white/90 text-sm font-medium">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs font-medium border border-white/20">
                    {item.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Photos</h3>
          </div>
          <div className="flex justify-center gap-8">
            {photoItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  <div className="w-80 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative">
                    <div className="flex flex-col items-center justify-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      </div>
                      <p className="text-white/90 text-sm font-medium">
                        Photo Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
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
