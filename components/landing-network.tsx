"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function LandingNetwork() {
  return (
    <section id="network" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-3xl p-12 md:p-16 border border-[#70BFFF]/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/youu-network-logo.png"
                alt="The Youu Network"
                width={400}
                height={150}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Youu Network
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              A professional ecosystem for entrepreneurs, investors, creatives
              and corporate leaders.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 leading-relaxed max-w-3xl mx-auto">
            The Youu Network brings together ambitious individuals who value
            connection, growth and opportunity. Members gain access to
            networking events, insights and a supportive community focused on
            personal and professional development. It is a space for
            collaboration and meaningful relationships.
          </p>

          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Link
                href="https://chat.whatsapp.com/LMHrYWeo9ttFWDs7es2qaT?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join The Network
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
