"use client";

const services = [
  {
    title: "Corporate and Commercial Videography",
    description:
      "High quality video content designed to build authority and support business growth.",
  },
  {
    title: "Professional Photography",
    description: "Sharp, trustworthy visuals that strengthen brand identity.",
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
    <section id="services" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#70BFFF]/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
