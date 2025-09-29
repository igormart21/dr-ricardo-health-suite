import { CTAButton } from "@/components/ui/cta-button";

export const BenefitsSection = () => {
  const benefits = [
    "Treina e quer ganhar massa com segurança",
    "Busca reposição hormonal com acompanhamento médico",
    "Quer emagrecer sem dietas malucas",
    "Deseja melhorar a performance física com saúde",
    "Tem hipertensão, diabetes ou obesidade e quer treinar com segurança",
    "Valoriza um plano individualizado, feito por médico e com resultados reais"
  ];

  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary mb-4">
            Se você...
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 backdrop-blur-glass bg-gradient-glass border border-white/20 rounded-2xl shadow-glass hover:shadow-glow-gold hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-gold p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <p className="font-rubik text-lg text-secondary text-left leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <CTAButton size="lg" onClick={handleCTA}>
            👉 Agendar consulta agora
          </CTAButton>
        </div>
      </div>
    </section>
  );
};