// src/hooks/useChatLogic.js
import { useState, useRef, useEffect } from 'react';

const useChatLogic = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickPrompts = [
    "I have this severe headache...",
    "I think I'm having a reaction to my medication _ what should I do right now?",
    "Can this medicine cause ...",
    "Can these symptoms be a side effect of a medication I'm taking?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI response based on keywords (logic preserved from original App.jsx)
  const simulateAIResponse = (userMessage) => {
    setIsTyping(true);

    setTimeout(() => {
      const responses = {
        headache: "I understand you're experiencing a severe headache. While I can provide general information, it's important to seek immediate medical attention if your headache is:\n\n• Sudden and severe (\"thunderclap\" headache)\n• Accompanied by fever, stiff neck, confusion, or vision changes\n• Following a head injury\n• Different from your usual headaches\n\nFor general headache relief, you can try:\n• Resting in a quiet, dark room\n• Applying a cold compress\n• Staying hydrated\n• Taking over-the-counter pain relievers like ibuprofen or acetaminophen (if not contraindicated)\n\nWhen should you see a doctor right away?",
        
        reaction: "If you suspect you're having a medication reaction, this requires immediate attention. Here's what you should do:\n\n**IMMEDIATE ACTIONS:**\n1. Stop taking the medication immediately\n2. Call your doctor or pharmacist right away\n3. If you have severe symptoms (difficulty breathing, swelling of face/throat, severe rash), call emergency services (911 or your local emergency number)\n\n**Common medication reaction symptoms:**\n• Skin rash or hives\n• Itching\n• Nausea or vomiting\n• Dizziness\n• Swelling\n\nWhat symptoms are you experiencing? This will help me provide more specific guidance.",
        
        side: "Yes, many medications can cause various side effects. To help you better, I need to know:\n\n1. What medication are you taking?\n2. What symptoms are you experiencing?\n3. When did you start noticing these symptoms?\n4. How long have you been taking the medication?\n\nCommon side effects vary by medication type, but can include:\n• Digestive issues (nausea, diarrhea, constipation)\n• Drowsiness or fatigue\n• Dizziness\n• Headaches\n• Changes in appetite\n\nPlease share more details so I can provide specific information about your medication.",
        
        default: "I'm BisaRx, your AI medical assistant. I'm here to help you with:\n\n• Understanding medication side effects\n• Identifying potential drug interactions\n• Providing general health information\n• Answering questions about symptoms\n• Guiding you on when to seek medical care\n\n**Important:** I provide information and guidance, but I'm not a replacement for professional medical advice. Always consult with a healthcare provider for diagnosis and treatment.\n\nHow can I assist you today?"
      };

      let response = responses.default;
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('headache')) {
        response = responses.headache;
      } else if (lowerMessage.includes('reaction')) {
        response = responses.reaction;
      } else if (lowerMessage.includes('side effect')) {
        response = responses.side;
      }

      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'ai',
        content: response,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (messageText = null) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    simulateAIResponse(textToSend);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  const handleNewChat = () => {
    setMessages([]);
    inputRef.current?.focus();
  };

  return {
    messages,
    inputValue,
    isTyping,
    isSidebarOpen,
    setIsSidebarOpen,
    inputRef,
    messagesEndRef,
    handleKeyPress,
    handleSendMessage,
    handleQuickPrompt,
    handleNewChat,
    setInputValue,
    quickPrompts,
  };
};

export default useChatLogic;
