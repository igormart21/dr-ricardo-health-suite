import { CTAButton } from "@/components/ui/cta-button";

export const AboutSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h6 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Dr. Ricardo Pereira
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Experiência e conhecimento para ajudar e cuidar de você
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou clínico geral pós-graduado em Medicina do Esporte. Tenho experiência em terapia intensiva (UTI) e participei do I Congresso Brasileiro de Hormonologia (2023). O que me destaca é a forma clara como explico as coisas durante as consultas. Estou sempre me atualizando e buscando seguir a medicina baseada em evidências. Fico muito feliz em ver meus pacientes alcançando resultados, e me empenho ao máximo para ajudar nisso.
            </p>
            <CTAButton size="md" onClick={handleCTA}>
              Agende uma CONSULTA
            </CTAButton>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/DSC04977.JPG"
                alt="Dr. Ricardo Pereira"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">anos de experiência</div>
              </div>
            </div>
            
            {/* Floating Icon */}
            <div className="absolute -top-6 -left-6 bg-blue-600 rounded-full p-4 shadow-lg">
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