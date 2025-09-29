export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"/>
        </svg>
      ),
      title: "Atenção",
      description: "É o que os pacientes mais precisam quando buscam melhorar sua saúde, é essencial estar atento a todos os detalhes que o paciente fala."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Personalização",
      description: "Trato seu caso de maneira totalmente personalizada, pois cada ser humano é único e possui necessidades específicas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Resultado",
      description: "Tratamentos atuais e eficazes somados às orientações e estímulo para melhorar hábitos de vida levam você a alcançar seus objetivos."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h6 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-4">
              Por que escolher?
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Em nossa consulta você receberá:
            </h2>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 mx-auto mb-6">
                  {differential.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};