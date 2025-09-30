export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-custom-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
          </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div className="animate-fadeInLeft">
              {/* Logo */}
              <div className="mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src="/images/Prancheta 1_2.png" 
                    alt="Dr. Ricardo Pereira - Medicina do Esporte" 
                    className="h-24 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
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
                  className="inline-flex items-center justify-center w-12 h-12 bg-custom-blue text-white rounded-full hover:bg-gradient-to-r hover:from-custom-blue hover:to-blue-600 shadow-lg hover:shadow-custom-blue/25 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="animate-fadeInRight">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Localização</h3>
                <div className="relative h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
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