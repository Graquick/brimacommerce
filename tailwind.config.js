/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // "false" or "media"
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      m2xl: { min: "1440px" },
      // => @media (min-width: 1440px) { ...

      xl: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      mxl: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      lg: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      mlg: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      md: { max: "425px" },
      // => @media (max-width: 425px) { ... }

      sm: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      xs: { max: "320px" },
      // => @media (max-width: 320px) { ... }
      m425: { min: "426px" },
      // => @media (min-width: 426px) { ... }
    },
    fontFamily: {
      raleway: "Raleway, sans-serif",
      fira: "Fira Mono, monospace",
      poppins: "Poppins, sans-serif",
      spline: "Spline Sans Mono, monospace",
      didot: "GFS Didot, serif",
    },
  },
  plugins: [],
};
