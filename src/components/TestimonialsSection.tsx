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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h6 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Testemunhos
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Google Reviews Summary */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">EXCELENTE</div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Com base em <strong>14 avaliações</strong>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};