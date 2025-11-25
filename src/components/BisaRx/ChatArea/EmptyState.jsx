import React from "react";
import AIIcon from "../../../assets/ri_chat-smile-ai-fill.svg";

const logoPath = "src/assets/ri_chat-smile-ai-fill.svg";
const EmptyState = ({ quickPrompts = [], handleQuickPrompt = () => {} }) => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      {/* Centered icon + heading */}
      <div className="flex flex-col items-center gap-4 max-w-[720px] mx-auto mb-8">
        <div
          className="w-16 h-16 rounded-full bg-[var(--panel-700)] flex items-center justify-center shadow-soft-neu"
          aria-hidden
        >
          <img src={logoPath} alt="BisaRx" className="w-7 h-7 object-contain" />
        </div>

        <h1
          className="text-[28px] leading-tight text-[rgba(255,255,255,0.92)] font-lora"
          style={{ fontWeight: 600 }}
        >
          Hi, how can I help you today?
        </h1>
      </div>

      {/* Quick prompts grid (two columns on desktop, single on small screens) */}
      <div className="centered-layout mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleQuickPrompt(p)}
              className="group flex items-center gap-4 p-4 glass-card rounded-[18px] transition-all hover:scale-[1.01] focus:outline-none"
              style={{ minHeight: 56 }}
            >
              {/* icon circle */}
              <div className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.28)] flex items-center justify-center shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6)]">
                <img
                  src={logoPath}
                  alt=""
                  className="w-5 h-5 object-contain"
                  style={{ filter: "drop-shadow(0 6px 12px rgba(0,183,255,0.06))" }}
                />
              </div>

              {/* prompt text */}
              <div className="flex-1 text-left">
                <p className="text-sm font-poppins text-[rgba(255,255,255,0.7)] leading-snug">
                  {p}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>

  );
};

export default EmptyState;