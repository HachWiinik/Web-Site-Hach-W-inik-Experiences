import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark-green dark:text-brand-amber tracking-wide">
        {title}
      </h2>
      <div className="mt-3 h-1 w-20 bg-brand-amber mx-auto"></div>
    </div>
  );
};

export default SectionTitle;