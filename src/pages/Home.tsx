import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Practice from '@/sections/Practice'
import Capabilities from '@/sections/Capabilities'
import Work from '@/sections/Work'
import Apps from '@/sections/Apps'
import Leadership from '@/sections/Leadership'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <main className="bg-[#060607] text-white min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Practice />
      <Capabilities />
      <Work />
      <Apps />
      <Leadership />
      <Contact />
    </main>
  )
}
