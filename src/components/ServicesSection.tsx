import { Section, SectionHeader } from "@/components/ui/Section";
export const ServicesSection = () => {
  const services = [
    {
      icon: "⚖️",
      title: "Emagrecimento com segurança",
      description: "Acompanhamento clínico com base em exames, avaliação individualizada e, quando indicado, prescrição de medicamentos."
    },
    {
      icon: "🏃‍♂️",
      title: "Terapia Hormonal e Performance",
      description: "Monitoramento médico completo para resultados seguros, preservando a saúde e minimizando riscos."
    },
    {
      icon: "🏆",
      title: "Medicina do Esporte",
      description: "Prevenção, reabilitação e acompanhamento para melhorar desempenho físico com segurança."
    }
  ];

  return (
    <Section glow="mixed" background="luxury">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Áreas de Atuação" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="backdrop-blur-luxury bg-gradient-glass border border-white/20 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500 text-center animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-secondary mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="font-rubik text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};