import { CTAButton } from "@/components/ui/cta-button";

export const CTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-brand-blue via-brand-blue to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-brand-gold/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeInDown">
            <div className="inline-flex items-center px-4 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30 mb-6">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Compromisso</span>
            </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-white to-brand-gold bg-clip-text text-transparent">
            Medicina do Esporte, Bem-estar De Dentro para Fora.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Transforme sua saúde com cuidados médicos integrados, equilibrando hormônios para um bem-estar completo e duradouro.
          </p>
          <CTAButton 
            size="lg" 
            onClick={handleCTA}
            className="w-full sm:w-auto"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
            Agende uma CONSULTA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
