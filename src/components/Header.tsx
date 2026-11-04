interface HeaderProps {
  title: string;
  subtitle?: string;
}

const clock = () => {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header
      className="h-16 flex items-center justify-between px-8 border-b shrink-0"
      style={{
        background: "rgba(238,244,237,0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(19,64,116,0.08)",
      }}
    >
      <div>
        <h1
          className="text-lg font-semibold tracking-tight"
          style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs mt-0.5" style={{ color: "#4a6280" }}>
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Clock */}
        <div
          className="text-sm font-medium tabular-nums"
          style={{ color: "#134074", fontFamily: "'JetBrains Mono', monospace" }}
        >
          {clock()}
        </div>

        {/* Institution */}
        <div
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
          style={{ background: "rgba(19,64,116,0.06)", color: "#134074" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="5" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M6 1L1 5h10L6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Colégio São Paulo</span>
        </div>

        {/* Notifications */}
        <button
          className="w-9 h-9 rounded-lg flex items-center justify-center relative transition-colors hover:bg-black/5"
          style={{ color: "#134074" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2a5 5 0 0 0-5 5v2l-1.5 2.5h13L14 9V7a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M7.5 14.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ background: "#134074" }}
          />
        </button>

        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
          style={{ background: "#134074", color: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
        >
          AB
        </div>
      </div>
    </header>
  );
}
