export default function Leadership() {
  return (
    <section className="border-y border-white/10 px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
          05 — Leadership
        </p>
        <div>
          <p className="display-xl text-3xl md:text-5xl text-white leading-tight">
            GUV Nexus is led by{' '}
            <span className="text-white/40">Beth Underhill</span>, principal and
            founder — backed by a bench of senior engineers, researchers and
            designers who have shipped at scale and chose to work small.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span>Principal — B. Underhill</span>
            <span>Senior teams only</span>
            <span>US & EU time zones</span>
          </div>
        </div>
      </div>
    </section>
  )
}
