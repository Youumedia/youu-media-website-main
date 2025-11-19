import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBot } from "@/components/navigation-bot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youu Media | Strategic Visual Content for Brands",
  description:
    "Youu Media helps corporate and professional brands attract clients, build trust and communicate authority through powerful visual storytelling.",
  icons: {
    icon: [
      { url: "/images/youu-glow.png", sizes: "32x32", type: "image/png" },
      { url: "/images/youu-glow.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/youu-glow.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/youu-glow.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavigationBot />
      </body>
    </html>
  );
}
