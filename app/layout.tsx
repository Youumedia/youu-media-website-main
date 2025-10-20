import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youu Media | Cinematic Videography & Creative Production",
  description:
    "Youu Media delivers premium videography, photography, and editing services with cinematic quality and creative storytelling.",
  icons: {
    icon: [
      { url: "/images/youu-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/youu-icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/youu-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/youu-icon.png",
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
        <Chatbot />
      </body>
    </html>
  );
}
