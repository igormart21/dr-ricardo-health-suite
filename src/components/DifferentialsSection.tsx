export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: (
        <img 
          src="/images/consultando.png" 
          alt="Atenção" 
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Atenção",
      description: "É o que os pacientes mais precisam quando buscam melhorar sua saúde, é essencial estar atento a todos os detalhes que o paciente fala."
    },
    {
      icon: (
        <img 
          src="/images/prescricao.png" 
          alt="Personalização" 
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Personalização",
      description: "Trato seu caso de maneira totalmente personalizada, pois cada ser humano é único e possui necessidades específicas."
    },
    {
      icon: (
        <img 
          src="/images/resultado.png" 
          alt="Resultado" 
          className="w-8 h-8 object-contain"
        />
      ),
      title: "Resultado",
      description: "Tratamentos atuais e eficazes somados às orientações e estímulo para melhorar hábitos de vida levam você a alcançar seus objetivos."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-custom-blue/10 backdrop-blur-sm rounded-full border border-custom-blue/20 mb-6">
              <span className="text-custom-blue text-sm font-semibold uppercase tracking-wide">Por que escolher?</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Em nossa consulta você receberá:
            </h2>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl hover:border-custom-blue/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-custom-blue/10 to-blue-500/10 rounded-2xl flex items-center justify-center text-custom-blue mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {differential.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 group-hover:text-custom-blue transition-colors duration-300">
                    {differential.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};