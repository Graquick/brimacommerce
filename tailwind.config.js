/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // "false" or "media"
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#6d706f",
          200: "#20c991",
          300: "#ff1f4f",
          400: "#dae0de",
          500: "#ffffff",
        },
      },
      gridTemplateColumns: {
        fit: "25px repeat(11,1fr 15px) 1fr 25px",
      },
    },
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
