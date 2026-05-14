export function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
          Desenvolvimento de software sob medida
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
          Sistemas que <br />
          <span className="text-gradient">geram resultado.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          UI ruim → cliente não confia. UX ruim → usuário desiste.
          <span className="text-foreground"> Os dois bem feitos → mais conversão, mais resultado.</span>
          {" "}Esse é o nosso jeito de construir.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-surface transition"
          >
            Conversar com o time
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { n: "5+", l: "Sistemas no ar" },
            { n: "100%", l: "Sob medida" },
            { n: "24/7", l: "Disponibilidade" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
