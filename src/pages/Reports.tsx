import Header from "../components/Header";

const weekData = [
  { day: "Seg", value: 24 },
  { day: "Ter", value: 31 },
  { day: "Qua", value: 28 },
  { day: "Qui", value: 35 },
  { day: "Sex", value: 42 },
];

const max = Math.max(...weekData.map((d) => d.value));

const hourData = [
  { hour: "16:00", value: 8 },
  { hour: "16:30", value: 14 },
  { hour: "17:00", value: 38 },
  { hour: "17:15", value: 42 },
  { hour: "17:30", value: 26 },
  { hour: "18:00", value: 12 },
];
const maxH = Math.max(...hourData.map((d) => d.value));

export default function Reports() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Relatórios" subtitle="Analytics e performance operacional" />

      <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
        {/* Top KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total esta semana", value: "160", sub: "retiradas realizadas" },
            { label: "Tempo médio", value: "04:18", sub: "min por retirada" },
            { label: "Taxa de autorização", value: "100%", sub: "retiradas validadas" },
            { label: "Redução de espera", value: "−18%", sub: "vs. semana anterior" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="py-7 px-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}>{label}</p>
              <p className="font-bold leading-none mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.75rem", letterSpacing: "-0.05em", color: "#0B2545" }}>{value}</p>
              <p className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weekly bar chart */}
          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
            <h3 className="text-base font-semibold mb-6" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
              Retiradas por dia
            </h3>
            <div className="flex items-end gap-3 h-32">
              {weekData.map(({ day, value }) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium" style={{ color: "#0B2545", fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${(value / max) * 96}px`,
                      background: day === "Sex" ? "#134074" : "rgba(19,64,116,0.12)",
                    }}
                  />
                  <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly distribution */}
          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
            <h3 className="text-base font-semibold mb-6" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
              Distribuição por horário
            </h3>
            <div className="flex items-end gap-2 h-32">
              {hourData.map(({ hour, value }) => (
                <div key={hour} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium" style={{ color: "#0B2545", fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
                  <div
                    className="w-full rounded-t transition-all"
                    style={{
                      height: `${(value / maxH) * 96}px`,
                      background: value === maxH ? "#0B2545" : "rgba(19,64,116,0.12)",
                    }}
                  />
                  <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div>
          <h3 className="text-base font-semibold mb-4" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "↗",
                label: "Pico de fluxo",
                desc: "Entre 17:00 e 17:30 a Recepção Principal concentra 42% das retiradas.",
              },
              {
                icon: "↘",
                label: "Tempo de espera",
                desc: "O tempo médio caiu 18% nesta semana em comparação com a anterior.",
              },
              {
                icon: "★",
                label: "Melhor desempenho",
                desc: "Recepção 02 apresentou o menor tempo médio de atendimento do mês.",
              },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="p-5 rounded-xl flex gap-4"
                style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: "rgba(19,64,116,0.06)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
                  <p className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reception performance */}
        <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
          <h3 className="text-base font-semibold mb-6" style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Performance por recepção
          </h3>
          <div className="space-y-4">
            {[
              { name: "Recepção Principal", total: 68, avgTime: "04:32", pct: 85 },
              { name: "Recepção Lateral", total: 52, avgTime: "05:48", pct: 65 },
              { name: "Recepção Secundária", total: 40, avgTime: "03:15", pct: 50 },
            ].map(({ name, total, avgTime, pct }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm tabular-nums" style={{ color: "#4a6280", fontFamily: "'JetBrains Mono', monospace" }}>{avgTime}</span>
                    <span className="text-sm tabular-nums" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{total} retiradas</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(19,64,116,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "#134074" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
