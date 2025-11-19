"use client";

export function LandingAbout() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Youu Media
            </h2>
          </div>

          {/* Right column - Content */}
          <div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Youu Media is a creative agency built to help corporate and
              commercial brands attract clients, build trust and communicate
              authority through strategic visual content. We use expert
              videography, photography and storytelling to help brands stand
              out, influence decisions and achieve measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
