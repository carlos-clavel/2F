import Logo from "./Logo";

type Page = "dashboard" | "fila" | "alunos" | "responsaveis" | "recepcoes" | "historico" | "relatorios";

interface SidebarProps {
  current: Page;
  onNavigate: (page: Page) => void;
  collapsed?: boolean;
  onToggle?: () => void;
}

const nav = [
  {
    id: "dashboard" as Page,
    label: "Visão Geral",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "fila" as Page,
    label: "Retiradas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 14c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 10c1.8.4 4 1.6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    badge: 7,
  },
  {
    id: "alunos" as Page,
    label: "Alunos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "responsaveis" as Page,
    label: "Responsáveis",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "recepcoes" as Page,
    label: "Recepções",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8V5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "historico" as Page,
    label: "Histórico",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "relatorios" as Page,
    label: "Relatórios",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 11l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Sidebar({ current, onNavigate, collapsed = false, onToggle }: SidebarProps) {
  return (
    <aside
      style={{ background: "#0B2545", width: collapsed ? 64 : 220, transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)", minHeight: "100vh" }}
      className="flex flex-col shrink-0 relative z-10"
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b" style={{ borderColor: "rgba(141,169,196,0.12)" }}>
        {!collapsed && <Logo variant="light" size="sm" />}
        {collapsed && <Logo variant="light" size="sm" iconOnly />}
        <button
          onClick={onToggle}
          className="ml-auto p-1.5 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: "#8DA9C4" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {collapsed ? (
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 flex flex-col gap-0.5">
        {nav.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all relative group w-full text-left"
              style={{
                color: active ? "#ffffff" : "#8DA9C4",
                background: active ? "rgba(19,64,116,0.6)" : "transparent",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span className="shrink-0">{item.icon}</span>
              {!collapsed && <span className="flex-1">{item.label}</span>}
              {!collapsed && item.badge && (
                <span
                  className="text-xs font-semibold px-1.5 py-0.5 rounded-full"
                  style={{ background: "rgba(141,169,196,0.2)", color: "#8DA9C4" }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div
        className="px-3 py-4 border-t flex items-center gap-3"
        style={{ borderColor: "rgba(141,169,196,0.12)" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{ background: "rgba(141,169,196,0.2)", color: "#8DA9C4", fontFamily: "'Outfit', sans-serif" }}
        >
          AB
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-xs font-medium text-white truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ana Beatriz
            </p>
            <p className="text-xs truncate" style={{ color: "#8DA9C4" }}>Recepção</p>
          </div>
        )}
      </div>
    </aside>
  );
}
