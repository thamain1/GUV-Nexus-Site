const words = ['Systems', 'Intelligence', 'Craft', 'Advisory']

export default function Marquee() {
  const row = [...words, ...words, ...words]
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-5 bg-[#060607]">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="display-xl text-4xl md:text-6xl text-white/90 px-6">{w}</span>
                <span className="h-2 w-2 rounded-full bg-[#e4002b]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
