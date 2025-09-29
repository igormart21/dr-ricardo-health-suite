import { CTAButton } from "@/components/ui/cta-button";

export const TestimonialsSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary mb-4">
              Prova Social
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Google My Business Plugin */}
            <div className="bg-gradient-subtle p-8 rounded-2xl shadow-elegant">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                  Avaliações Google
                </h3>
                <p className="font-rubik text-muted-foreground mb-4">
                  Espaço para plugin do Google Meu Negócio
                </p>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 bg-background">
                  <p className="text-sm text-muted-foreground">
                    Plugin Google My Business será inserido aqui
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Testimonials */}
            <div className="bg-gradient-subtle p-8 rounded-2xl shadow-elegant">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.17 17L15.17 9H11V7h8v8h-2v-4.17L9 19H7.17z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                  Depoimentos de Pacientes
                </h3>
                <p className="font-rubik text-muted-foreground mb-4">
                  Relatos reais de transformação
                </p>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 bg-background">
                  <p className="text-sm text-muted-foreground">
                    Espaço para depoimentos de pacientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton size="lg" onClick={handleCTA}>
              👉 Agendar consulta agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};