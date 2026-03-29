import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      {/* Contactanos + Agendamientos */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </main>
  )
}
