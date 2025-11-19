"use client";

// Placeholder logos - user will replace these
const brandLogos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
}));

export function LandingBrands() {
  return (
    <section
      id="brands"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/3 via-transparent to-[#BE55FF]/3" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#70BFFF]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Partnerships
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-700">Across multiple industries.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {brandLogos.map((brand, index) => (
            <div
              key={brand.id}
              className="group flex items-center justify-center p-6 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-[#70BFFF]/5 hover:to-[#BE55FF]/5 transition-all border border-gray-200 hover:border-[#70BFFF]/40 hover:shadow-xl aspect-square transform hover:scale-105"
            >
              <div className="text-center relative">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                <div className="relative w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-xl flex items-center justify-center group-hover:from-[#70BFFF]/30 group-hover:to-[#BE55FF]/30 transition-all shadow-lg group-hover:shadow-xl">
                  <span className="text-xs text-gray-600 font-bold group-hover:text-gray-900 transition-colors">
                    Logo
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
