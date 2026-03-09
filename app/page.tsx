import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import AchievementSection from "@/components/achievement-section"
import ServicesSection from "@/components/services-section"
import SummerOfferSection from "@/components/summer-offer-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import StatsSection from "@/components/stats-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AchievementSection />
      <ServicesSection />
      <SummerOfferSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <StatsSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
