"use client";

const services = [
  {
    title: "Videography and Photography",
    description:
      "High quality video and photography content designed to build authority, strengthen brand identity and support business growth.",
  },
  {
    title: "Branded Visual Content for Social Media platforms",
    description:
      "Strategic visual content creation, graphic design and management for social media and digital platforms that engages your audience and drives results.",
  },
  {
    title: "Brand Storytelling and Visual Strategy",
    description:
      "Creative direction and planning that helps your content convert.",
  },
  {
    title: "Post Production and Editing",
    description:
      "Smooth, professional editing that presents your brand at the highest standard.",
  },
];

export function LandingServices() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Creative gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BE55FF]/5 via-transparent to-[#70BFFF]/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#BE55FF]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#70BFFF]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
            What We Offer
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-transparent overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                {index + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#70BFFF] group-hover:to-[#BE55FF] group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute bottom-6 right-6 text-3xl text-[#70BFFF] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
