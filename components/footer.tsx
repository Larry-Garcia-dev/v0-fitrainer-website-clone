"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin, ChevronUp } from "lucide-react"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 60 12" className="h-3 w-10 text-[#00fffd]">
    <path
      d="M0 6 Q 7.5 0, 15 6 T 30 6 T 45 6 T 60 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

// WhatsApp icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "/proceso" },
  { label: "Contacto", href: "/contacto" },
]

const services = [
  "Entrenamiento personalizado",
  "Evaluacion biomecanica",
  "Recuperacion avanzada",
  "Zona de bienestar",
  "Zona de nutricion",
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-[#0a1628]">
      {/* CTA Banner */}
      <div className="bg-[#00fffd]">
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
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {/* Top row - Logo and contact info */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row">
          <div className="relative h-14 w-56">
            <Image
              src="/images/logo-horizontal.png"
              alt="CardioFit Lab"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <a href="tel:+573155774777" className="flex items-center gap-2 hover:text-[#00fffd]">
              <Phone className="h-4 w-4 text-[#00fffd]" />
              <span>315 577 4777</span>
            </a>
            <a href="mailto:info@cardiofitlab.com" className="flex items-center gap-2 hover:text-[#00fffd]">
              <Mail className="h-4 w-4 text-[#00fffd]" />
              <span>info@cardiofitlab.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00fffd]" />
              <span>Carrera 14 #44-63 Local 2, Ibague</span>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Sobre Nosotros</h4>
            <div className="mt-2">
              <WavyUnderline />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Centro de entrenamiento con respaldo medico y tecnologia aplicada al movimiento. Donde la ciencia se encuentra con la fuerza.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-2">
              <a 
                href="https://wa.me/573155774777" 
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110" 
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a 
                href="https://instagram.com/cardiofitlab" 
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-transform hover:scale-110" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Enlaces Rapidos</h4>
            <div className="mt-2">
              <WavyUnderline />
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#00fffd]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Servicios</h4>
            <div className="mt-2">
              <WavyUnderline />
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-sm text-white/60 transition-colors hover:text-[#00fffd]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Contacto</h4>
            <div className="mt-2">
              <WavyUnderline />
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-white/60">
                Tu proceso comienza aqui. Agenda tu valoracion inicial.
              </p>
              <a
                href="https://wa.me/573155774777"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00fffd] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
              >
                <WhatsAppIcon />
                Escribenos
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Resultados con intencion. Entrena con respaldo.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#06101f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-center sm:flex-row lg:px-8">
          <p className="text-xs text-white/50">
            Copyright 2025 CardioFit Lab. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/50 transition-colors hover:text-[#00fffd]">
              Politica de Privacidad
            </Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="text-xs text-white/50 transition-colors hover:text-[#00fffd]">
              Terminos y Condiciones
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#00fffd] text-[#0a1628] shadow-lg transition-all hover:bg-[#68d2df]"
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
