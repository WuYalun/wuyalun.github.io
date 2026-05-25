import Image from "next/image";
import { personalInfo, news, education, publications, experiences } from "@/data/content";

const statusBadge: Record<string, string> = {
  published: "text-emerald-400",
  submitted: "text-blue-400",
  ongoing: "text-amber-400",
};

export default function Home() {
  const published = publications.filter((p) => p.statusType === "published");
  const underReview = publications.filter((p) => p.statusType === "submitted");
  const inPrep = publications.filter((p) => p.statusType === "ongoing");

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Top nav */}
      <nav className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="font-semibold text-slate-900 text-sm">Yalun Wu</span>
          <div className="flex gap-6 text-sm text-slate-500">
            {["About", "News", "Publications", "Experience", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-slate-900 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* ── Header ── */}
        <section id="about" className="flex flex-col md:flex-row gap-8 mb-10 pb-10 border-b border-slate-200">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              Yalun Wu <span className="text-slate-400 font-normal text-2xl">(吴亚伦)</span>
            </h1>
            <p className="text-slate-500 text-sm mb-4">
              Master of Computing · NExT++ Lab · National University of Singapore
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Research interests */}
            <div className="flex flex-wrap gap-2 mb-5">
              {personalInfo.researchInterests.map((r) => (
                <span key={r} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-full">
                  {r}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                WuYalun
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 self-start">
            <div className="relative w-32 h-40 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <Image src={personalInfo.avatar} alt={personalInfo.name} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* ── News ── */}
        <section id="news" className="mb-10 pb-10 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">News</h2>
          <ul className="space-y-2">
            {news.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm">
                <span className="text-slate-400 font-mono w-20 flex-shrink-0">{item.date}</span>
                <span className="text-slate-600">{item.content}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Education ── */}
        <section id="education" className="mb-10 pb-10 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                <span className="text-slate-400 font-mono w-44 flex-shrink-0 text-xs pt-0.5">{edu.period}</span>
                <div>
                  <p className="font-semibold text-slate-800">
                    {edu.school}{" "}
                    <span className="font-normal text-slate-400">({edu.schoolCN})</span>
                    {edu.note && <span className="ml-1 text-slate-400 font-normal">[{edu.note}]</span>}
                  </p>
                  <p className="text-slate-600">{edu.degree}{edu.lab ? ` · ${edu.lab}` : ""}</p>
                  {edu.gpa && <p className="text-slate-500">{edu.gpa}</p>}
                  {edu.lang && <p className="text-slate-500">{edu.lang}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Publications ── */}
        <section id="publications" className="mb-10 pb-10 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Publications</h2>

          {[
            { label: "Conference & Journal Papers", items: published },
            { label: "Under Review", items: underReview },
            { label: "In Preparation", items: inPrep },
          ].map(({ label, items }) =>
            items.length > 0 ? (
              <div key={label} className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{label}</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  {items.map((pub, i) => (
                    <li key={i} className="text-sm pl-1">
                      <span className="font-semibold text-slate-800">{pub.title}</span>
                      <br />
                      <span className="text-slate-500">{pub.authors}</span>
                      <br />
                      <span className="italic text-slate-600">{pub.venue}</span>
                      {" · "}
                      <span className={`font-medium ${statusBadge[pub.statusType]}`}>{pub.status}</span>
                      {pub.note && <span className="text-slate-400"> · {pub.note}</span>}
                      <span className="ml-1 space-x-2">
                        {pub.arxiv && (
                          <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">[arXiv]</a>
                        )}
                        {pub.paperPage && (
                          <a href={pub.paperPage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">[paper]</a>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null
          )}
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="mb-10 pb-10 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Experience</h2>
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                <span className="text-slate-400 font-mono w-44 flex-shrink-0 text-xs pt-0.5">{exp.period}</span>
                <div>
                  <p className="font-semibold text-slate-800">
                    {exp.company}{" "}
                    <span className="font-normal text-slate-400">({exp.companyCN})</span>
                  </p>
                  <p className="text-blue-600 mb-1">{exp.role}</p>
                  <ul className="space-y-1 text-slate-600">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-slate-300 rounded-full flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="mb-10 pb-10 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Programming & Frameworks", value: "Python · PyTorch · Model Training · Benchmark Construction" },
              { label: "Research Methods", value: "Large-scale Data Processing · Ablation Studies · Error Analysis · Multi-model Comparison" },
              { label: "Engineering Tools", value: "Linux · Git · LaTeX · VS Code" },
              { label: "Languages", value: "Chinese (Native) · English (IELTS 6.5) · GRE 322" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-2">
                <span className="text-slate-400 w-44 flex-shrink-0">{label}:</span>
                <span className="text-slate-600">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mb-10 text-sm text-slate-500">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Contact</h2>
          <p>
            Feel free to reach out at{" "}
            <a href={`mailto:${personalInfo.email}`} className="text-blue-500 hover:text-blue-700">
              {personalInfo.email}
            </a>{" "}
            for research collaborations or opportunities.
          </p>
        </section>

        <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © 2026 Yalun Wu · Last updated May 2026 · Built with Next.js
        </footer>
      </main>
    </div>
  );
}
