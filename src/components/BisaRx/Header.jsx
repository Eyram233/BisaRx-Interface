// src/components/BisaRx/Header.jsx
import React from 'react';
import { Menu, Search, Bell, Moon, Info, HelpCircle } from 'lucide-react';
import Avatar from "../../assets/Avatar.svg";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="py-4 px-6 border-b border-[rgba(255,255,255,0.02)] glass-card">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="sm:hidden p-2 bg-[transparent] rounded-md">
            <Menu className="w-6 h-6 text-[var(--muted)]" />
          </button>
          <h2 className="font-lora 
    font-semibold 
    text-[20px] 
    leading-normal 
    tracking-tight
    bg-gradient-to-b from-[#2FB8FF] to-[#9EECD9] 
    bg-clip-text 
    text-transparent">New Chat</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block relative">
            <input className="input-pill w-64 px-4 py-2 text-sm text-white placeholder-[var(--muted)]" placeholder="Search" />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-[var(--muted)]" />
          </div>

         <button
  className="
    hidden sm:flex items-center justify-center
    w-[18px] h-[18px]
  "
>
  <Bell className="w-4 h-4 text-[#9aa3ad]" />
</button>

    <button
  className="
    w-[18px] h-[18px] 
  "
>
  <Moon className="w-4 h-4 text-[#9aa3ad]" />
</button>
    
  <button
  className="
    w-[18px] h-[18px] 
  "
>
  <Info className="w-4 h-4 text-[#9aa3ad]" />
</button>

    <button
            className="
              hidden sm:flex items-center justify-center
              w-[41px] h-[41px] rounded-full flex-shrink-0
              bg-center bg-cover bg-no-repeat
            "
            style={{
              backgroundImage: `url(${Avatar})`,
            }}
          ></button>

      </div>
    </div>
    </header>
  );
};

export default Header;
