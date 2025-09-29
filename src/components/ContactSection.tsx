export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div>
              {/* Logo placeholder */}
              <div className="mb-6">
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Logo Dr. Ricardo</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Clínico geral pós-graduado em Medicina do Esporte. Especialista em hipertrofia, emagrecimento e reposição hormonal com segurança.
              </p>
              
              {/* Social Icons */}
              <div className="mb-8">
                <a 
                  href="https://www.instagram.com/drricardopneto/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Map */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Mapa do consultório</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};