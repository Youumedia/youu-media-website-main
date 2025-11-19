"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO, Company Name",
    content:
      "Youu Media transformed our brand presence with exceptional visual content. Their professional approach and creative vision exceeded our expectations.",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Marketing Director, Company Name",
    content:
      "Working with Youu Media was a game-changer. Their strategic storytelling helped us connect with our audience in ways we never imagined.",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Founder, Company Name",
    content:
      "The quality of work from Youu Media is outstanding. They understand corporate branding and deliver content that truly represents our values.",
  },
  {
    id: 4,
    name: "Client Name",
    role: "VP of Communications, Company Name",
    content:
      "Professional, creative, and results-driven. Youu Media helped us build trust and authority through powerful visual storytelling.",
  },
  {
    id: 5,
    name: "Client Name",
    role: "Business Owner, Company Name",
    content:
      "Youu Media's expertise in videography and photography elevated our brand. Highly recommend for any professional looking to stand out.",
  },
];

export function LandingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      {/* Creative floating orbs and shapes - Testimonials section distribution */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - spread around */}
        <div className="absolute top-1/5 left-0 w-[420px] h-[420px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/5 right-0 w-[450px] h-[450px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-0 right-1/3 w-[410px] h-[410px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

        {/* Geometric shapes - distributed */}
        <div className="absolute top-1/6 right-1/4 w-30 h-30 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/5 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.1s" }} />
        <div className="absolute top-2/3 right-1/3 w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-1/2 left-2/3 w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/4 left-1/2 w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Feedback
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            What people say about working with Youu Media.
          </p>
        </div>

        <div className="relative">
          {/* Decorative quote marks */}
          <div className="absolute -top-8 -left-8 text-9xl text-[#70BFFF]/10 font-black z-0">
            "
          </div>
          <div className="absolute -bottom-8 -right-8 text-9xl text-[#BE55FF]/10 font-black z-0">
            "
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 min-h-[300px] flex flex-col justify-center hover:border-[#70BFFF]/40 transition-all overflow-hidden group">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/5 via-[#BE55FF]/5 to-[#70BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic relative">
                <span className="text-4xl text-[#70BFFF]/30 absolute -left-6 -top-4">
                  "
                </span>
                {testimonials[currentIndex].content}
                <span className="text-4xl text-[#BE55FF]/30 absolute -right-6 -bottom-4">
                  "
                </span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#70BFFF] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
