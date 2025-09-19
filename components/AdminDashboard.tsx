import React from 'react';
import { Experience } from '../types';

interface AdminDashboardProps {
  tours: Experience[];
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ tours, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
      onClick={onClose}
    >
      <div 
        className="bg-white text-brand-dark-text p-6 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="font-serif text-2xl font-bold text-brand-dark-green">CRM Lite - Hach Wíinik</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-600 text-3xl" aria-label="Cerrar panel">
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tours.map((tour) => (
            <div key={tour.id} className="border border-gray-200 rounded-md p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
              <img src={tour.image} alt={tour.title} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="font-bold text-brand-dark-green">{tour.title}</h3>
                <p className="text-brand-blue font-semibold">{tour.price}</p>
                <p className="text-sm text-gray-600 mt-1">{tour.description}</p>
                <button className="bg-brand-dark-green text-white px-3 py-1 mt-2 rounded-md hover:bg-brand-dark-green/90 text-sm">
                  Ver Reservas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;