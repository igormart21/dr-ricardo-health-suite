import { CTAButton } from "@/components/ui/cta-button";

export const CTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-custom-blue">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-custom-blue/90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fadeInDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prova Social
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            Depoimentos de pacientes que confiam no meu trabalho e alcançaram resultados reais.
          </p>
          <CTAButton 
            size="md" 
            onClick={handleCTA}
            className="bg-white text-custom-blue hover:bg-gray-100"
          >
            👉 Agendar consulta agora
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
