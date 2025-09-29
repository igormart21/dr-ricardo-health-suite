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
             <h6 className="text-sm font-semibold text-custom-blue uppercase tracking-wide">
              Dr. Ricardo Pereira
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Quem Sou
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Minha missão é oferecer um atendimento transparente, didático e acessível, ajudando pacientes a alcançarem saúde e performance sem exageros, com equilíbrio e responsabilidade.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-custom-blue text-xl">🔹</span>
                <span className="text-gray-600">Formação em Medicina pela Unilago (São José do Rio Preto)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-custom-blue text-xl">🔹</span>
                <span className="text-gray-600">Pós-graduação em Medicina do Esporte – Uniguaçu</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-custom-blue text-xl">🔹</span>
                <span className="text-gray-600">Experiência em terapia intensiva (UTI)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-custom-blue text-xl">🔹</span>
                <span className="text-gray-600">Participação no I Congresso Brasileiro de Hormonologia (2023)</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cristão, pai de família e praticante de atividade física, acredito que cuidar do corpo é um ato de responsabilidade com a vida. Mais do que estética, o foco do meu trabalho é longevidade, prevenção e qualidade de vida.
            </p>
            <CTAButton size="md" onClick={handleCTA}>
              👉 Agendar consulta agora
            </CTAButton>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
               <img
                 src="/images/DSC04981-removebg-preview.png"
                 alt="Dr. Ricardo Pereira"
                 className="w-full h-[500px] object-contain rounded-lg shadow-lg"
               />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-lg">
              <div className="text-center">
                 <div className="text-3xl font-bold text-custom-blue">10+</div>
                <div className="text-sm text-gray-600">anos de experiência</div>
              </div>
            </div>
            
            {/* Floating Icon */}
             <div className="absolute -top-6 -left-6 bg-custom-blue rounded-full p-4 shadow-lg">
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