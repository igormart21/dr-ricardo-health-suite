export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: "💬",
      title: "Explicações claras e acessíveis",
      description: "Linguagem simples e didática para que você entenda cada etapa do tratamento"
    },
    {
      icon: "⏰",
      title: "Paciência e transparência",
      description: "Tempo dedicado para esclarecer todas as suas dúvidas sem pressa"
    },
    {
      icon: "🔍",
      title: "Avaliação completa",
      description: "Triagem, exames, avaliação cardíaca e abdominal detalhada"
    },
    {
      icon: "💰",
      title: "Valores acessíveis",
      description: "Preços justos, sem promessas irreais ou milagres"
    },
    {
      icon: "⚖️",
      title: "Foco em vida equilibrada",
      description: "Saúde real, longevidade e qualidade de vida acima de tudo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary mb-4">
              Diferenciais no Atendimento
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="backdrop-blur-luxury bg-gradient-glass border border-white/30 p-8 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500 text-center animate-scale-in group hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-secondary mb-4">
                  {item.title}
                </h3>
                <p className="font-rubik text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};