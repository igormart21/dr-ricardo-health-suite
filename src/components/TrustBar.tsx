export const TrustBar = () => {
  const items = [
    { label: "CRM Regularizado", icon: "✅" },
    { label: "Ambiente Seguro", icon: "🔒" },
    { label: "Atendimento Humanizado", icon: "🤝" },
    { label: "Baseado em Evidências", icon: "📚" },
  ];

  return (
    <section className="py-4 md:py-8 bg-background/60 backdrop-blur-sm border-t border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 text-secondary">
              <span className="text-xl">{item.icon}</span>
              <span className="font-rubik text-xs md:text-sm lg:text-base opacity-80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


