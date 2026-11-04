import { useState } from "react";
import Header from "../components/Header";
import { queue, QueueItem } from "../data/mock";

type Filter = "todos" | "aguardando" | "chegando" | "encontro" | "saida";

const modeIcon = (mode: string) => {
  if (mode === "carro") return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="4" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M3 4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="3.5" cy="11" r="1" fill="currentColor"/>
      <circle cx="10.5" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
  if (mode === "pe") return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M7 5v4M5 7l2 2 2-2M5 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
};

const statusStyles: Record<string, React.CSSProperties> = {
  aguardando: { background: "rgba(141,169,196,0.12)", color: "#8DA9C4" },
  chegando: { background: "rgba(19,64,116,0.12)", color: "#134074" },
  encontro: { background: "rgba(19,49,92,0.15)", color: "#13315C" },
  saida: { background: "rgba(11,37,69,0.08)", color: "#0B2545" },
};

const statusLabels: Record<string, string> = {
  aguardando: "Aguardando",
  chegando: "Chegando",
  encontro: "Em encontro",
  saida: "Saída",
};

function QueueCard({ item, onConfirm }: { item: QueueItem; onConfirm: (id: string) => void }) {
  return (
    <div
      className="px-5 py-4 rounded-xl flex items-center gap-4 transition-all hover:shadow-sm group"
      style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}
    >
      {/* Priority indicator */}
      {item.priority === "alta" && (
        <div className="w-0.5 h-10 rounded-full shrink-0" style={{ background: "#13315C" }} />
      )}

      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
        style={{ background: "rgba(19,64,116,0.08)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
      >
        {item.avatar}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>
            {item.studentName}
          </span>
          <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{item.grade}</span>
          {item.priority === "alta" && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(19,64,116,0.08)", color: "#134074", fontFamily: "'DM Sans', sans-serif" }}>
              Prioridade
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-1 flex-wrap">
          <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{item.guardianName}</span>
          <span className="text-xs opacity-30">·</span>
          <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{item.reception}</span>
          <span className="text-xs opacity-30">·</span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "#8DA9C4" }}>
            {modeIcon(item.mode)}
            {item.mode === "carro" ? "Carro" : item.mode === "pe" ? "A pé" : "Sem retirada"}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 shrink-0">
        {item.noticeTime !== "—" && (
          <div className="text-right hidden sm:block">
            <p className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Aviso</p>
            <p className="text-sm font-medium tabular-nums" style={{ color: "#0B2545", fontFamily: "'JetBrains Mono', monospace" }}>
              {item.noticeTime}
            </p>
          </div>
        )}
        {item.waitMinutes > 0 && (
          <div className="text-right hidden sm:block">
            <p className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Espera</p>
            <p
              className="text-sm font-medium tabular-nums"
              style={{ color: item.waitMinutes > 10 ? "#13315C" : "#134074", fontFamily: "'JetBrains Mono', monospace", fontWeight: item.waitMinutes > 10 ? 700 : 500 }}
            >
              {item.waitMinutes}min
            </p>
          </div>
        )}

        <span
          className="px-3 py-1.5 rounded-full text-xs font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif", ...statusStyles[item.status] }}
        >
          {statusLabels[item.status]}
        </span>

        {(item.status === "chegando" || item.status === "encontro") && (
          <button
            onClick={() => onConfirm(item.id)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-90"
            style={{ background: "#134074", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.status === "chegando" ? "Encaminhar" : "Confirmar saída"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Queue() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [items, setItems] = useState(queue);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const filters: { id: Filter; label: string; count?: number }[] = [
    { id: "todos", label: "Todos", count: items.length },
    { id: "aguardando", label: "Aguardando", count: items.filter((q) => q.status === "aguardando").length },
    { id: "chegando", label: "Chegando", count: items.filter((q) => q.status === "chegando").length },
    { id: "encontro", label: "Encontro", count: items.filter((q) => q.status === "encontro").length },
    { id: "saida", label: "Saída", count: items.filter((q) => q.status === "saida").length },
  ];

  const filtered = filter === "todos" ? items : items.filter((q) => q.status === filter);

  const confirmItem = confirmId ? items.find((q) => q.id === confirmId) : null;

  const handleAdvance = (id: string) => {
    setItems((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        const next: Record<string, QueueItem["status"]> = { chegando: "encontro", encontro: "saida" };
        return { ...q, status: next[q.status] ?? q.status };
      })
    );
    setConfirmId(null);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Retiradas" subtitle="Fila em tempo real" />

      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Filters */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: filter === f.id ? "#134074" : "#fff",
                color: filter === f.id ? "#fff" : "#4a6280",
                border: `1px solid ${filter === f.id ? "transparent" : "rgba(19,64,116,0.1)"}`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {f.label}
              {f.count !== undefined && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: filter === f.id ? "rgba(255,255,255,0.2)" : "rgba(19,64,116,0.08)",
                    color: filter === f.id ? "#fff" : "#4a6280",
                  }}
                >
                  {f.count}
                </span>
              )}
            </button>
          ))}

          {/* Search */}
          <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.1)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="#8DA9C4" strokeWidth="1.2"/>
              <path d="M9.5 9.5L12.5 12.5" stroke="#8DA9C4" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <input
              placeholder="Buscar aluno..."
              className="bg-transparent text-sm outline-none w-32"
              style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
        </div>

        {/* Queue */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(19,64,116,0.06)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#8DA9C4" strokeWidth="1.5"/>
                <path d="M12 8v4l2.5 2.5" stroke="#8DA9C4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-base font-medium mb-2" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif" }}>
              Nenhuma retirada no momento
            </p>
            <p className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>
              A operação está tranquila. Novos avisos aparecerão aqui automaticamente.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((item) => (
              <QueueCard key={item.id} item={item} onConfirm={setConfirmId} />
            ))}
          </div>
        )}
      </div>

      {/* Confirmation modal */}
      {confirmId && confirmItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(11,37,69,0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setConfirmId(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl overflow-hidden"
            style={{ background: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 py-6" style={{ background: "#0B2545" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.12em", fontSize: "10px" }}>
                Validação de saída
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold" style={{ background: "rgba(141,169,196,0.15)", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                  {confirmItem.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-lg" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>{confirmItem.studentName}</p>
                  <p className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>{confirmItem.grade} · {confirmItem.reception}</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="px-8 py-6 space-y-4">
              {[
                { label: "Responsável", value: confirmItem.guardianName },
                { label: "Modo de retirada", value: confirmItem.mode === "carro" ? "Carro" : confirmItem.mode === "pe" ? "A pé" : "Sem retirada" },
                { label: "Recepção", value: confirmItem.reception },
                { label: "Status de autorização", value: "Autorizado ✓" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(19,64,116,0.06)" }}>
                  <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
                  <span className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="px-8 pb-8 flex gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="flex-1 py-3.5 rounded-xl text-sm font-medium"
                style={{ background: "rgba(19,64,116,0.06)", color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}
              >
                Cancelar
              </button>
              <button
                onClick={() => handleAdvance(confirmId)}
                className="flex-1 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#134074", fontFamily: "'DM Sans', sans-serif" }}
              >
                {confirmItem.status === "chegando" ? "Encaminhar aluno" : "Confirmar saída"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
