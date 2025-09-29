import { CTAButton } from "@/components/ui/cta-button";

export const CTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-700/90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fadeInDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Medicina do Esporte, Bem-estar De Dentro para Fora.
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Transforme sua saúde com cuidados médicos integrados, equilibrando hormônios para um bem-estar completo e duradouro.
          </p>
          <CTAButton 
            size="md" 
            onClick={handleCTA}
            className="bg-white text-blue-600 hover:bg-gray-100"
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
