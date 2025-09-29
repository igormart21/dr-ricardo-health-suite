import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/Section";

export const PremiumCTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <Section glow="mixed" background="luxury">
      <div className="backdrop-blur-luxury bg-gradient-glass border border-white/20 rounded-3xl p-6 md:p-12 shadow-glass text-center">
          <h2 className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary mb-4">Pronto para começar?</h2>
          <p className="font-rubik text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">Acompanhe com um médico que une ciência, cuidado e resultados reais.</p>
          <div className="mt-4 md:mt-6">
            <CTAButton size="lg" onClick={handleCTA}>👉 Agendar consulta agora</CTAButton>
          </div>
      </div>
    </Section>
  );
};


