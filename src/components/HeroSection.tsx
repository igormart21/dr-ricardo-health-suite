import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 md:py-32">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mais Saúde, Mais Energia: Hipertrofia, Emagrecimento e Reposição Hormonal com Segurança.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Sou o Dr. Ricardo Pereira, clínico geral pós-graduado em Medicina do Esporte. Acompanho homens e mulheres que buscam emagrecimento, equilíbrio hormonal e performance física com segurança e responsabilidade médica.
            </p>
            <CTAButton size="lg" onClick={handleCTA}>
              👉 Agendar consulta agora
            </CTAButton>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10">
              <img
                src="/images/DSC04981-removebg-preview.png"
                alt="Dr. Ricardo Pereira - Medicina do Esporte"
                className="w-full h-[600px] object-contain"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-custom-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-custom-blue rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};