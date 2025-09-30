export const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-custom-blue/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-custom-blue/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            Copyright © 2025 - Dr. Ricardo Pereira
          </p>
        </div>
      </div>
    </footer>
  );
};
