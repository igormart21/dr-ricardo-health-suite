import { CTAButton } from "@/components/ui/cta-button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const ClosingSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <Section glow="mixed" background="luxury">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Compromisso com Sua Saúde" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem estratégica */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl border border-white/30 shadow-glass hover:shadow-glow-gold transition-all duration-500 group">
              <img
                src="/images/DSC04962.JPG"
                alt="Dr. Ricardo - Compromisso com a saúde"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="backdrop-blur-luxury bg-gradient-glass border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500">
              {/* Quote destacada */}
              <div className="mb-6 md:mb-8">
                <div className="w-16 h-1 bg-gradient-gold mb-4"></div>
                <blockquote className="font-rubik text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed italic">
                  "Mais do que cuidar da estética, meu compromisso é com a sua{" "}
                  <span className="text-primary font-semibold">saúde, longevidade e qualidade de vida</span>."
                </blockquote>
              </div>

              {/* Texto principal */}
              <p className="font-rubik text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Se você busca acompanhamento médico sério e acessível, entre em contato e agende sua consulta. 
                Será um prazer fazer parte da sua jornada de{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">
                  saúde e performance
                </span>.
              </p>

              {/* Destaques */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3 p-3 bg-gradient-glass-gold rounded-xl border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="font-rubik text-sm md:text-base text-secondary font-medium">
                    Atendimento Sério
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-glass-gold rounded-xl border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="font-rubik text-sm md:text-base text-secondary font-medium">
                    Valores Acessíveis
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <CTAButton size="lg" onClick={handleCTA}>
                  👉 Agendar consulta agora
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};