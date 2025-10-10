import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Essential",
    price: "£600",
    period: "per project",
    description: "Perfect for small events and basic video needs",
    features: [
      "Single camera setup",
      "Basic editing and color correction",
      "Up to 3 hours of coverage",
      "1 revision round included",
      "Digital delivery in HD",
      "Basic audio recording",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "£1,300",
    period: "per project",
    description: "Ideal for weddings and corporate events",
    features: [
      "Multi-camera setup (2-3 cameras)",
      "Professional editing and color grading",
      "Up to 8 hours of coverage",
      "3 revision rounds included",
      "Digital delivery in 4K",
      "Professional audio equipment",
      "Same-day highlight reel",
      "Drone footage (if applicable)",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "£2,600",
    period: "per project",
    description: "Complete production for high-end projects",
    features: [
      "Multi-camera setup (4+ cameras)",
      "Cinematic editing with motion graphics",
      "Full day coverage (12+ hours)",
      "Unlimited revision rounds",
      "Multiple format delivery",
      "Professional audio team",
      "Live streaming capability",
      "Drone footage included",
      "Creative direction included",
      "Rush delivery available",
    ],
    popular: false,
    cta: "Go Premium",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the package that fits your needs. All prices include professional team coordination and quality
            guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const pricingGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200", 
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200"
            ];
            
            return (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 ${pkg.popular ? "ring-2 ring-primary border-primary scale-105" : "border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF]"} ${pricingGradients[index]} overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>

              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white px-6 py-2 shadow-xl">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 relative z-10">
                <CardTitle className="text-3xl mb-4 font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{pkg.name}</CardTitle>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">{pkg.price}</span>
                  <span className="text-gray-600 ml-2 text-lg">{pkg.period}</span>
                </div>
                <p className="text-gray-700 text-pretty leading-relaxed">{pkg.description}</p>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular 
                      ? "bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white shadow-xl" 
                      : "bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:bg-white hover:shadow-lg"
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Custom Projects */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-[#70BFFF]/20 bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl"></div>
            </div>
            
            <CardContent className="p-10 relative z-10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Need Something Custom?</h3>
              <p className="text-gray-700 mb-8 text-pretty leading-relaxed text-lg">
                Every project is unique. Let's discuss your specific requirements and create a custom proposal that fits
                your vision and budget.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Request Custom Quote
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
