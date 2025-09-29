import { Section, SectionHeader } from "@/components/ui/Section";

export const ProcessSection = () => {
  const steps = [
    { n: 1, title: "Triagem e conversa inicial", desc: "Entendo seu histórico, objetivos e rotina." },
    { n: 2, title: "Exames e avaliação completa", desc: "Solicitação e análise de exames quando necessário." },
    { n: 3, title: "Plano individualizado", desc: "Estratégia clínica alinhada aos seus objetivos." },
    { n: 4, title: "Acompanhamento contínuo", desc: "Ajustes periódicos para resultados com segurança." },
  ];

  return (
    <Section glow="mixed" background="luxury">
      <SectionHeader title="Como funciona" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative backdrop-blur-luxury bg-gradient-glass border border-white/20 rounded-3xl p-6 md:p-8 shadow-glass text-center group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-gold text-secondary font-montserrat font-bold flex items-center justify-center shadow-gold">{s.n}</div>
              <h3 className="mt-6 font-montserrat font-semibold text-lg md:text-xl text-secondary mb-3">{s.title}</h3>
              <p className="font-rubik text-sm md:text-base text-muted-foreground">{s.desc}</p>
            </div>
          ))}
      </div>
    </Section>
  );
};


