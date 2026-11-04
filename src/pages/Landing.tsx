import { useState } from "react";
import Logo from "../components/Logo";
import logoImg from "../imports/3.png";

interface LandingProps {
  onEnterApp: () => void;
}

function FlowStep({ label, index, active }: { label: string; index: number; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500"
        style={{
          background: active ? "#134074" : "rgba(19,64,116,0.12)",
          color: active ? "#fff" : "#8DA9C4",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {index + 1}
      </div>
      <span
        className="text-sm font-medium tracking-wider uppercase"
        style={{ color: active ? "#EEF4ED" : "rgba(238,244,237,0.4)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", fontSize: "11px" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Landing({ onEnterApp }: LandingProps) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = ["Aguardando", "Chegando", "Encontro", "Saída"];

  return (
    <div className="min-h-screen" style={{ background: "#EEF4ED" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16"
        style={{
          background: "rgba(11,37,69,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(141,169,196,0.1)",
        }}
      >
        <img src={logoImg} alt="Fluxus" style={{ height: 24, filter: "brightness(0) invert(1)" }} />
        <div className="hidden md:flex items-center gap-8">
          {["Produto", "Segurança", "Operação", "Dados"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}
            >
              {l}
            </a>
          ))}
        </div>
        <button
          onClick={onEnterApp}
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: "#134074", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
        >
          Acessar sistema
        </button>
      </nav>

      {/* Hero */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0B2545 0%, #13315C 60%, #134074 100%)" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(141,169,196,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(141,169,196,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-12"
            style={{ background: "rgba(141,169,196,0.12)", color: "#8DA9C4", border: "1px solid rgba(141,169,196,0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8DA9C4" }} />
            Sistema de gestão de retirada escolar
          </div>

          <h1
            className="font-display font-bold text-white mb-8 leading-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            A saída,
            <br />
            <span style={{ color: "#8DA9C4" }}>em fluxo.</span>
          </h1>

          <p
            className="max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(238,244,237,0.6)", fontSize: "1.125rem", fontFamily: "'DM Sans', sans-serif" }}
          >
            Organize a retirada de alunos com mais segurança, menos filas e total visibilidade operacional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onEnterApp}
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#fff", color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
            >
              Conhecer o Fluxus
            </button>
            <button
              className="px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-white/10"
              style={{ color: "#8DA9C4", border: "1px solid rgba(141,169,196,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Ver como funciona
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 opacity-20 animate-pulse"
            style={{ background: "#8DA9C4" }}
          />
        </div>
      </section>

      {/* Section 1 — The Problem */}
      <section className="py-32 px-6" style={{ background: "#EEF4ED" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}
              >
                O problema
              </p>
              <h2
                className="font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0B2545", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                A saída não precisa ser caótica.
              </h2>
              <p
                className="leading-relaxed mb-8"
                style={{ color: "#4a6280", fontSize: "1.0625rem", fontFamily: "'DM Sans', sans-serif" }}
              >
                Filas desordenadas, longa espera, responsáveis desconhecidos, comunicação falha. A saída escolar é um momento crítico que merece uma solução à altura.
              </p>
              <div className="space-y-3">
                {[
                  "Filas desorganizadas na portaria",
                  "Dificuldade em saber quem está aguardando",
                  "Risco de entrega a pessoa não autorizada",
                  "Falta de rastreabilidade das saídas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-1 h-1 rounded-full mt-2.5 shrink-0"
                      style={{ background: "#8DA9C4" }}
                    />
                    <span style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract visual */}
            <div className="relative h-80">
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ background: "#13315C" }}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(141,169,196,0.5) 10px, rgba(141,169,196,0.5) 11px)",
                }} />
                {/* Chaotic elements */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 40 + 20,
                      height: Math.random() * 40 + 20,
                      top: `${10 + Math.random() * 80}%`,
                      left: `${5 + Math.random() * 90}%`,
                      background: `rgba(141,169,196,${0.05 + Math.random() * 0.1})`,
                      border: "1px solid rgba(141,169,196,0.15)",
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p
                    className="text-center px-8"
                    style={{ color: "rgba(141,169,196,0.5)", fontFamily: "'Outfit', sans-serif", fontSize: "1.25rem", fontWeight: 300 }}
                  >
                    Caos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Flow */}
      <section className="py-32 px-6" style={{ background: "#0B2545" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}
            >
              A solução
            </p>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Tudo flui quando todos
              <br />
              sabem o próximo passo.
            </h2>
          </div>

          {/* Flow steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-16">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
                <button onClick={() => setActiveStep(i)}>
                  <FlowStep label={step} index={i} active={activeStep === i} />
                </button>
                {i < steps.length - 1 && (
                  <div
                    className="h-px w-24 hidden md:block"
                    style={{ background: "rgba(141,169,196,0.2)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step detail */}
          <div
            className="p-8 rounded-2xl"
            style={{ background: "rgba(19,64,116,0.3)", border: "1px solid rgba(141,169,196,0.1)" }}
          >
            {activeStep === 0 && (
              <div>
                <p className="text-sm mb-2" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif" }}>01 — AGUARDANDO</p>
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Aluno na escola, tranquilo e monitorado.</h3>
                <p style={{ color: "rgba(238,244,237,0.6)", fontFamily: "'DM Sans', sans-serif" }}>O sistema mantém registro de todos os alunos em sala, prontos para quando o responsável avisar a chegada.</p>
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <p className="text-sm mb-2" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif" }}>02 — CHEGANDO</p>
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Responsável avisa. Escola se prepara.</h3>
                <p style={{ color: "rgba(238,244,237,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Com um toque no app, o responsável informa que está a caminho. A equipe escolar recebe o aviso instantaneamente e começa a preparar o aluno.</p>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <p className="text-sm mb-2" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif" }}>03 — ENCONTRO</p>
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Aluno encaminhado ao ponto de encontro.</h3>
                <p style={{ color: "rgba(238,244,237,0.6)", fontFamily: "'DM Sans', sans-serif" }}>A equipe escolar encaminha o aluno à recepção designada. O responsável é notificado e sabe exatamente onde encontrar a criança.</p>
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <p className="text-sm mb-2" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif" }}>04 — SAÍDA</p>
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Autorização validada. Saída registrada.</h3>
                <p style={{ color: "rgba(238,244,237,0.6)", fontFamily: "'DM Sans', sans-serif" }}>A identidade do responsável é verificada, a autorização confirmada e a saída registrada com rastreabilidade completa.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3 — Security */}
      <section className="py-32 px-6" style={{ background: "#EEF4ED" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Security card */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "#13315C", border: "1px solid rgba(141,169,196,0.12)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(141,169,196,0.1)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4Z" stroke="#8DA9C4" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="#8DA9C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.12em" }}>
                Autorização validada
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(141,169,196,0.08)" }}>
                  <span className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Aluno</span>
                  <span className="text-sm font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>João Silva · 5º A</span>
                </div>
                <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(141,169,196,0.08)" }}>
                  <span className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Responsável</span>
                  <span className="text-sm font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Maria Silva</span>
                </div>
                <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(141,169,196,0.08)" }}>
                  <span className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Relação</span>
                  <span className="text-sm font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Mãe · Autorizada</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Status</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#8DA9C4" }}
                    />
                    <span className="text-sm font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Autorizado</span>
                  </div>
                </div>
              </div>

              <button
                className="w-full mt-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#134074", fontFamily: "'DM Sans', sans-serif" }}
              >
                Confirmar saída
              </button>
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}
              >
                Segurança
              </p>
              <h2
                className="font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0B2545", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Cada saída é uma saída autorizada.
              </h2>
              <p
                className="leading-relaxed mb-8"
                style={{ color: "#4a6280", fontSize: "1.0625rem", fontFamily: "'DM Sans', sans-serif" }}
              >
                O Fluxus garante que cada aluno seja entregue apenas a responsáveis cadastrados e autorizados, com validação obrigatória em cada etapa.
              </p>
              <div className="space-y-4">
                {[
                  "Validação de identidade do responsável",
                  "Confirmação obrigatória pela equipe",
                  "Registro completo com rastreabilidade",
                  "Histórico permanente de cada saída",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(19,64,116,0.08)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#134074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Dashboard */}
      <section className="py-32 px-6" style={{ background: "#13315C" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}>
              Operação
            </p>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Uma visão.
              <br />
              <span style={{ color: "#8DA9C4" }}>Toda a escola.</span>
            </h2>
          </div>

          {/* Mini dashboard preview */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#0B2545", border: "1px solid rgba(141,169,196,0.1)" }}
          >
            {/* Mini header */}
            <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(141,169,196,0.08)" }}>
              <span className="text-sm font-medium text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Visão Geral — 17:20</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8DA9C4" }} />
                <span className="text-xs" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Operação ativa</span>
              </div>
            </div>
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(141,169,196,0.08)" }}>
              {[
                { label: "Aguardando", value: "3", },
                { label: "Chegando", value: "3" },
                { label: "Em encontro", value: "1" },
                { label: "Concluídas", value: "5" },
              ].map(({ label, value }) => (
                <div key={label} className="px-6 py-6" style={{ background: "#0B2545" }}>
                  <p className="text-xs mb-2" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
                  <p
                    className="font-bold text-white"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 py-5" style={{ background: "rgba(19,64,116,0.2)" }}>
              <p className="text-xs" style={{ color: "rgba(141,169,196,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                Tempo médio · <span className="font-mono">04:18</span> · Recepção Principal com maior fluxo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Analytics */}
      <section className="py-32 px-6" style={{ background: "#EEF4ED" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}>
                Dados
              </p>
              <h2
                className="font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0B2545", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Transforme movimento em inteligência.
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "#4a6280", fontSize: "1.0625rem", fontFamily: "'DM Sans', sans-serif" }}>
                Métricas detalhadas de cada operação de saída. Identifique gargalos, melhore o fluxo e tome decisões embasadas em dados reais.
              </p>
            </div>

            {/* Insight cards */}
            <div className="space-y-4">
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
                  desc: "A Recepção 02 apresentou o menor tempo médio de atendimento do mês.",
                },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl flex gap-4"
                  style={{ background: "#fff", border: "1px solid rgba(19,64,116,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
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
        </div>
      </section>

      {/* Section 6 — Families */}
      <section className="py-32 px-6" style={{ background: "#0B2545" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#8DA9C4", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.15em" }}>
            Responsáveis
          </p>
          <h2
            className="font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Uma experiência mais tranquila
            <br />
            <span style={{ color: "#8DA9C4" }}>para as famílias.</span>
          </h2>
          <p className="max-w-xl mx-auto mb-16" style={{ color: "rgba(238,244,237,0.6)", fontSize: "1.0625rem", fontFamily: "'DM Sans', sans-serif" }}>
            Um toque para avisar. Acompanhamento em tempo real. Confirmação na palma da mão.
          </p>

          {/* Mobile mockup */}
          <div
            className="max-w-xs mx-auto rounded-3xl overflow-hidden"
            style={{ background: "#13315C", border: "1px solid rgba(141,169,196,0.15)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
          >
            <div className="p-6">
              <p className="text-xs mb-6 text-center" style={{ color: "#8DA9C4", fontFamily: "'DM Sans', sans-serif" }}>Colégio São Paulo</p>
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Maria, estamos<br/>preparando o João.</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Aviso recebido", done: true },
                  { label: "Aluno sendo encaminhado", done: true },
                  { label: "Encontro", done: false, active: true },
                  { label: "Saída confirmada", done: false },
                ].map(({ label, done, active }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: done ? "#134074" : active ? "rgba(141,169,196,0.2)" : "transparent",
                        border: active ? "1px solid #8DA9C4" : done ? "none" : "1px solid rgba(141,169,196,0.2)",
                      }}
                    >
                      {done && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8DA9C4" }} />}
                    </div>
                    <span className="text-sm" style={{ color: done || active ? "#EEF4ED" : "rgba(238,244,237,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Metrics */}
      <section className="py-32 px-6" style={{ background: "#EEF4ED" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="font-bold leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0B2545", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Menos fila.
              <br />
              <span style={{ color: "#134074" }}>Mais controle.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(19,64,116,0.08)" }}>
            {[
              { number: "−62%", label: "Redução no tempo de espera" },
              { number: "100%", label: "Das saídas com rastreabilidade" },
              { number: "04:18", label: "Tempo médio de retirada" },
              { number: "0", label: "Saídas sem autorização" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white px-6 py-8 text-center">
                <p
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.5rem", color: "#0B2545", letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  {number}
                </p>
                <p className="text-sm" style={{ color: "#4a6280", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-40 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #0B2545 0%, #13315C 60%, #134074 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-bold text-white leading-none mb-8"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
          >
            Faça a saída
            <br />
            fluir.
          </h2>
          <p className="mb-12" style={{ color: "rgba(238,244,237,0.6)", fontSize: "1.0625rem", fontFamily: "'DM Sans', sans-serif" }}>
            Uma nova forma de organizar, acompanhar e validar a retirada de alunos.
          </p>
          <button
            onClick={onEnterApp}
            className="px-10 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#fff", color: "#0B2545", fontFamily: "'DM Sans', sans-serif" }}
          >
            Conheça o Fluxus →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "#0B2545", borderTop: "1px solid rgba(141,169,196,0.08)" }}
      >
        <img src={logoImg} alt="Fluxus" style={{ height: 20, filter: "brightness(0) invert(1) opacity(0.5)" }} />
        <p className="text-xs" style={{ color: "rgba(141,169,196,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
          © 2026 Fluxus. Sistema de gestão de retirada escolar.
        </p>
      </footer>
    </div>
  );
}
