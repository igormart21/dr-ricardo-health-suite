import { CTAButton } from "@/components/ui/cta-button";

export const CTASection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center px-4 py-2 bg-custom-blue/10 backdrop-blur-sm rounded-full border border-custom-blue/20 mb-6">
                <span className="text-custom-blue text-sm font-semibold uppercase tracking-wide">Compromisso</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Medicina do Esporte, Bem-estar De Dentro para Fora.
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Transforme sua saúde com cuidados médicos integrados, equilibrando hormônios para um bem-estar completo e duradouro.
              </p>
              <CTAButton 
                size="lg" 
                onClick={handleCTA}
                className="bg-custom-blue hover:bg-gradient-to-r hover:from-custom-blue hover:to-gray-600 shadow-2xl hover:shadow-custom-blue/25 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
                Agende uma CONSULTA
              </CTAButton>
            </div>

            {/* Right Column - Doctor Image */}
            <div className="hidden lg:block relative animate-fadeInRight">
              <div className="relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src="/images/DSC04949.JPG"
                    alt="Dr. Ricardo Pereira - Medicina do Esporte"
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
