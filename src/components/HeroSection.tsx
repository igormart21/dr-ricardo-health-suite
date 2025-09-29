import { CTAButton } from "@/components/ui/cta-button";
import { FloatingParticles } from "@/components/FloatingParticles";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5543984275838", "_blank");
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center py-12 md:py-20">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-luxury"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-gold-radial blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-blue-radial blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      {/* framing lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <FloatingParticles />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          {/* Glass Hero Card */}
          <div className="relative backdrop-blur-luxury bg-gradient-glass border border-white/20 rounded-3xl p-6 md:p-12 shadow-glass">
            {/* corner accents */}
            <span className="pointer-events-none absolute -top-px -left-px h-24 w-24 bg-gradient-gold opacity-20 blur-2xl rounded-br-full"></span>
            <span className="pointer-events-none absolute -bottom-px -right-px h-24 w-24 bg-gradient-blue opacity-20 blur-2xl rounded-tl-full"></span>
            <h1 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-secondary mb-4 md:mb-6 leading-tight">
              Transforme sua vida com{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">Medicina do Esporte</span>{" "}
              de forma segura e responsável
            </h1>
            
            <div className="w-16 md:w-24 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8"></div>
            
            <p className="font-rubik text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              Sou o <strong className="text-secondary">Dr. Ricardo Pereira</strong>, especialista em Medicina do Esporte. Ajudando você a alcançar seus objetivos de <span className="text-primary font-semibold">hipertrofia, emagrecimento e equilíbrio hormonal</span> com acompanhamento médico especializado e resultados reais.
            </p>

            <div className="animate-slide-up mt-6 md:mt-8">
              <CTAButton size="lg" onClick={handleCTA}>
                👉 Agendar consulta agora
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};