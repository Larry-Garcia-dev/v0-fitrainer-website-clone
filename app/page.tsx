import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import AchievementSection from "@/components/achievement-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
      {/* Un nuevo enfoque del entrenamiento */}
      <AboutSection />
      {/* Por que elegir CardioFit Lab */}
      <FeaturesSection />
      {/* Posicionamiento */}
      <AchievementSection />
      {/* CTA Final */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </main>
  )
}
