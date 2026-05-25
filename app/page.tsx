import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchSystem from "@/components/ResearchSystem";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ResearchSystem />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
    </main>
  );
}
