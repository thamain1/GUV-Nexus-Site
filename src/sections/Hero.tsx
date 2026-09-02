const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden media-grain">
      {/* Video backdrop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${BASE}media/hero-loop.mp4`}
        autoPlay
        muted
        loop
        playsInline
        poster={`${BASE}media/about-terrain.jpg`}
      />
      {/* Legibility gradient — keeps the void black, deepens toward the type */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060607]/70 via-transparent to-[#060607]" />
      <div className="absolute inset-0 bg-[#060607]/20" />

      {/* Meta row */}
      <div className="absolute top-20 inset-x-0 px-6 md:px-10 flex justify-between font-mono2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50">
        <span>Boutique technology studio</span>
        <span className="hidden sm:block">Est. 2018</span>
        <span>Systems / Intelligence / Craft</span>
      </div>

      {/* Logotype anchored to the lower-left void */}
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-8 md:pb-10">
        <h1 className="display-xl text-[17.5vw] md:text-[13.5vw] text-white select-none">
          GUV&nbsp;NEXUS
        </h1>

        {/* Distributed tagline */}
        <div className="distribute mt-6 border-t border-white/15 pt-4 font-mono2 text-[10px] md:text-xs uppercase tracking-[0.16em] text-white/70">
          <span>We build apps</span>
          <span className="hidden md:inline">for real business challenges</span>
          <span className="hidden sm:inline">Senior teams only</span>
          <span className="text-[#f43f5e]">Scroll ↓</span>
        </div>
      </div>
    </section>
  )
}
