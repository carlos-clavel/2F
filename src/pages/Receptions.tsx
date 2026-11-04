import Header from "../components/Header";
import { receptions } from "../data/mock";

export default function Receptions() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Recepções" subtitle="Visão operacional dos pontos de encontro" />

      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="space-y-4">
          {receptions.map((r) => {
            const total = r.waiting + r.arriving + r.meeting;
            const pct = Math.round((total / r.capacity) * 100);

            return (
              <div
                key={r.id}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}
              >
                {/* Header strip */}
                <div
                  className="px-8 py-6 flex items-start justify-between"
                  style={{ background: "linear-gradient(135deg, #0B2545 0%, #13315C 100%)" }}
                >
                  <div>
                    <p
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
                    >
                      {r.name}
                    </p>
                    <p className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>
                      {r.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs mb-1" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Tempo médio</p>
                    <p
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.04em" }}
                    >
                      {r.avgTime}
                    </p>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-6">
                    {[
                      { label: "Aguardando", value: r.waiting },
                      { label: "Chegando", value: r.arriving },
                      { label: "Em encontro", value: r.meeting },
                      { label: "Capacidade", value: r.capacity },
                      { label: "Ocupação", value: `${pct}%` },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs mb-1" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
                        <p
                          className="text-2xl font-bold"
                          style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.04em" }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Capacity bar */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Ocupação atual</span>
                    <span className="text-xs font-medium" style={{ color: "#134074", fontFamily: "'DM Sans', sans-serif" }}>{total} de {r.capacity}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(19,64,116,0.08)" }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: pct > 75 ? "#13315C" : "#134074" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
