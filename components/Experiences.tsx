import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
// Corrected import path
import { Experience } from '../types';

interface ExperiencesProps {
  tours: Experience[];
}

const Experiences: React.FC<ExperiencesProps> = ({ tours }) => {
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

  return (
    <section id="experiencias" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="EXPERIENCIAS QUE TRANSFORMAN" />
        <p className={`text-center max-w-3xl mx-auto text-brand-dark-text/90 dark:text-brand-light/90 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Cada viaje es un diálogo con la selva y con uno mismo. Hemos diseñado estas experiencias no para que veas, sino para que sientas, aprendas y te conectes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((exp, index) => (
            <div 
              key={exp.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`bg-white dark:bg-brand-dark-green/30 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-brand-brown dark:text-brand-amber mb-2">{exp.title}</h3>
                <p className="text-gray-600 dark:text-brand-light/80 mb-4 h-24 overflow-hidden">{exp.description}</p>
                <div className="flex justify-between items-center text-brand-dark-green dark:text-brand-blue font-semibold border-t border-gray-200 dark:border-brand-light/20 pt-4">
                  <span><i className="fas fa-clock mr-2"></i>{exp.duration}</span>
                  <span><i className="fas fa-tag mr-2"></i>{exp.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
