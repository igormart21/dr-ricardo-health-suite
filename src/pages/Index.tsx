import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { CTASection } from "@/components/CTASection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <ProcessSection />
      <section id="about">
        <AboutSection />
      </section>
      <DifferentialsSection />
      <CTASection />
      <section id="services">
        <SpecialtiesSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <FinalCTASection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;