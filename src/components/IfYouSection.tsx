import { CTAButton } from "@/components/ui/cta-button";

export const IfYouSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  const ifYouItems = [
    "Treina e quer ganhar massa com segurança",
    "Busca reposição hormonal com acompanhamento médico",
    "Quer emagrecer sem dietas malucas",
    "Deseja melhorar a performance física com saúde",
    "Tem hipertensão, diabetes ou obesidade e quer treinar com segurança",
    "Valoriza um plano individualizado, feito por médico e com resultados reais"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Se você...
            </h2>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {ifYouItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:border-custom-blue/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-custom-blue/10 to-blue-500/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-custom-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-700 text-left leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Eu posso te ajudar!
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              Entre em contato e agende sua consulta para começar sua jornada de transformação.
            </p>
            <CTAButton size="lg" onClick={handleCTA} className="!bg-custom-blue hover:!bg-gradient-to-r hover:!from-custom-blue hover:!to-gray-600 shadow-2xl hover:shadow-custom-blue/25 transition-all duration-300">
              👉 Agende uma CONSULTA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
