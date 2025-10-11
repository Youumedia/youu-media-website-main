import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "InnovateTech",
    content:
      "Youu Media transformed our brand story into a cinematic masterpiece. The attention to detail and creative vision exceeded our expectations. Our engagement rates increased by 300% after the campaign launch.",
    rating: 5,
    project: "Brand Film",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Coordinator",
    company: "Luxury Weddings Co.",
    content:
      "Working with Youu Media was seamless from start to finish. They captured every precious moment of our clients' wedding with such artistry and professionalism. The final film brought tears to everyone's eyes.",
    rating: 5,
    project: "Wedding Videography",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Global Corp",
    content:
      "The team delivered exceptional conference coverage that perfectly captured the energy and key messages of our annual event. Their multi-camera setup and post-production quality were outstanding.",
    rating: 5,
    project: "Corporate Event",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Creative Director",
    company: "Artisan Bistro",
    content:
      "The food photography and restaurant shots were absolutely stunning. Youu Media understood our brand aesthetic perfectly and delivered images that made our dishes look irresistible.",
    rating: 5,
    project: "Photography",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients have to say about working with Youu Media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const testimonialGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200"
            ];
            
            return (
              <Card
                key={testimonial.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${testimonialGradients[index]} relative overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-10 w-10 text-[#70BFFF]/60" />
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8 text-pretty leading-relaxed text-lg italic">"{testimonial.content}"</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{testimonial.name}</h4>
                      <p className="text-gray-600 font-medium">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent font-semibold">{testimonial.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-10 text-lg font-medium">Trusted by leading brands and individuals</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">InnovateTech</div>
            <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Global Corp</div>
            <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Luxury Weddings Co.</div>
            <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Artisan Bistro</div>
            <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Enterprise Solutions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
