// Variant B — "Quiet Dark"
// Soft near-black, Cormorant Garamond at light weights, zero radius,
// monochrome UI — the imagery carries all the color.

const BASE = import.meta.env.BASE_URL
const BG = '#101012'
const INK = '#EDECE8'
const MUTED = 'rgba(237,236,232,0.5)'
const FAINT = 'rgba(237,236,232,0.32)'
const LINE = 'rgba(237,236,232,0.14)'

const capabilities = [
  { n: '01', title: 'Systems Engineering', desc: 'Platforms, APIs and infrastructure built to be operated — not just launched. Event-driven backends, data pipelines, and the boring reliability work that makes products feel instant.' },
  { n: '02', title: 'Applied Intelligence', desc: 'Machine learning that survives contact with production. Model strategy, evaluation harnesses, retrieval systems and agentic workflows — measured against business outcomes, not demos.' },
  { n: '03', title: 'Digital Craft', desc: 'Design engineering for interfaces people remember. We pair typographic rigor with real-time rendering, motion and WebGL to build product surfaces that carry a brand.' },
  { n: '04', title: 'Technical Advisory', desc: 'Fractional CTO work, architecture review and technical due diligence for investors and leadership teams who need a straight answer about the technology they own — or are about to buy.' },
]

const apps = [
  { n: 'I', name: 'Company Agents', domain: 'Business automation', status: 'Live', year: '2025' },
  { n: 'II', name: 'OnSite Drop', domain: 'Construction & field service', status: 'In build', year: '2026' },
  { n: 'III', name: 'Tailwatch', domain: 'Aviation', status: 'In build', year: '2026' },
  { n: 'IV', name: 'NIL Ledger', domain: 'Sports finance', status: 'In build', year: '2026' },
  { n: 'V', name: 'GIAV', domain: 'Fintech education', status: 'Concept', year: '2026' },
]

const stats = [
  { value: '46', label: 'Engagements shipped' },
  { value: '14', label: 'Industries served' },
  { value: '9', label: 'Senior principals' },
  { value: '0', label: 'Junior handoffs' },
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono2 text-[10px] uppercase tracking-[0.28em]" style={{ color: FAINT }}>
      {children}
    </p>
  )
}

