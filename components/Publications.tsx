import { publications } from "@/data/content";

const statusStyles: Record<string, string> = {
  Published: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Accepted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "Under Review": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "In Preparation": "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Papers</span>
          <h2 className="text-4xl font-bold text-white mt-2">Publications</h2>
        </div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition-colors duration-300 flex flex-col sm:flex-row sm:items-start gap-5"
            >
              {/* Year badge */}
              <div className="flex-shrink-0 text-center sm:pt-0.5">
                <span className="text-slate-500 text-sm font-mono">{pub.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <h3 className="text-white font-medium leading-snug text-sm flex-1 min-w-0">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-slate-300 text-sm font-medium bg-slate-700 px-3 py-1 rounded-md">
                    {pub.venue}
                  </span>
                  <span className="text-slate-500 text-xs">{pub.type}</span>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                      statusStyles[pub.status] ?? "bg-slate-700 text-slate-400 border-slate-600"
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
