import { Section, SectionHeader } from "@/components/ui/Section";
export const GallerySection = () => {
  const placeholders = Array.from({ length: 6 });
  return (
    <Section glow="mixed" background="luxury">
      <SectionHeader title="Galeria" subtitle="Espaço para inserir suas fotos depois" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-primary/30 bg-background flex items-center justify-center text-muted-foreground">Foto {i+1}</div>
          ))}
        </div>
    </Section>
  );
};


