export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      date: "15/01/2025",
      rating: 5,
      text: "Dr. Ricardo é um profissional excepcional! Muito atencioso e explica tudo de forma clara. Recomendo!"
    },
    {
      name: "João Santos",
      date: "10/01/2025",
      rating: 5,
      text: "Excelente atendimento! O Dr. Ricardo me ajudou muito com meu problema hormonal. Profissional competente e humano."
    },
    {
      name: "Ana Costa",
      date: "05/01/2025",
      rating: 5,
      text: "Muito satisfeita com o tratamento! Dr. Ricardo é um médico que realmente se importa com seus pacientes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            Testemunhos
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O que dizem meus pacientes
          </h2>
        </div>

        {/* Google Reviews Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg p-6 shadow-lg">
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
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
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
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};