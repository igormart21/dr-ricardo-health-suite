import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ClosingSection } from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <DifferentialsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
