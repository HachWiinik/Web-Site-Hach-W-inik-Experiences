import React from 'react';
// Corrected import path
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  isVisible: boolean;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isVisible, index }) => {
  const delay = 150 * index;

  return (
    <div 
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-gray-100 dark:bg-brand-brown/50 rounded-lg overflow-hidden text-center shadow-lg transform hover:-translate-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-brand-brown dark:text-brand-amber">{member.name}</h3>
        <p className="text-brand-dark-green dark:text-brand-blue font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-brand-light/80 italic text-sm">"{member.quote}"</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
