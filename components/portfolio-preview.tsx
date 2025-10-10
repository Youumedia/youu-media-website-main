import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "Title pending",
    category: "Brand Content",
    description: "A cinematic brand story showcasing innovation and company culture.",
    thumbnail: "/corporate-office-cinematic-video-thumbnail.jpg",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Title pending",
    category: "Event Videography",
    description: "Emotional wedding day captured with multiple cameras and drone footage.",
    thumbnail: "/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Title pending",
    category: "Commercial",
    description: "High-end product reveal with dynamic camera movements and lighting.",
    thumbnail: "/luxury-product-launch-video-thumbnail.jpg",
    duration: "1:45",
  },
  {
    id: 4,
    title: "Title pending",
    category: "Corporate",
    description: "Multi-day event documentation with interviews and keynote highlights.",
    thumbnail: "/professional-conference-event-video-thumbnail.jpg",
    duration: "8:20",
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
              Latest Work
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Discover the cinematic quality and professional delivery that sets our work apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => {
            const portfolioGradients = [
              "bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200"
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
                      <div className="w-20 h-20 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-base font-medium">Video Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg text-white text-sm font-medium border border-white/20">
                  {item.duration}
                </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                  {item.category}
                </div>
              </div>

                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-[#BE55FF] group-hover:to-[#70BFFF] group-hover:bg-clip-text group-hover:text-transparent transition-colors bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{item.title}</h3>
                  <p className="text-gray-700 text-base text-pretty leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group bg-transparent">
            <Link href="/portfolio">
              View Full Portfolio
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
