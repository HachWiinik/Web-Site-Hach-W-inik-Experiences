import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Welcome: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-brand-dark-green overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="KÍIMAK 'OOLAL. BIENVENIDOS." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-lg leading-relaxed text-brand-dark-text/90 dark:text-brand-light/90 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              No somos solo un destino, somos un pueblo, los Hach Wíinik, el "Pueblo Verdadero". Le invitamos a caminar con nosotros, no como un turista, sino como un invitado. A escuchar las historias que nuestros abuelos nos contaron, a sentir la energía de la selva, nuestra madre, y a comprender por qué nuestra cultura y nuestra tierra son una misma.
            </p>
            <p className="mt-6 italic font-semibold text-brand-dark-green dark:text-brand-blue">
              Esta no es una simple visita, es un intercambio de almas.
            </p>
          </div>
          <div className={`rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758235394/1000587104_d6ptyt.jpg" 
              alt="Sendero en la Selva Lacandona hacia ruinas mayas"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;