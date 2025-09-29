import { CTAButton } from "@/components/ui/cta-button";

export const FinalCTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-custom-blue">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-custom-blue/90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Mais do que cuidar da estética, meu compromisso é com a sua saúde, longevidade e qualidade de vida.
              </h3>
              <p className="text-lg text-slate-200">
                Se você busca acompanhamento médico sério e acessível, entre em contato e agende sua consulta. Será um prazer fazer parte da sua jornada de saúde e performance.
              </p>
            </div>

            {/* Right Column */}
            <div className="text-center lg:text-right">
              <CTAButton 
                size="md" 
                onClick={handleCTA}
                className="bg-white text-custom-blue hover:bg-gray-100"
              >
                👉 Quero agendar minha consulta agora
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
