import { CTAButton } from "@/components/ui/cta-button";

export const FinalCTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-custom-blue">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-custom-blue/90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 text-center lg:text-left">
                Agende uma consulta
              </h3>
            </div>

            {/* Right Column */}
            <div className="text-center lg:text-right">
              <CTAButton 
                size="lg" 
                onClick={handleCTA}
                className="bg-white text-custom-blue hover:bg-gradient-to-r hover:from-white hover:to-gray-100"
              >
                CLIQUE AQUI
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
