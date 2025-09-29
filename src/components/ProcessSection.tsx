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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Se você...
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Treina e quer ganhar massa com segurança</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Busca reposição hormonal com acompanhamento médico</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Quer emagrecer sem dietas malucas</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Deseja melhorar a performance física com saúde</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Tem hipertensão, diabetes ou obesidade e quer treinar com segurança</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700 text-left">Valoriza um plano individualizado, feito por médico e com resultados reais</span>
              </div>
            </div>
            <p className="text-2xl text-gray-900 font-bold">
              Eu posso te ajudar!
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fadeInRight">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-custom-blue mx-auto mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};