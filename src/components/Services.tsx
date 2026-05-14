import { Server, Cpu, Wifi, Monitor, ShieldCheck, Headphones, Zap } from "lucide-react";

const products = [
  {
    icon: Server,
    title: "Servidores e Storage",
    desc: "Equipamentos robustos para armazenamento de dados e processamento centralizado para sua empresa.",
  },
  {
    icon: Cpu,
    title: "Peças e Componentes",
    desc: "Venda de hardwares específicos, desde memórias e processadores até placas para upgrade de sistemas.",
  },
  {
    icon: Wifi,
    title: "Equipamentos de Rede",
    desc: "Roteadores, switches e soluções de conectividade para garantir a estabilidade da sua operação.",
  },
  {
    icon: Monitor,
    title: "Periféricos Corporativos",
    desc: "Linha completa de acessórios e componentes necessários para o dia a dia das equipes de tecnologia.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    desc: "Trabalhamos apenas com peças certificadas e de alta durabilidade.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    desc: "Além de vender a peça, auxiliamos na escolha técnica ideal para a sua necessidade.",
  },
  {
    icon: Zap,
    title: "Entrega Ágil",
    desc: "Foco no atendimento rápido para que sua operação de TI nunca fique parada.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-sm text-accent font-medium mb-3">Hardware e Infraestrutura</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Peças e Equipamentos de <span className="text-gradient">Alta Performance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {products.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 hover:shadow-glow transition-all"
              >
                <div className="w-11 h-11 rounded-xl glass grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all">
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-card p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Por que escolher nossos <span className="text-gradient">equipamentos?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{r.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
