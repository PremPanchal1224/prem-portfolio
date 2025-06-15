
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          blue: '#22d3ee',     // Cyan (sky blue)
          green: '#08DF8D',    // Vivid green
          electric: '#6366f1', // Electric blue-violet
        },
        darkbg: '#111827',      // Dark background
        cardbg: '#1f2937',      // Card background
        section: '#192234'      // Section slightly lighter bg
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(35px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both",
      },
      boxShadow: {
        neon: '0 0 8px 2px #00ffe7, 0 0 24px 2px #2974fa20'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
