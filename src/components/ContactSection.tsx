import { CTAButton } from "@/components/ui/cta-button";

export const ContactSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/images/Prancheta 1_4.png"
                alt="Dr. Ricardo Pereira"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-lg text-gray-600">
              Clínico geral pós-graduado em Medicina do Esporte. Especialista em hipertrofia, emagrecimento e reposição hormonal com segurança.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">R. Paramaribo, 72 - Santa Rosa, Londrina - PR</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-gray-700">(43) 98427-5838</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                </svg>
                <a href="https://www.instagram.com/drricardopneto/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  @drricardopneto
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.123456789!2d-51.123456789!3d-23.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Paramaribo%2C%2072%20-%20Santa%20Rosa%2C%20Londrina%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Agende uma consulta</h3>
            <CTAButton 
              size="lg" 
              onClick={handleCTA}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              CLIQUE AQUI
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};