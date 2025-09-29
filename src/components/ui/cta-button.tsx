import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ 
  children, 
  variant = "primary", 
  size = "default",
  className,
  onClick 
}: CTAButtonProps) => {
  const baseStyles = "relative overflow-hidden group font-rubik font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-white/15 hover:ring-primary/40 whitespace-nowrap";
  
  const variants = {
    primary: "bg-gradient-gold text-secondary hover:shadow-gold border-0",
    secondary: "bg-gradient-blue text-white hover:shadow-blue border-0"
  };
  
  const sizes = {
    default: "px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg min-h-[44px] w-auto",
    lg: "px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl min-h-[52px] w-auto"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      variant={undefined}
      size={undefined}
    >
      {/* shimmer */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-sheen pointer-events-none" />
      <span className="relative z-[1]">{children}</span>
    </Button>
  );
};