import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yalun Wu",
  description:
    "Yalun Wu – Master's student at NUS NExT++ Lab. Research on trustworthy LLM evaluation, agent governance, and business-driven AI deployment.",
  keywords: ["Yalun Wu", "Aaron Wu", "NUS", "LLM", "AI", "Machine Learning", "Research"],
  authors: [{ name: "Yalun Wu" }],
  openGraph: {
    title: "Yalun Wu",
    description: "I build systems that make LLMs measurable, governable, and deployable.",
    url: "https://wuyalun.github.io",
    siteName: "Yalun Wu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mono.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0d1117] text-slate-300 antialiased">{children}</body>
    </html>
  );
}
