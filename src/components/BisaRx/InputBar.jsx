import React from "react";
import {Mic} from "lucide-react";

const InputBar = ({ message, setMessage, handleSend }) => {
  return (
    <div className="w-full centered-layout mb-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 input-pill px-4 py-3 shadow-soft-neu rounded-full">

          {/* Add button */}
          <button className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--muted-400)]"
            >
              <path
                d="M12 5v14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Input */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message BisaRx..."
            className="flex-1 bg-transparent outline-none border-none placeholder-[rgba(255,255,255,0.24)] text-sm text-[rgba(255,255,255,0.85)]"
          />

          {/* Right icons */}
          <div className="flex items-center gap-3">
           
            {/* Mic */}
<button className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.18)] flex items-center justify-center">
  <Mic className="w-5 h-5 text-[var(--muted-400)]" />
</button>
           
            {/* Send */}
            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00b7ff] to-[#4fd0ff] flex items-center justify-center shadow-accent-glow"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InputBar;
