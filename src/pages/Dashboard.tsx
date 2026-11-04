import { useState, useEffect } from "react";
import Header from "../components/Header";
import { kpis, queue, receptions } from "../data/mock";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; style: React.CSSProperties }> = {
    aguardando: { label: "Aguardando", style: { background: "rgba(141,169,196,0.12)", color: "#8DA9C4" } },
    chegando: { label: "Chegando", style: { background: "rgba(19,64,116,0.15)", color: "#134074" } },
    encontro: { label: "Em encontro", style: { background: "rgba(19,49,92,0.15)", color: "#13315C" } },
    saida: { label: "Saída", style: { background: "rgba(11,37,69,0.08)", color: "#0B2545" } },
  };
  const s = map[status] ?? { label: status, style: {} };
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ fontFamily: "'DM Sans', sans-serif", ...s.style }}
    >
      {s.label}
    </span>
  );
}

function KPICard({ label, value, sub, accent }: { label: string; value: string | number; sub?: string; accent?: boolean }) {
  return (
    <div
      className="py-8 px-6 rounded-2xl flex flex-col"
      style={{
        background: accent ? "#13315C" : "#fff",
        border: `1px solid ${accent ? "rgba(141,169,196,0.1)" : "rgba(19,64,116,0.08)"}`,
      }}
    >
      <p
        className="text-xs font-medium uppercase tracking-widest mb-4"
        style={{ color: accent ? "#8DA9C4" : "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}
      >
        {label}
      </p>
      <p
        className="font-bold leading-none mb-2"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "3.5rem",
          letterSpacing: "-0.05em",
          color: accent ? "#fff" : "#0B2545",
        }}
      >
        {value}
      </p>
      {sub && (
        <p className="text-xs mt-auto pt-4" style={{ color: accent ? "rgba(141,169,196,0.6)" : "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const activeItems = queue.filter((q) => q.status !== "aguardando").slice(0, 4);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Visão Geral" subtitle="Operação em tempo real" />

      <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
        {/* Hero strip */}
        <div
          className="rounded-2xl px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0B2545 0%, #13315C 100%)",
            border: "1px solid rgba(141,169,196,0.1)",
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.12em", fontSize: "10px" }}>
              Status operacional · {time.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
            </p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
            >
              Tudo sob controle.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#8DA9C4" }}
            />
            <span className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>
              Operação ativa
            </span>
            <div
              className="ml-4 px-4 py-2 rounded-xl text-2xl font-bold tabular-nums"
              style={{ color: "#fff", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.04em", background: "rgba(141,169,196,0.1)" }}
            >
              {time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <KPICard label="Aguardando" value={kpis.waiting} />
          <KPICard label="Chegando" value={kpis.arriving} />
          <KPICard label="Em Encontro" value={kpis.meeting} />
          <KPICard label="Concluídas hoje" value={kpis.completed} />
          <KPICard label="Tempo médio" value={kpis.avgWait} sub="minutos por retirada" accent />
          <div
            className="py-8 px-6 rounded-2xl col-span-2 md:col-span-1 flex flex-col"
            style={{ background: "rgba(19,64,116,0.06)", border: "1px solid rgba(19,64,116,0.08)" }}
          >
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}>
              Maior fluxo
            </p>
            <p className="font-semibold text-sm leading-snug" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif" }}>
              {kpis.topReception}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Live queue preview */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-base font-semibold"
                style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
              >
                Fila em tempo real
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#134074" }} />
                <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>ao vivo</span>
              </div>
            </div>

            <div className="space-y-2">
              {activeItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-colors hover:bg-white/60"
                  style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: "rgba(19,64,116,0.08)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>
                      {item.studentName} · <span style={{ color: "#4a6280" }}>{item.grade}</span>
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>
                      {item.guardianName} · {item.reception}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {item.waitMinutes > 0 && (
                      <span
                        className="text-xs tabular-nums"
                        style={{ color: "#8DA9C4", fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.waitMinutes}min
                      </span>
                    )}
                    <StatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Receptions summary */}
          <div>
            <h3
              className="text-base font-semibold mb-4"
              style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            >
              Recepções
            </h3>
            <div className="space-y-3">
              {receptions.map((r) => (
                <div
                  key={r.id}
                  className="p-4 rounded-xl"
                  style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.06)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>
                        {r.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>
                        {r.location}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium tabular-nums"
                      style={{ color: "#8DA9C4", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {r.avgTime}
                    </span>
                  </div>
                  <div className="flex gap-3 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: "#4a6280" }}>{r.waiting} ag.</span>
                    <span style={{ color: "#134074" }}>{r.arriving} ch.</span>
                    <span style={{ color: "#13315C" }}>{r.meeting} enc.</span>
                  </div>
                  {/* Capacity bar */}
                  <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: "rgba(19,64,116,0.08)" }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${((r.waiting + r.arriving + r.meeting) / r.capacity) * 100}%`,
                        background: "#134074",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
