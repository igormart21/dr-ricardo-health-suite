import { CTAButton } from "@/components/ui/cta-button";

export const ClosingSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-luxury bg-gradient-glass border border-white/30 p-12 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-8">
              Compromisso com Sua Saúde
            </h2>
            
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="font-rubik text-xl text-muted-foreground leading-relaxed mb-10">
              "Mais do que cuidar da estética, meu compromisso é com a sua{" "}
              <span className="text-secondary font-semibold">saúde, longevidade e qualidade de vida</span>. 
              Se você busca acompanhamento médico sério e acessível, entre em contato e agende sua consulta. 
              Será um prazer fazer parte da sua jornada de{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">
                saúde e performance
              </span>."
            </p>

            <CTAButton size="lg" onClick={handleCTA}>
              👉 Quero agendar minha consulta agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};