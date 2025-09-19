import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-serif text-2xl text-brand-amber">Hach Wíinik</span>
            </div>
            <p className="text-brand-light/70">
              Turismo Comunitario para la preservación cultural y ambiental de la Selva Lacandona.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-brand-amber text-brand-dark-green rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-brand-amber text-brand-dark-green rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-brand-amber text-brand-dark-green rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-brand-amber text-brand-dark-green rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-brand-amber text-brand-dark-green rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label="Bio Libre"><i className="fas fa-link"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-brand-amber mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-brand-light/70 hover:text-brand-amber">Inicio</a></li>
              <li><a href="#nosotros" className="text-brand-light/70 hover:text-brand-amber">Nosotros</a></li>
              <li><a href="#experiencias" className="text-brand-light/70 hover:text-brand-amber">Experiencias</a></li>
              <li><a href="#sostenibilidad" className="text-brand-light/70 hover:text-brand-amber">Sostenibilidad</a></li>
              <li><a href="#testimonios" className="text-brand-light/70 hover:text-brand-amber">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-brand-amber mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-light/70 hover:text-brand-amber">Términos y Condiciones</a></li>
              <li><a href="#" className="text-brand-light/70 hover:text-brand-amber">Política de Privacidad</a></li>
              <li><a href="#" className="text-brand-light/70 hover:text-brand-amber">Política de Cancelación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-brand-amber mb-4">Contacto</h4>
            <ul className="space-y-2 text-brand-light/70">
              <li className="flex gap-2 items-start"><i className="fas fa-map-marker-alt mt-1"></i><span>Calle 28 Nte #121, Playa del Carmen</span></li>
              <li className="flex gap-2 items-start"><i className="fas fa-phone mt-1"></i><span>+52 984 146 4040</span></li>
              <li className="flex gap-2 items-start"><i className="fas fa-envelope mt-1"></i><span>info@hachwiinik.com</span></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-brand-light/20 pt-6 text-center text-sm text-brand-light/60">
          <p>© 2024 Cooperativa Hach Wíinik | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
