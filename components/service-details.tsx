import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Video,
  Camera,
  Edit3,
  Mic,
  Bone as Drone,
  Palette,
  Brain,
  Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Video,
    title: "Event Videography",
    description:
      "Capture your special moments with cinematic quality and professional consistency.",
    features: [
      "Multi-camera setups for comprehensive coverage",
      "Professional audio recording and mixing",
      "Same-day highlight reels available",
      "Drone footage for aerial perspectives",
      "Live streaming capabilities",
    ],
    pricing: "Custom pricing",
    popular: true,
  },
  {
    icon: Camera,
    title: "Brand Photography",
    description:
      "Professional photography that brings your brand and products to life.",
    features: [
      "Product photography with studio lighting",
      "Brand portraits and headshots",
      "Social media content creation",
      "Commercial and advertising shoots",
      "High-resolution image delivery",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
  {
    icon: Edit3,
    title: "Video Editing & Post-Production",
    description:
      "Transform raw footage into compelling stories with professional polish.",
    features: [
      "Professional color grading and correction",
      "Motion graphics and animations",
      "Sound design and audio mixing",
      "Multiple format delivery options",
      "Revision rounds included",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
  {
    icon: Mic,
    title: "Audio Production",
    description: "Crystal clear audio recording and post-production services.",
    features: [
      "Professional microphone setups",
      "Audio mixing and mastering",
      "Noise reduction and enhancement",
      "Podcast and interview recording",
      "Voice-over production",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
  {
    icon: Brain,
    title: "AI-Generated Content",
    description:
      "Cutting-edge AI-powered content creation for modern digital needs.",
    features: [
      "AI video generation and enhancement",
      "Automated content creation and editing",
      "AI-powered image generation and manipulation",
      "Smart content optimization and personalization",
      "AI-driven social media content creation",
      "Machine learning-based content analysis",
    ],
    pricing: "Custom pricing",
    popular: true,
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Complete creative oversight from concept to final delivery.",
    features: [
      "Concept development and storyboarding",
      "Creative strategy and planning",
      "Team coordination and management",
      "Quality assurance throughout",
      "Brand consistency maintenance",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
  {
    icon: Drone,
    title: "Aerial Cinematography",
    description:
      "Stunning aerial footage that adds cinematic scope to your project.",
    features: [
      "Licensed drone operators",
      "4K aerial video recording",
      "Real estate and property shoots",
      "Event and landscape coverage",
      "Safety-first approach",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
  {
    icon: Zap,
    title: "AI Video Enhancement",
    description:
      "Transform your footage with AI-powered video enhancement and restoration.",
    features: [
      "AI upscaling and resolution enhancement",
      "Automatic color correction and grading",
      "AI noise reduction and stabilization",
      "Smart object removal and replacement",
      "AI-powered slow motion and frame interpolation",
      "Automated subtitle and caption generation",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
];

export function ServiceDetails() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive creative services designed to meet all your visual
            storytelling needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 bg-blue-100 ${
                service.popular ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {service.popular && (
                <div className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-gradient-x text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-gradient-x rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-primary">
                    {service.pricing}
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
