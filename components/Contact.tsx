import { personalInfo } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Get in Touch</span>
        <h2 className="text-4xl font-bold text-white mt-2 mb-6">Contact</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          I&apos;m open to research collaborations, internship opportunities, and any interesting conversations about
          trustworthy AI systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl font-medium transition-colors duration-200 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            github.com/WuYalun
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-600 text-sm">
          <p>© 2026 Yalun Wu · Built with Next.js & Tailwind CSS · Hosted on GitHub Pages</p>
        </div>
      </div>
    </section>
  );
}
