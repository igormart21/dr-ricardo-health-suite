export const ProcessSection = () => {
  const processSteps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Avaliação",
      description: "Consulta + exames para diagnóstico preciso"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"/>
        </svg>
      ),
      title: "Tratamento",
      description: "Plano com medicação e melhorias de hábitos."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Orientação",
      description: "Ajustes e suporte contínuo para você."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Left Column - Headline (25% width) */}
            <div className="lg:col-span-1 animate-fadeInLeft">
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
                <div key={index} className="text-center animate-fadeInRight">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-custom-blue mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
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