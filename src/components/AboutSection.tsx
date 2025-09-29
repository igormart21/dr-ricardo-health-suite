import { CTAButton } from "@/components/ui/cta-button";

export const AboutSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary mb-4">
              Quem Sou
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Column */}
            <div className="animate-fade-in">
              <div className="aspect-video backdrop-blur-glass bg-gradient-glass border border-white/30 rounded-3xl flex items-center justify-center shadow-glass hover:shadow-glow-gold transition-all duration-500">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-rubik text-muted-foreground text-lg">
                    Espaço para vídeo de apresentação
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="animate-slide-up">
              <div className="backdrop-blur-glass bg-gradient-glass-gold border border-white/20 p-8 rounded-3xl shadow-glass mb-8">
                <p className="font-rubik text-lg text-secondary mb-6 leading-relaxed italic">
                  "Minha missão é oferecer um atendimento transparente, didático e acessível, 
                  ajudando pacientes a alcançarem saúde e performance sem exageros, 
                  com equilíbrio e responsabilidade."
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <h3 className="font-montserrat font-semibold text-2xl text-secondary mb-4">
                  Formação:
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <p className="font-rubik text-lg text-muted-foreground">
                      Medicina pela Unilago (São José do Rio Preto)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <p className="font-rubik text-lg text-muted-foreground">
                      Pós-graduação em Medicina do Esporte – Uniguaçu
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <p className="font-rubik text-lg text-muted-foreground">
                      Experiência em terapia intensiva (UTI)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <p className="font-rubik text-lg text-muted-foreground">
                      Participação no I Congresso Brasileiro de Hormonologia (2023)
                    </p>
                  </div>
                </div>

                <div className="backdrop-blur-glass bg-gradient-glass-blue border border-white/20 p-6 rounded-2xl shadow-glass border-l-4 border-primary">
                  <p className="font-rubik text-lg text-secondary leading-relaxed italic">
                    "Cristão, pai de família e praticante de atividade física, acredito que cuidar do corpo 
                    é um ato de responsabilidade com a vida. Mais do que estética, o foco do meu trabalho é 
                    longevidade, prevenção e qualidade de vida."
                  </p>
                </div>
              </div>

              <CTAButton onClick={handleCTA}>
                👉 Agendar consulta agora
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};