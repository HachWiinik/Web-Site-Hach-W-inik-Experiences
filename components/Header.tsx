import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#experiencias', text: 'Experiencias' },
    { href: '#sostenibilidad', text: 'Sostenibilidad' },
    { href: '#testimonios', text: 'Testimonios' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark-green/95 shadow-lg backdrop-blur-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <Logo />
          <span className="font-serif text-2xl text-brand-amber">Hach Wíinik</span>
        </a>

        <div className="hidden lg:flex items-center">
          <nav>
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-light font-semibold hover:text-brand-amber transition-colors relative group"
                  >
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-amber group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          className="lg:hidden text-brand-light text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir o cerrar menú de navegación"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-brand-dark-green transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
            <nav>
                <ul className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                    <li key={link.href}>
                    <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-brand-light text-2xl font-semibold hover:text-brand-amber transition-colors"
                    >
                        {link.text}
                    </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;