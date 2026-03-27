import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessDetailSection from "@/components/process-detail-section"
import CoworkingSection from "@/components/coworking-section"
import TeamCarouselSection from "@/components/team-carousel-section"

export const metadata = {
  title: "Proceso | CardioFit Lab",
  description: "Conoce nuestro modelo de trabajo, espacios de coworking y el equipo profesional de CardioFit Lab.",
}

export default function ProcesoPage() {
  return (
    <main>
      <Navbar />
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0a1628]/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Proceso
          </span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Como trabajamos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Un modelo de trabajo disenado para acompanarte en cada etapa de tu transformacion con profesionales dedicados.
          </p>
        </div>
      </section>
      <ProcessDetailSection />
      <CoworkingSection />
      <TeamCarouselSection />
      <Footer />
    </main>
  )
}
