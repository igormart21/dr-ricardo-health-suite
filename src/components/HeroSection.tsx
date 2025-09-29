import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    // Scroll to contact section or open WhatsApp
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-secondary mb-6 leading-tight">
            Mais Saúde, Mais Energia:{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Hipertrofia, Emagrecimento
            </span>{" "}
            e Reposição Hormonal com Segurança
          </h1>
          
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          
          <p className="font-rubik text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Sou o <strong className="text-secondary">Dr. Ricardo Pereira</strong>, clínico geral pós-graduado em Medicina do Esporte. 
            Acompanho homens e mulheres que buscam emagrecimento, equilíbrio hormonal e performance física 
            com <span className="text-primary font-semibold">segurança e responsabilidade médica</span>.
          </p>

          <div className="animate-slide-up">
            <CTAButton size="lg" onClick={handleCTA}>
              👉 Agendar consulta agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};