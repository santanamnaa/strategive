import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#packages' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding py-3 sm:py-4 px-2 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">S</span>
            </div>
            <span className={`text-lg sm:text-xl font-bold ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}>
              STRATEGIVE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                } text-base`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-base py-3 px-6">
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pb-4 border-t border-primary-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-700 font-medium hover:text-primary-600 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary w-full mt-4 text-base py-3">
                Konsultasi Gratis
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;