import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesHeroSection from "@/components/services-hero-section"
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
      <ServicesHeroSection />
      <ServicesDetailSection />
      <PricingSection />
      <TrainersSection />
      <FerSection />
      <Footer />
    </main>
  )
}
