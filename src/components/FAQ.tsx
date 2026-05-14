import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto tempo leva pra entregar um sistema?", a: "Depende do escopo. Um MVP funcional sai entre 4 e 8 semanas. Sistemas maiores são quebrados em entregas menores pra você ver valor desde o começo." },
  { q: "Vocês trabalham com manutenção depois da entrega?", a: "Sim. Oferecemos planos de evolução contínua: correções, novas features e monitoramento mensal." },
  { q: "O código fica comigo?", a: "100%. Todo código, banco de dados e infraestrutura ficam no seu nome. Sem aprisionamento." },
  { q: "Vocês fazem integração com sistemas que já uso?", a: "Sim. Integramos com ERPs, gateways de pagamento, WhatsApp, e-mail, planilhas e qualquer serviço com API." },
  { q: "Como funciona o orçamento?", a: "Conversa inicial gratuita. A partir do escopo, montamos uma proposta com prazo, escopo e valor fixo — sem surpresa." },
  { q: "Posso começar pequeno e evoluir depois?", a: "Esse é o jeito que recomendamos. Começa pelo essencial, valida com usuários reais e cresce com base no que funciona." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 relative border-y border-border bg-surface/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="text-sm text-accent font-medium mb-3">Perguntas frequentes</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Dúvidas <span className="text-gradient">comuns</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-gradient-card px-6 !border-b">
              <AccordionTrigger className="font-display text-base md:text-lg font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
