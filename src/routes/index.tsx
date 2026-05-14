import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ProjectsBento } from "@/components/ProjectsBento";
import { Numbers } from "@/components/Numbers";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { CTA, Footer } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binario — Sistemas que geram resultado" },
      {
        name: "description",
        content:
          "Portfólio da Binario: sistemas web sob medida com UI e UX que convertem. Requisição de Compras, Catálogo, RMA, Chamados e mais.",
      },
      { property: "og:title", content: "Binario — Sistemas que geram resultado" },
      {
        property: "og:description",
        content: "Portfólio da Binario: sistemas web sob medida com UI e UX que convertem.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsBento />
        <Numbers />
        <Process />
        <Services />
        <Differentials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
