
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

// FIX: Added HeaderProps interface to define component props.
interface HeaderProps {
    theme: string;
    onToggleTheme: () => void;
    cartItemCount: number;
    onCartClick: () => void;
}

// FIX: Modified component to accept and use props from App.tsx.
const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, cartItemCount, onCartClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // FIX: Removed local state for dark mode, now derived from props.
    const isDarkMode = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FIX: Removed useEffect that managed dark mode class, as this is now handled in App.tsx.

    // FIX: Removed local theme toggle function, using onToggleTheme from props instead.
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Nosotros' },
        { href: '#experiencias', label: 'Experiencias' },
        { href: '#sostenibilidad', label: 'Sostenibilidad' },
        { href: '#testimonios', label: 'Testimonios' },
        { href: '#tienda', label: 'Tienda' },
        { href: '#contacto', label: 'Contacto' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-brand-dark-green/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                <a href="#inicio" className="flex items-center gap-2">
                    <Logo />
                    <span className={`font-serif text-2xl font-bold transition-colors ${isScrolled ? 'text-brand-dark-green dark:text-brand-amber' : 'text-white'}`}>
                        Hach Wíinik
                    </span>
                </a>
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className={`font-semibold transition-colors ${isScrolled ? 'text-brand-dark-text hover:text-brand-amber dark:text-brand-light dark:hover:text-brand-amber' : 'text-white hover:text-brand-amber'}`}>
                            {link.label}
                        </a>
                    ))}
                    <button onClick={onToggleTheme} className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isScrolled ? 'text-brand-dark-text dark:text-brand-light' : 'text-white'}`} aria-label="Toggle dark mode">
                        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    {/* FIX: Added shopping cart button */}
                    <button onClick={onCartClick} className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isScrolled ? 'text-brand-dark-text dark:text-brand-light' : 'text-white'}`} aria-label="Abrir carrito">
                        <i className="fas fa-shopping-cart"></i>
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-amber text-brand-dark-green text-xs font-bold">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </nav>
                <div className="lg:hidden flex items-center">
                     <button onClick={onToggleTheme} className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors mr-2 ${isScrolled ? 'text-brand-dark-text dark:text-brand-light' : 'text-white'}`} aria-label="Toggle dark mode">
                        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    {/* FIX: Added shopping cart button for mobile view */}
                    <button onClick={onCartClick} className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors mr-2 ${isScrolled ? 'text-brand-dark-text dark:text-brand-light' : 'text-white'}`} aria-label="Abrir carrito">
                        <i className="fas fa-shopping-cart"></i>
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-amber text-brand-dark-green text-xs font-bold">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    <button onClick={toggleMenu} className={`text-2xl transition-colors ${isScrolled ? 'text-brand-dark-green dark:text-brand-amber' : 'text-white'}`} aria-label="Abrir menú">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-brand-dark-green/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-end p-6">
                    <button onClick={toggleMenu} className="text-white text-3xl" aria-label="Cerrar menú">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-20 gap-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={toggleMenu} className="text-white text-3xl font-serif hover:text-brand-amber transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;