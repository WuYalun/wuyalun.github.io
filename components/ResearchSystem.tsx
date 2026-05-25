import { researchFramework } from "@/data/content";

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    dot: "bg-purple-400",
  },
  green: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
};

export default function ResearchSystem() {
  return (
    <section id="research" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Research Framework</span>
          <h2 className="text-4xl font-bold text-white mt-2">{researchFramework.tagline}</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A three-layer system where each layer builds on the previous: first define what reliable means, then engineer
            mechanisms to achieve it, then convert that reliability into real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchFramework.layers.map((layer, i) => {
            const c = colorMap[layer.color];
            return (
              <div
                key={layer.id}
                className={`${c.bg} border ${c.border} rounded-2xl p-8 relative`}
              >
                {/* Layer number */}
                <div className="absolute -top-4 left-8">
                  <span className={`${c.text} text-xs font-mono bg-slate-900 border ${c.border} px-3 py-1 rounded-full`}>
                    Layer {i + 1}
                  </span>
                </div>

                <div className="text-3xl mb-4 mt-2">{layer.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${c.text}`}>{layer.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{layer.subtitle}</p>

                <div className="space-y-2">
                  {layer.projects.map((proj, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 ${c.dot} rounded-full flex-shrink-0`} />
                      <span className="text-slate-300 text-sm">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow connectors for desktop */}
        <div className="hidden md:flex justify-center mt-8 items-center gap-4">
          <span className="text-slate-500 text-sm">Identify problems</span>
          <svg className="w-8 h-4 text-slate-600" fill="none" viewBox="0 0 32 16">
            <path stroke="currentColor" strokeWidth="1.5" d="M0 8h28M22 2l6 6-6 6" />
          </svg>
          <span className="text-slate-500 text-sm">Build solutions</span>
          <svg className="w-8 h-4 text-slate-600" fill="none" viewBox="0 0 32 16">
            <path stroke="currentColor" strokeWidth="1.5" d="M0 8h28M22 2l6 6-6 6" />
          </svg>
          <span className="text-slate-500 text-sm">Create value</span>
        </div>
      </div>
    </section>
  );
}
