"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"

// WhatsApp icon
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-[#00fffd]">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "315 577 4777",
    href: "tel:+573155774777",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@cardiofitlab.com",
    href: "mailto:info@cardiofitlab.com",
  },
  {
    icon: MapPin,
    label: "Direccion",
    value: "Carrera 14 #44-63 Local 2, Ibague",
    href: "https://maps.google.com/?q=Carrera+14+44-63+Local+2+Ibague",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes: 6am - 9pm | Sabados: 7am - 2pm",
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.png"
          alt="CardioFit Lab interior"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
              Contacto
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h1 className="font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Contactanos
          </h1>
          <div className="mt-4 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Tu proceso comienza aqui. Agenda tu valoracion inicial y descubre como podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-8 font-sans text-2xl font-bold text-white">
              Informacion de contacto
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-[#00fffd]/20 bg-[#0a1628]/50 p-5 backdrop-blur-sm transition-all hover:border-[#00fffd]/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00fffd]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#00fffd]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-lg text-white/90 transition-colors hover:text-[#00fffd]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white/90">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/573155774777"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#128C7E]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Escribenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Agendamientos */}
          <div>
            <h2 className="mb-8 font-sans text-2xl font-bold text-white">
              Agendamientos
            </h2>

            <div className="rounded-2xl border border-[#00fffd]/30 bg-gradient-to-br from-[#00fffd]/10 to-transparent p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00fffd] text-[#0a1628]">
                  <Calendar className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    Valoracion Inicial
                  </h3>
                  <p className="text-sm text-white/60">
                    El primer paso de tu proceso
                  </p>
                </div>
              </div>

              <p className="mb-6 text-white/80">
                Agenda tu valoracion inicial para conocer tu condicion fisica actual, establecer tus objetivos y disenar un plan personalizado basado en datos.
              </p>

              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <div className="h-2 w-2 rounded-full bg-[#00fffd]" />
                  <span>Evaluacion de condicion fisica</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="h-2 w-2 rounded-full bg-[#00fffd]" />
                  <span>Analisis de objetivos personales</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="h-2 w-2 rounded-full bg-[#00fffd]" />
                  <span>Recorrido por las instalaciones</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="h-2 w-2 rounded-full bg-[#00fffd]" />
                  <span>Plan de accion personalizado</span>
                </div>
              </div>

              <a
                href="https://wa.me/573155774777?text=Hola!%20Me%20gustaria%20agendar%20una%20valoracion%20inicial"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full bg-[#00fffd] px-8 py-4 text-lg font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Valoracion
              </a>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 rounded-xl bg-[#00fffd] p-6">
              <p className="mb-4 font-sans text-lg font-bold text-[#0a1628]">
                Resultados con intencion. Entrena con respaldo.
              </p>
              <p className="text-sm text-[#0a1628]/80">
                Cada proceso es unico, cada resultado es medible. Comienza hoy tu transformacion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
