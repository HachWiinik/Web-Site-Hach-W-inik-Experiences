import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import TeamMemberCard from './TeamMemberCard';
// Corrected import path
import { TEAM_MEMBERS_DATA } from '../constants';

const AboutUs: React.FC = () => {
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
    <section id="nosotros" ref={sectionRef} className="py-20 bg-white dark:bg-brand-dark-green">
      <div className="container mx-auto px-4">
        <SectionTitle title="CONOCE A LOS GUARDIANES" />
        <p className={`text-center max-w-3xl mx-auto text-brand-dark-text/90 dark:text-brand-light/90 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Somos familias, contadores de historias, artesanos y protectores de esta tierra sagrada. No somos empleados de una corporación, somos la corporación de nuestra cultura. Al viajar con nosotros, te unes a nuestra familia extendida.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS_DATA.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
