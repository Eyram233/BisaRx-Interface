import React from "react";
import {
  House,
  Plus,
  Archive,
  Settings,
  LogOut,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import Logo from "../../assets/ri_chat-smile-ai-fill.svg";

const Sidebar = ({ active = "New Chat", onNewChat = () => {} }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const menu = [
    { id: "home", label: "Home", icon: House },
    { id: "new", label: "New Chat", icon: Plus },
    { id: "gallery", label: "Gallery", icon: Archive },
  ];

  const history = [
    "New Chat",
    "Pharmacies in Kumasi",
    "Fever Symptoms",
    "Medication Allergies",
    "Side Effects of Ibuprofen",
  ];

  return (
    <aside
      className={`hidden sm:flex flex-col min-h-screen
      bg-gradient-to-b from-[#0e1113] via-[#111315] to-[#050506]
      border-r border-[rgba(255,255,255,0.02)]
      p-4 gap-6
      transition-[width] duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Top Section */}
      <div className="flex items-center relative">
        {/* Logo always visible */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src={Logo}
            alt="BisaRx"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text fades + slides */}
        <span
          className={`
            ml-3 text-sm font-semibold text-[#2FB8FF]
            whitespace-nowrap overflow-hidden
            transition-all duration-500 ease-in-out
            ${
              collapsed
                ? "opacity-0 translate-x-[-10px] w-0"
                : "opacity-100 translate-x-0 w-auto"
            }
          `}
        >
          BisaRx
        </span>

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-0 w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 transition"
        >
          <ChevronLeft
            className={`w-4 h-4 text-[#9aa3ad] transition-transform duration-500 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Main Menu */}
      <nav className="flex flex-col gap-3 text-sm px-1">
        <div
          className={`
            text-xs font-semibold text-[var(--muted-400)] mb-1
            transition-all duration-500
            ${
              collapsed
                ? "opacity-0 translate-x-[-10px]"
                : "opacity-100 translate-x-0"
            }
          `}
        >
          MENU
        </div>

        {menu.map((m) => {
          const Icon = m.icon;
          const isActive = m.id === "new";

          return (
            <button
              key={m.id}
              onClick={() => m.id === "new" && onNewChat()}
              className={`
                w-full flex items-center px-3 py-2 rounded-lg
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#00b7ff]/10 to-[#4fd0ff]/05 border-l-4 border-[#00b7ff]"
                    : "hover:bg-[rgba(255,255,255,0.03)]"
                }
              `}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? "text-[#00b7ff]" : "text-[var(--muted-400)]"
                }`}
              />

              {/* Label */}
              <span
                className={`
                  ml-3 text-sm whitespace-nowrap overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${
                    collapsed
                      ? "opacity-0 translate-x-[-10px] w-0"
                      : "opacity-100 translate-x-0 w-auto"
                  }
                `}
              >
                {m.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* History */}
      <div className="flex-1 overflow-hidden">
        <div
          className={`
            text-xs font-semibold text-[var(--muted-400)] px-1 mb-2
            transition-all duration-500
            ${
              collapsed
                ? "opacity-0 translate-x-[-10px]"
                : "opacity-100 translate-x-0"
            }
          `}
        >
          CHAT HISTORY
        </div>

        <div className="flex flex-col gap-2 px-1">
          {history.map((h, i) => {
            const isSelected = h === active;
            return (
              <div key={i} className="relative">
                <button
                  className={`
                    w-full text-left px-3 py-2 rounded-md flex items-center
                    transition-all duration-300
                    ${
                      isSelected
                        ? "bg-[rgba(79,208,255,0.06)] text-white"
                        : "text-[var(--muted-400)] hover:bg-[rgba(255,255,255,0.03)]"
                    }
                  `}
                >
                  <span
                    className={`
                      truncate text-sm whitespace-nowrap overflow-hidden
                      transition-all duration-500
                      ${
                        collapsed
                          ? "opacity-0 translate-x-[-10px] w-0"
                          : "opacity-100 translate-x-0 w-auto"
                      }
                    `}
                  >
                    {h}
                  </span>
                </button>

                {/* Selected indicator */}
                {isSelected && !collapsed && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 rounded-r-full bg-[#00b7ff] shadow-[0_0_12px_rgba(0,183,255,0.5)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(255,255,255,0.03)] mt-3 pt-3" />

      {/* Preferences */}
      <div className="px-1">
        <div
          className={`
            text-xs font-semibold text-[var(--muted-400)] mb-3
            transition-all duration-500
            ${
              collapsed
                ? "opacity-0 translate-x-[-10px]"
                : "opacity-100 translate-x-0"
            }
          `}
        >
          Preferences
        </div>

        <div className="flex flex-col gap-3">
          {/* Settings */}
          <button
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg
            bg-gradient-to-r from-[#00b7ff]/8 to-[#4fd0ff]/06
            border border-[rgba(79,208,255,0.06)]
            text-sm text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4" />
              {!collapsed && <span>Settings</span>}
            </div>
            {!collapsed && (
              <div className="text-xs text-[var(--muted-400)]">›</div>
            )}
          </button>

          {/* Upgrade */}
          <button className="w-full flex items-center px-3 py-2 rounded-lg bg-[#0b0c0d] border border-[rgba(255,255,255,0.02)] text-sm text-[var(--muted-400)]">
            <Sparkles className="w-4 h-4 text-[rgba(255,255,255,0.12)]" />
            {!collapsed && <span>Upgrade Plan</span>}
          </button>

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-[rgba(255,0,0,0.05)]">
            <LogOut className="w-4 h-4 text-red-500" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
