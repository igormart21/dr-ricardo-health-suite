import { Section } from "@/components/ui/Section";
export const StatsSection = () => {
  const stats = [
    { value: "+1.5k", label: "Consultas realizadas" },
    { value: "+8", label: "Anos de experiência" },
    { value: "100%", label: "Acompanhamento individualizado" },
    { value: "+4.8★", label: "Satisfação de pacientes" },
  ];

  return (
    <Section glow="gold" background="luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center backdrop-blur-glass bg-gradient-glass border border-white/20 rounded-3xl p-4 md:p-8 shadow-glass">
              <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl text-secondary mb-2">{s.value}</div>
              <div className="font-rubik text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
    </Section>
  );
};


