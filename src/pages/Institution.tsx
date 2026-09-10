// Institution — preview direction, in two inks:
//   paper     — warm editorial ground (default, /institution)
//   blueprint — midnight navy ground, pale-blue line work (/blueprint)
// Institutional editorial: massive uppercase Fraunces, Roman numerals,
// blueprint line-art frieze, clipped-corner pills, hide-on-scroll nav,
// scrolling ribbon, hover inversions, full blue footer.
// The animated GUV hero mark is preserved verbatim from the main site.

import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL
const INK = '#14161A'
const PAPER = '#FAFAF7'
const LINE = '#E3DED2'
const BLUE = '#0033A0'
const RED = '#F43F5E'
const MUTED = '#6B6359'

const capabilities = [
  {
    n: 'I.',
    title: 'Systems Engineering',
    desc: 'Platforms, APIs and infrastructure built to be operated — not just launched. Event-driven backends, data pipelines, and the boring reliability work that makes products feel instant.',
    tags: ['Architecture', 'Distributed systems', 'Cloud & edge'],
  },
  {
    n: 'II.',
    title: 'Applied Intelligence',
    desc: 'Machine learning that survives contact with production. Model strategy, evaluation harnesses, retrieval systems and agentic workflows — measured against business outcomes, not demos.',
    tags: ['ML strategy', 'LLM systems', 'Evaluation'],
  },
  {
    n: 'III.',
    title: 'Digital Craft',
    desc: 'Design engineering for interfaces people remember. We pair typographic rigor with real-time rendering, motion and WebGL to build product surfaces that carry a brand.',
    tags: ['Design engineering', 'WebGL & motion', 'Design systems'],
  },
  {
    n: 'IV.',
    title: 'Technical Advisory',
    desc: 'Fractional CTO work, architecture review and technical due diligence for investors and leadership teams who need a straight answer about the technology they own — or are about to buy.',
    tags: ['Fractional CTO', 'Due diligence', 'Audits'],
  },
]

const apps = [
  { n: 'A.01', name: 'Company Agents', challenge: 'Custom business agents and workflow automation — AI agents that take repetitive operations work off your team\'s plate.', domain: 'Business automation', status: 'Live', year: '2025' },
  { n: 'A.02', name: 'OnSite Drop', challenge: 'Delivery coordination for construction and service sites — scheduling, tracking and proof-of-delivery.', domain: 'Construction & field service', status: 'In build', year: '2026' },
  { n: 'A.03', name: 'Tailwatch', challenge: 'Aviation lease and engine compliance tracking — maintenance intervals, lease covenants and documentation in one ledger.', domain: 'Aviation', status: 'In build', year: '2026' },
  { n: 'A.04', name: 'NIL Ledger', challenge: 'Contract and finance tracking for name, image and likeness deals — athletes, agents and collectives stay audit-ready.', domain: 'Sports finance', status: 'In build', year: '2026' },
  { n: 'A.05', name: 'GIAV', challenge: 'Financial education built for women — practical investing and money skills through guided, jargon-free learning paths.', domain: 'Fintech education', status: 'Concept', year: '2026' },
]

const stats = [
  { value: '46', label: 'Engagements shipped' },
  { value: '14', label: 'Industries served' },
  { value: '9', label: 'Senior principals' },
  { value: '0', label: 'Junior handoffs' },
]

const ribbon = [
  'GUV Nexus — Boutique Technology Studio',
  'Now booking Q1 2027 engagements',
  'Systems / Intelligence / Craft / Advisory',
  'Est. MMXXV',
]

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="font-mono2 text-[11px] uppercase tracking-[0.22em]" style={{ color }}>
      {children}
    </p>
  )
}

