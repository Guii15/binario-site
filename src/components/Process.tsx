import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Descoberta", desc: "Entendemos o problema, o usuário e a regra de negócio antes de uma linha de código." },
  { icon: Palette, title: "Design", desc: "Protótipos navegáveis com foco em clareza, hierarquia e fluxo de uso." },
  { icon: Code2, title: "Desenvolvimento", desc: "Código limpo, testado e versionado. Entregas frequentes pra você acompanhar." },
  { icon: Rocket, title: "Entrega & Suporte", desc: "Deploy, monitoramento e melhoria contínua. A gente não some depois do go-live." },
];

export function Process() {
  return (
    <section id="processo" className="py-32 relative overflow-hidden border-y border-border bg-surface/30">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-accent font-medium mb-3">Processo</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Como a gente <span className="text-gradient">trabalha</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-all">
                <div className="absolute top-4 right-5 font-display text-5xl font-bold text-primary/15">0{i + 1}</div>
                <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center mb-5 shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
