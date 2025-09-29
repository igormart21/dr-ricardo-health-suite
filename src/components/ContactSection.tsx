export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Contact Info */}
              <div>
                {/* Logo */}
                <div className="mb-6">
                  <img 
                    src="/images/Prancheta 1_2.png" 
                    alt="Dr. Ricardo Pereira - Medicina do Esporte" 
                    className="h-20 w-auto" 
                  />
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Clínico geral pós-graduado em Medicina do Esporte. Especialista em hipertrofia, emagrecimento e reposição hormonal com segurança.
                </p>
                
                {/* Social Icons */}
                <div className="mb-8">
                  <a 
                    href="https://www.instagram.com/drricardopneto/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-custom-blue text-white rounded-full hover:bg-custom-blue/90 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Map */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Localização</h3>
                <div className="relative h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.6000000000004!2d-51.20000000000000!3d-23.31000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44f000000001%3A0x123456789abcdef0!2sR.%20Paramaribo%2C%2072%20-%20Santa%20Rosa%2C%20Londrina%20-%20PR%2C%2086050-110!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Consultório"
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-4">
                  R. Paramaribo, 72 - Santa Rosa, Londrina - PR, 86050-110
                </p>
                <p className="text-gray-600">
                  Telefone: (43) 98427-5838
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};