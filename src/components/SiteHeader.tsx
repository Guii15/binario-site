import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow grid place-items-center font-display font-bold text-primary-foreground">
            B
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Binario
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
        >
          Falar com a gente
        </a>
      </div>
    </header>
  );
}
