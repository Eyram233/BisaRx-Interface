import React, { useEffect, useState } from "react";
import AIIcon from "../../../assets/ri_chat-smile-ai-fill.svg";
import UserAvatar from "../../../assets/Avatar.svg";


const MessageBubble = ({ message }) => {
  const [mounted, setMounted] = useState(false);
  const isUser = message.type === "user";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex gap-4 items-start ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI ICON (Left) */}
      {!isUser && (
        <div className="w-10 h-10 rounded-md bg-[var(--panel-700)] flex items-center justify-center shadow-soft-neu flex-shrink-0">
          <img src={AIIcon} alt="AI" className="w-6 h-6" />
        </div>
      )}

      {/* MESSAGE BUBBLE */}
      <div
        className={`transform transition-all duration-300 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div
          className={`px-5 py-4 rounded-2xl max-w-[85%] break-words leading-relaxed text-sm ${
            isUser
              ? "bg-gradient-to-br from-[#00b7ff] to-[#4fd0ff] text-black shadow-[0_10px_30px_rgba(79,208,255,0.15)]"
              : "glass-card border border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.92)]"
          }`}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
      </div>

      {/* USER AVATAR (Right) */}
      {isUser && (
        <div
          className="w-10 h-10 rounded-full bg-center bg-cover shadow-soft-neu flex-shrink-0"
          style={{ backgroundImage: `url(${UserAvatar})` }}
        ></div>
      )}
    </div>
  );
};

export default MessageBubble;