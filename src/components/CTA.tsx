import { MapPin, Phone, ExternalLink } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
          Tem uma ideia? <br />
          <span className="text-gradient">A gente constrói.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
          Sistemas internos, plataformas para clientes, automações. Conta pra gente o que precisa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:suporte.2@binariotecnologia.com.br"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            suporte.2@binariotecnologia.com.br
          </a>
          <a
            href="https://wa.me/553598998455?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20sistemas%20da%20Binário%20Tecnologia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-surface transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sobre nós */}
          <div>
            <img
              src="/logo.png"
              alt="Binário Tecnologia"
              className="h-12 w-auto object-contain brightness-0 invert opacity-80 mb-5"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Desde 1997, a Binário Tecnologia é referência em distribuição de hardware e infraestrutura de TI em Minas Gerais. Mais de 27 anos entregando tecnologia de verdade para lojistas e empresas de todo o estado.
            </p>
            <p className="text-xs text-muted-foreground/50">
              A maior distribuidora de TI de Minas Gerais.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">Navegação</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
              <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
              <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
            </nav>
          </div>

          {/* Onde estamos */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">Onde estamos</h4>
            <div className="rounded-xl overflow-hidden border border-border mb-5 h-40">
              <img
                src="/fachada.jpg"
                alt="Binário Tecnologia — Fachada"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <span>Av. Rogassiano Francisco Coelho, 195 — Nova Varginha, Varginha — MG, 37077-000</span>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <a href="tel:+553532223003" className="hover:text-foreground transition-colors">(35) 3222-3003</a>
              </div>
              <a
                href="https://maps.google.com/?q=-21.5752437,-45.4521265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/70 transition-colors mt-1"
              >
                <ExternalLink className="w-3 h-3" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Binário Tecnologia. Desde 1997.</span>
          <div className="flex items-center gap-4">
            <a href="mailto:suporte.2@binariotecnologia.com.br" className="hover:text-foreground transition-colors">suporte.2@binariotecnologia.com.br</a>
            <span>·</span>
            <a href="tel:+553598998455" className="hover:text-foreground transition-colors">+55 (35) 9899-8455</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
