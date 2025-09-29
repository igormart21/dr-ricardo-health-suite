import { Section, SectionHeader } from "@/components/ui/Section";
export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: "💬",
      title: "Explicações claras e acessíveis",
      description: "Explicações didáticas para que você entenda cada etapa do tratamento"
    },
    {
      icon: "⏰",
      title: "Paciência e transparência",
      description: "Benefícios e riscos explicados de forma simples"
    },
    {
      icon: "🔍",
      title: "Avaliação completa",
      description: "Triagem, exames, avaliação cardíaca e abdominal"
    },
    {
      icon: "💰",
      title: "Valores acessíveis",
      description: "Sem ostentação ou promessas irreais"
    },
    {
      icon: "⚖️",
      title: "Foco em vida equilibrada",
      description: "Saúde real, longevidade e qualidade de vida acima de tudo"
    },
    {
      icon: "🤝",
      title: "Atendimento humanizado",
      description: "Cuidado personalizado com respeito e empatia em cada consulta"
    }
  ];

  return (
    <Section glow="mixed">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Diferenciais no Atendimento" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="backdrop-blur-luxury bg-gradient-glass border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500 text-center animate-scale-in group hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-secondary mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="font-rubik text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};