export default function Contact() {
  return (
    <footer id="contact" className="relative px-6 md:px-10 pt-28 md:pt-40 pb-8 overflow-hidden">
      <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#5c8aff]">
        06 — Contact
      </p>

      <a href="mailto:hello@guvnexus.com" className="group block mt-8">
        <h2 className="display-xl text-[14vw] md:text-[10.5vw] text-white leading-[0.9] group-hover:text-[#5c8aff] transition-colors duration-500">
          LET'S
          <br />
          BUILD<span className="text-[#e4002b] group-hover:text-white transition-colors duration-500">.</span>
        </h2>
      </a>

      <div className="mt-16 grid md:grid-cols-3 gap-10 border-t border-white/15 pt-8">
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">New business</p>
          <a
            href="mailto:hello@guvnexus.com"
            className="link-line mt-2 inline-block text-lg text-white"
          >
            hello@guvnexus.com
          </a>
        </div>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">Studio</p>
          <p className="mt-2 text-lg text-white/70">Remote-first, worldwide</p>
        </div>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/40">Elsewhere</p>
          <div className="mt-2 flex gap-6">
            <a href="#top" className="link-line text-lg text-white/70 hover:text-white">LinkedIn</a>
            <a href="#top" className="link-line text-lg text-white/70 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between gap-3 font-mono2 text-[10px] uppercase tracking-[0.18em] text-white/30">
        <span>© 2026 GUV Nexus LLC</span>
        <span>Systems / Intelligence / Craft / Advisory</span>
        <span>Designed & engineered in-house</span>
      </div>
    </footer>
  )
}
