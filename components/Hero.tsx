import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dy08afhuz/video/upload/v1758236609/grok-video-61ceeb3a-8e89-4bec-8609-5658d8038280_normal_e5giw2.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark-green/70 z-10"></div>
      <div className="container mx-auto px-4 z-20 relative">
        <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 animate-fade-in-down">
          Hach Wíinik: Los Guardianes de la Selva
        </h1>
        <p className="text-xl md:text-3xl text-brand-light mb-8 animate-fade-in-up animation-delay-300">
          Siente el Corazón del Mundo Maya
        </p>
        <a
          href="#experiencias"
          className="bg-brand-amber text-brand-dark-green font-bold py-3 px-8 rounded-full text-lg hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber transition-all duration-300 animate-fade-in-up animation-delay-500"
        >
          Descubre Nuestras Experiencias
        </a>
      </div>
    </section>
  );
};

export default Hero;