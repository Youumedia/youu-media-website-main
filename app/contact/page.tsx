import { Navigation } from "@/components/navigation";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactConsultation } from "@/components/contact-consultation";
import { ContactInfo } from "@/components/contact-info";
import { Footer } from "@/components/footer";

("use client");

export default function ContactPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>

      <Navigation />

      {/* Subtle Moving Purple Grid Background */}
      <div className="fixed inset-0 pointer-events-none moving-grid"></div>

      {/* Main content */}
      <div className="relative z-10">
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-8">
            <ContactForm />
            <ContactConsultation />
          </div>
          <ContactInfo />
        </div>
      </div>

      <Footer />

      {/* Purple Grid Background Styles */}
      <style jsx>{`
        /* Subtle moving purple grid */
        .moving-grid {
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @media (max-width: 768px) {
          .moving-grid {
            background-size: 30px 30px;
          }
          @keyframes grid-move {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 30px 30px;
            }
          }
        }
      `}</style>
    </main>
  );
}
