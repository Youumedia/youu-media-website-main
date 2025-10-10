import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, TrendingUp, Shield, Clock, Star } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Consistent Project Flow",
    description:
      "Access to exciting projects across events, brands and corporate storytelling without needing to chase work.",
    features: ["Regular opportunities", "Diverse project types", "No client hunting"],
  },
  {
    icon: Users,
    title: "Creative Collaboration",
    description:
      "Work with other talented creatives and learn from them while building lasting professional relationships.",
    features: ["Skill sharing", "Networking opportunities", "Team projects"],
  },
  {
    icon: TrendingUp,
    title: "Portfolio Growth",
    description:
      "Build your portfolio with high-quality projects that showcase your skills and attract future opportunities.",
    features: ["Premium projects", "Portfolio showcase", "Skill development"],
  },
  {
    icon: Shield,
    title: "Business Support",
    description: "We handle project management, logistics and client handling so you can focus on your craft.",
    features: ["Client management", "Project coordination", "Payment handling"],
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose projects that fit your schedule and availability. Work when you want, how you want.",
    features: ["Project selection", "Schedule control", "Work-life balance"],
  },
  {
    icon: Star,
    title: "Fair Opportunities",
    description: "Transparent job distribution with respect for all team members and equal access to opportunities.",
    features: ["Transparent process", "Fair compensation", "Equal opportunities"],
  },
]

export function FreelancerBenefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Why Join{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Youu Media</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            More than just picking up jobs - you're stepping into a community that supports your creative growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const benefitGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
              "bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200",
              "bg-gradient-to-br from-cyan-200 via-sky-100 to-blue-200"
            ];
            
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${benefitGradients[index]} relative overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl relative">
                      <benefit.icon className="h-8 w-8 text-white" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{benefit.title}</h3>
                    <p className="text-gray-700 text-pretty leading-relaxed">{benefit.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full mr-3 shadow-sm" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
