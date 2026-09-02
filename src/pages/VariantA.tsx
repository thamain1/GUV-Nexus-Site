// Variant A — "Editorial Light"
// Warm paper, Fraunces serif, hairline rules, consultancy-grade restraint.

const INK = '#14161A'
const PAPER = '#FAFAF7'
const LINE = '#E3DED2'
const BLUE = '#0033A0'
const RED = '#F43F5E'
const MUTED = '#6B6359'

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

const apps = [
  { n: 'A.01', name: 'Company Agents', challenge: 'Custom business agents and workflow automation — we design and deploy AI agents that take repetitive operations work off your team\'s plate.', domain: 'Business automation', status: 'Live', year: '2025' },
  { n: 'A.02', name: 'OnSite Drop', challenge: 'Delivery coordination for construction and service sites — scheduling, tracking and proof-of-delivery for crews and suppliers.', domain: 'Construction & field service', status: 'In build', year: '2026' },
  { n: 'A.03', name: 'Tailwatch', challenge: 'Aviation lease and engine compliance tracking — maintenance intervals, lease covenants and documentation in one airframe-level ledger.', domain: 'Aviation', status: 'In build', year: '2026' },
  { n: 'A.04', name: 'NIL Ledger', challenge: 'Contract and finance tracking for name, image and likeness deals — athletes, agents and collectives stay audit-ready.', domain: 'Sports finance', status: 'In build', year: '2026' },
  { n: 'A.05', name: 'GIAV', challenge: 'Financial education built for women — practical investing and money skills through guided, jargon-free learning paths.', domain: 'Fintech education', status: 'Concept', year: '2026' },
]

const stats = [
  { value: '46', label: 'Engagements shipped' },
  { value: '14', label: 'Industries served' },
  { value: '9', label: 'Senior principals' },
  { value: '0', label: 'Junior handoffs' },
]

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-mono2 text-[11px] uppercase tracking-[0.22em]"
      style={{ color: light ? 'rgba(255,255,255,0.55)' : BLUE }}
    >
      {children}
    </p>
  )
}

