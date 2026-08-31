const capabilities = [
  {
    n: '01',
    title: 'Systems Engineering',
    desc: 'Platforms, APIs and infrastructure built to be operated — not just launched. Event-driven backends, data pipelines, and the boring reliability work that makes products feel instant.',
    tags: ['Architecture', 'Distributed systems', 'Cloud & edge'],
  },
  {
    n: '02',
    title: 'Applied Intelligence',
    desc: 'Machine learning that survives contact with production. Model strategy, evaluation harnesses, retrieval systems and agentic workflows — measured against business outcomes, not demos.',
    tags: ['ML strategy', 'LLM systems', 'Evaluation'],
  },
  {
    n: '03',
    title: 'Digital Craft',
    desc: 'Design engineering for interfaces people remember. We pair typographic rigor with real-time rendering, motion and WebGL to build product surfaces that carry a brand.',
    tags: ['Design engineering', 'WebGL & motion', 'Design systems'],
  },
  {
    n: '04',
    title: 'Technical Advisory',
    desc: 'Fractional CTO work, architecture review and technical due diligence for investors and leadership teams who need a straight answer about the technology they own — or are about to buy.',
    tags: ['Fractional CTO', 'Due diligence', 'Audits'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 md:px-10 py-28 md:py-40">
      <div className="flex items-end justify-between">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
          02 — Capabilities
        </p>
        <p className="hidden md:block font-mono2 text-[11px] uppercase tracking-[0.2em] text-white/40">
          Four disciplines, one team
        </p>
      </div>

      <div className="mt-12 border-t border-white/15">
        {capabilities.map((c) => (
          <article
            key={c.n}
            className="group relative grid md:grid-cols-[80px_1fr_1.2fr] gap-4 md:gap-10 items-start border-b border-white/15 py-10 md:py-14 transition-all duration-500 hover:bg-white/[0.025] hover:pl-4 md:hover:pl-8 cursor-default"
          >
            <span className="font-mono2 text-sm text-white/30 group-hover:text-[#5c8aff] transition-colors duration-500 pt-2">
              /{c.n}
            </span>
            <h3 className="display-xl text-3xl md:text-5xl text-white">{c.title}</h3>
            <div>
              <p className="text-white/55 leading-relaxed max-w-xl">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="absolute right-0 top-10 md:top-14 text-white/0 group-hover:text-[#5c8aff] transition-all duration-500 text-2xl">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
