export const AboutSection = () => {

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-custom-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Experiência e conhecimento para ajudar e cuidar de você
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Sou clínico geral pós-graduado em Medicina do Esporte. Tenho experiência em terapia intensiva (UTI) e participei do I Congresso Brasileiro de Hormonologia (2023). O que me destaca é a forma clara como explico as coisas durante as consultas. Estou sempre me atualizando e buscando seguir a medicina baseada em evidências. Fico muito feliz em ver meus pacientes alcançando resultados, e me empenho ao máximo para ajudar nisso.
            </p>
          </div>

          {/* Right Column - Image and Floating Elements */}
          <div className="relative animate-fadeInRight">
            {/* Floating Counter */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white/90 backdrop-blur-sm rounded-full p-4 md:p-6 shadow-xl border border-white/20 animate-bounceInRight">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-custom-blue">10+</div>
                <div className="text-xs md:text-sm text-gray-600">anos de experiência</div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="/images/DSC04962.JPG"
                  alt="Dr. Ricardo Pereira - Medicina do Esporte"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl mb-4 md:mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md border border-white/20">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/90 rotate-45 border-l border-t border-white/20"></div>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center leading-relaxed italic">
                  "Minha missão é oferecer um atendimento transparente, didático e acessível, ajudando pacientes a alcançarem saúde e performance sem exageros, com equilíbrio e responsabilidade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};