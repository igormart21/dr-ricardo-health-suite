import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQSection } from "@/components/FAQSection";
import { PremiumCTASection } from "@/components/PremiumCTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ClosingSection } from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <TrustBar />
      <StatsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="benefits">
        <BenefitsSection />
      </section>
      <ProcessSection />
      <section id="differentials">
        <DifferentialsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <PremiumCTASection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <ClosingSection />
      <section id="faq">
        <FAQSection />
      </section>
    </div>
  );
};

export default Index;
