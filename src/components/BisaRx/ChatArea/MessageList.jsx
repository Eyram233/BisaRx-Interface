import React from "react";
import MessageBubble from "./MessageBubble";
import AIIcon from "../../../assets/ri_chat-smile-ai-fill.svg";



const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-4 mt-2">
      {/* AI ICON */}
      <div className="w-10 h-10 rounded-md bg-[var(--panel-700)] flex items-center justify-center shadow-soft-neu flex-shrink-0">
        <img src={AIIcon} className="w-6 h-6 opacity-80" />
      </div>

      {/* Loading bubble */}
      <div className="glass-card px-5 py-3 rounded-2xl border border-[rgba(255,255,255,0.06)] flex items-center">
        <div className="flex gap-2">
          <div className="typing-dot" style={{ animationDelay: "0ms" }}></div>
          <div className="typing-dot" style={{ animationDelay: "150ms" }}></div>
          <div className="typing-dot" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>

      <style>{`
        .typing-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-400, #4fd0ff);
          opacity: 0.45;
          animation: typingBounce 1s infinite ease-in-out;
        }

        @keyframes typingBounce {
          0% { transform: translateY(0); opacity: .35 }
          30% { transform: translateY(-6px); opacity: 1 }
          60% { transform: translateY(0); opacity: .5 }
          100% { transform: translateY(0); opacity: .35 }
        }
      `}</style>
    </div>
  );
};

/**
 * MessageList — renders full chat history
 */

const MessageList = ({ messages = [], isTyping = false, messagesEndRef }) => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;