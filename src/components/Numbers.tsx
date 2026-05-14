const stats = [
  { n: "27+", l: "Anos de mercado", d: "Desde 1997 entregando tecnologia de verdade." },
  { n: "5+", l: "Sistemas em produção", d: "Rodando todo dia, em uso real." },
  { n: "100%", l: "Código sob medida", d: "Nada de template engessado." },
  { n: "24/7", l: "Suporte & monitoramento", d: "A gente não some depois do go-live." },
];

export function Numbers() {
  return (
    <section id="numeros" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-accent font-medium mb-3">Resultados</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Números que <span className="text-gradient">importam</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.l}
              className="group relative rounded-2xl border border-border bg-gradient-card p-8 hover:border-primary/50 hover:shadow-glow transition-all text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="font-display text-5xl md:text-6xl font-bold text-gradient mb-3">{s.n}</div>
                <div className="font-semibold text-foreground mb-2">{s.l}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
