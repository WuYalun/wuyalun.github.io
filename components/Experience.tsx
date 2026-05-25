import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Career</span>
          <h2 className="text-4xl font-bold text-white mt-2">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-7 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-900 items-center justify-center -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-slate-500 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{exp.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                        <span className="text-slate-500 text-sm">({exp.companyCN})</span>
                      </div>
                      <p className="text-blue-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-slate-500 text-xs font-mono bg-slate-700 px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
