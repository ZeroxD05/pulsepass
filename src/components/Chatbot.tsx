"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const QA_DATABASE = {
  "What exactly is PulsePass?": "PulsePass is a modern UI-based Battle Pass & Shop system for Minecraft Servers. No more editing complicated YAML text files!",
  "Does it work for Bedrock players?": "Yes, absolutely! It is fully compatible with Geyser and Floodgate.",
  "How do I install it?": "Simply drag & drop it into your plugins folder. If you need assistance, we offer a dedicated 'Setup Help' package!",
  "How do I make money with this?": "Players play for free, but they can buy the premium pass for extras (like 3D cosmetics). This means your initial €25 investment usually pays for itself after the very first few purchases."
};

const ALL_QUESTIONS = Object.keys(QA_DATABASE);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hey! Do you have any questions about PulsePass or need help choosing a plan?" }
  ]);
  const [availableQuestions, setAvailableQuestions] = useState<string[]>(ALL_QUESTIONS);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestionClick = (question: string) => {
    // Add user message
    const userMessageId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMessageId, sender: "user", text: question }]);
    
    // Remove the asked question from available options
    setAvailableQuestions(prev => prev.filter(q => q !== question));

    // Simulate typing delay
    setTimeout(() => {
      const botMessageId = (Date.now() + 1).toString();
      const answer = QA_DATABASE[question as keyof typeof QA_DATABASE];
      setMessages(prev => [...prev, { id: botMessageId, sender: "bot", text: answer }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-[#161b22] border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="bg-[#0d1117] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-white text-sm">PulsePass Support</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex-grow p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-[#0d1117]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === "user" ? "bg-blue-600 text-white rounded-br-sm" : "bg-[#161b22] text-gray-300 border border-gray-800 rounded-bl-sm"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Clickable Questions */}
            {availableQuestions.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-xs text-gray-500 mb-1 ml-1">Click a question:</span>
                {availableQuestions.map(q => (
                  <button 
                    key={q}
                    onClick={() => handleQuestionClick(q)}
                    className="text-left text-xs bg-[#161b22] border border-gray-800 hover:border-blue-500/50 hover:bg-[#161b22]/80 text-blue-400 p-2.5 rounded-lg transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-transform hover:scale-105 z-50 group"
      >
        {!isOpen ? (
          <>
            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-gray-950 rounded-full"></div>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        )}
      </button>
    </>
  );
}
