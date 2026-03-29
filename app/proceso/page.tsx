import Navbar from "@/components/navbar"
import ProcessSection from "@/components/process-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export default function ProcesoPage() {
  return (
    <main>
      <Navbar />
      {/* Asi comienza tu proceso */}
      <ProcessSection />
      {/* Mas que entrenamiento */}
      <ExperienceSection />
      {/* Footer con CTA Final integrado */}
      <Footer />
    </main>
  )
}
