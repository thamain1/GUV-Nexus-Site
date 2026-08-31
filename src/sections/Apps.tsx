const apps = [
  {
    n: 'A.01',
    name: 'Company Agents',
    challenge: 'Custom business agents and workflow automation — we design and deploy AI agents that take repetitive operations work off your team\'s plate.',
    domain: 'Business automation',
    status: 'Live',
    year: '2025',
  },
  {
    n: 'A.02',
    name: 'OnSite Drop',
    challenge: 'Delivery coordination for construction and service sites — scheduling, tracking and proof-of-delivery for crews and suppliers.',
    domain: 'Construction & field service',
    status: 'In build',
    year: '2026',
  },
  {
    n: 'A.03',
    name: 'Tailwatch',
    challenge: 'Aviation lease and engine compliance tracking — maintenance intervals, lease covenants and documentation in one airframe-level ledger.',
    domain: 'Aviation',
    status: 'In build',
    year: '2026',
  },
  {
    n: 'A.04',
    name: 'NIL Ledger',
    challenge: 'Contract and finance tracking for name, image and likeness deals — athletes, agents and collectives stay audit-ready.',
    domain: 'Sports finance',
    status: 'In build',
    year: '2026',
  },
  {
    n: 'A.05',
    name: 'GIAV',
    challenge: 'Financial education built for women — practical investing and money skills through guided, jargon-free learning paths.',
    domain: 'Fintech education',
    status: 'Concept',
    year: '2026',
  },
]

function StatusPill({ status }: { status: string }) {
  const live = status === 'Live'
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] ${
        live
          ? 'bg-[#0033a0] text-white font-medium'
          : 'border border-white/25 text-white/60'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-white' : 'bg-[#e4002b]'}`} />
      {status}
    </span>
  )
}

export default function Apps() {
  return (
    <section id="apps" className="border-t border-white/10 px-6 md:px-10 py-28 md:py-40">
      <div className="flex items-end justify-between">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
          04 — The app portfolio
        </p>
        <p className="hidden md:block font-mono2 text-[11px] uppercase tracking-[0.2em] text-white/40">
          Real problems, shipped software
        </p>
      </div>

      <h2 className="display-xl mt-6 text-4xl md:text-6xl text-white max-w-4xl">
        Apps that earn
        <br />
        <span className="text-white/40">their keep.</span>
      </h2>
      <p className="mt-8 max-w-xl text-white/55 leading-relaxed">
        Alongside client work, GUV Nexus designs, builds and operates a growing
        portfolio of focused applications — each one aimed at a specific,
        unglamorous business problem worth solving properly.
      </p>

      <div className="mt-16 border-t border-white/15">
        {apps.map((a) => (
          <article
            key={a.n}
            className="group grid md:grid-cols-[90px_1.1fr_1.6fr_auto] gap-3 md:gap-10 items-start md:items-center border-b border-white/15 py-8 md:py-10 transition-all duration-500 hover:bg-white/[0.025] hover:pl-4 md:hover:pl-8 cursor-default"
          >
            <span className="font-mono2 text-sm text-white/30 group-hover:text-[#5c8aff] transition-colors duration-500">
              {a.n}
            </span>
            <div>
              <h3 className="display-xl text-2xl md:text-4xl text-white">{a.name}</h3>
              <p className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                {a.domain} — {a.year}
              </p>
            </div>
            <p className="text-white/55 leading-relaxed max-w-xl">{a.challenge}</p>
            <StatusPill status={a.status} />
          </article>
        ))}
      </div>

      <p className="mt-12 font-mono2 text-[11px] uppercase tracking-[0.18em] text-white/40 max-w-lg">
        Portfolio names shown pre-launch branding. Demos and access on request.
      </p>
    </section>
  )
}
