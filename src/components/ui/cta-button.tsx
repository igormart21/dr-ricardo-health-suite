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
  const baseStyles = "font-rubik font-semibold transition-all duration-300 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-gold text-secondary hover:shadow-gold border-0",
    secondary: "bg-gradient-blue text-white hover:shadow-blue border-0"
  };
  
  const sizes = {
    default: "px-8 py-4 text-lg",
    lg: "px-12 py-6 text-xl"
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
    >
      {children}
    </Button>
  );
};