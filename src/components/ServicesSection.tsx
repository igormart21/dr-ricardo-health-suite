export const ServicesSection = () => {
  const services = [
    {
      icon: "⚖️",
      title: "Emagrecimento com segurança",
      description: "Protocolos médicos personalizados para perda de peso sustentável e saudável, sem dietas extremas."
    },
    {
      icon: "🏃‍♂️",
      title: "Terapia Hormonal e Performance",
      description: "Reposição hormonal responsável e acompanhamento médico para otimizar sua performance física."
    },
    {
      icon: "🏆",
      title: "Medicina do Esporte",
      description: "Avaliação médica especializada para praticantes de atividade física de todos os níveis."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary mb-4">
              Áreas de Atuação
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="backdrop-blur-luxury bg-gradient-glass border border-white/20 p-8 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500 text-center animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-2xl text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="font-rubik text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};