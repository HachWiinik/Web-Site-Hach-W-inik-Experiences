import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div 
      className="bg-brand-brown/50 rounded-lg overflow-hidden text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-brand-amber">{member.name}</h3>
        <p className="text-brand-blue font-semibold mb-3">{member.role}</p>
        <p className="text-brand-light/80 italic text-sm">"{member.quote}"</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;