import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Using Plus Jakarta Sans - an ultra-modern, clean geometric typeface 
// heavily used by top-tier premium tech and design platforms.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Premium Software Engineer & Architect Portfolio",
  description: "International standard full-stack engineering, enterprise solutions, and impactful digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-white selection:text-black min-h-screen overflow-x-hidden`}
      >
        {/* Global Premium Ambient Overlay */}
        <div className="fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-50" />
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}