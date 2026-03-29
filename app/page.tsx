import Navbar from "@/components/navbar"
import VideoHeroSection from "@/components/video-hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import AchievementSection from "@/components/achievement-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Video Hero Section */}
      <VideoHeroSection />
      {/* Un nuevo enfoque del entrenamiento */}
      <AboutSection />
      {/* Por que elegir CardioFit Lab */}
      <FeaturesSection />
      {/* Posicionamiento */}
      <AchievementSection />
      {/* Footer con CTA Final integrado */}
      <Footer />
    </main>
  )
}
