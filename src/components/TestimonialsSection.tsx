import { Section, SectionHeader } from "@/components/ui/Section";

export const TestimonialsSection = () => {
  return (
    <Section glow="mixed" background="luxury">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Prova Social" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Google My Business Plugin */}
            <div className="backdrop-blur-luxury bg-gradient-glass-gold border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-secondary mb-2">
                  Avaliações Google
                </h3>
                <p className="font-rubik text-sm md:text-base text-muted-foreground mb-4">
                  Espaço para plugin do Google Meu Negócio
                </p>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 md:p-8 bg-background">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Plugin Google My Business será inserido aqui
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Testimonials */}
            <div className="backdrop-blur-luxury bg-gradient-glass-blue border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-blue">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.17 17L15.17 9H11V7h8v8h-2v-4.17L9 19H7.17z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-secondary mb-2">
                  Depoimentos de Pacientes
                </h3>
                <p className="font-rubik text-sm md:text-base text-muted-foreground mb-4">
                  Relatos reais de transformação
                </p>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 md:p-8 bg-background">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Espaço para depoimentos de pacientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA removido conforme solicitado */}
      </div>
    </Section>
  );
};