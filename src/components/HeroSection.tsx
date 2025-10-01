import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-blue via-brand-blue to-slate-900 py-16 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-brand-gold/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start mb-8 lg:mb-12">
          <div className="relative">
            <img
              src="/images/Prancheta 1_4.png"
              alt="Dr. Ricardo Pereira - Medicina do Esporte"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white to-brand-gold bg-clip-text text-transparent">
              Mais Saúde, Mais Energia: Hipertrofia, Emagrecimento e Reposição Hormonal com Segurança.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Transforme seu corpo e sua vida com acompanhamento médico especializado e seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <CTAButton size="lg" onClick={handleCTA} className="w-full sm:w-auto text-center">
                👉 Quero agendar minha consulta agora
              </CTAButton>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="block relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent rounded-2xl blur-xl"></div>
                <img
                  src="/images/DSC04981.JPG"
                  alt="Dr. Ricardo Pereira - Medicina do Esporte"
                  className="w-full h-[600px] sm:h-[550px] md:h-[650px] lg:h-[750px] object-cover object-top relative z-10 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};