import { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Queue from "./pages/Queue";
import Students from "./pages/Students";
import Guardians from "./pages/Guardians";
import Receptions from "./pages/Receptions";
import History from "./pages/History";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";

type Page = "dashboard" | "fila" | "alunos" | "responsaveis" | "recepcoes" | "historico" | "relatorios";

export default function App() {
  const [view, setView] = useState<"landing" | "app">("landing");
  const [page, setPage] = useState<Page>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (view === "landing") {
    return <Landing onEnterApp={() => setView("app")} />;
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard": return <Dashboard />;
      case "fila": return <Queue />;
      case "alunos": return <Students />;
      case "responsaveis": return <Guardians />;
      case "recepcoes": return <Receptions />;
      case "historico": return <History />;
      case "relatorios": return <Reports />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#EEF4ED" }}>
      <Sidebar
        current={page}
        onNavigate={setPage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((c) => !c)}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        {renderPage()}
      </main>
    </div>
  );
}
