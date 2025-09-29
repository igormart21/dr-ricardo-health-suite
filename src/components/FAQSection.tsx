import { Section, SectionHeader } from "@/components/ui/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQSection = () => {
  const items = [
    { q: "Como é a primeira consulta?", a: "Conversa detalhada, avaliação e, se necessário, solicitação de exames." },
    { q: "Vocês atendem terapia hormonal?", a: "Sim, com protocolo médico e monitoramento por exames." },
    { q: "Qual a frequência de retorno?", a: "Varia por caso; normalmente a cada 30–90 dias para ajustes." },
    { q: "Atende atletas iniciantes?", a: "Sim, de iniciantes a avançados, sempre com foco em segurança." },
  ];

  return (
    <Section glow="mixed" background="luxury">
      <SectionHeader title="Perguntas Frequentes" />
      <div className="max-w-4xl md:max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-montserrat text-sm md:text-base text-secondary text-left">
                {it.q}
              </AccordionTrigger>
              <AccordionContent>
                <div className="backdrop-blur-glass bg-gradient-glass border border-white/20 rounded-2xl p-3 md:p-4 shadow-glass">
                  <p className="font-rubik text-sm md:text-base text-muted-foreground">{it.a}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};