function InstPill({
  href,
  children,
  invert,
  dark,
}: {
  href: string
  children: React.ReactNode
  invert?: boolean
  dark?: boolean
}) {
  return (
    <a href={href} className={`inst-pill ${invert ? 'inst-pill-inv' : ''} ${dark ? 'inst-pill-dark' : ''}`}>
      <span className="inst-corner tl" />
      <span className="inst-corner tr" />
      <span className="inst-corner bl" />
      <span className="inst-corner br" />
      <span className="relative">{children}</span>
      <span className="relative">↗</span>
    </a>
  )
}

// Blueprint-style line illustration: construction, aviation and finance
// rendered in a single ink.
function Frieze({ ink }: { ink: string }) {
  const s = { fill: 'none', stroke: ink, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 1600 460" className="w-full h-auto block" role="img" aria-label="Line illustration of a tower crane, an airplane and a classical ledger hall">
      <g {...s}>
        {/* ground */}
        <line x1="40" y1="390" x2="1560" y2="390" />
        <line x1="40" y1="402" x2="1560" y2="402" strokeDasharray="2 14" strokeOpacity="0.5" />

        {/* sun + rays */}
        <circle cx="120" cy="92" r="32" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4
          const x1 = 120 + Math.cos(a) * 46
          const y1 = 92 + Math.sin(a) * 46
          const x2 = 120 + Math.cos(a) * 62
          const y2 = 92 + Math.sin(a) * 62
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}

        {/* tower crane */}
        <rect x="172" y="366" width="56" height="24" />
        <line x1="187" y1="366" x2="187" y2="146" />
        <line x1="213" y1="366" x2="213" y2="146" />
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 358 - i * 26
          return (
            <g key={i}>
              <line x1="187" y1={y} x2="213" y2={y - 26} strokeWidth="1.4" />
              <line x1="213" y1={y} x2="187" y2={y - 26} strokeWidth="1.4" />
            </g>
          )
        })}
        <rect x="182" y="122" width="36" height="24" />
        <line x1="108" y1="122" x2="442" y2="122" />
        <rect x="96" y="122" width="30" height="30" />
        <line x1="200" y1="96" x2="200" y2="122" />
        <line x1="200" y1="96" x2="442" y2="122" strokeWidth="1.4" />
        <line x1="200" y1="96" x2="108" y2="122" strokeWidth="1.4" />
        <line x1="368" y1="122" x2="368" y2="292" strokeWidth="1.4" strokeDasharray="4 6" />
        <path d="M 362 292 q 6 10 12 0" />
        <rect x="340" y="302" width="56" height="30" />
        <line x1="340" y1="317" x2="396" y2="317" strokeWidth="1.4" />

        {/* clouds */}
        <path d="M 520 96 a 18 18 0 0 1 34 -6 a 14 14 0 0 1 26 8 a 12 12 0 0 1 -8 22 l -50 0 a 12 12 0 0 1 -2 -24 Z" />
        <path d="M 1120 70 a 14 14 0 0 1 27 -5 a 11 11 0 0 1 21 7 a 10 10 0 0 1 -7 18 l -40 0 a 10 10 0 0 1 -1 -20 Z" strokeWidth="1.4" />

        {/* birds */}
        <path d="M 620 150 q 8 -10 16 0 q 8 -10 16 0" strokeWidth="1.4" />
        <path d="M 680 122 q 6 -8 13 0 q 7 -8 13 0" strokeWidth="1.4" />
        <path d="M 1020 140 q 7 -9 14 0 q 7 -9 14 0" strokeWidth="1.4" />

        {/* echo ring around the aircraft */}
        <circle cx="850" cy="248" r="150" strokeDasharray="2 12" strokeOpacity="0.45" strokeWidth="1.4" />

        {/* airplane — side profile */}
        <path d="M 726 246 C 748 226 810 216 866 220 C 922 224 962 234 976 246 C 962 258 906 266 850 264 C 796 262 748 258 726 246 Z" />
        <path d="M 742 234 L 714 188 L 736 188 L 764 228" />
        <line x1="706" y1="212" x2="742" y2="216" />
        <path d="M 806 262 L 770 322 L 812 322 L 862 264" />
        <path d="M 838 262 L 818 306 L 844 306 L 872 264" strokeWidth="1.4" />
        <circle cx="992" cy="246" r="9" />
        <line x1="992" y1="200" x2="992" y2="292" />
        <line x1="962" y1="214" x2="1022" y2="278" strokeWidth="1.4" />
        {[796, 824, 852, 880, 908].map((x) => (
          <circle key={x} cx={x} cy={238} r="3.5" strokeWidth="1.4" />
        ))}
        <path d="M 940 230 q 14 4 22 14" strokeWidth="1.4" />
        <line x1="640" y1="234" x2="700" y2="238" strokeDasharray="2 10" strokeWidth="1.4" />
        <line x1="636" y1="248" x2="700" y2="250" strokeDasharray="2 10" strokeWidth="1.4" />
        <line x1="646" y1="262" x2="700" y2="260" strokeDasharray="2 10" strokeWidth="1.4" />

        {/* rising trend line tying the scene together */}
        <path d="M 480 336 L 640 306 L 800 326 L 960 268 L 1120 214" strokeDasharray="1 12" strokeWidth="2.4" stroke={RED} />
        {[
          [480, 336],
          [640, 306],
          [800, 326],
          [960, 268],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" stroke={RED} />
        ))}
        <line x1="1120" y1="214" x2="1150" y2="202" stroke={RED} />
        <line x1="1150" y1="202" x2="1132" y2="200" strokeWidth="1.6" stroke={RED} />
        <line x1="1150" y1="202" x2="1146" y2="220" strokeWidth="1.6" stroke={RED} />

        {/* classical ledger hall */}
        <line x1="1168" y1="390" x2="1472" y2="390" />
        <line x1="1180" y1="378" x2="1460" y2="378" />
        <line x1="1192" y1="366" x2="1448" y2="366" />
        {[1220, 1290, 1360, 1430].map((x) => (
          <g key={x}>
            <line x1={x - 11} y1="366" x2={x - 11} y2="252" />
            <line x1={x + 11} y1="366" x2={x + 11} y2="252" />
            <line x1={x - 16} y1="366" x2={x + 16} y2="366" />
            <line x1={x - 16} y1="252" x2={x + 16} y2="252" />
            <line x1={x - 5} y1="358" x2={x - 5} y2="260" strokeWidth="1.2" />
            <line x1={x + 5} y1="358" x2={x + 5} y2="260" strokeWidth="1.2" />
          </g>
        ))}
        <line x1="1180" y1="238" x2="1460" y2="238" />
        <line x1="1180" y1="250" x2="1460" y2="250" strokeWidth="1.4" />
        <path d="M 1172 238 L 1320 176 L 1468 238" />
        <path d="M 1188 238 L 1320 186 L 1452 238" strokeWidth="1.2" />
        <circle cx="1320" cy="216" r="11" />

        {/* trees */}
        <line x1="540" y1="390" x2="540" y2="352" />
        <circle cx="540" cy="338" r="16" />
        <circle cx="524" cy="348" r="10" strokeWidth="1.4" />
        <circle cx="556" cy="348" r="10" strokeWidth="1.4" />
        <line x1="1530" y1="390" x2="1530" y2="356" />
        <circle cx="1530" cy="344" r="13" />

        {/* registration crosses */}
        <path d="M 460 160 h 16 M 468 152 v 16" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M 1500 120 h 16 M 1508 112 v 16" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M 1060 340 h 14 M 1067 333 v 14" strokeWidth="1.2" strokeOpacity="0.6" />
      </g>
    </svg>
  )
}

