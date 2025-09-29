import { CTAButton } from "@/components/ui/cta-button";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Equilíbrio. Vitalidade. Saúde!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Troque problemas como cansaço excessivo, perda de libido, dificuldade para emagrecer ou ganhar massa por bem-estar e qualidade de vida.
          </p>
          <CTAButton size="lg" onClick={handleCTA}>
            Agende uma CONSULTA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};