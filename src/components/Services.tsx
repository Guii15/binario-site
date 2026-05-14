import { Layout, Database, Plug, ShieldCheck, LineChart, Wrench } from "lucide-react";

const services = [
  { icon: Layout, title: "Sistemas web sob medida", desc: "Plataformas internas, portais e dashboards construídos do zero." },
  { icon: Database, title: "Banco de dados & APIs", desc: "Modelagem, APIs REST e integrações entre sistemas." },
  { icon: Plug, title: "Integrações", desc: "ERPs, gateways, e-mail, WhatsApp e qualquer serviço externo." },
  { icon: ShieldCheck, title: "Autenticação & permissões", desc: "Login, perfis e controle de acesso por nível e por área." },
  { icon: LineChart, title: "Relatórios & BI", desc: "Painéis e exportações que ajudam a tomar decisão." },
  { icon: Wrench, title: "Manutenção & evolução", desc: "Acompanhamento contínuo, correções e novas features." },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-sm text-accent font-medium mb-3">Serviços</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            O que a gente <span className="text-gradient">entrega</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 hover:shadow-glow transition-all">
                <div className="w-11 h-11 rounded-xl glass grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all">
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