export default function Institution({ blueprint = false }: { blueprint?: boolean }) {
  const [navHidden, setNavHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setNavHidden(y > lastY.current && y > 140)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section grounds — light ink and dark ink
  const L = { bg: PAPER, panel: '#F5F3ED', fg: INK, mut: MUTED, rule: LINE, acc: BLUE }
  const D = blueprint
    ? { bg: '#0C1A40', panel: '#12224E', fg: '#FAFAF7', mut: '#B4AE9F', rule: 'rgba(250,250,247,0.16)', acc: '#A9C4FF' }
    : L
  // Page ground + section alternation (blueprint alternates; paper stays light throughout)
  const page = blueprint ? D : L
  const tHero = page
  const tPractice = blueprint ? L : L
  const tCap = page
  const tLead = blueprint ? L : { ...L, bg: INK, fg: PAPER, mut: 'rgba(250,250,247,0.5)', rule: 'rgba(250,250,247,0.16)', acc: '#A9C4FF' }
  const tWork = page
  const tApps = blueprint ? L : L
  const eyebrow = (t: typeof L) => (t === L ? BLUE : 'rgba(250,250,247,0.55)')

  return (
    <main className="min-h-screen antialiased" style={{ background: page.bg, color: page.fg, fontFamily: "'Inter', sans-serif" }}>
      {/* ── Fixed nav — hides on scroll down, returns on scroll up ── */}
      <header
        className={`inst-nav fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 py-4 ${navHidden ? 'inst-nav-hidden' : ''}`}
        style={{ background: page.bg, borderBottom: `1px solid ${page.rule}` }}
      >
        <nav className="hidden md:flex items-center gap-7 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: page.mut }}>
          <a href="#i-practice" className="hover:opacity-100 opacity-80 transition-opacity">Practice</a>
          <a href="#i-capabilities" className="hover:opacity-100 opacity-80 transition-opacity">Capabilities</a>
          <a href="#i-work" className="hover:opacity-100 opacity-80 transition-opacity">Work</a>
          <a href="#i-apps" className="hover:opacity-100 opacity-80 transition-opacity">Apps</a>
        </nav>
        <a href={blueprint ? '/blueprint' : '/institution'} className="font-display uppercase text-lg text-center whitespace-nowrap" style={{ fontWeight: 500, letterSpacing: '0.06em' }}>
          GUV Nexus
        </a>
        <div className="flex justify-end">
          <a
            href="mailto:hello@guvnexus.com"
            className="rounded-full px-4 md:px-5 py-2 md:py-2.5 font-mono2 text-[9px] md:text-[10px] uppercase tracking-[0.14em] whitespace-nowrap transition-opacity hover:opacity-85"
            style={blueprint ? { background: '#FAFAF7', color: '#0C1A40' } : { background: INK, color: '#fff' }}
          >
            Start a conversation
          </a>
        </div>
      </header>

      <div className="pt-[64px]">
        {/* ── News ribbon ── */}
        <div className="overflow-hidden py-2.5" style={{ borderBottom: `1px solid ${page.rule}` }}>
          <div className="animate-marquee flex whitespace-nowrap font-mono2 text-[10px] uppercase tracking-[0.2em]" style={{ color: page.mut }}>
            {[0, 1].map((dup) => (
              <span key={dup} className="flex shrink-0">
                {ribbon.map((item) => (
                  <span key={`${dup}-${item}`} className="flex items-center">
                    <span className="px-8">{item}</span>
                    <span style={{ color: RED }}>↗</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── Hero — animated GUV mark, preserved verbatim ── */}
        <section className="px-6 md:px-12 pt-8 md:pt-10 pb-10 md:pb-14" style={{ background: tHero.bg }}>
          <div style={{ border: `1px solid ${tHero.rule}`, padding: 8 }}>
            <div
              className="relative w-full aspect-[16/8] md:aspect-[16/6] overflow-hidden flex items-center justify-center"
              style={{ background: tHero.panel, perspective: '1100px' }}
            >
              {/* Outer ring — rotates opposite to the G */}
              <svg className="hero-ring-outer absolute h-[78%] aspect-square" viewBox="0 0 400 400" aria-hidden="true">
                <circle cx="200" cy="200" r="192" fill="none" stroke={tHero.fg} strokeOpacity={blueprint ? '0.25' : '0.14'} strokeWidth="1" />
                <circle cx="200" cy="200" r="192" fill="none" stroke={tHero.acc} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="150 1056" />
                <circle cx="200" cy="200" r="192" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="70 1136" strokeDashoffset="-500" />
              </svg>
              {/* Inner dashed ring — follows the G's direction */}
              <svg className="hero-ring-inner absolute h-[60%] aspect-square" viewBox="0 0 400 400" aria-hidden="true">
                <circle cx="200" cy="200" r="192" fill="none" stroke={tHero.fg} strokeOpacity={blueprint ? '0.4' : '0.35'} strokeWidth="1" strokeDasharray="3 12" />
              </svg>
              {/* Logo reveal — letters spin off one another, shimmer rolls through, NEXUS rises */}
              <div
                className={`guv-word font-display ${blueprint ? 'guv-dark' : ''}`}
                style={{ fontWeight: 600, fontSize: 'min(17vh, 12.5vw)', lineHeight: 1 }}
              >
                <span className="guv-l gl-g"><span className="guv-ch">G</span></span>
                <span className="guv-l gl-u"><span className="guv-ch">U</span></span>
                <span className="guv-l gl-v"><span className="guv-ch">V</span></span>
              </div>
              <span
                className="guv-nexus font-display"
                style={{ color: tHero.fg, fontWeight: 500, fontSize: 'min(3.7vh, 2.7vw)', letterSpacing: '0.35em' }}
              >
                NEXUS
              </span>
            </div>
          </div>
          <p className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tHero.mut }}>
            Fig. 01 — The GUV mark, always in motion
          </p>

          {/* Roman numeral date */}
          <div className="mt-14 md:mt-20 flex items-center gap-6">
            <span className="flex-1" style={{ borderTop: `1px solid ${tHero.rule}` }} />
            <p className="font-display uppercase text-base md:text-lg" style={{ fontWeight: 500, letterSpacing: '0.3em', color: RED }}>
              IX · X · MMXXVI
            </p>
            <span className="flex-1" style={{ borderTop: `1px solid ${tHero.rule}` }} />
          </div>

          {/* Massive uppercase headline — Oswald, the logo voice */}
          <h1
            className="font-display mt-8 uppercase text-[11.5vw] md:text-[7.2vw] leading-[0.94]"
            style={{ fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            Software that solves <span style={{ color: tHero.acc }}>real</span> business problems<span style={{ color: RED }}>.</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
            <p className="max-w-md text-base md:text-lg leading-relaxed" style={{ color: tHero.mut }}>
              GUV Nexus designs, builds and operates focused applications for
              specific, unglamorous business challenges — alongside a handful of
              senior-only client engagements each year.
            </p>
            <div className="flex md:justify-end flex-wrap gap-5">
              <InstPill href="#i-work" dark={blueprint}>Selected work</InstPill>
              <InstPill href="#i-apps" dark={blueprint}>The app portfolio</InstPill>
            </div>
          </div>
        </section>

        {/* ── Line-art frieze ── */}
        <section className="px-6 md:px-12 pb-16 md:pb-24" style={{ background: tHero.bg }}>
          <div style={{ border: `1px solid ${tHero.rule}`, padding: 8 }}>
            <div className="overflow-hidden" style={{ background: tHero.panel }}>
              <Frieze ink={tHero.acc} />
            </div>
          </div>
          <p className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tHero.mut }}>
            Fig. 02 — Construction, aviation and finance, drawn in one ink
          </p>
        </section>
      </div>

      {/* ── 01 Practice ─────────────────────────────────── */}
      <section id="i-practice" className="px-6 md:px-12 py-20 md:py-32" style={{ background: tPractice.bg, color: tPractice.fg }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow color={eyebrow(tPractice)}>01 — The practice</Eyebrow>
          <div>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.98]" style={{ fontWeight: 500, letterSpacing: '-0.015em' }}>
              Small by design.
              <br />
              <span style={{ color: tPractice.mut }}>Serious by default.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: tPractice.mut }}>
              GUV Nexus is a boutique technology studio. Alongside a handful of
              client engagements a year, we design, build and operate our own
              portfolio of applications. Senior people only, on everything we
              touch. No layers, no handoffs, no theatre.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4" style={{ border: `1px solid ${tPractice.rule}` }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 md:p-10"
              style={{ borderLeft: i > 0 ? `1px solid ${tPractice.rule}` : undefined }}
            >
              <div className="font-display text-5xl md:text-6xl" style={{ fontWeight: 500 }}>{s.value}</div>
              <div className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tPractice.mut }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 Capabilities ─────────────────────────────── */}
      <section id="i-capabilities" className="px-6 md:px-12 py-20 md:py-32" style={{ background: tCap.bg, color: tCap.fg, borderTop: `1px solid ${page.rule}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow color={eyebrow(tCap)}>02 — Capabilities</Eyebrow>
          <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.98]" style={{ fontWeight: 500, letterSpacing: '-0.015em' }}>
            Four disciplines, <span style={{ color: tCap.mut }}>one team.</span>
          </h2>
        </div>

        <div className="mt-16" style={{ borderTop: `1px solid ${tCap.rule}` }}>
          {capabilities.map((c) => (
            <article
              key={c.n}
              className="group grid md:grid-cols-[220px_1fr_1.2fr_40px] gap-4 md:gap-10 items-baseline py-10 md:py-12 transition-colors duration-300"
              style={{ borderBottom: `1px solid ${tCap.rule}` }}
            >
              <span className="font-display uppercase text-xl md:text-2xl" style={{ fontWeight: 500, letterSpacing: '0.08em', color: RED }}>
                {c.n}
              </span>
              <h3 className="font-display uppercase text-2xl md:text-4xl leading-tight" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>
                {c.title}
              </h3>
              <div>
                <p className="leading-relaxed max-w-xl" style={{ color: tCap.mut }}>{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {c.tags.map((t) => (
                    <span key={t} className="font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tCap.mut }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="hidden md:block text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: RED }}>
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ── Interlude: Leadership ── */}
      <section className="px-6 md:px-12 py-24 md:py-36" style={{ background: tLead.bg, color: tLead.fg }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow color={eyebrow(tLead)}>03 — Leadership</Eyebrow>
          <div>
            <p className="font-display uppercase text-2xl md:text-4xl leading-[1.12] max-w-4xl" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>
              GUV Nexus is led by{' '}
              <span style={{ color: RED }}>Beth Underhill</span>
              , principal and founder — backed by a bench of senior engineers,
              researchers and designers who have shipped at scale and chose to
              work small.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tLead.mut }}>
              <span>Principal — B. Underhill</span>
              <span>Senior teams only</span>
              <span>US & EU time zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Selected work ────────────────────────────── */}
      <section id="i-work" className="px-6 md:px-12 py-20 md:py-32" style={{ background: tWork.bg, color: tWork.fg }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow color={eyebrow(tWork)}>04 — Selected work</Eyebrow>
          <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.98]" style={{ fontWeight: 500, letterSpacing: '-0.015em' }}>
            Proof, <span style={{ color: tWork.mut }}>not promises.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[
            { img: `${BASE}media/work-systems.jpg`, name: 'Helios Grid', scope: 'Real-time energy telemetry platform', year: '2025', tags: ['Systems engineering', 'Streaming data'] },
            { img: `${BASE}media/work-intelligence.jpg`, name: 'Vanta Index', scope: 'Applied ML for private markets', year: '2024', tags: ['Applied intelligence', 'Retrieval systems'] },
          ].map((p) => (
            <div key={p.name}>
              <div style={{ border: `1px solid ${tWork.rule}`, padding: 8 }}>
                <img src={p.img} alt={p.name} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex items-baseline justify-between pt-4" style={{ borderTop: `1px solid ${tWork.rule}` }}>
                <div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>{p.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: tWork.mut }}>{p.scope}</p>
                </div>
                <span className="font-mono2 text-[11px]" style={{ color: tWork.mut }}>{p.year}</span>
              </div>
              <div className="mt-3 flex gap-5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: tWork.mut }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 font-mono2 text-[11px] uppercase tracking-[0.18em] max-w-md" style={{ color: tWork.mut }}>
          Client names anonymized under NDA. Full case studies shared on request.
        </p>
      </section>

      {/* ── 05 App portfolio — index with hover inversion ── */}
      <section id="i-apps" className="px-6 md:px-12 py-20 md:py-32" style={{ background: tApps.bg, color: tApps.fg, borderTop: `1px solid ${page.rule}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          <Eyebrow color={eyebrow(tApps)}>05 — The app portfolio</Eyebrow>
          <div>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.98]" style={{ fontWeight: 500, letterSpacing: '-0.015em' }}>
              Apps that earn <span style={{ color: tApps.mut }}>their keep.</span>
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed" style={{ color: tApps.mut }}>
              Alongside client work, GUV Nexus designs, builds and operates a
              growing portfolio of focused applications — each one aimed at a
              specific, unglamorous business problem worth solving properly.
            </p>
          </div>
        </div>

        <div className="mt-16" style={{ borderTop: `1px solid ${tApps.rule}` }}>
          {apps.map((a) => (
            <article
              key={a.n}
              className={`inst-row grid md:grid-cols-[110px_1.1fr_1.4fr_auto_40px] gap-3 md:gap-8 items-start md:items-center px-4 md:px-6 py-8 md:py-9`}
              style={{ borderBottom: `1px solid ${tApps.rule}` }}
            >
              <span className="ir-muted font-mono2 text-[11px] tracking-[0.14em]">{a.n}</span>
              <div>
                <h3 className="ir-name font-display uppercase text-2xl md:text-3xl" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>{a.name}</h3>
                <p className="ir-muted mt-1 font-mono2 text-[10px] uppercase tracking-[0.18em]">
                  {a.domain} · {a.status}
                </p>
              </div>
              <p className="ir-muted leading-relaxed max-w-xl text-[15px]">{a.challenge}</p>
              <span className="ir-muted hidden md:block font-mono2 text-[11px]">{a.year}</span>
              <span className="ir-arrow hidden md:block text-2xl">↗</span>
            </article>
          ))}
        </div>

        <p className="mt-12 font-mono2 text-[11px] uppercase tracking-[0.18em] max-w-lg" style={{ color: tApps.mut }}>
          Portfolio names shown pre-launch branding. Demos and access on request.
        </p>
      </section>

      {/* ── Blue footer ─────────────────────────────────── */}
      <footer className="px-6 md:px-12 pt-20 md:pt-28 pb-10" style={{ background: BLUE, color: '#fff' }}>
        <p className="font-mono2 text-[11px] uppercase tracking-[0.22em]" style={{ color: '#FF6B85' }}>
          06 — Contact
        </p>
        <a href="mailto:hello@guvnexus.com" className="block mt-10">
          <span className="font-display uppercase block leading-[0.92] text-[13.5vw] md:text-[9.5vw]" style={{ fontWeight: 500, letterSpacing: '-0.02em', color: '#FAFAF7' }}>
            GUV Nexus
          </span>
        </a>
        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <InstPill href="mailto:hello@guvnexus.com" invert>
            hello@guvnexus.com
          </InstPill>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono2 text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            <a href="#i-practice" className="hover:text-white transition-colors">Practice</a>
            <a href="#i-capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#i-work" className="hover:text-white transition-colors">Work</a>
            <a href="#i-apps" className="hover:text-white transition-colors">Apps</a>
          </div>
        </div>
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row justify-between gap-3 font-mono2 text-[10px] uppercase tracking-[0.18em]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.55)' }}
        >
          <span>© 2026 GUV Nexus LLC</span>
          <span>Systems / Intelligence / Craft / Advisory</span>
          <span>Designed & engineered in-house</span>
        </div>
      </footer>
    </main>
  )
}
