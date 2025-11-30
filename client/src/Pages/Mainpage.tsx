import React, { useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "recent", label: "Recent", icon: "clock" },
  { id: "public", label: "Public", icon: "users" },
  { id: "shared", label: "Shared", icon: "user-group" },
  { id: "trash", label: "Trash", icon: "trash" },
];

// Reusable Button Component for the Header to ensure consistency
const HeaderButton = ({ icon }: { icon: string }) => (
  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8cc63f]/70 text-black transition hover:bg-[#8cc63f]/90">
    <Icon name={icon} className="h-5 w-5 stroke-[2]" />
  </button>
);

const Icon = ({ name, className = "" }: { name: string; className?: string }) => {
  switch (name) {
    case "home":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "user-group":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trash":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="3 6 5 6 21 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 6v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud-upload":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 16l-4-4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12v9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16l-4-4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="19" y1="12" x2="5" y2="12" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="12 19 5 12 12 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "user":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const MainPage: React.FC = () => {
  const [active, setActive] = useState<string>("home");

  // Sidebar button logic
  const navButtonClass = (id: string) =>
    `flex items-center gap-3 w-full text-left px-4 py-2 rounded-full transition-all duration-200 group ${
      active === id
        ? "bg-[#8cc63f]/70 text-black font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="flex h-screen w-full bg-[#0f0f0f] text-white font-sans">
      {/* Left Navigation Sidebar */}
      <aside className="flex w-64 flex-col border-r border-[#222] ">
        {/* Logo Area */}
        <div className="px-6 py-4 bg-[#0b0b0b] border-b border-[#222]">
          <h1 className="text-4xl font-black text-white">DKMS</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 space-y-1 px-3 py-4 bg-[#121212]">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={navButtonClass(n.id)}
            >
              <span className="flex h-6 w-6 items-center justify-center">
                <Icon
                  name={n.icon}
                  className={`h-5 w-5 ${active !== n.id ? "stroke-[1.5]" : "stroke-2"}`}
                />
              </span>
              <span className="text-[15px]">{n.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Layout Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex my-2 items-center justify-between border-b border-[#222] px-6 py-3">
          
          {/* Center Search/Title Bar - Matches the long green bar in screenshot */}
          <div className="flex flex-1 items-center">
            <div className="flex h-10 w-full max-w-2xl items-center rounded-full bg-[#8cc63f]/70 px-5 text-black">
              <span className="font-medium w-full">Home</span>
            </div>
          </div>

          {/* Right Action Icons - Matches screenshot sequence */}
          <div className="ml-4 flex items-center gap-3">
            <HeaderButton icon="search" />
            <HeaderButton icon="cloud-upload" />
            <HeaderButton icon="arrow-left" />
            <HeaderButton icon="arrow-right" />
            <HeaderButton icon="user" />
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 bg-[#0b0b0b] p-0">
          {/* Empty state container to match image */}
          <div className="h-full w-full" />
        </main>
      </div>
    </div>
  );
};

export default MainPage;