export default function VariantB() {
  return (
    <main className="min-h-screen antialiased" style={{ background: BG, color: INK, fontFamily: "'Inter', sans-serif" }}>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-6 md:px-14 py-8">
        <a href="/variant-b" className="font-serif-quiet text-2xl" style={{ fontWeight: 400, letterSpacing: '0.02em' }}>
          GUV Nexus
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono2 text-[10px] uppercase tracking-[0.24em]" style={{ color: MUTED }}>
          <a href="#b-practice" className="hover:text-white transition-colors duration-300">Practice</a>
          <a href="#b-work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#b-apps" className="hover:text-white transition-colors duration-300">Apps</a>
          <a href="mailto:hello@guvnexus.com" className="hover:text-white transition-colors duration-300">Contact</a>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="px-6 md:px-14 pt-16 md:pt-28 pb-24 md:pb-36">
        <Label>Boutique technology studio</Label>
        <h1
          className="font-serif-quiet mt-12 max-w-6xl text-[14vw] md:text-[7vw] leading-[1.04]"
          style={{ fontWeight: 300, letterSpacing: '-0.01em' }}
        >
          A quiet studio for
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>serious</em> software.
        </h1>
        <p className="mt-12 max-w-md text-base leading-relaxed" style={{ color: MUTED }}>
          GUV Nexus designs, builds and operates applications that solve real
          business challenges — with senior people only, and nothing else.
        </p>

        <div className="mt-20 md:mt-28">
          <video
            src={`${BASE}media/hero-loop.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="mt-4 flex justify-between">
            <Label>Glass systems study</Label>
            <Label>Rendered in-house — 2026</Label>
          </div>
        </div>
      </section>

      {/* ── Practice ────────────────────────────────────── */}
      <section id="b-practice" className="px-6 md:px-14 py-24 md:py-36" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Label>The practice</Label>
            <h2 className="font-serif-quiet mt-8 text-4xl md:text-6xl leading-[1.08]" style={{ fontWeight: 300 }}>
              Small by design.
              <br />
              Serious by default.
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed md:pt-16" style={{ color: MUTED }}>
            A boutique technology studio holding a growing portfolio of its own
            applications, alongside a handful of client engagements a year. No
            layers, no handoffs, no theatre — senior people on everything we
            touch.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-4 md:px-10 first:pl-0"
              style={{ borderLeft: i > 0 ? `1px solid ${LINE}` : undefined }}
            >
              <div className="font-serif-quiet text-6xl md:text-7xl" style={{ fontWeight: 300 }}>{s.value}</div>
              <div className="mt-3"><Label>{s.label}</Label></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ────────────────────────────────── */}
      <section className="px-6 md:px-14 py-24 md:py-36" style={{ borderTop: `1px solid ${LINE}` }}>
        <Label>Capabilities</Label>
        <div className="mt-14">
          {capabilities.map((c) => (
            <article
              key={c.n}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-12 items-baseline py-10 md:py-14"
              style={{ borderTop: `1px solid ${LINE}` }}
            >
              <span className="font-mono2 text-[10px] tracking-[0.2em]" style={{ color: FAINT }}>{c.n}</span>
              <h3 className="font-serif-quiet text-3xl md:text-5xl leading-tight transition-opacity duration-300" style={{ fontWeight: 300 }}>
                {c.title}
              </h3>
              <p className="leading-relaxed max-w-lg" style={{ color: MUTED }}>{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Selected work ───────────────────────────────── */}
      <section id="b-work" className="px-6 md:px-14 py-24 md:py-36" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="flex items-end justify-between">
          <Label>Selected work</Label>
          <Label>Client names anonymized under NDA</Label>
        </div>

        <div className="mt-14 space-y-24">
          {[
            { img: `${BASE}media/work-systems.jpg`, name: 'Helios Grid', scope: 'Real-time energy telemetry platform', year: '2025' },
            { img: `${BASE}media/work-intelligence.jpg`, name: 'Vanta Index', scope: 'Applied ML for private markets', year: '2024' },
          ].map((p, i) => (
            <div key={p.name} className={`grid md:grid-cols-12 gap-8 items-end ${i % 2 ? '' : ''}`}>
              <div className={i % 2 ? 'md:col-span-8 md:order-2' : 'md:col-span-8'}>
                <img src={p.img} alt={p.name} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              </div>
              <div className={i % 2 ? 'md:col-span-4 md:order-1' : 'md:col-span-4'}>
                <h3 className="font-serif-quiet text-4xl md:text-6xl leading-none" style={{ fontWeight: 300 }}>
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{p.scope}</p>
                <div className="mt-6"><Label>{p.year}</Label></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── App portfolio ───────────────────────────────── */}
      <section id="b-apps" className="px-6 md:px-14 py-24 md:py-36" style={{ borderTop: `1px solid ${LINE}` }}>
        <Label>The app portfolio</Label>
        <h2 className="font-serif-quiet mt-8 max-w-3xl text-4xl md:text-6xl leading-[1.08]" style={{ fontWeight: 300 }}>
          Apps that earn their keep.
        </h2>

        <div className="mt-16">
          {apps.map((a) => (
            <div
              key={a.n}
              className="group grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] gap-4 md:gap-10 items-baseline py-7 md:py-8"
              style={{ borderTop: `1px solid ${LINE}` }}
            >
              <span className="font-serif-quiet text-lg" style={{ fontWeight: 300, color: FAINT }}>{a.n}</span>
              <h3 className="font-serif-quiet text-2xl md:text-4xl" style={{ fontWeight: 300 }}>{a.name}</h3>
              <p className="hidden md:block font-mono2 text-[10px] uppercase tracking-[0.2em]" style={{ color: MUTED }}>
                {a.domain}
              </p>
              <span className="font-mono2 text-[10px] uppercase tracking-[0.2em]" style={{ color: a.status === 'Live' ? INK : FAINT }}>
                {a.status} — {a.year}
              </span>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${LINE}` }} />
        </div>

        <div className="mt-10"><Label>Portfolio names shown pre-launch branding. Demos on request.</Label></div>
      </section>

      {/* ── Leadership ──────────────────────────────────── */}
      <section className="px-6 md:px-14 py-24 md:py-36" style={{ borderTop: `1px solid ${LINE}` }}>
        <Label>Leadership</Label>
        <p className="font-serif-quiet mt-10 max-w-4xl text-3xl md:text-5xl leading-[1.2]" style={{ fontWeight: 300 }}>
          Led by <em style={{ fontStyle: 'italic' }}>Beth Underhill</em>, principal
          and founder — with a bench of senior engineers, researchers and
          designers who have shipped at scale and chose to work small.
        </p>
      </section>

      {/* ── Contact ─────────────────────────────────────── */}
      <section className="px-6 md:px-14 pt-28 md:pt-44 pb-16" style={{ borderTop: `1px solid ${LINE}` }}>
        <Label>Contact</Label>
        <a href="mailto:hello@guvnexus.com" className="block mt-12 group">
          <span
            className="font-serif-quiet text-[8.5vw] md:text-[5.6vw] leading-none transition-opacity duration-300 group-hover:opacity-60"
            style={{ fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            hello@guvnexus.com
          </span>
        </a>
        <p className="mt-10 text-sm" style={{ color: MUTED }}>
          Remote-first, worldwide — US & EU time zones.
        </p>

        <div className="mt-28 pt-6 flex flex-col md:flex-row justify-between gap-3 font-mono2 text-[10px] uppercase tracking-[0.24em]" style={{ borderTop: `1px solid ${LINE}`, color: FAINT }}>
          <span>© 2026 GUV Nexus LLC</span>
          <span>Systems / Intelligence / Craft / Advisory</span>
        </div>
      </section>
    </main>
  )
}