export default function VariantA() {
  return (
    <main className="min-h-screen antialiased" style={{ background: PAPER, color: INK, fontFamily: "'Inter', sans-serif" }}>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6" style={{ borderBottom: `1px solid ${LINE}` }}>
        <a href="/" className="font-serif-edit text-xl" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          GUV Nexus<span style={{ color: RED }}>.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono2 text-[11px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
          <a href="#a-practice" className="hover:text-[#14161A] transition-colors">Practice</a>
          <a href="#a-capabilities" className="hover:text-[#14161A] transition-colors">Capabilities</a>
          <a href="#a-work" className="hover:text-[#14161A] transition-colors">Work</a>
          <a href="#a-apps" className="hover:text-[#14161A] transition-colors">Apps</a>
        </nav>
        <a
          href="mailto:hello@guvnexus.com"
          className="rounded-full px-5 py-2.5 font-mono2 text-[11px] uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-85"
          style={{ background: INK }}
        >
          Start a conversation
        </a>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="flex items-center justify-between">
          <Eyebrow>Boutique technology studio</Eyebrow>
          <p className="hidden md:block font-mono2 text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTED }}>
            Systems / Intelligence / Craft / Advisory
          </p>
        </div>

        <h1
          className="font-serif-edit mt-10 max-w-5xl text-[13vw] md:text-[6.2vw] leading-[1.02]"
          style={{ fontWeight: 400, letterSpacing: '-0.015em' }}
        >
          Software that solves{' '}
          <em className="font-serif-edit" style={{ fontStyle: 'italic', fontWeight: 400, color: BLUE }}>
            real
          </em>{' '}
          business problems<span style={{ color: RED }}>.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
          <p className="max-w-md text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            GUV Nexus designs, builds and operates focused applications for
            specific, unglamorous business challenges — alongside a handful of
            senior-only client engagements each year.
          </p>
          <div className="flex md:justify-end gap-10 font-mono2 text-[11px] uppercase tracking-[0.18em]">
            <a href="#a-work" className="link-line" style={{ color: INK }}>Selected work</a>
            <a href="#a-apps" className="link-line" style={{ color: INK }}>The app portfolio</a>
          </div>
        </div>

        <div className="mt-16" style={{ border: `1px solid ${LINE}`, padding: 8 }}>
          <video
            src="/media/hero-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
        <p className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
          Fig. 01 — Glass systems study, rendered in-house
        </p>
      </section>

      {/* ── 01 Practice ─────────────────────────────────── */}
      <section id="a-practice" className="px-6 md:px-12 py-20 md:py-32" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow>01 — The practice</Eyebrow>
          <div>
            <h2 className="font-serif-edit text-4xl md:text-6xl leading-[1.05]" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
              Small by design.
              <br />
              <span style={{ color: MUTED }}>Serious by default.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
              GUV Nexus is a boutique technology studio. Alongside a handful of
              client engagements a year, we design, build and operate our own
              portfolio of applications. Senior people only, on everything we
              touch. No layers, no handoffs, no theatre.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4" style={{ border: `1px solid ${LINE}` }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 md:p-10"
              style={{ borderLeft: i > 0 ? `1px solid ${LINE}` : undefined }}
            >
              <div className="font-serif-edit text-5xl md:text-6xl" style={{ fontWeight: 400 }}>{s.value}</div>
              <div className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 Capabilities ─────────────────────────────── */}
      <section id="a-capabilities" className="px-6 md:px-12 py-20 md:py-32" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow>02 — Capabilities</Eyebrow>
          <h2 className="font-serif-edit text-4xl md:text-6xl leading-[1.05]" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
            Four disciplines, <span style={{ color: MUTED }}>one team.</span>
          </h2>
        </div>

        <div className="mt-16" style={{ borderTop: `1px solid ${LINE}` }}>
          {capabilities.map((c) => (
            <article
              key={c.n}
              className="group grid md:grid-cols-[220px_1fr_1.2fr_40px] gap-4 md:gap-10 items-baseline py-10 md:py-12 transition-colors duration-300"
              style={{ borderBottom: `1px solid ${LINE}` }}
            >
              <span className="font-mono2 text-[11px] uppercase tracking-[0.2em]" style={{ color: MUTED }}>
                /{c.n}
              </span>
              <h3 className="font-serif-edit text-3xl md:text-[2.6rem] leading-tight" style={{ fontWeight: 400 }}>
                {c.title}
              </h3>
              <div>
                <p className="leading-relaxed max-w-xl" style={{ color: MUTED }}>{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {c.tags.map((t) => (
                    <span key={t} className="font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="hidden md:block text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: BLUE }}>
                →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ── Dark interlude: Leadership ──────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-36" style={{ background: INK, color: PAPER }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow light>03 — Leadership</Eyebrow>
          <div>
            <p className="font-serif-edit text-3xl md:text-5xl leading-[1.15] max-w-4xl" style={{ fontWeight: 400 }}>
              GUV Nexus is led by{' '}
              <em className="font-serif-edit" style={{ fontStyle: 'italic', color: '#9BB8FF' }}>Beth Underhill</em>
              , principal and founder — backed by a bench of senior engineers,
              researchers and designers who have shipped at scale and chose to
              work small.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(250,250,247,0.5)' }}>
              <span>Principal — B. Underhill</span>
              <span>Senior teams only</span>
              <span>US & EU time zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Selected work ────────────────────────────── */}
      <section id="a-work" className="px-6 md:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow>04 — Selected work</Eyebrow>
          <h2 className="font-serif-edit text-4xl md:text-6xl leading-[1.05]" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
            Proof, <span style={{ color: MUTED }}>not promises.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[
            { img: '/media/work-systems.jpg', name: 'Helios Grid', scope: 'Real-time energy telemetry platform', year: '2025', tags: ['Systems engineering', 'Streaming data'] },
            { img: '/media/work-intelligence.jpg', name: 'Vanta Index', scope: 'Applied ML for private markets', year: '2024', tags: ['Applied intelligence', 'Retrieval systems'] },
          ].map((p) => (
            <div key={p.name}>
              <div style={{ border: `1px solid ${LINE}`, padding: 8 }}>
                <img src={p.img} alt={p.name} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex items-baseline justify-between pt-4" style={{ borderTop: `1px solid ${LINE}` }}>
                <div>
                  <h3 className="font-serif-edit text-2xl md:text-4xl" style={{ fontWeight: 400 }}>{p.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: MUTED }}>{p.scope}</p>
                </div>
                <span className="font-mono2 text-[11px]" style={{ color: MUTED }}>{p.year}</span>
              </div>
              <div className="mt-3 flex gap-5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 font-mono2 text-[11px] uppercase tracking-[0.18em] max-w-md" style={{ color: MUTED }}>
          Client names anonymized under NDA. Full case studies shared on request.
        </p>
      </section>

      {/* ── 05 App portfolio ────────────────────────────── */}
      <section id="a-apps" className="px-6 md:px-12 py-20 md:py-32" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow>05 — The app portfolio</Eyebrow>
          <div>
            <h2 className="font-serif-edit text-4xl md:text-6xl leading-[1.05]" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
              Apps that earn <span style={{ color: MUTED }}>their keep.</span>
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed" style={{ color: MUTED }}>
              Alongside client work, GUV Nexus designs, builds and operates a
              growing portfolio of focused applications — each one aimed at a
              specific, unglamorous business problem worth solving properly.
            </p>
          </div>
        </div>

        <div className="mt-16" style={{ borderTop: `1px solid ${LINE}` }}>
          {apps.map((a) => (
            <article
              key={a.n}
              className="group grid md:grid-cols-[220px_1fr_1.4fr_auto] gap-3 md:gap-10 items-start md:items-center py-8 md:py-10"
              style={{ borderBottom: `1px solid ${LINE}` }}
            >
              <span className="font-mono2 text-[11px] tracking-[0.14em]" style={{ color: MUTED }}>{a.n}</span>
              <div>
                <h3 className="font-serif-edit text-2xl md:text-4xl" style={{ fontWeight: 400 }}>{a.name}</h3>
                <p className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                  {a.domain} — {a.year}
                </p>
              </div>
              <p className="leading-relaxed max-w-xl" style={{ color: MUTED }}>{a.challenge}</p>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em]"
                style={
                  a.status === 'Live'
                    ? { background: BLUE, color: '#fff' }
                    : { border: `1px solid ${LINE}`, color: MUTED }
                }
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: a.status === 'Live' ? '#fff' : RED }} />
                {a.status}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-12 font-mono2 text-[11px] uppercase tracking-[0.18em] max-w-lg" style={{ color: MUTED }}>
          Portfolio names shown pre-launch branding. Demos and access on request.
        </p>
      </section>

      {/* ── Contact CTA ─────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-36 text-center" style={{ background: BLUE, color: '#fff' }}>
        <p className="font-mono2 text-[11px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.65)' }}>
          06 — Contact
        </p>
        <a href="mailto:hello@guvnexus.com" className="group block mt-8">
          <h2 className="font-serif-edit text-[13vw] md:text-[8vw] leading-[1.0]" style={{ fontWeight: 400, letterSpacing: '-0.015em' }}>
            Let's build{' '}
            <em className="font-serif-edit" style={{ fontStyle: 'italic' }}>together</em>
            <span style={{ color: '#FF6B85' }}>.</span>
          </h2>
        </a>
        <a
          href="mailto:hello@guvnexus.com"
          className="link-line mt-10 inline-block font-mono2 text-sm tracking-[0.08em]"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          hello@guvnexus.com
        </a>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between gap-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: MUTED, borderTop: `1px solid ${LINE}` }}>
        <span>© 2026 GUV Nexus LLC</span>
        <span>Systems / Intelligence / Craft / Advisory</span>
        <span>Designed & engineered in-house</span>
      </footer>
    </main>
  )
}
