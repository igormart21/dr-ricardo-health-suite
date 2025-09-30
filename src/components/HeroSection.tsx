import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-custom-blue/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mais Saúde, Mais Energia: Hipertrofia, Emagrecimento e Reposição Hormonal com Segurança.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Transforme seu corpo e sua vida com acompanhamento médico especializado e seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <CTAButton size="lg" onClick={handleCTA} className="!bg-custom-blue hover:!bg-gradient-to-r hover:!from-custom-blue hover:!to-gray-600 shadow-2xl hover:shadow-custom-blue/25 transition-all duration-300 w-full sm:w-auto text-center">
                👉 Quero agendar minha consulta agora
              </CTAButton>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="block relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 to-transparent rounded-2xl blur-xl"></div>
                <img
                  src="/images/DSC04981-removebg-preview.png"
                  alt="Dr. Ricardo Pereira - Medicina do Esporte"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};