import { ArrowUpRight, ShoppingCart, Package, RotateCcw, Headphones, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  href: string;
  status: "Online" | "Interno" | "Em desenvolvimento";
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Requisição de Compras",
    description:
      "Plataforma completa para fluxo de aprovação de compras: solicitações, cotações, aprovações multinível e histórico auditável.",
    href: "#",
    status: "Online",
    icon: ShoppingCart,
    className: "md:col-span-2 md:row-span-2",
    accent: "from-primary/40 to-accent/20",
  },
  {
    title: "Catálogo",
    description: "Vitrine digital de produtos com busca inteligente e categorias dinâmicas.",
    href: "#",
    status: "Online",
    icon: Package,
    className: "md:col-span-2",
    accent: "from-accent/40 to-primary/20",
  },
  {
    title: "RMA",
    description: "Gestão de devoluções e garantias ponta a ponta.",
    href: "#",
    status: "Online",
    icon: RotateCcw,
    className: "",
    accent: "from-primary/30 to-accent/30",
  },
  {
    title: "Chamados",
    description: "Help desk interno com SLA e priorização automática.",
    href: "#",
    status: "Interno",
    icon: Headphones,
    className: "",
    accent: "from-accent/30 to-primary/40",
  },
  {
    title: "Em desenvolvimento",
    description: "Novos sistemas chegando — automação, BI e integrações entre os módulos.",
    href: "#contato",
    status: "Em desenvolvimento",
    icon: Sparkles,
    className: "md:col-span-2",
    accent: "from-primary/20 to-accent/40",
  },
];

const statusStyles: Record<Project["status"], string> = {
  Online: "bg-accent/15 text-accent border-accent/30",
  Interno: "bg-primary/15 text-primary border-primary/30",
  "Em desenvolvimento": "bg-muted text-muted-foreground border-border",
};

export function ProjectsBento() {
  return (
    <section id="projetos" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <div className="text-sm text-accent font-medium mb-3">Portfólio</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Nossos sistemas no ar
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cada projeto resolve uma dor real. Construídos com obsessão por UI e UX que convertem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.title}
                href={p.href}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/50 transition-all hover:shadow-glow ${p.className}`}
              >
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${p.accent} group-hover:opacity-80 transition-opacity`}
                />
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl glass grid place-items-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
