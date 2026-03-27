import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import DoctorSection from "@/components/doctor-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
