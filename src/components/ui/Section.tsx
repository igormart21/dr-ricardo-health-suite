import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  glow?: "gold" | "blue" | "mixed" | "none";
  background?: "solid" | "subtle" | "luxury";
}

export const Section = ({ children, className, glow = "mixed", background = "luxury" }: SectionProps) => {
  return (
    <section className={cn(
      "relative overflow-hidden py-12 md:py-20",
      background === "luxury" ? "bg-gradient-luxury" : background === "subtle" ? "bg-gradient-subtle" : "bg-background",
      className
    )}>
      {glow !== "none" && (
        <>
          {(glow === "gold" || glow === "mixed") && (
            <div className="pointer-events-none absolute -top-16 -left-10 w-96 h-96 bg-gradient-gold-radial blur-3xl opacity-15" />
          )}
          {(glow === "blue" || glow === "mixed") && (
            <div className="pointer-events-none absolute -bottom-16 -right-10 w-96 h-96 bg-gradient-blue-radial blur-3xl opacity-15" />
          )}
        </>
      )}
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ title, subtitle, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-8 md:mb-12", align === "center" ? "text-center" : "text-left") }>
      <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary mb-3 md:mb-4">{title}</h2>
      <div className={cn("w-16 md:w-24 h-1 bg-gradient-gold", align === "center" ? "mx-auto" : "")}></div>
      {subtitle && (
        <p className={cn("font-rubik text-sm md:text-base text-muted-foreground mt-3 md:mt-4", align === "center" ? "mx-auto" : "")}>{subtitle}</p>
      )}
    </div>
  );
};


