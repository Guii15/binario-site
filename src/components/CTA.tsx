export function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
          Tem uma ideia? <br />
          <span className="text-gradient">A gente constrói.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
          Sistemas internos, plataformas para clientes, automações. Conta pra gente o que precisa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:contato@binario.com"
            className="inline-flex items-center rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            contato@binario.com
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-surface transition"
          >
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-primary grid place-items-center text-xs font-bold text-primary-foreground font-display">B</div>
          <span>© {new Date().getFullYear()} Binario. Todos os direitos reservados.</span>
        </div>
        <div>Construído com obsessão por UI &amp; UX.</div>
      </div>
    </footer>
  );
}
