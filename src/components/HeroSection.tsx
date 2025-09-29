import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"></div>
      
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

          {/* Right Column - Empty for now */}
          <div className="hidden lg:block">
            {/* Space for future image */}
          </div>
        </div>
      </div>
    </section>
  );
};