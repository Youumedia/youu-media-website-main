import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function PortfolioCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Ready to Create Your
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Let's discuss your vision and create something that captures your
          story with the same cinematic quality you see in our portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="group">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            asChild
            className="group bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white border-0"
          >
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Your Vision
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-muted-foreground text-sm">
          <p>Free consultation • Custom proposals • Professional delivery</p>
        </div>
      </div>
    </section>
  );
}
