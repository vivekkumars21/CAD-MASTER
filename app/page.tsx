import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustedLogos from "@/components/trusted-logos"
import CoursesSection from "@/components/courses-section"
import WhyChooseUs from "@/components/why-choose-us"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import CareerSection from "@/components/career-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedLogos />
      <CoursesSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <CareerSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
