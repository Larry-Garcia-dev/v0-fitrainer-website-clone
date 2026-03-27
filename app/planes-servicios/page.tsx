import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesDetailSection from "@/components/services-detail-section"
import PricingSection from "@/components/pricing-section"
import TrainersSection from "@/components/trainers-section"
import FerSection from "@/components/fer-section"

export const metadata = {
  title: "Planes y Servicios | CardioFit Lab",
  description: "Conoce nuestros planes de entrenamiento, servicios especializados y el equipo de entrenadores de CardioFit Lab.",
}

export default function PlanesServiciosPage() {
  return (
    <main>
      <Navbar />
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0a1628]/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Planes y Servicios
          </span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Tu proceso, tu plan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Descubre los servicios y planes disenados para transformar tu entrenamiento con respaldo medico y tecnologia de precision.
          </p>
        </div>
      </section>
      <ServicesDetailSection />
      <PricingSection />
      <TrainersSection />
      <FerSection />
      <Footer />
    </main>
  )
}
