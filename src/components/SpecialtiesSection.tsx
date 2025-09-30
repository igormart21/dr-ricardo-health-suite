
export const SpecialtiesSection = () => {

  const specialties = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Emagrecimento",
      description: "Controle endocrinológico para emagrecimento saudável e sustentável"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Massa Muscular",
      description: "Crescimento muscular equilibrado com suporte endocrinológico especializado."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Reposição Hormonal",
      description: "Ajuste hormonal personalizado para equilíbrio e bem-estar integral."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Desejo Sexual",
      description: "Tratamento hormonal para revitalizar e equilibrar o desejo sexual."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Reposição de Vitaminas",
      description: "Suporte vitamínico endocrinológico para saúde e vitalidade otimizadas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"/>
        </svg>
      ),
      title: "Diabetes e Tireóide",
      description: "Controle endocrinológico especializado para diabetes e saúde da tireoide."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-custom-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Especialidades
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Cuidados médicos personalizados para saúde, bem-estar e equilíbrio hormonal.
            </p>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="block relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="/images/DSC04949.JPG"
                  alt="Dr. Ricardo Pereira - Especialidades"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for the overlapping specialties block
export const SpecialtiesOverlapSection = () => {
  const specialties = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Emagrecimento",
      description: "Controle endocrinológico para emagrecimento saudável e sustentável"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Massa Muscular",
      description: "Crescimento muscular equilibrado com suporte endocrinológico especializado."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Reposição Hormonal",
      description: "Ajuste hormonal personalizado para equilíbrio e bem-estar integral."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Desejo Sexual",
      description: "Tratamento hormonal para revitalizar e equilibrar o desejo sexual."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Reposição de Vitaminas",
      description: "Suporte vitamínico endocrinológico para saúde e vitalidade otimizadas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-1V6c0-2.76-2.24-5-5-5S8 3.24 8 6v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM10 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"/>
        </svg>
      ),
      title: "Diabetes e Tireóide",
      description: "Controle endocrinológico especializado para diabetes e saúde da tireoide."
    }
  ];

  return (
    <section className="relative -mt-16 md:-mt-32 z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 items-center">
            {/* Left Column - Headline (25% width) */}
            <div className="lg:col-span-1 animate-fadeInLeft">
              <div className="inline-flex items-center px-3 py-1 bg-custom-blue/10 rounded-full mb-4">
                <span className="text-custom-blue text-xs font-semibold uppercase tracking-wide">Especialidades</span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Áreas de atuação especializada.
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Cuidados médicos personalizados para saúde, bem-estar e equilíbrio hormonal.
              </p>
            </div>

            {/* Right Column - Specialties (75% width, 3 columns) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {specialties.map((specialty, index) => (
                <div key={index} className="text-center animate-fadeInRight group">
                  <div className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                      {specialty.icon}
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-custom-blue transition-colors duration-300">
                    {specialty.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {specialty.description}
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
