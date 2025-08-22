import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        portfolio: {
          primary: "var(--portfolio-primary)",
          secondary: "var(--portfolio-secondary)",
          accent: "var(--portfolio-accent)",
          surface: "var(--portfolio-surface)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        inter: ["Inter", "sans-serif"],
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
        float: {
          "0%, 100%": { 
            transform: "translateY(0px)" 
          },
          "50%": { 
            transform: "translateY(-20px)" 
          },
        },
        fadeIn: {
          "0%": { 
            opacity: "0" 
          },
          "100%": { 
            opacity: "1" 
          },
        },
        slideUp: {
          "0%": { 
            transform: "translateY(40px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1" 
          },
        },
        aiFloat: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg) scale(1)"
          },
          "25%": {
            transform: "translateY(-20px) rotate(5deg) scale(1.1)"
          },
          "50%": { 
            transform: "translateY(-30px) rotate(0deg) scale(1.05)"
          },
          "75%": {
            transform: "translateY(-20px) rotate(-5deg) scale(1.1)"
          },
        },
        robotBounce: {
          "0%, 100%": { 
            transform: "translateY(0px) rotateX(0deg)"
          },
          "50%": { 
            transform: "translateY(-15px) rotateX(10deg)"
          },
        },
        mlPulse: {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "0.8"
          },
          "50%": { 
            transform: "scale(1.2)",
            opacity: "1"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "ai-float": "aiFloat 8s ease-in-out infinite",
        "robot-bounce": "robotBounce 3s ease-in-out infinite",
        "ml-pulse": "mlPulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
