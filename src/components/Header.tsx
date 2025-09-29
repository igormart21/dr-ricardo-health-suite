import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Quem Sou' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/images/Prancheta 1_4.png" 
              alt="Dr. Ricardo Pereira - Medicina do Esporte" 
              className="h-8 sm:h-10 md:h-12 w-auto" 
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-white/50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-white/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/30 bg-white/90 backdrop-blur-lg">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-white/50 transition-colors duration-200 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};


