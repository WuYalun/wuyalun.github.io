import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yalun Wu | Personal Homepage",
  description:
    "Yalun Wu (Aaron Wu) – Master's student at NUS NExT++ Lab. Research on trustworthy LLM evaluation, agent governance, and business-driven AI deployment.",
  keywords: ["Yalun Wu", "Aaron Wu", "NUS", "LLM", "AI", "Machine Learning", "Research"],
  authors: [{ name: "Yalun Wu" }],
  openGraph: {
    title: "Yalun Wu | Personal Homepage",
    description: "I build systems that make LLMs measurable, governable, and deployable.",
    url: "https://gurenolun.github.io",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 antialiased`}>{children}</body>
    </html>
  );
}
