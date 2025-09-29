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
    primary: "bg-slate-800 text-white hover:bg-slate-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl"
  };
  
  const sizes = {
    default: "px-6 py-3 text-base",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
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