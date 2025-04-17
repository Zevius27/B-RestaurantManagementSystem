/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        secondary: "#10b981",
        accent: "#f59e0b",
        dark: "#1f2937",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "slide-in-from-top-5": {
          "0%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        "in": "fade-in 0.2s ease-out, slide-in-from-top-5 0.2s ease-out"
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} 