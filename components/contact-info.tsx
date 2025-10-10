import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    content: "Contact@youumedia.com",
    description: "Best for detailed project discussions",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+447958189989",
    description: "Quick questions and urgent inquiries",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    content: "Available on website",
    description: "Instant responses during business hours",
  },
]

const businessInfo = [
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9AM - 6PM GMT\nWeekends: By appointment",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    content: "London, United Kingdom (Primary)\nUK & Europe\nTravel available internationally",
  },
  {
    icon: Calendar,
    title: "Response Time",
    content: "Email: Within 24 hours\nPhone: Same business day\nUrgent: Within 2 hours",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Get in Touch</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const contactGradients = [
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200"
            ];
            
            return (
              <Card key={index} className={`border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] transition-all duration-300 ${contactGradients[index]} relative overflow-hidden shadow-lg hover:shadow-xl`}>
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center shadow-lg relative">
                      <method.icon className="h-6 w-6 text-white" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl blur-md opacity-50"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">{method.title}</h3>
                      <p className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent font-bold mb-2">{method.content}</p>
                      <p className="text-gray-700 font-medium">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Business Information</h3>
        <div className="space-y-6">
          {businessInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center shadow-md relative flex-shrink-0 mt-1">
                <info.icon className="h-5 w-5 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-xl blur-sm opacity-40"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{info.title}</h4>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
