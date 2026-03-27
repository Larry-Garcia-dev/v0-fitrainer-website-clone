import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcesoHeroSection from "@/components/proceso-hero-section"
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
      <ProcesoHeroSection />
      <ProcessDetailSection />
      <CoworkingSection />
      <TeamCarouselSection />
      <Footer />
    </main>
  )
}
