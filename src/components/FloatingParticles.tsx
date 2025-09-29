export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating golden particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-gold rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-gradient-gold rounded-full opacity-40 animate-float-delay-1"></div>
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-gradient-gold rounded-full opacity-30 animate-float-delay-2"></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-gradient-gold rounded-full opacity-50 animate-float-delay-3"></div>
      <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-gradient-gold rounded-full opacity-35 animate-float"></div>
      
      {/* Floating blue particles */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-gradient-blue rounded-full opacity-40 animate-float-delay-1"></div>
      <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-gradient-blue rounded-full opacity-30 animate-float-delay-2"></div>
      <div className="absolute top-1/2 right-12 w-2 h-2 bg-gradient-blue rounded-full opacity-25 animate-float-delay-3"></div>
      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.06))]"></div>
    </div>
  );
};