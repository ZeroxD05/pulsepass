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
        <div className="fixed bottom-24 right-6 w-80 mc-panel flex flex-col overflow-hidden z-50 shadow-2xl">
          <div className="bg-[#3f3f3f] px-4 py-2 border-b-4 border-[#1e1e1e] flex justify-between items-center">
            <span className="text-white text-2xl mc-text-shadow">Server Chat</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#c6c6c6] hover:text-white mc-text-shadow font-bold text-2xl cursor-pointer"
            >
              X
            </button>
          </div>
          
          <div className="flex-grow p-4 h-80 overflow-y-auto flex flex-col gap-2 bg-[#1e1e1e] font-mono text-lg">
            {messages.map((msg) => (
              <div key={msg.id} className="text-[#c6c6c6] leading-snug">
                {msg.sender === "user" ? (
                  <span><span className="text-white">&lt;You&gt;</span> {msg.text}</span>
                ) : (
                  <span><span className="text-[#55ffff]">[Server]</span> <span className="text-[#55aa55]">PulsePass</span>: <span className="text-white">{msg.text}</span></span>
                )}
              </div>
            ))}
            
            {/* Clickable Questions */}
            {availableQuestions.length > 0 && (
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t-2 border-[#3f3f3f]/50">
                <span className="text-[#a0a0a0] mb-1">Select option:</span>
                {availableQuestions.map(q => (
                  <button 
                    key={q}
                    onClick={() => handleQuestionClick(q)}
                    className="text-left text-[#55ffff] hover:text-white hover:underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
                  >
                    &gt; {q}
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
        className="fixed bottom-6 right-6 w-16 h-16 mc-button p-0 flex items-center justify-center z-50 text-3xl pb-2 shadow-2xl"
      >
        {!isOpen ? "💬" : "X"}
      </button>
    </>
  );
}
