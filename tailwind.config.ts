import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.3"
          },
          "33%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.8"
          },
          "66%": {
            transform: "translateY(-10px) translateX(-15px)",
            opacity: "0.6"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 8s ease-in-out infinite",
        "float-delay-1": "float 10s ease-in-out infinite 2s",
        "float-delay-2": "float 12s ease-in-out infinite 4s",
        "float-delay-3": "float 9s ease-in-out infinite 6s",
      },
      backgroundImage: {
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-gold-radial': 'var(--gradient-gold-radial)',
        'gradient-blue': 'var(--gradient-blue)',
        'gradient-blue-radial': 'var(--gradient-blue-radial)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-luxury': 'var(--gradient-luxury)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-glass-gold': 'var(--gradient-glass-gold)',
        'gradient-glass-blue': 'var(--gradient-glass-blue)',
      },
      boxShadow: {
        'gold': 'var(--shadow-gold)',
        'blue': 'var(--shadow-blue)',
        'elegant': 'var(--shadow-elegant)',
        'glass': 'var(--shadow-glass)',
        'glass-inset': 'var(--shadow-glass-inset)',
        'glow-gold': 'var(--shadow-glow-gold)',
        'glow-blue': 'var(--shadow-glow-blue)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '12px',
        'luxury': '16px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
