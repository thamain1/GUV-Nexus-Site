import { useParallax } from '@/hooks/use-parallax'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    img: `${BASE}media/work-systems.jpg`,
    name: 'Helios Grid',
    scope: 'Real-time energy telemetry platform',
    year: '2025',
    tags: ['Systems engineering', 'Streaming data'],
  },
  {
    img: `${BASE}media/work-intelligence.jpg`,
    name: 'Vanta Index',
    scope: 'Applied ML for private markets',
    year: '2024',
    tags: ['Applied intelligence', 'Retrieval systems'],
  },
]

function ProjectCard({ p, offset }: { p: (typeof projects)[number]; offset: string }) {
  const ref = useParallax<HTMLDivElement>(0.08)
  return (
    <div className={offset}>
      <div className="group overflow-hidden">
        <div ref={ref} className="will-change-transform scale-110">
          <img
            src={p.img}
            alt={p.name}
            className="w-full aspect-[16/9] object-cover transition-[filter] duration-700 group-hover:brightness-110"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-white/15 pt-4">
        <div>
          <h3 className="display-xl text-2xl md:text-4xl text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-white/50">{p.scope}</p>
        </div>
        <span className="font-mono2 text-[11px] text-white/40">{p.year}</span>
      </div>
      <div className="mt-3 flex gap-5">
        {p.tags.map((t) => (
          <span key={t} className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40">
      <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
        03 — Selected work
      </p>
      <h2 className="display-xl mt-6 text-4xl md:text-6xl text-white max-w-4xl">
        Proof, <span className="text-white/40">not promises.</span>
      </h2>

      <div className="mt-16 grid md:grid-cols-2 gap-10 md:gap-8">
        <ProjectCard p={projects[0]} offset="" />
        <ProjectCard p={projects[1]} offset="" />
      </div>

      <p className="mt-16 font-mono2 text-[11px] uppercase tracking-[0.18em] text-white/40 max-w-md">
        Client names anonymized under NDA. Full case studies shared on request.
      </p>
    </section>
  )
}
