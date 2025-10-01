import { useState, useEffect } from 'react';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

export const TestimonialsSection = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Depoimentos reais do Google Meu Negócio
  const realTestimonials: GoogleReview[] = [
    {
      author_name: "Liz Mariuba 042022",
      time: Date.now(),
      relative_time_description: "30/01/2025",
      rating: 5,
      text: "Profissional atencioso e sempre disposto e disponível para sanar minhas dúvidas, mesmo depois da consulta.",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWqDrk8IWPAcgwAd4md79IjW9--moYH2QyAntSN2yzwZncGtS_CXw=w40-h40-c-rp-mo-br100"
    },
    {
      author_name: "Fernanda Cristina",
      time: Date.now(),
      relative_time_description: "23/01/2025",
      rating: 5,
      text: "Dr. Ricardo é Além de um médico excelente, e um ser humano incrível, sou paciente dele a 3 anos e sou muito grata pelo resultado e pelo profissional que é",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXyCAnWa4plaGfyBkvjuwzIG8KUWBfE6hsBTzolPNbPVda90MI=w40-h40-c-rp-mo-br100"
    },
    {
      author_name: "Cecilia Berger Naumann",
      time: Date.now(),
      relative_time_description: "19/12/2024",
      rating: 5,
      text: "Excelente profissional, muito humano e compreensivo com as minhas limitações. Agradeço a Deus por estar aos cuidados dele.",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjU0wFOn4bek-wU97HTgHhI4VKX_YBjGzoxwydPU1gr1NDL3xenb9Q=w40-h40-c-rp-mo-br100"
    },
    {
      author_name: "Ronaldo Solfa",
      time: Date.now(),
      relative_time_description: "19/12/2024",
      rating: 5,
      text: "Profissional de muita competência! Passa confiança e muito atencioso.",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLrTQSYs8IF759SpmAyTOtd7bBT-D-0yT7LH0pRjBbdcE22xg=w40-h40-c-rp-mo-br100"
    },
    {
      author_name: "Ronaldo Anlex",
      time: Date.now(),
      relative_time_description: "19/12/2024",
      rating: 5,
      text: "Atendimento nota 10 👏🏽👏🏽👏🏽👏🏽👏🏽",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIMPGfeOkV2ebfcqVspcbwTLX_slMtyG7e4DHzi7lPd972rdA=w40-h40-c-rp-mo-br100"
    },
    {
      author_name: "Camila Siqueira",
      time: Date.now(),
      relative_time_description: "13/09/2024",
      rating: 5,
      text: "excelente Dr, atencioso, explica tudo certinho, médico do meu filho, esposo, e meu também, antes pecava na parte de recepcionista, depois que trocou a recepcionista ficou perfeito para ter 5 estrelas :)",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLWdXz7VL4AGvvEZKjcgPIrUL_OKhuh5MDiNUNH8H5nBDGXfg=w40-h40-c-rp-mo-br100"
    }
  ];

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // Simulando carregamento
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Usando depoimentos reais do Google
        setReviews(realTestimonials);
      } catch (err) {
        setError("Erro ao carregar depoimentos");
        console.error("Erro ao buscar reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % realTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + realTestimonials.length) % realTestimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const displayTestimonials = reviews.length > 0 ? reviews : realTestimonials;

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-gold/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-gold/10 backdrop-blur-sm rounded-full border border-brand-gold/20 mb-6">
              <span className="bg-gradient-to-r from-brand-gold to-brand-gold-dark bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wide">Testemunhos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Google Reviews Widget */}
          <div className="bg-gradient-to-br from-brand-white to-brand-gold/5 backdrop-blur-sm rounded-2xl shadow-xl border border-brand-gold/20 p-8">
            {/* Google Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
                  alt="Google" 
                  className="h-8 w-auto"
                />
            </div>
              <div className="flex justify-center items-center text-2xl mb-4">
                <div className="bg-gradient-to-r from-brand-gold to-brand-gold-dark bg-clip-text text-transparent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
            </div>
              <p className="text-brand-blue font-semibold text-lg">EXCELENTE</p>
              <p className="text-sm text-brand-gray">Com base em <strong>{displayTestimonials.length} avaliações</strong></p>
            </div>

            {/* Reviews Carousel */}
            {loading ? (
              <div className="flex justify-center">
                <div className="bg-brand-white backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-brand-gold/20 animate-pulse w-full max-w-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-brand-gray/30 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-brand-gray/30 rounded mb-2 w-32"></div>
                      <div className="h-3 bg-brand-gray/30 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-brand-gray/30 rounded mb-2"></div>
                  <div className="h-4 bg-brand-gray/30 rounded mb-2"></div>
                  <div className="h-4 bg-brand-gray/30 rounded w-3/4"></div>
                </div>
              </div>
            ) : (
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {displayTestimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-brand-white backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-brand-gold/20 text-center max-w-2xl mx-auto">
                          {/* User Photo and Info */}
                          <div className="flex flex-col items-center mb-6">
                            <div className="relative mb-4">
                              <img
                                src={testimonial.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author_name)}&background=0E1654&color=fff&size=80`}
                                alt={testimonial.author_name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30"
                              />
                              <div className="absolute -bottom-1 -right-1">
                                <img 
                                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                                  alt="Google" 
                                  className="w-5 h-5 bg-brand-white rounded-full p-1"
                                />
                              </div>
                            </div>
                            <div className="flex mb-2">
                              <div className="bg-gradient-to-r from-brand-gold to-brand-gold-dark bg-clip-text text-transparent">
                                {[...Array(testimonial.rating || 5)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <h4 className="text-brand-blue font-semibold text-lg">
                              {testimonial.author_name}
                            </h4>
                            <p className="text-brand-gray text-sm">
                              {testimonial.relative_time_description}
                            </p>
                          </div>
                          
                          {/* Testimonial Text */}
                          <blockquote className="text-brand-gray text-lg leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg border border-brand-gold/30"
                  aria-label="Depoimento anterior"
                >
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg border border-brand-gold/30"
                  aria-label="Próximo depoimento"
                >
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {displayTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-brand-gold' 
                          : 'bg-brand-gray/30 hover:bg-brand-gray/50'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};