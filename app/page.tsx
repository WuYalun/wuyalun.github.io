import Image from "next/image";
import { personalInfo, news, education, publications, experiences } from "@/data/content";

const venueColor: Record<string, string> = {
  "ICLR 2026": "text-violet-400",
  "IJCNN 2026": "text-blue-400",
  "NLPCC 2025 (Oral)": "text-emerald-400",
  "COLM 2026": "text-sky-400",
  "ACL Rolling Review / ICML 2026": "text-orange-400",
  "Nature Machine Intelligence": "text-pink-400",
  "Nature Medicine": "text-pink-400",
};

const statusDot: Record<string, string> = {
  published: "bg-emerald-400",
  submitted: "bg-blue-400",
  ongoing: "bg-amber-400",
};

const navItems = ["about", "news", "publications", "experience", "contact"];

export default function Home() {
  const published = publications.filter((p) => p.statusType === "published");
  const underReview = publications.filter((p) => p.statusType === "submitted");
  const inPrep = publications.filter((p) => p.statusType === "ongoing");

  return (
    <div className="min-h-screen">
      {/* ── Sticky nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#21262d] bg-[#0d1117]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-11 flex items-center justify-between">
          <span className="font-mono text-[#58a6ff] text-sm tracking-tight">
            <span className="text-[#3fb950] mr-1">~/</span>wuyalun
          </span>
          <div className="hidden sm:flex gap-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-mono text-xs text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        {/* ── Hero ── */}
        <section id="about" className="py-10 border-b border-[#21262d]">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              {/* Terminal prompt style */}
              <div className="font-mono text-xs text-[#3fb950] mb-4 flex items-center gap-2">
                <span className="opacity-60">$</span>
                <span>whoami</span>
                <span className="inline-block w-2 h-4 bg-[#3fb950] animate-pulse ml-1 opacity-70" />
              </div>

              <h1 className="text-3xl font-bold text-[#e6edf3] mb-1 tracking-tight">
                Yalun Wu{" "}
                <span className="font-mono text-lg font-normal text-[#8b949e]">吴亚伦</span>
              </h1>
              <p className="font-mono text-sm text-[#58a6ff] mb-5">
                M.Comp @ NUS NExT++ Lab &nbsp;·&nbsp; Singapore
              </p>

              <p className="text-sm text-[#8b949e] leading-relaxed mb-5 max-w-lg">
                {personalInfo.bio}
              </p>

              {/* Research interest tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {personalInfo.researchInterests.map((r) => (
                  <span
                    key={r}
                    className="font-mono text-xs bg-[#161b22] border border-[#30363d] text-[#58a6ff] px-2 py-0.5 rounded"
                  >
                    {r}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  <span className="text-[#3fb950]">✉</span> {personalInfo.email}
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  <span className="text-[#3fb950]">⌥</span> github/WuYalun
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0 self-start">
              <div className="relative w-28 h-36 rounded overflow-hidden border border-[#30363d]">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              <p className="font-mono text-[10px] text-[#484f58] mt-1 text-center">
                NUS, 2025
              </p>
            </div>
          </div>
        </section>

        {/* ── News ── */}
        <section id="news" className="py-8 border-b border-[#21262d]">
          <SectionTitle>News</SectionTitle>
          <ul className="space-y-1.5">
            {news.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm">
                <span className="font-mono text-[10px] text-[#484f58] w-20 flex-shrink-0 pt-0.5 tracking-wide uppercase">
                  {item.date}
                </span>
                <span className="text-[#8b949e] leading-relaxed">{item.content}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-8 border-b border-[#21262d]">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="font-mono text-[10px] text-[#484f58] w-36 flex-shrink-0 pt-0.5 leading-relaxed">
                  {edu.period}
                  {edu.note && (
                    <>
                      <br />
                      <span className="text-amber-500/60">[{edu.note}]</span>
                    </>
                  )}
                </span>
                <div>
                  <p className="text-[#e6edf3] font-semibold">
                    {edu.school}{" "}
                    <span className="font-normal text-[#484f58] font-mono text-xs">
                      {edu.schoolCN}
                    </span>
                  </p>
                  <p className="text-[#58a6ff] text-xs font-mono">
                    {edu.degree}
                    {edu.lab ? ` · ${edu.lab}` : ""}
                  </p>
                  {edu.gpa && (
                    <p className="text-[#8b949e] text-xs mt-0.5">{edu.gpa}</p>
                  )}
                  {edu.lang && (
                    <p className="text-[#8b949e] text-xs">{edu.lang}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Publications ── */}
        <section id="publications" className="py-8 border-b border-[#21262d]">
          <SectionTitle>Publications</SectionTitle>

          {/* Legend */}
          <div className="flex gap-4 mb-6 font-mono text-[10px] text-[#484f58]">
            {[
              { dot: "bg-emerald-400", label: "Published" },
              { dot: "bg-blue-400", label: "Under Review" },
              { dot: "bg-amber-400", label: "In Preparation" },
            ].map(({ dot, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {label}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            {[...published, ...underReview, ...inPrep].map((pub, i) => (
              <div key={i} className="flex gap-4 group">
                {/* Status dot */}
                <div className="flex-shrink-0 pt-1.5">
                  <span className={`block w-1.5 h-1.5 rounded-full ${statusDot[pub.statusType]}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[#e6edf3] text-sm font-medium leading-snug mb-0.5">
                    {pub.title}
                  </p>
                  <p className="text-[#8b949e] text-xs mb-1">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono">
                    <span className={`font-semibold ${venueColor[pub.venue] ?? "text-[#8b949e]"}`}>
                      {pub.venue}
                    </span>
                    <span className="text-[#30363d]">·</span>
                    <span className="text-[#484f58]">{pub.note}</span>
                    {pub.arxiv && (
                      <>
                        <span className="text-[#30363d]">·</span>
                        <a
                          href={pub.arxiv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                        >
                          arXiv
                        </a>
                      </>
                    )}
                    {pub.paperPage && (
                      <>
                        <span className="text-[#30363d]">·</span>
                        <a
                          href={pub.paperPage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                        >
                          paper
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-8 border-b border-[#21262d]">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="font-mono text-[10px] text-[#484f58] w-36 flex-shrink-0 pt-0.5 leading-relaxed">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <p className="text-[#e6edf3] font-semibold">
                    {exp.company}{" "}
                    <span className="font-mono text-xs font-normal text-[#484f58]">
                      {exp.companyCN}
                    </span>
                  </p>
                  <p className="text-[#58a6ff] font-mono text-xs mb-2">{exp.role}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-[#8b949e] text-xs leading-relaxed">
                        <span className="text-[#3fb950] font-mono flex-shrink-0 mt-0.5">›</span>
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
        <section id="skills" className="py-8 border-b border-[#21262d]">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-xs font-mono">
            {[
              { k: "Languages", v: "Python · PyTorch · CUDA" },
              { k: "Domains", v: "LLM Eval · Agents · Med-AI" },
              { k: "Tools", v: "Linux · Git · LaTeX · HuggingFace" },
              { k: "English", v: "IELTS 6.5 · GRE 322 (V152/Q170)" },
            ].map(({ k, v }) => (
              <div key={k} className="flex gap-2">
                <span className="text-[#484f58] w-28 flex-shrink-0">{k}</span>
                <span className="text-[#8b949e]">{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-8">
          <SectionTitle>Contact</SectionTitle>
          <p className="text-sm text-[#8b949e]">
            Open to research collaborations, internships, and interesting conversations about
            trustworthy AI. Reach me at{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
            >
              {personalInfo.email}
            </a>
            .
          </p>
        </section>

        {/* Footer */}
        <div className="border-t border-[#21262d] pt-6 font-mono text-[10px] text-[#484f58] flex justify-between">
          <span>© 2026 Yalun Wu</span>
          <span>
            last updated May 2026 &nbsp;·&nbsp;{" "}
            <a
              href="https://github.com/WuYalun/wuyalun.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b949e] transition-colors"
            >
              source
            </a>
          </span>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-[10px] text-[#3fb950] uppercase tracking-widest">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#21262d]" />
    </div>
  );
}
