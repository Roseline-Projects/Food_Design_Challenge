import { useState, useEffect, useRef } from 'react';
import { LuBadgeHelp } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const messagesEndRef = useRef(null); // Ref to scroll to the latest message

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Simulate a slight delay for the bot's first message
            setTimeout(() => {
                setMessages([{ sender: 'bot', text: "Hi there, describe your question and I'll be glad to help! Hablo español y criollo haitiano, así que pregunta en cualquier idioma."}]);
            }, 500);
        }
        if(isOpen && messages.length == 2) {
            setTimeout(() => {
                const botResponse = { sender: 'bot', text: `¡No hay problema! Ingresos: La mayoría de los hogares deben tener un límite de ingresos brutos igual o inferior al 200 % del Nivel Federal de Pobreza (FPL).` };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1000); // Simulate bot thinking time
        }
        if(isOpen && messages.length == 4) {
            setTimeout(() => {
                const botResponse = { sender: 'bot', text: `¡Déjame explicarte! Podemos empezar con una deducción del 20%, según lo permitido por SNAP, para un nuevo total de $1200, y seguir a partir de ahí. ¿Cuántos miembros tiene su hogar? ¿Tiene algún dependiente, como un niño? ¿Cuánto gasta usted en gastos del hogar y servicios públicos?` };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000)
        }
        if(isOpen && messages.length == 6) {
            setTimeout(() => {
                const botResponse = { sender: 'bot', text: `Bien. Como su hogar es de 3 personas, también podemos deducir $204, lo que suma un total de $1096. La mitad de sus ingresos es de $548, que es menos que su alquiler de $800. Ahora podemos deducir el excedente, que suma un total de $844. El dinero gastado en cuidado infantil cuenta, así que ¿qué gastos tiene?` };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000)
        }
        console.log(messages.length)
    }, [isOpen, messages.length]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        if (inputValue.trim() === '') return; // Don't send empty messages

        const newUserMessage = { sender: 'user', text: inputValue.trim() };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        setInputValue(''); // Clear input
    };

    return (
        <>
            {/* Chatbot Button */}
            <button
                className={`
                    fixed bottom-5 right-5 bg-orange
                    rounded-full w-16 h-16 flex items-center justify-center
                    text-3xl cursor-pointer shadow-lg z-10
                    transition-all duration-200 ease-in-out
                    hover:translate-y-[-3px] hover:bg-medium-green  
                `}
                onClick={toggleChat}
            >
                <LuBadgeHelp />
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    className={`
                        fixed bottom-0 right-5 w-[350px] h-[500px]
                        bg-gray-50 rounded-lg shadow-xl flex flex-col z-[999]
                        overflow-hidden
                    `}
                >
                    <div className="bg-dark-green text-white p-4 flex justify-between items-center rounded-t-lg font-bold text-lg">
                        <span className="flex-grow">SNAP Agent</span>
                        <button
                            className="bg-transparent border-none text-white text-3xl cursor-pointer p-0 leading-none"
                            onClick={toggleChat}
                        >
                            &times; {/* HTML entity for 'x' */}
                        </button>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`
                                    p-3 rounded-2xl max-w-[80%] leading-snug break-words
                                    ${msg.sender === 'bot'
                                        ? 'bg-green-100 text-black self-start rounded-bl-sm'
                                        : 'bg-orange-100 text-black self-end rounded-br-sm'
                                    }
                                `}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="flex p-4 border-t border-gray-200 bg-white rounded-b-lg">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow border border-gray-300 rounded-full py-2 px-4 text-base outline-none
                                       focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                            aria-label="Type your message"
                        />
                        <button
                            type="submit"
                            className="bg-dark-green text-white border-none rounded-full
                                       w-10 h-10 flex items-center justify-center
                                       text-xl ml-3 cursor-pointer transition-colors duration-200
                                       hover:bg-green-900"
                            aria-label="Send message"
                        >
                            <LuChevronUp/>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;