import logoFull from "../assets/logo_full_transparent.png";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Terminal,
  Code2,
  Zap,
  Target,
  TrendingUp,
  ShieldCheck,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Database,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Missão", href: "#missao" },
  { label: "Serviços", href: "#servicos" },
];

const STATS = [
  { value: "+50", label: "Clientes Atendidos" },
  { value: "+120", label: "Projetos Entregues" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "3+", label: "Anos de Mercado" },
];

const PILLARS = [
  {
    label: "Missão",
    icon: Target,
    text: "Desenvolver, automatizar e aprimorar sistemas de informação, otimizando propostas e cumprindo os requisitos do cliente com excelência.",
  },
  {
    label: "Visão",
    icon: TrendingUp,
    text: "Crescer no mercado por meio da experiência e aprendizado contínuo, desenvolvendo nosso desempenho para ganhar relevância e tornarmo-nos referência.",
  },
  {
    label: "Valores",
    icon: ShieldCheck,
    text: "Transparência, organização e inovação são os pilares que guiam cada decisão, cada linha de código e cada entrega da System32.",
  },
];

const SERVICES = [
  {
    icon: Code2,
    number: "01",
    title: "Desenvolvimento de Sistemas",
    desc: "Criamos sistemas sob medida que atendem às necessidades específicas do seu negócio, do levantamento de requisitos à entrega final.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Automação de Processos",
    desc: "Eliminamos tarefas repetitivas e otimizamos fluxos de trabalho para que sua equipe foque no que realmente importa.",
  },
  {
    icon: Database,
    number: "03",
    title: "Sistemas de Informação",
    desc: "Implementamos soluções robustas para gestão, análise e visualização de dados estratégicos que impulsionam decisões.",
  },
  {
    icon: Terminal,
    number: "04",
    title: "Consultoria Técnica",
    desc: "Orientamos sua empresa nas melhores escolhas tecnológicas, mapeando o caminho mais eficiente para seus objetivos.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center">
  <img src={logoFull} alt="System32 Software House" className="h-9 w-auto object-contain" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-xs text-muted-foreground hover:text-[#00FFC8] hover:drop-shadow-[0_0_6px_#00FFC8] tracking-[0.2em] uppercase transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("#contato")}
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary/85 transition-colors duration-200"
          >
            Fale Conosco
          </button>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-b border-border px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-xs text-muted-foreground hover:text-[#00AEEF] hover:drop-shadow-[0_0_6px_#00AEEF] tracking-[0.2em] uppercase transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="mt-2 bg-primary text-primary-foreground px-5 py-3 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              Fale Conosco
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center"
        style={{ paddingTop: "64px" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,188,212,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,188,212,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        {/* Glow */}
        <div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10 bg-primary" />
                <span
                  className="text-primary text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Software House
                </span>
              </div>

              <h1
                className="font-display text-6xl md:text-[5.5rem] font-bold leading-[0.92] tracking-tight mb-7"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Sistemas que
                <br />
                <span className="text-primary">Transformam</span>
                <br />
                Negócios
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mb-10">
                Desenvolvemos, automatizamos e aprimoramos sistemas de informação
                com foco em resultados reais e alinhados às necessidades do cliente.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("#servicos")}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold tracking-wide hover:bg-primary/85 transition-colors duration-200"
                >
                  Ver Serviços <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo("#sobre")}
                  className="flex items-center gap-2 border border-border text-foreground px-7 py-3 text-sm font-semibold tracking-wide hover:border-primary/50 hover:text-primary transition-colors duration-200"
                >
                  Conheça-nos
                </button>
              </div>
            </div>

            {/* Right: terminal card */}
            <div className="hidden md:block">
              <div className="bg-card border border-border">
                {/* title bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span
                    className="ml-4 text-xs text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    system32 — bash
                  </span>
                </div>
                {/* terminal body */}
                <div
                  className="p-7 text-sm space-y-2 leading-relaxed"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <p>
                    <span className="text-primary">$</span>{" "}
                    <span className="text-foreground">init system32 --env=production</span>
                  </p>
                  <p className="text-muted-foreground pl-3">→ Carregando módulos de sistema...</p>
                  <p className="text-muted-foreground pl-3">→ Configurando ambiente...</p>
                  <p>
                    <span className="text-[#06402B]">✓</span>{" "}
                    <span className="text-[#06402B]">Sistema inicializado</span>
                  </p>
                  <div className="pt-2">
                    <p>
                      <span className="text-primary">$</span>{" "}
                      <span className="text-foreground">deploy --client=seu-negocio</span>
                    </p>
                    <p className="text-muted-foreground pl-3">→ Analisando requisitos...</p>
                    <p className="text-muted-foreground pl-3">→ Desenvolvendo solução...</p>
                    <p className="text-muted-foreground pl-3">→ Automatizando processos...</p>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-primary">$</span>
                    <span
                      className="w-[9px] h-4 bg-primary"
                      style={{ animation: "pulse 1.1s step-end infinite" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 select-none">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section id="sobre" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span
                  className="text-primary text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Nossa História
                </span>
              </div>
              <h2
                className="font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Quem é a<br />
                <span className="text-primary">System32</span>
              </h2>
              {/* accent bar */}
              <div className="mt-8 flex gap-1">
                <div className="h-1 w-16 bg-primary" />
                <div className="h-1 w-4 bg-primary/30" />
              </div>
            </div>

            <div className="md:pt-14 space-y-5">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                A <span className="text-foreground font-medium">System32</span> é uma software house
                comprometida com a transformação digital de negócios. Atuamos no desenvolvimento,
                automação e aprimoramento de sistemas de informação, sempre orientados pelos
                requisitos e expectativas de nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Somos movidos pelo aprendizado contínuo e pela inovação. Cada projeto é uma
                oportunidade de crescer, de aperfeiçoar nosso processo e de entregar soluções que
                gerem impacto real. Nossa meta é simples: ser referência no mercado pelo que
                construímos e pela forma como o fazemos.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => scrollTo("#contato")}
                  className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wide hover:gap-4 transition-all duration-200"
                >
                  Iniciar um projeto <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────── */}
      <section className="border-t border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`py-10 px-6 text-center ${
                  i < STATS.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <div
                  className="font-display text-5xl md:text-6xl font-bold text-primary mb-2"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ────────────────────────────────────── */}
      <section id="missao" className="py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary" />
              <span
                className="text-primary text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Nossos Pilares
              </span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2
              className="font-display text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              O que nos move
            </h2>
          </div>

          {/* 3-col grid separated by 1px borders */}
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-300"
                >
                  <div className="w-11 h-11 border border-primary/25 flex items-center justify-center mb-7 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3
                    className="font-display text-2xl font-bold tracking-wide mb-4"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {pillar.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="servicos" className="py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span
                  className="text-primary text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  O que Fazemos
                </span>
              </div>
              <h2
                className="font-display text-5xl md:text-6xl font-bold leading-[0.95]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Nossas
                <br />
                Soluções
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvemos soluções tecnológicas para empresas que buscam eficiência, inovação
                e resultados concretos. Cada entrega é pensada estrategicamente — do levantamento
                de requisitos à implementação final.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="bg-background p-10 group hover:bg-card transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span
                      className="text-muted-foreground/30 text-4xl font-bold"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>saiba mais</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contato" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: copy + info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span
                  className="text-primary text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Contato
                </span>
              </div>
              <h2
                className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-7"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Vamos construir
                <br />
                algo{" "}
                <span className="text-primary">juntos</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Tem um projeto em mente? Entre em contato e vamos conversar sobre como podemos
                ajudar sua empresa a evoluir com tecnologia.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">contato@system32.dev</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">Brasil</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-16 hidden md:flex gap-2 items-center">
                <div className="h-px flex-1 bg-border" />
                <div className="w-2 h-2 bg-primary" />
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-card border border-border p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 text-sm font-bold tracking-[0.15em] uppercase hover:bg-primary/85 transition-colors duration-200"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center">
          <img src={logoFull} alt="System32 Software House" className="h-8 w-auto object-contain" />
        </div>

          <p
            className="text-[10px] text-muted-foreground tracking-[0.2em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2024 System32. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[10px] text-muted-foreground hover:text-[#00FFC8] hover:drop-shadow-[0_0_6px_#00FFC8] tracking-[0.2em] uppercase transition-all duration-200"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
