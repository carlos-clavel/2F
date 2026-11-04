import { useState } from "react";
import Header from "../components/Header";
import { guardians } from "../data/mock";

export default function Guardians() {
  const [search, setSearch] = useState("");
  const filtered = guardians.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Responsáveis" subtitle={`${guardians.length} responsáveis cadastrados`} />

      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Search */}
        <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl max-w-sm" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.1)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#8DA9C4" strokeWidth="1.4"/>
            <path d="M11 11L14 14" stroke="#8DA9C4" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar responsável..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((guardian) => (
            <div
              key={guardian.id}
              className="p-6 rounded-2xl transition-all hover:shadow-sm cursor-pointer"
              style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shrink-0"
                  style={{ background: "rgba(19,64,116,0.08)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                >
                  {guardian.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{guardian.name}</p>
                  <p className="text-sm mt-0.5" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{guardian.relation}</p>
                </div>
                {guardian.authorized && (
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
                    style={{ background: "rgba(19,64,116,0.08)", color: "#134074", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1L1.5 2.75v2.5c0 2.5 1.5 4.8 3.5 5.5 2-.7 3.5-3 3.5-5.5v-2.5L5 1Z" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    Autorizado
                  </div>
                )}
              </div>

              <div className="space-y-3 py-4" style={{ borderTop: "1px solid rgba(19,64,116,0.06)", borderBottom: "1px solid rgba(19,64,116,0.06)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Telefone</span>
                  <span className="text-xs font-medium" style={{ color: "#0B2545", fontFamily: "'JetBrains Mono', monospace" }}>{guardian.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Alunos vinculados</span>
                  <span className="text-xs font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{guardian.students.join(", ")}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>Total de retiradas</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#0B2545", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.04em" }}
                >
                  {guardian.totalPickups}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
