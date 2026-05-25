"use client";
import { useState } from "react";
import { projects } from "@/data/content";

const categoryLabels: Record<string, string> = {
  all: "All",
  evaluation: "Trustworthy Evaluation",
  governance: "Agent Governance",
  deployment: "Business Deployment",
};

const statusStyles: Record<string, string> = {
  published: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  submitted: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  ongoing: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

const categoryAccent: Record<string, string> = {
  evaluation: "border-l-blue-500",
  governance: "border-l-purple-500",
  deployment: "border-l-emerald-500",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Work</span>
          <h2 className="text-4xl font-bold text-white mt-2">Research Projects</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeCategory === key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`bg-slate-800 border border-slate-700 border-l-4 ${categoryAccent[project.category]} rounded-xl p-7 hover:border-slate-500 transition-colors duration-300`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                <div className="flex-shrink-0">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyles[project.statusType]}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0 mt-1.5" />
                    {point}
                  </li>
                ))}
              </ul>

              {project.paperLink && (
                <div className="mt-5">
                  <a
                    href={project.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
