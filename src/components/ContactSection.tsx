import { CTAButton } from "@/components/ui/cta-button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const ContactSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/drricardopneto/", "_blank");
  };

  return (
    <Section glow="mixed" background="luxury">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Localização e Contato" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Location Info */}
            <div className="backdrop-blur-luxury bg-gradient-glass border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-gold transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-secondary mb-4">
                  📍 Consultório em Londrina
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">📍</span>
                  <p className="font-rubik text-sm md:text-base text-muted-foreground">
                    R. Paramaribo, 72 - Santa Rosa<br />
                    Londrina - PR, 86050-110
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">📞</span>
                  <p className="font-rubik text-sm md:text-base text-muted-foreground">
                    <a href="tel:5543984275838" className="hover:text-primary transition-colors">
                      (43) 98427-5838
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="backdrop-blur-luxury bg-gradient-glass-blue border border-white/30 p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-blue">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-secondary mb-4">
                  Siga no Instagram
                </h3>
                <button
                  onClick={handleInstagram}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-rubik font-semibold hover:scale-105 transition-transform duration-300"
                >
                  @drricardopneto
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton size="lg" onClick={handleCTA}>
              👉 Agendar minha consulta
            </CTAButton>
          </div>
      </div>
    </Section>
  );
};