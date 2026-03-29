"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="bg-[#00fffd]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row lg:px-8">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0a1628]/70">
              CTA Final
            </span>
            <span className="h-px w-10 bg-[#0a1628]/30" />
          </div>
          <h3 className="font-sans text-xl font-bold uppercase text-[#0a1628] md:text-2xl">
            Avanza. Agenda tu valoracion y comienza un proceso disenado para tu cuerpo.
          </h3>
        </div>
        <Link
          href="/contacto"
          className="shrink-0 rounded-full border-2 border-[#0a1628] bg-[#0a1628] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-[#0a1628]"
        >
          Agendar ahora
        </Link>
      </div>
    </section>
  )
}
