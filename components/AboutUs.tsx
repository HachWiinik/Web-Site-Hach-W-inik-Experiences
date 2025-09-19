import React from 'react';
import SectionTitle from './SectionTitle';
import TeamMemberCard from './TeamMemberCard';
import { TEAM_MEMBERS_DATA } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-brand-dark-green">
      <div className="container mx-auto px-4">
        <SectionTitle title="CONOCE A LOS GUARDIANES" />
        <p className="text-center max-w-3xl mx-auto text-brand-light/90 mb-12">
          Somos familias, contadores de historias, artesanos y protectores de esta tierra sagrada. No somos empleados de una corporación, somos la corporación de nuestra cultura. Al viajar con nosotros, te unes a nuestra familia extendida.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS_DATA.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;