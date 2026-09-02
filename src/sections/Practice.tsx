import { useParallax } from '@/hooks/use-parallax'

const BASE = import.meta.env.BASE_URL

const stats = [
  { value: '46', label: 'Engagements shipped' },
  { value: '14', label: 'Industries served' },
  { value: '9', label: 'Senior principals' },
  { value: '0', label: 'Junior handoffs' },
]

export default function Practice() {
  const imgRef = useParallax<HTMLDivElement>(0.12)

  return (
    <section id="practice" className="relative px-6 md:px-10 py-28 md:py-40">
      {/* Stepped asymmetric column — shifted right ~17vw on desktop */}
      <div className="md:ml-[17vw] max-w-3xl">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
          01 — The practice
        </p>
        <h2 className="display-xl mt-6 text-4xl md:text-6xl text-white">
          Small by design.
          <br />
          <span className="text-white/40">Serious by default.</span>
        </h2>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-white/60 max-w-xl">
          GUV Nexus is a boutique technology studio. Alongside a handful of
          client engagements a year, we design, build and operate our own
          portfolio of applications — each one aimed at a specific, real
          business challenge. Senior people only, on everything we touch. No
          layers, no handoffs, no theatre.
        </p>
      </div>

      {/* Terrain image with parallax, offset further right */}
      <div className="mt-20 md:ml-[34vw] md:max-w-4xl overflow-hidden">
        <div ref={imgRef} className="will-change-transform scale-110">
          <img
            src={`${BASE}media/about-terrain.jpg`}
            alt="Abstract wireframe terrain with a signal line"
            className="w-full aspect-[16/9] object-cover"
            loading="lazy"
          />
        </div>
        <p className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">
          Fig. 01 — Signal through complexity
        </p>
      </div>

      {/* Stats row */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#060607] p-6 md:p-8">
            <div className="display-xl text-5xl md:text-6xl text-white">{s.value}</div>
            <div className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
