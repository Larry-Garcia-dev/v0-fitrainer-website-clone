import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      {/* Cada proceso comienza entendiendo tu cuerpo */}
      <HeroSection />
      {/* Nuestros Servicios */}
      <ServicesSection />
      {/* Nuestro Equipo */}
      <TeamSection />
      {/* CTA Final */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </main>
  )
}
