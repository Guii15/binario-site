import { Zap, Users, Lock, Repeat } from "lucide-react";

const items = [
  { icon: Zap, title: "Entrega rápida", desc: "Sprints curtas, valor logo nas primeiras semanas." },
  { icon: Users, title: "Time próximo", desc: "Você fala direto com quem desenvolve, sem camadas." },
  { icon: Lock, title: "Código seu", desc: "Você é dono de tudo: código, dados e infra." },
  { icon: Repeat, title: "Evolução contínua", desc: "Sistema que cresce junto com a sua operação." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-sm text-accent font-medium mb-3">Diferenciais</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Por que <span className="text-gradient">Binario</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-2xl border border-primary/30 bg-gradient-card p-6 hover:shadow-glow transition-all">
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
