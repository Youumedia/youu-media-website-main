import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { FileText, MessageCircle, CheckCircle, Handshake } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Share your portfolio, experience, and tell us about your creative vision and goals.",
    action: "Apply Now",
  },
  {
    icon: MessageCircle,
    title: "Initial Interview",
    description: "Quick chat to understand your skills, availability, and how you fit with our team culture.",
    action: "Schedule Call",
  },
  {
    icon: CheckCircle,
    title: "Portfolio Review",
    description: "Our team reviews your work to ensure it meets our quality standards and client expectations.",
    action: "Under Review",
  },
  {
    icon: Handshake,
    title: "Welcome to the Team",
    description: "Get onboarded, access our project management system, and start receiving opportunities.",
    action: "Start Creating",
  },
]

export function JoinProcess() {
  return (
    <section id="join-process" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How to <span className="text-primary">Join Our Network</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our application process is designed to find passionate creatives who share our vision for quality work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

                <Link
                  href="/join-team"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    index === 0 
                      ? "bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white hover:opacity-90 shadow-lg" 
                      : `bg-white/80 backdrop-blur-sm border-2 ${processStyles[index].border} text-gray-700 hover:bg-white hover:shadow-lg`
                  }`}
                >
                  {step.action}
                </Link>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Creative Family?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            If this vision excites you and you want to be part of a growing creative network, let's create something
            powerful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-team"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white !text-black hover:bg-white/90 hover:!text-black h-11 px-8"
            >
              Start Application
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Link href="mailto:Contact@youumedia.com">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
