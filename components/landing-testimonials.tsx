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
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Feedback
          </h2>
          <p className="text-xl text-gray-600">
            What people say about working with Youu Media.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 min-h-[300px] flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
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
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
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
