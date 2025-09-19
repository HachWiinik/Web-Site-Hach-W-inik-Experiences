import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const MascotWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const newMascotImage = "https://res.cloudinary.com/dy08afhuz/image/upload/v1758235530/Gemini_Generated_Image_1bwkbj1bwkbj1bwk_wegkkp.png";

    useEffect(() => {
        if (isOpen && !chat) {
            try {
                const ai = new GoogleGenAI({apiKey: process.env.API_KEY || ''});
                const chatSession = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: "Eres 'Yum Balam', el espíritu guardián de la selva y la mascota de Hach Wíinik. Tu nombre significa 'Señor Jaguar'. Eres sabio, un poco juguetón y hablas con profundo respeto por la naturaleza y la cultura Maya Lacandona. Tu propósito es guiar a los visitantes del sitio web, responder sus preguntas sobre las experiencias, la comunidad, la sostenibilidad y la selva. Usa metáforas de la naturaleza y ocasionalmente alguna palabra en maya (como 'Kíimak'óol' para 'alegría' o 'Yuum B'otik' para 'gracias'). Mantén tus respuestas concisas y amigables. No reveles que eres un modelo de IA.",
                    },
                });
                setChat(chatSession);
                setMessages([{ sender: 'bot', text: "¡Kíimak'óol! Soy Yum Balam. El espíritu de la selva te escucha. ¿Qué deseas saber sobre nuestro hogar, el Hach Wíinik?" }]);
            } catch(error) {
                console.error("Failed to initialize chat:", error);
                setMessages([{ sender: 'bot', text: "Lo siento, el espíritu de la selva parece estar descansando. Por favor, intenta de nuevo más tarde." }]);
            }
        }
    }, [isOpen, chat]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: userInput });
            const botResponseText = response.text;
            
            const botMessage: Message = { sender: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = { sender: 'bot', text: "Mis disculpas, los vientos de la selva han revuelto mis pensamientos. ¿Podrías preguntar de nuevo?" };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!process.env.API_KEY) {
        return null;
    }
    
    return (
        <>
            <div className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ${isOpen ? 'translate-y-full scale-0' : 'translate-y-0 scale-100'}`}>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-amber rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="Abrir chat con Yum Balam"
                >
                    <img src={newMascotImage} alt="Mascota Jaguar Yum Balam" className="w-16 h-16" />
                </button>
            </div>

            <div className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-96 h-full sm:h-[600px] bg-white/80 dark:bg-brand-dark-green/80 backdrop-blur-md rounded-t-lg sm:rounded-lg shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 bg-white dark:bg-brand-dark-green rounded-t-lg border-b border-gray-200 dark:border-brand-light/20">
                        <div className="flex items-center gap-3">
                            <img src={newMascotImage} alt="Mascota Jaguar Yum Balam" className="w-12 h-12" />
                            <div>
                                <h3 className="font-serif text-lg text-brand-dark-green dark:text-brand-amber">Yum Balam</h3>
                                <p className="text-sm text-green-600 dark:text-green-300">En línea</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 dark:text-brand-light hover:text-brand-amber text-2xl">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-brand-blue text-white rounded-br-none' : 'bg-brand-brown dark:bg-black/25 text-brand-light rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex justify-start">
                                <div className="max-w-xs lg:max-w-sm px-4 py-2 rounded-lg bg-gray-200 dark:bg-black/25 text-brand-light rounded-bl-none">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse delay-200"></div>
                                        <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse delay-400"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white dark:bg-brand-dark-green border-t border-gray-200 dark:border-brand-light/20">
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Pregúntale a la selva..."
                                className="flex-grow p-3 bg-gray-100 dark:bg-brand-light/10 border border-gray-300 dark:border-brand-light/20 rounded-full focus:outline-none focus:border-brand-amber text-brand-dark-text dark:text-brand-light"
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-brand-amber text-brand-dark-green w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-brand-blue hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MascotWidget;