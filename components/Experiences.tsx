import React from 'react';
import SectionTitle from './SectionTitle';
import { Experience } from '../types';

interface ExperiencesProps {
  tours: Experience[];
}

const Experiences: React.FC<ExperiencesProps> = ({ tours }) => {
  return (
    <section id="experiencias" className="py-20 bg-brand-brown">
      <div className="container mx-auto px-4">
        <SectionTitle title="EXPERIENCIAS QUE TRANSFORMAN" />
        <p className="text-center max-w-3xl mx-auto text-brand-light/90 mb-12">
          Cada viaje es un diálogo con la selva y con uno mismo. Hemos diseñado estas experiencias no para que veas, sino para que sientas, aprendas y te conectes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((exp) => (
            <div 
              key={exp.id}
              className="bg-brand-dark-green/30 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-brand-amber mb-2">{exp.title}</h3>
                <p className="text-brand-light/80 mb-4 h-24 overflow-hidden">{exp.description}</p>
                <div className="flex justify-between items-center text-brand-blue font-semibold border-t border-brand-light/20 pt-4">
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