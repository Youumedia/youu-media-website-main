import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Edit3, Users, Zap, Award } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Event Videography",
    description:
      "Weddings, corporate functions, and celebrations captured with cinematic quality and professional consistency.",
    features: ["Multi-camera setups", "Professional audio", "Same-day highlights"],
  },
  {
    icon: Camera,
    title: "Brand Photography",
    description:
      "Promotional content and social-first campaigns that bring businesses and products to life with visual impact.",
    features: ["Product photography", "Brand portraits", "Social media content"],
  },
  {
    icon: Edit3,
    title: "Video Editing",
    description:
      "Post-production services that transform raw footage into compelling stories with professional polish.",
    features: ["Color grading", "Motion graphics", "Sound design"],
  },
]

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "The best work comes when creatives support each other",
  },
  {
    icon: Zap,
    title: "Creativity",
    description: "Every project deserves fresh ideas and cinematic storytelling",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We deliver on time with clarity and respect",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/10 to-brandPurple/10 animate-gradient-x"></div>

      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Premium videography services designed to capture stories with cinematic quality and professional
            consistency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const cardGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200", 
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200"
            ];
            
            return (
            <Card
              key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${cardGradients[index]} relative overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] animate-gradient-x rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl relative">
                      <service.icon className="h-8 w-8 text-white" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{service.title}</h3>
                    <p className="text-gray-700 text-pretty leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
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

        {/* Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Values</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const valueColors = [
              { bg: "from-blue-200 to-purple-200", icon: "from-blue-600 to-purple-600" },
              { bg: "from-purple-200 to-pink-200", icon: "from-purple-600 to-pink-600" },
              { bg: "from-pink-200 to-blue-200", icon: "from-pink-600 to-blue-600" }
            ];
            
            return (
              <div key={index} className="text-center group relative">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${valueColors[index].bg} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50">
                  <div className={`w-20 h-20 bg-gradient-to-br ${valueColors[index].icon} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg relative`}>
                    <value.icon className="h-10 w-10 text-white" />
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${valueColors[index].icon} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{value.title}</h4>
                  <p className="text-gray-700 text-pretty leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
