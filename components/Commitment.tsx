
import React from 'react';
import { VALUES_DATA } from '../constants';
import SectionTitle from './SectionTitle';

const Commitment: React.FC = () => {
  return (
    <section className="py-20 bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="NUESTRO COMPROMISO CONTIGO Y CON NUESTRA TIERRA" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES_DATA.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-brand-dark-green/30 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl text-brand-amber mb-4">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-brand-amber/90">{value.title}</h3>
              <p className="text-brand-light/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
