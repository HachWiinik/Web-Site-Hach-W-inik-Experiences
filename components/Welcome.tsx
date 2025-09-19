import React from 'react';
import SectionTitle from './SectionTitle';

const Welcome: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark-green overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="KÍIMAK 'OOLAL. BIENVENIDOS." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg leading-relaxed text-brand-light/90 animate-fade-in-up">
            <p>
              No somos solo un destino, somos un pueblo, los Hach Wíinik, el "Pueblo Verdadero". Le invitamos a caminar con nosotros, no como un turista, sino como un invitado. A escuchar las historias que nuestros abuelos nos contaron, a sentir la energía de la selva, nuestra madre, y a comprender por qué nuestra cultura y nuestra tierra son una misma.
            </p>
            <p className="mt-6 italic font-semibold text-brand-blue">
              Esta no es una simple visita, es un intercambio de almas.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
            <img 
              src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758235489/1000607110_bbnbwv.png" 
              alt="Selva Lacandona"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;