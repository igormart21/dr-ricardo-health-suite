import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "md" | "lg";
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
  const baseStyles = "font-semibold transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg";
  
  const variants = {
    primary: "!bg-gradient-to-r !from-brand-gold !to-brand-gold-dark !text-brand-blue hover:!from-brand-gold-dark hover:!to-brand-gold hover:!text-brand-blue shadow-lg hover:shadow-gold font-semibold",
    secondary: "!bg-gradient-to-r !from-brand-gold !to-brand-gold-dark !text-brand-blue hover:!from-brand-gold-dark hover:!to-brand-gold hover:!text-brand-blue shadow-lg hover:shadow-gold"
  };
  
  const sizes = {
    default: "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base",
    md: "px-6 py-3 md:px-8 md:py-4 text-base md:text-lg",
    lg: "px-6 py-3 md:px-10 md:py-5 text-base md:text-lg lg:text-xl"
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
      {children}
    </Button>
  );
};