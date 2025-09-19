import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import Commitment from './components/Commitment';
import Experiences from './components/Experiences';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MascotWidget from './components/MascotWidget';
import AdminDashboard from './components/AdminDashboard';
import { EXPERIENCES_DATA } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="bg-brand-dark-green text-brand-light font-sans">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <AboutUs />
        <Commitment />
        <Experiences tours={EXPERIENCES_DATA} />
        <Sustainability />
        <Testimonials />
        <Contact tours={EXPERIENCES_DATA} />
      </main>
      <Footer />
      <MascotWidget />
      
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-24 right-8 z-40 bg-brand-amber text-brand-dark-green px-4 py-2 rounded-full shadow-lg hover:bg-brand-amber/80 transition-colors"
        aria-label="Abrir panel de administración"
      >
        <i className="fas fa-user-shield"></i>
      </button>

      {isAdminOpen && <AdminDashboard tours={EXPERIENCES_DATA} onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
};

export default App;