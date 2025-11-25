// src/components/BisaRx/ChatArea/QuickPrompts.jsx
// (Optional component if you want prompts separate from EmptyState)
import React from 'react';
import { Sparkles } from 'lucide-react';
import AIIcon from "../../../assets/ri_chat-smile-ai-fill.svg";

const QuickPrompts = ({ quickPrompts, handleQuickPrompt }) => (
  <div className="grid grid-cols-2 gap-4">
    {quickPrompts.map((prompt, index) => (
      <button
        key={index}
        onClick={() => handleQuickPrompt(prompt)}
        className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all text-left group"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
          <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{prompt}</p>
        </div>
      </button>
    ))}
  </div>
);

export default QuickPrompts;
