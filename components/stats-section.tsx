import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "8+",
    label: "Our Team",
    description:
      "Professional videographers, photographers, and editors in our network",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description:
      "Consistent quality and professional delivery on every project",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Dedicated project management and client communication",
  },
];

export function StatsSection() {
  return (
    <section className="pb-24">
      <div className="w-full h-3 bg-gradient-brand relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-gray-900">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
              Clients Worldwide
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Our commitment to excellence and professional delivery has earned us
            the trust of brands and individuals alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const statGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
            ];

            return (
              <Card
                key={index}
                className={`text-center group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${statGradients[index]} relative overflow-hidden`}
              >
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform relative">
                    {stat.number}
                    {/* Number glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {stat.label}
                  </h3>
                  <p className="text-base text-gray-700 text-pretty leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
