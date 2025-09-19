import React, { useState, useRef, useEffect } from 'react';
// Corrected import path
import { VALUES_DATA } from '../constants';
import SectionTitle from './SectionTitle';

const Commitment: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const cardDelays = ['delay-0', 'delay-150', 'delay-300', 'delay-500'];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 dark:bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="NUESTRO COMPROMISO CONTIGO Y CON NUESTRA TIERRA" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES_DATA.map((value, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-white dark:bg-brand-dark-green/30 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-500 ease-out ${cardDelays[index]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-5xl text-brand-amber mb-4">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-brand-brown dark:text-brand-amber/90">{value.title}</h3>
              <p className="text-gray-600 dark:text-brand-light/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
