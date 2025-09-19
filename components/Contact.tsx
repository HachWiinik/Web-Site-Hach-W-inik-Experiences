import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Experience } from '../types';

interface ContactProps {
    tours: Experience[];
}

const ContactInfoItem: React.FC<{ icon: string, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="text-brand-amber text-2xl mt-1"><i className={`fas ${icon}`}></i></div>
        <div>
            <strong className="block text-brand-light">{title}</strong>
            <div className="text-brand-light/80">{children}</div>
        </div>
    </div>
);

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC<ContactProps> = ({ tours }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setResponseMessage('');

        // --- SIMULATED CRM INTEGRATION ---
        // To provide a functional prototype experience without a real backend,
        // we simulate a network request with a 1.5 second delay.
        setTimeout(() => {
            try {
                console.log('Simulated submission data:', formData);
                
                // Mock a successful response
                setStatus('success');
                setResponseMessage('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
                setFormData({
                    name: '', email: '', experience: '', message: ''
                });

            } catch (error) {
                // This block is for completeness if the simulation was more complex
                console.error('Submission failed:', error);
                setStatus('error');
                setResponseMessage('Lo sentimos, hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por email.');
            }
        }, 1500);
    };

    return (
        <section id="contacto" className="py-20 bg-brand-brown">
            <div className="container mx-auto px-4">
                <SectionTitle title="¿LISTO PARA ESCUCHAR LA LLAMADA DE LA SELVA?" />
                <p className="text-center max-w-3xl mx-auto text-brand-light/90 mb-12">
                    Contáctanos para diseñar tu viaje o para resolver cualquier duda. Estamos aquí para ayudarte a planificar una experiencia inolvidable.
                </p>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-brand-dark-green/30 rounded-lg p-8 space-y-6">
                        <h3 className="font-serif text-3xl text-brand-amber">Información de Contacto</h3>
                        <ContactInfoItem icon="fa-map-marker-alt" title="Oficinas Administrativas">
                            Calle 28 Norte #121, Playa del Carmen, Q.R.
                        </ContactInfoItem>
                        <ContactInfoItem icon="fa-map-pin" title="Centros Operativos">
                            • Comunidad Lacanjá Chansayab, Chiapas<br />
                            • Comunidad Nahá, Selva Lacandona
                        </ContactInfoItem>
                        <ContactInfoItem icon="fa-phone" title="Teléfono / WhatsApp">
                            +52 984 146 4040
                        </ContactInfoItem>
                         <ContactInfoItem icon="fa-envelope" title="Email">
                            reservas@hachwiinik.com
                        </ContactInfoItem>
                    </div>

                    <div className="bg-brand-dark-green/30 rounded-lg p-8">
                        <h3 className="font-serif text-3xl text-brand-amber mb-6">Reserva tu Experiencia</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-semibold">Nombre Completo</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-brand-light/10 border border-brand-light/20 rounded-md focus:outline-none focus:border-brand-amber" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-semibold">Correo Electrónico</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-brand-light/10 border border-brand-light/20 rounded-md focus:outline-none focus:border-brand-amber" />
                            </div>
                             <div>
                                <label htmlFor="experience" className="block mb-1 font-semibold">Experiencia de Interés</label>
                                <select id="experience" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-3 bg-brand-light/10 border border-brand-light/20 rounded-md focus:outline-none focus:border-brand-amber">
                                    <option value="">Selecciona una experiencia</option>
                                    {tours.map(tour => (
                                        <option key={tour.id} value={tour.title}>{tour.title}</option>
                                    ))}
                                    <option value="Personalizada">Personalizada</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-semibold">Mensaje</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full p-3 bg-brand-light/10 border border-brand-light/20 rounded-md focus:outline-none focus:border-brand-amber"></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full bg-brand-amber text-brand-dark-green font-bold py-3 px-8 rounded-full text-lg hover:bg-transparent hover:text-brand-amber border-2 border-brand-amber transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Enviando...' : 'Enviar a la Selva →'}
                            </button>
                            {responseMessage && (
                                <p className={`mt-4 text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {responseMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;