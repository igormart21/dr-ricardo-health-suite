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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white animated-slow animate-fadeIn">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h6 className="text-sm font-semibold text-custom-blue uppercase tracking-wide mb-4">
              Testemunhos
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Google Reviews Widget Placeholder */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 mb-4">
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
            <p className="text-gray-700 font-semibold">EXCELENTE</p>
            <p className="text-sm text-gray-500">Com base em 14 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};