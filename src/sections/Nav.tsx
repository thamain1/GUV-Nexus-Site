import { useEffect, useState } from 'react'

const links = [
  { label: 'Practice', href: '#practice' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Apps', href: '#apps' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060607]/85 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="font-display font-bold tracking-tight text-[15px]">
          GUV&nbsp;NEXUS<sup className="text-[9px] align-super">®</sup>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-line font-mono2 text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#0033a0] px-4 py-1.5 font-mono2 text-[11px] uppercase tracking-[0.14em] text-white font-medium hover:bg-white hover:text-[#060607] transition-colors"
        >
          Start a project
        </a>
      </div>
    </header>
  )
}
