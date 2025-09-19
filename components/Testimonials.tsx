import React from 'react';
import SectionTitle from './SectionTitle';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="VOCES DE LA SELVA" />
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-dark-green/30 p-8 rounded-lg shadow-lg flex flex-col"
            >
              <div className="text-5xl text-brand-amber mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-brand-light/90 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-brand-amber text-lg">{testimonial.author}</p>
                <p className="text-brand-blue">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
