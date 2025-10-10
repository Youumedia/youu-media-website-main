import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, FileText, Video, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and project goals to understand exactly what you need.",
    duration: "30-60 minutes",
  },
  {
    icon: FileText,
    title: "Proposal & Planning",
    description: "Receive a detailed proposal with timeline, team assignments, and creative approach.",
    duration: "2-5 business days",
  },
  {
    icon: Video,
    title: "Production Phase",
    description: "Our skilled team executes the project with professional equipment and cinematic expertise.",
    duration: "1-3 weeks",
  },
  {
    icon: Truck,
    title: "Delivery & Support",
    description: "Final deliverables in your preferred formats with ongoing support for any adjustments.",
    duration: "3-10 business days",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined approach that ensures quality results and clear communication every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const processStyles = [
              { 
                bg: "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
                glow: "from-blue-300 to-indigo-300",
                border: "border-blue-300/50",
                number: "from-blue-500 to-indigo-600"
              },
              { 
                bg: "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
                glow: "from-purple-300 to-pink-300", 
                border: "border-purple-300/50",
                number: "from-purple-500 to-pink-600"
              },
              { 
                bg: "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
                glow: "from-emerald-300 to-teal-300",
                border: "border-emerald-300/50", 
                number: "from-emerald-500 to-teal-600"
              },
              { 
                bg: "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
                glow: "from-orange-300 to-yellow-300",
                border: "border-orange-300/50",
                number: "from-orange-500 to-yellow-600"
              }
            ];
            
            return (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 border-2 ${processStyles[index].border} hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${processStyles[index].bg} overflow-hidden`}
              >
              <CardContent className="p-8 text-center relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${processStyles[index].glow} rounded-full blur-lg`}></div>
                  <div className={`absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr ${processStyles[index].glow} rounded-full blur-md`}></div>
                </div>
                
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${processStyles[index].number} rounded-full flex items-center justify-center text-white text-lg font-bold shadow-xl`}>
                  {index + 1}
                </div>

                <div className={`w-20 h-20 bg-gradient-to-br ${processStyles[index].glow} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-6 group-hover:scale-110 transition-transform shadow-lg relative`}>
                  <step.icon className="h-10 w-10 text-white" />
                  {/* Icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${processStyles[index].glow} rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                </div>

                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{step.title}</h3>
                <p className="text-gray-700 text-sm text-pretty mb-6 leading-relaxed">{step.description}</p>

                <div className={`text-sm font-semibold bg-gradient-to-r ${processStyles[index].number} bg-clip-text text-transparent px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30`}>
                  {step.duration}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
