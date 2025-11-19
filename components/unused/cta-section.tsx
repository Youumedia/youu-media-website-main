import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-white/20 animate-gradient-x"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Create Something
          <br />
          <span className="text-white/90">Unforgettable?</span>
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Let's bring your vision to life with cinematic quality and professional delivery. Every project is an
          opportunity to create something that leaves a lasting impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="group bg-white text-primary hover:bg-white/90">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-white/30 text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Talk
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-white/70 text-sm">
          <p>Join 25+ satisfied clients who trust Youu Media for their creative needs</p>
        </div>
      </div>
    </section>
  )
}
