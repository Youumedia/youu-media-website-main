"use client";

// Placeholder logos - user will replace these
const brandLogos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
}));

export function LandingBrands() {
  return (
    <section id="brands" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by professionals across multiple industries.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200 aspect-square"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Logo</span>
                </div>
                <p className="text-xs text-gray-500">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
