import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Sustainability: React.FC = () => {
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
    <section id="sostenibilidad" ref={sectionRef} className="py-20 bg-white dark:bg-brand-dark-green">
      <div className="container mx-auto px-4">
        <SectionTitle title="CUIDANDO A NUESTRA MADRE SELVA" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758235399/1000588627_cup22b.jpg" 
              alt="Río prístino en la Selva Lacandona"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className={`text-lg leading-relaxed text-brand-dark-text/90 dark:text-brand-light/90 space-y-4 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              Para los Hach Wíinik, la sostenibilidad no es una estrategia de marketing; es nuestra única forma de vida. Es el pacto que hicieron nuestros ancestros con esta tierra.
            </p>
            <ul className="list-disc list-inside space-y-2 text-brand-dark-green dark:text-brand-blue">
              <li><span className="text-brand-dark-text/90 dark:text-brand-light/90">Turismo de bajo impacto para minimizar nuestra huella.</span></li>
              <li><span className="text-brand-dark-text/90 dark:text-brand-light/90">Programas de reforestación y protección de fauna endémica.</span></li>
              <li><span className="text-brand-dark-text/90 dark:text-brand-light/90">Uso de recursos locales y apoyo a productores de la comunidad.</span></li>
              <li><span className="text-brand-dark-text/90 dark:text-brand-light/90">Educación ambiental para visitantes y las nuevas generaciones Lacandonas.</span></li>
            </ul>
            <p>
              Tu visita no solo te enriquece a ti, sino que contribuye directamente a la preservación del último gran pulmón de México.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;