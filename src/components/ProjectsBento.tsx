import { ArrowUpRight, ShoppingCart, Package, RotateCcw, Headphones, Truck } from "lucide-react";

type Project = {
  title: string;
  description: string;
  href: string;
  status: "Online" | "Interno" | "Em desenvolvimento";
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  accent: string;
  previewImg?: string;
};

const projects: Project[] = [
  {
    title: "Requisição de Compras",
    description:
      "Plataforma completa para fluxo de aprovação de compras: solicitações, cotações, aprovações multinível e histórico auditável.",
    href: "https://requisicao.catalogobinariotec.com.br/login",
    status: "Online",
    icon: ShoppingCart,
    className: "md:col-span-2 md:row-span-2",
    accent: "from-primary/40 to-accent/20",
    previewImg: "/preview-req.jpeg",
  },
  {
    title: "Catálogo",
    description: "Vitrine digital de produtos com busca inteligente e categorias dinâmicas.",
    href: "https://catalogobinariotec.com.br/",
    status: "Online",
    icon: Package,
    className: "md:col-span-2",
    accent: "from-accent/40 to-primary/20",
    previewImg: "/preview-catalogo.jpeg",
  },
  {
    title: "RMA",
    description: "Gestão de devoluções e garantias ponta a ponta.",
    href: "https://rma.binariotecnologia.com/",
    status: "Online",
    icon: RotateCcw,
    className: "",
    accent: "from-primary/30 to-accent/30",
    previewImg: "/preview-rma.jpeg",
  },
  {
    title: "Chamados",
    description: "Help desk interno com SLA e priorização automática.",
    href: "#",
    status: "Interno",
    icon: Headphones,
    className: "",
    accent: "from-accent/30 to-primary/40",
    previewImg: "/preview-chamados.jpeg",
  },
  {
    title: "Rastreamento de Cargas",
    description: "Sistema de rastreamento de cargas em tempo real — acompanhamento de entregas, status de pedidos e histórico logístico.",
    href: "#contato",
    status: "Em desenvolvimento",
    icon: Truck,
    className: "md:col-span-2",
    accent: "from-primary/20 to-accent/40",
  },
];

const statusStyles: Record<Project["status"], string> = {
  Online: "bg-accent/15 text-accent border-accent/30",
  Interno: "bg-primary/15 text-primary border-primary/30",
  "Em desenvolvimento": "bg-muted text-muted-foreground border-border",
};

function BrowserPreview({ src, large }: { src: string; large?: boolean }) {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-white/10 bg-surface flex flex-col ${large ? "h-64" : "h-36"}`}>
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 border-b border-white/5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 relative overflow-hidden">
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[340px] gap-4">
          {projects.map((p) => {
            const Icon = p.icon;
            const isLarge = p.className.includes("row-span-2");
            return (
              <a
                key={p.title}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-5 hover:border-primary/50 transition-all hover:shadow-glow ${p.className}`}
              >
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${p.accent} group-hover:opacity-70 transition-opacity`}
                />
                <div className="relative h-full flex flex-col gap-3">
                  {/* cabeçalho */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl glass grid place-items-center shrink-0">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* preview do site */}
                  {p.previewImg && (
                    <BrowserPreview src={p.previewImg} large={isLarge} />
                  )}

                  {/* título e descrição */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
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
