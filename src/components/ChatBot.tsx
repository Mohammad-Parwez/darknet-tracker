import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronRight, HelpCircle, Shield, Globe, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
    id: number;
    type: 'bot' | 'user';
    text: string;
}

const FAQ_OPTIONS = [
    {
        id: 'what_is_it',
        label: 'What is this system?',
        answer: "This is a real-time monitor that scans the dark web and data breaches for your assets. We look for leaked emails, passwords, and sensitive company domain information.",
        icon: <Globe size={16} />
    },
    {
        id: 'how_to_monitor',
        label: 'How do I start monitoring?',
        answer: "Go to the 'Overview' tab, enter your domain or email, choose a frequency, and click 'Check Now'. We will start tracking it immediately for any new leaks.",
        icon: <Shield size={16} />
    },
    {
        id: 'incidents',
        label: 'Where can I see leaks?',
        answer: "All detected leaks appear in the 'Incidents' tab. You'll see which platform leaked the data, when it was found, and what level of risk it poses.",
        icon: <AlertCircle size={16} />
    },
    {
        id: 'security',
        label: 'Is my data secure?',
        answer: "Yes! We use enterprise-grade encryption for all monitoring tasks. We only look for matches in publicly available breach databases and dark web forums.",
        icon: <HelpCircle size={16} />
    }
];

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, type: 'bot', text: 'Hello! I am your Dark Web Security Assistant. How can I help you protect your digital assets today?' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleOptionClick = (option: typeof FAQ_OPTIONS[0]) => {
        const userMsg: Message = { id: Date.now(), type: 'user', text: option.label };
        const botMsg: Message = { id: Date.now() + 1, type: 'bot', text: option.answer };

        setMessages(prev => [...prev, userMsg]);
        setTimeout(() => {
            setMessages(prev => [...prev, botMsg]);
        }, 500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-[#112240] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        style={{ maxHeight: '500px' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <MessageSquare size={20} />
                                <span className="font-bold tracking-tight">Security Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0a192f]/50 min-h-[300px]">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.type === 'bot'
                                            ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options Strip */}
                        <div className="p-3 border-t border-slate-700 bg-[#112240]">
                            <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 ml-1 tracking-widest text-center">Quick Help Options</div>
                            <div className="flex flex-col gap-2">
                                {FAQ_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleOptionClick(opt)}
                                        className="flex items-center gap-2 w-full text-left p-2.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-all text-xs border border-transparent hover:border-slate-700 group"
                                    >
                                        <span className="text-pink-500 group-hover:scale-110 transition-transform">{opt.icon}</span>
                                        <span className="flex-1 font-medium">{opt.label}</span>
                                        <ChevronRight size={14} className="text-slate-600" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${isOpen
                        ? 'bg-slate-800 text-slate-200 rotate-90'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    } border border-white/10`}
            >
                {isOpen ? <X size={28} /> : <HelpCircle size={28} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
