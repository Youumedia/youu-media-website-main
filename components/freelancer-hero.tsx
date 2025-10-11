import { Button, buttonVariants } from "@/components/ui/button"
import { Users, Briefcase, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    icon: Briefcase,
    title: "Consistent Work",
    description: "Access to exciting projects without chasing clients",
  },
  {
    icon: Users,
    title: "Creative Community",
    description: "Collaborate with talented professionals",
  },
  {
    icon: TrendingUp,
    title: "Skill Growth",
    description: "Expand your portfolio with diverse projects",
  },
  {
    icon: Award,
    title: "Fair Opportunities",
    description: "Transparent job distribution and respect",
  },
]

export function FreelancerHero() {
  return (
    <section className="pt-24 pb-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Join the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Youu Media</span>
            <br />
            <span className="text-foreground">Creative Network</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Step into a community where talented freelancers collaborate on premium projects. We handle the business
            side so you can focus on what you do best - creating.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-team" className={buttonVariants({ size: "lg" })}>
              Apply to Join
            </Link>
            <Link href="#available-jobs" className={buttonVariants({ size: "lg", variant: "outline" })}>
              View Available Jobs
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
