import { education } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Background</span>
          <h2 className="text-4xl font-bold text-white mt-2">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-slate-500 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                  <p className="text-slate-400 text-sm mt-1">{edu.schoolCN}</p>
                </div>
                <span className="text-slate-500 text-xs font-mono bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap ml-4 flex-shrink-0">
                  {edu.period}
                </span>
              </div>

              <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>

              {edu.lab && (
                <p className="text-slate-300 text-sm mb-3">
                  <span className="text-slate-500">Lab: </span>{edu.lab}
                </p>
              )}
              {edu.gpa && (
                <p className="text-slate-300 text-sm mb-3">
                  <span className="text-slate-500">Achievement: </span>{edu.gpa}
                </p>
              )}
              {edu.courses && (
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-500">Courses: </span>{edu.courses}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Programming & Modeling",
                items: ["Python", "PyTorch", "Model Training", "Benchmark Construction"],
              },
              {
                label: "Data & Evaluation",
                items: ["Large-scale Data Processing", "Multi-model Comparison", "Ablation Studies", "Error Analysis"],
              },
              {
                label: "Security & Systems",
                items: ["Cryptography Foundations", "Network Security", "Communication Systems", "UAV Testing"],
              },
              {
                label: "Engineering & Tools",
                items: ["Linux", "Git", "LaTeX", "VS Code"],
              },
            ].map((skill, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="text-slate-300 text-sm font-semibold mb-4 border-b border-slate-700 pb-3">
                  {skill.label}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
