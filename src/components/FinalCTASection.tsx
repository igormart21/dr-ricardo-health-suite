import { CTAButton } from "@/components/ui/cta-button";

export const FinalCTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-700/90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Agende uma consulta
              </h3>
            </div>

            {/* Right Column */}
            <div className="text-center lg:text-right">
              <CTAButton 
                size="md" 
                onClick={handleCTA}
                className="bg-white text-blue-600 hover:bg-gray-100"
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
