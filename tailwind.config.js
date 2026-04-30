/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nomi: {
          cream: "#F6EBC9",
          sand: "#EACF9E",
          brown: "#6F5B3E",
          navy: "#2E3A46",
          sage: "#7DA07A",
          coral: "#E89683",
          pink: "#E9A99A",
          night: "#141E2E",
          dusk: "#1F2D42",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "night-sky":
          "radial-gradient(ellipse 120% 80% at 50% 0%, #2a3f5c 0%, #141E2E 45%, #0d1520 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(246, 235, 201, 0.15)",
        "glow-sm": "0 0 20px rgba(246, 235, 201, 0.12)",
      },
    },
  },
  plugins: [],
};
