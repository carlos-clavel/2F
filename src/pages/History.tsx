import { useState } from "react";
import Header from "../components/Header";
import { history } from "../data/mock";

const modeLabel: Record<string, string> = { carro: "Carro", pe: "A pé", sem_retirada: "Sem retirada" };

export default function History() {
  const [search, setSearch] = useState("");

  const filtered = history.filter(
    (h) =>
      h.student.toLowerCase().includes(search.toLowerCase()) ||
      h.guardian.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Histórico" subtitle="Registro completo de retiradas" />

      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Search & filter row */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.1)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#8DA9C4" strokeWidth="1.4"/>
              <path d="M11 11L14 14" stroke="#8DA9C4" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="bg-transparent text-sm outline-none w-40"
              style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>

          <div
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm cursor-pointer"
            style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.1)", color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M4 5h6M4 7h4M4 9h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Hoje
          </div>

          <div
            className="ml-auto text-sm"
            style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}
          >
            {filtered.length} registros
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
          <div
            className="grid px-5 py-3"
            style={{ gridTemplateColumns: "2fr 1fr 1.2fr 1fr 1fr 1fr", borderBottom: "1px solid rgba(19,64,116,0.06)" }}
          >
            {["Aluno", "Turma", "Responsável", "Horário", "Recepção", "Modo"].map((h) => (
              <span key={h} className="text-xs font-semibold uppercase" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", fontSize: "10px" }}>
                {h}
              </span>
            ))}
          </div>

          {filtered.map((entry, i) => (
            <div
              key={entry.id}
              className="grid px-5 py-4 items-center hover:bg-gray-50 transition-colors"
              style={{
                gridTemplateColumns: "2fr 1fr 1.2fr 1fr 1fr 1fr",
                borderBottom: i < filtered.length - 1 ? "1px solid rgba(19,64,116,0.04)" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: "rgba(19,64,116,0.07)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                >
                  {entry.student.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{entry.student}</p>
                  <p className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>por {entry.staff}</p>
                </div>
              </div>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{entry.grade}</span>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{entry.guardian}</span>
              <span className="text-sm tabular-nums" style={{ color: "#0B2545", fontFamily: "'JetBrains Mono', monospace" }}>{entry.time}</span>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{entry.reception.replace("Recepção ", "")}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{modeLabel[entry.mode]}</span>
                {entry.validated && (
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(19,64,116,0.08)" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3" stroke="#134074" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
