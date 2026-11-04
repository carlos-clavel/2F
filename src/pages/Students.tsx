import { useState } from "react";
import Header from "../components/Header";
import { students, Student } from "../data/mock";

const statusLabels: Record<string, string> = {
  aguardando: "Aguardando",
  chegando: "Chegando",
  encontro: "Em encontro",
  saida: "Saída",
};

const statusStyles: Record<string, React.CSSProperties> = {
  aguardando: { background: "rgba(141,169,196,0.12)", color: "#8DA9C4" },
  chegando: { background: "rgba(19,64,116,0.12)", color: "#134074" },
  encontro: { background: "rgba(19,49,92,0.15)", color: "#13315C" },
  saida: { background: "rgba(11,37,69,0.08)", color: "#0B2545" },
};

function StudentDetail({ student, onClose }: { student: Student; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(11,37,69,0.6)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-8" style={{ background: "#0B2545" }}>
          <button onClick={onClose} className="mb-6 text-xs" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>
            ← Fechar
          </button>
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold"
              style={{ background: "rgba(141,169,196,0.15)", color: "#fff", fontFamily: "'Outfit', sans-serif" }}
            >
              {student.avatar}
            </div>
            <div>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                {student.name}
              </p>
              <p className="text-sm mt-1" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>
                {student.grade} · {student.institution}
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}>
              Status atual
            </p>
            <span
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif", ...statusStyles[student.status] }}
            >
              {statusLabels[student.status]}
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}>
              Responsáveis autorizados
            </p>
            <div className="space-y-2">
              {student.guardians.map((g) => (
                <div key={g} className="flex items-center gap-3 py-2.5 px-4 rounded-xl" style={{ background: "rgba(19,64,116,0.04)", border: "1px solid rgba(19,64,116,0.06)" }}>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(19,64,116,0.1)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {g.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{g}</span>
                  <span className="ml-auto text-xs" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Autorizado ✓</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em", fontSize: "10px" }}>
              Recepção designada
            </p>
            <p className="text-sm" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>{student.reception}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Students() {
  const [selected, setSelected] = useState<Student | null>(null);
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Header title="Alunos" subtitle={`${students.length} alunos cadastrados`} />

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
            placeholder="Buscar aluno..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.07)" }}>
          {/* Header row */}
          <div
            className="grid items-center px-5 py-3"
            style={{ gridTemplateColumns: "2fr 1fr 1.5fr 1fr 1fr", borderBottom: "1px solid rgba(19,64,116,0.06)" }}
          >
            {["Aluno", "Turma", "Recepção", "Responsáveis", "Status"].map((h) => (
              <span key={h} className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#4a6280", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", fontSize: "10px" }}>
                {h}
              </span>
            ))}
          </div>

          {filtered.map((student, i) => (
            <button
              key={student.id}
              onClick={() => setSelected(student)}
              className="w-full grid items-center px-5 py-4 text-left transition-colors hover:bg-gray-50"
              style={{
                gridTemplateColumns: "2fr 1fr 1.5fr 1fr 1fr",
                borderBottom: i < filtered.length - 1 ? "1px solid rgba(19,64,116,0.04)" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: "rgba(19,64,116,0.07)", color: "#134074", fontFamily: "'Outfit', sans-serif" }}
                >
                  {student.avatar}
                </div>
                <span className="text-sm font-medium" style={{ color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}>
                  {student.name}
                </span>
              </div>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{student.grade}</span>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{student.reception}</span>
              <span className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{student.guardians.length} cadastrados</span>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium w-fit"
                style={{ fontFamily: "'DM Sans', sans-serif", ...statusStyles[student.status] }}
              >
                {statusLabels[student.status]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && <StudentDetail student={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
