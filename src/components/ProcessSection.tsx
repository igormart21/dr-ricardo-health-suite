export const ProcessSection = () => {
  const processSteps = [
    {
      icon: (
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
          <img 
            src="/images/exame-medico.png" 
            alt="Avaliação" 
            className="w-8 h-8 object-contain"
          />
        </div>
      ),
      title: "Avaliação",
      description: "Consulta + exames para diagnóstico preciso"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
          <img 
            src="/images/medico.png" 
            alt="Tratamento" 
            className="w-8 h-8 object-contain"
          />
        </div>
      ),
      title: "Tratamento",
      description: "Plano com medicação e melhorias de hábitos."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
          <img 
            src="/images/medicina.png" 
            alt="Orientação" 
            className="w-8 h-8 object-contain"
          />
        </div>
      ),
      title: "Orientação",
      description: "Ajustes e suporte contínuo para você."
    }
  ];

  return (
    <section className="relative -mt-32 z-10">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Left Column - Headline (25% width) */}
            <div className="lg:col-span-1 animate-fadeInLeft">
              <div className="inline-flex items-center px-3 py-1 bg-custom-blue/10 rounded-full mb-4">
                <span className="text-custom-blue text-xs font-semibold uppercase tracking-wide">Especialista</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Especialista em equilíbrio hormonal e qualidade de vida.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Equilíbrio hormonal transforma sua saúde: viva plenamente, com eficiência e bem-estar.
              </p>
            </div>

            {/* Right Column - Process Steps (75% width, 3 columns) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center animate-fadeInRight group">
                  <div className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-custom-blue transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};