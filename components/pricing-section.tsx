import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Essential",
    price: "Package A",
    period: "",
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
    price: "Package B",
    period: "",
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
    price: "Package C",
    period: "",
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
    cta: "Get Started",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our <span className="text-primary">Packages</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the package that fits your needs. All prices include
            professional team coordination and quality guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const pricingGradients = [
              "bg-gradient-to-br from-orange-400 via-red-300 to-orange-500 shadow-xl shadow-orange-600/40", // Light copper glow for Essential (Package A)
              "bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-300 shadow-2xl shadow-slate-500/50", // Darker silver gradient for Professional (Package B)
              "bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-300 shadow-lg shadow-yellow-500/25", // Gold glow for Premium (Package C)
            ];

            return (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 ${
                  pkg.popular
                    ? "scale-105 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF]"
                    : "border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF]"
                } ${pricingGradients[index]} overflow-hidden`}
              >
                {/* Glowing glitter effect */}
                <div className="absolute inset-0 opacity-20">
                  {index === 0 && ( // Copper glitter Essential (Package A)
                    <>
                      {/* Main glow */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-400 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-red-400 to-orange-500 rounded-full blur-lg animate-pulse"></div>

                      {/* Glitter particles */}
                      <div className="absolute top-8 right-12 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                      <div
                        className="absolute top-16 right-8 w-1 h-1 bg-orange-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-12 right-20 w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute bottom-8 left-8 w-2 h-2 bg-amber-400 rounded-full animate-ping"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-12 left-16 w-1 h-1 bg-orange-300 rounded-full animate-ping"
                        style={{ animationDelay: "2s" }}
                      ></div>
                      <div
                        className="absolute top-20 right-16 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"
                        style={{ animationDelay: "2.5s" }}
                      ></div>
                    </>
                  )}
                  {index === 1 && ( // Shiny silver glitter Professional (Package B)
                    <>
                      {/* Main glow */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-slate-400 to-gray-300 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-gray-300 to-slate-400 rounded-full blur-lg animate-pulse"></div>

                      {/* Glitter particles */}
                      <div className="absolute top-8 right-12 w-2 h-2 bg-slate-500 rounded-full animate-ping"></div>
                      <div
                        className="absolute top-16 right-8 w-1 h-1 bg-slate-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-12 right-20 w-1.5 h-1.5 bg-gray-500 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute bottom-8 left-8 w-2 h-2 bg-slate-500 rounded-full animate-ping"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-12 left-16 w-1 h-1 bg-gray-400 rounded-full animate-ping"
                        style={{ animationDelay: "2s" }}
                      ></div>
                      <div
                        className="absolute top-20 right-16 w-1.5 h-1.5 bg-slate-600 rounded-full animate-ping"
                        style={{ animationDelay: "2.5s" }}
                      ></div>
                    </>
                  )}
                  {index === 2 && ( // Gold glitter Premium (Package C)
                    <>
                      {/* Main glow */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-orange-400 to-yellow-500 rounded-full blur-lg animate-pulse"></div>

                      {/* Glitter particles */}
                      <div className="absolute top-8 right-12 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute top-16 right-8 w-1 h-1 bg-amber-200 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-12 right-20 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute bottom-8 left-8 w-2 h-2 bg-amber-300 rounded-full animate-ping"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-12 left-16 w-1 h-1 bg-yellow-200 rounded-full animate-ping"
                        style={{ animationDelay: "2s" }}
                      ></div>
                      <div
                        className="absolute top-20 right-16 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"
                        style={{ animationDelay: "2.5s" }}
                      ></div>
                    </>
                  )}
                </div>

                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-gray-600 to-slate-700 text-white px-6 py-2 shadow-xl shadow-gray-500/25">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 relative z-10">
                  <CardTitle className="text-3xl mb-4 font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-6">
                    <span
                      className={`text-5xl font-bold bg-clip-text text-transparent ${
                        index === 0
                          ? "bg-gradient-to-r from-orange-700 to-red-700" // Copper Essential (Package A)
                          : index === 1
                          ? "bg-gradient-to-r from-gray-600 to-slate-600" // Silver Professional (Package B)
                          : "bg-gradient-to-r from-yellow-600 to-amber-600" // Gold Premium (Package C)
                      }`}
                    >
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-gray-600 ml-2 text-lg">
                        {pkg.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 text-pretty leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-sm ${
                            index === 0
                              ? "bg-gradient-to-r from-orange-600 to-red-600" // Copper Essential (Package A)
                              : index === 1
                              ? "bg-gradient-to-r from-gray-500 to-slate-500" // Silver Professional (Package B)
                              : "bg-gradient-to-r from-yellow-500 to-amber-500" // Gold Premium (Package C)
                          }`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-600/25" // Copper Essential (Package A)
                        : index === 1
                        ? "bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white shadow-lg shadow-gray-500/25" // Silver Professional (Package B)
                        : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-lg shadow-yellow-500/25" // Gold Premium (Package C)
                    }`}
                    variant="default"
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
          <Card className="max-w-2xl mx-auto border-2 border-blue-300/30 bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-200 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full blur-xl"></div>
            </div>

            <CardContent className="p-10 relative z-10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Need Something Custom?
              </h3>
              <p className="text-gray-700 mb-8 text-pretty leading-relaxed text-lg">
                Every project is unique. Let's discuss your specific
                requirements and create a custom proposal that fits your vision
                and budget.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl"
                asChild
              >
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
