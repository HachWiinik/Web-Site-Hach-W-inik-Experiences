import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
// Corrected import path
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
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
    <section id="testimonios" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="VOCES DE LA SELVA" />
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`bg-white dark:bg-brand-dark-green/30 p-8 rounded-lg shadow-lg flex flex-col transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-5xl text-brand-amber mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-600 dark:text-brand-light/90 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-brand-brown dark:text-brand-amber text-lg">{testimonial.author}</p>
                <p className="text-brand-dark-green dark:text-brand-blue">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
