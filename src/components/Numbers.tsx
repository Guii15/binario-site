const stats = [
  { n: "5+", l: "Sistemas em produção", d: "Rodando todo dia, em uso real." },
  { n: "99.9%", l: "Uptime médio", d: "Infra monitorada 24/7." },
  { n: "<200ms", l: "Tempo de resposta", d: "Performance como prioridade." },
  { n: "100%", l: "Código sob medida", d: "Nada de template engessado." },
];

export function Numbers() {
  return (
    <section id="numeros" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-sm text-accent font-medium mb-3">Resultados</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Números que <span className="text-gradient">importam</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 hover:shadow-glow transition-all">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{s.n}</div>
              <div className="font-medium text-foreground mb-1">{s.l}</div>
              <div className="text-xs text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
