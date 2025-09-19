import React from 'react';
import SectionTitle from './SectionTitle';

const Sustainability: React.FC = () => {
  return (
    <section id="sostenibilidad" className="py-20 bg-brand-dark-green">
      <div className="container mx-auto px-4">
        <SectionTitle title="CUIDANDO A NUESTRA MADRE SELVA" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
            <img 
              src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758235488/1000607111_p9v0by.png" 
              alt="Conservación de la Selva Lacandona"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-lg leading-relaxed text-brand-light/90 space-y-4 animate-fade-in-up">
            <p>
              Para los Hach Wíinik, la sostenibilidad no es una estrategia de marketing; es nuestra única forma de vida. Es el pacto que hicieron nuestros ancestros con esta tierra.
            </p>
            <ul className="list-disc list-inside space-y-2 text-brand-blue">
              <li><span className="text-brand-light/90">Turismo de bajo impacto para minimizar nuestra huella.</span></li>
              <li><span className="text-brand-light/90">Programas de reforestación y protección de fauna endémica.</span></li>
              <li><span className="text-brand-light/90">Uso de recursos locales y apoyo a productores de la comunidad.</span></li>
              <li><span className="text-brand-light/90">Educación ambiental para visitantes y las nuevas generaciones Lacandonas.</span></li>
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