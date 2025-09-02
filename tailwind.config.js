import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        primary: ["'Inter', sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#409EF6",
        secondary: "#0F85F4",
        heading: "#333333",
        body: "#999999",
        grayLight: "#FCFCFC",
        dark: "#202936",
        light: "#F9F9F9",
        lightest: "#FEFEFE",
        success: "#32C98D",
        warning: "#F69840",
        teal: "#611BCB",
        danger: "#FF5066",
        border: "#E1E5EC",
        borderLight: "#F2F4F6",
        supportingA: "#D15AFB",
        supportingB: "#FCA785",
        supportingC: "#9F1178",
        supportingD: "#C2F39C",
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1201px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }

      xxxl: "1600px",
      // => @media (min-width: 1601px) { ... }

      "4xl": "1800px",
      // => @media (min-width: 1601px) { ... }

      max3Xl: { max: "11799px" },
      // => @media (max-width: 1700px) { ... }

      max2Xl: { max: "1599px" },
      // => @media (max-width: 1600px) { ... }

      maxXl: { max: "1399px" },
      // => @media (max-width: 1200px) { ... }

      maxLg: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      maxMd: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      maxSm: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      maxXs: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      minMax4Xl: { min: "1800px", max: "1900px" },
      // => @media (min-width: 1601px) and (max-width: 1800px) { ... }

      minMax3Xl: { min: "1601px", max: "1799px" },
      // => @media (min-width: 1601px) and (max-width: 1800px) { ... }

      minMax2Xl: { min: "1400px", max: "1600px" },
      // => @media (min-width: 1400px) and (max-width: 1600px) { ... }

      minMaxXl: { min: "1201px", max: "1399px" },
      // => @media (min-width: 1201px) and (max-width: 1400px) { ... }

      minMaxLg: { min: "992px", max: "1200px" },
      // => @media (min-width: 992px) and (max-width: 1200px) { ... }

      minMaxMd: { min: "768px", max: "991px" },
      // => @media (min-width: 768px) and (max-width: 991px) { ... }

      minMaxSm: { min: "576px", max: "767px" },
      // => @media (min-width: 576px) and (max-width: 576px) { ... }
    },
  },

  plugins: [forms],
};
