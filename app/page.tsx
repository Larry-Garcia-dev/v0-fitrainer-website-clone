import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import AchievementSection from "@/components/achievement-section"
import ExperienceSection from "@/components/experience-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <AchievementSection />
      <ExperienceSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
