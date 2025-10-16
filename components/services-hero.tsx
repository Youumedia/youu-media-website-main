import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Cinematic quality guaranteed",
  "Professional team coordination",
  "Fast turnaround times",
  "Transparent pricing",
];

export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Premium{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-foreground">Services</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
              From intimate weddings to corporate campaigns, we deliver
              cinematic quality that elevates your story and leaves a lasting
              impact.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/corporate-office-cinematic-video-thumbnail.jpg"
                alt="Corporate videography"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="/elegant-wedding-ceremony-cinematic-video-thumbnail.jpg"
                alt="Wedding videography"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-8"
              />
              <img
                src="/luxury-product-launch-video-thumbnail.jpg"
                alt="Product photography"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow -mt-8"
              />
              <img
                src="/professional-conference-event-video-thumbnail.jpg"
                alt="Event coverage"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
