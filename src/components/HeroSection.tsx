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
              Equilíbrio. Vitalidade. Saúde!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Troque problemas como cansaço excessivo, perda de libido, dificuldade para emagrecer ou ganhar massa por bem-estar e qualidade de vida.
            </p>
            <CTAButton size="lg" onClick={handleCTA}>
              Agende uma CONSULTA
            </CTAButton>
          </div>

          {/* Right Column - Dr. Ricardo Photo */}
          <div className="hidden lg:flex justify-center items-center h-[400px] relative">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              {/* Background with blue overlay */}
              <div className="absolute inset-0 bg-custom-blue/20 rounded-full"></div>
              {/* Dr. Ricardo's photo */}
              <img 
                src="/images/DSC04981-removebg-preview.png" 
                alt="Dr. Ricardo Pereira - Medicina do Esporte" 
                className="w-full h-full object-cover object-center"
              />
              {/* Blue overlay for depth */}
              <div className="absolute inset-0 bg-custom-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};