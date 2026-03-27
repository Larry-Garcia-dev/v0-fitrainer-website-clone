import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Contacto | CardioFit Lab",
  description: "Agenda tu cita y comienza tu transformacion con CardioFit Lab. Ubicados en Ibague, Colombia.",
}

export default function ContactoPage() {
  return (
    <main className="bg-[#0a1628]">
      <Navbar />
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] pt-32 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#00041c]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Contacto
          </span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Hablemos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Estamos listos para acompanarte en tu proceso de transformacion
          </p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}
