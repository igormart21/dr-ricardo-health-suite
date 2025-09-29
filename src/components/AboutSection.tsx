import { CTAButton } from "@/components/ui/cta-button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const AboutSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <Section glow="gold">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Quem Sou" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Imagem de apresentação */}
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 shadow-glass hover:shadow-glow-gold transition-all duration-500">
                <img
                  src="/images/DSC04977.JPG"
                  alt="Dr. Ricardo - foto de apresentação"
                  className="w-full h-[300px] sm:h-[400px] md:h-[520px] object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="animate-slide-up">
              <div className="backdrop-blur-glass bg-gradient-glass-gold border border-white/20 p-6 md:p-8 rounded-3xl shadow-glass mb-6 md:mb-8">
                <p className="font-rubik text-lg text-secondary mb-6 leading-relaxed italic">
                  "Minha missão é oferecer um atendimento transparente, didático e acessível, 
                  ajudando pacientes a alcançarem saúde e performance sem exageros, 
                  com equilíbrio e responsabilidade."
                </p>
              </div>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-secondary mb-3 md:mb-4">
                  Formação:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="font-rubik text-base md:text-lg text-muted-foreground">
                      Medicina pela Unilago (São José do Rio Preto)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="font-rubik text-base md:text-lg text-muted-foreground">
                      Pós-graduação em Medicina do Esporte – Uniguaçu
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="font-rubik text-base md:text-lg text-muted-foreground">
                      Experiência em terapia intensiva (UTI)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="font-rubik text-base md:text-lg text-muted-foreground">
                      Participação no I Congresso Brasileiro de Hormonologia (2023)
                    </p>
                  </div>
                </div>

                <div className="backdrop-blur-glass bg-gradient-glass-gold border border-white/20 p-4 md:p-6 rounded-2xl shadow-glass border-l-4 border-primary">
                  <p className="font-rubik text-base md:text-lg text-secondary leading-relaxed italic">
                    "Cristão, pai de família e praticante de atividade física, acredito que cuidar do corpo 
                    é um ato de responsabilidade com a vida. Mais do que estética, o foco do meu trabalho é 
                    longevidade, prevenção e qualidade de vida."
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start mt-6 md:mt-8">
                <CTAButton size="lg" onClick={handleCTA}>
                  👉 Agendar consulta agora
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};