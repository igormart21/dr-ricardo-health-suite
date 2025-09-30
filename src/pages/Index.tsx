import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { IfYouSection } from "@/components/IfYouSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { CTASection } from "@/components/CTASection";
import { SpecialtiesSection, SpecialtiesOverlapSection } from "@/components/SpecialtiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      <section id="hero">
        <HeroSection />
      </section>
      <ProcessSection />
      <section id="about">
        <AboutSection />
      </section>
      <IfYouSection />
      <DifferentialsSection />
      <CTASection />
      <section id="services">
        <SpecialtiesSection />
        <SpecialtiesOverlapSection />
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