export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Liz Mariuba",
      date: "30/01/2025",
      rating: 5,
      text: "Profissional atencioso e sempre disposto e disponível para sanar minhas dúvidas, mesmo depois da consulta."
    },
    {
      name: "Fernanda Cristina",
      date: "23/01/2025",
      rating: 5,
      text: "Dr. Ricardo é Além de um médico excelente, e um ser humano incrível, sou paciente dele a 3 anos e sou muito grata pelo resultado e pelo profissional que é"
    },
    {
      name: "Cecilia Berger Naumann",
      date: "19/12/2024",
      rating: 5,
      text: "Excelente profissional, muito humano e compreensivo com as minhas limitações. Agradeço a Deus por estar aos cuidados dele."
    },
    {
      name: "Ronaldo Solfa",
      date: "19/12/2024",
      rating: 5,
      text: "Profissional de muita competência! Passa confiança e muito atencioso."
    },
    {
      name: "Ronaldo Anlex",
      date: "19/12/2024",
      rating: 5,
      text: "Atendimento nota 10 👏🏽👏🏽👏🏽👏🏽👏🏽"
    },
    {
      name: "Camila Siqueira",
      date: "13/09/2024",
      rating: 5,
      text: "excelente Dr, atencioso, explica tudo certinho, médico do meu filho, esposo, e meu também, antes pecava na parte de recepcionista, depois que trocou a recepcionista ficou perfeito para ter 5 estrelas :)"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden animated-slow animate-fadeIn">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-custom-blue/10 backdrop-blur-sm rounded-full border border-custom-blue/20 mb-6">
              <span className="text-custom-blue text-sm font-semibold uppercase tracking-wide">Testemunhos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Google Reviews Widget Placeholder */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-custom-blue/10 to-blue-500/10 rounded-2xl flex items-center justify-center text-custom-blue mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              [Aqui será integrado o widget de avaliações do Google Meu Negócio]
            </p>
            <div className="flex justify-center items-center text-yellow-500 text-2xl mb-4">
              {/* Star Icons */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 font-semibold text-lg">EXCELENTE</p>
            <p className="text-sm text-gray-500">Com base em 14 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};