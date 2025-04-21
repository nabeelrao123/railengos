import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {

    extend: {
      colors: {
        primary: '#401674',
        secondary: '#A32CCA',
        light: '#F0F0F0',
        dark: '#333333',
        textPrimary: '#060606',
        textSecondary: '#424242',
        accent: '#E0C3FC',
        neutral: {
          800: '#3F1662',
          700: '#060606',
          600:'#3F1662',
          500:'#4D4D4D'
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    // extend: {
    //   fontFamily: {
    //     inter: ["Inter", "sans-serif"],
    //   },
    //   colors: {
    //     border: "hsl(var(--border))",
    //     input: "hsl(var(--input))",
    //     ring: "hsl(var(--ring))",
    //     white: "#FFFFFF",
    //     background: "#181818",
    //     foreground: "hsl(var(--foreground))",
    //     primary: {
    //       DEFAULT: "hsl(var(--primary))",
    //       foreground: "hsl(var(--primary-foreground))",
    //     },
    //     secondary: {
    //       DEFAULT: "hsl(var(--secondary))",
    //       foreground: "hsl(var(--secondary-foreground))",
    //     },
    //     destructive: {
    //       DEFAULT: "hsl(var(--destructive))",
    //       foreground: "hsl(var(--destructive-foreground))",
    //     },
    //     muted: {
    //       DEFAULT: "hsl(var(--muted))",
    //       foreground: "hsl(var(--muted-foreground))",
    //     },
    //     accent: {
    //       DEFAULT: "hsl(var(--accent))",
    //       foreground: "hsl(var(--accent-foreground))",
    //     },
    //     popover: {
    //       DEFAULT: "hsl(var(--popover))",
    //       foreground: "hsl(var(--popover-foreground))",
    //     },
    //     card: {
    //       DEFAULT: "hsl(var(--card))",
    //       foreground: "hsl(var(--card-foreground))",
    //     },
    //     success: {
    //       light: "#d4edda",
    //       DEFAULT: "#28a745",
    //       dark: "#155724",
    //     },
    //     danger: {
    //       light: "#f8d7da",
    //       DEFAULT: "#dc3545",
    //       dark: "#721c24",
    //     },
    //   },
    //   borderRadius: {
    //     lg: "var(--radius)",
    //     md: "calc(var(--radius) - 2px)",
    //     sm: "calc(var(--radius) - 4px)",
    //   },
    //   keyframes: {
    //     "accordion-down": {
    //       from: { height: "0" },
    //       to: { height: "var(--radix-accordion-content-height)" },
    //     },
    //     "accordion-up": {
    //       from: { height: "var(--radix-accordion-content-height)" },
    //       to: { height: "0" },
    //     },
    //   },
    //   animation: {
    //     "accordion-down": "accordion-down 0.2s ease-out",
    //     "accordion-up": "accordion-up 0.2s ease-out",
    //   },
    // },
  },
  // plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
