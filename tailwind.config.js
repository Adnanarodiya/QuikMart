/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",

          secondary: "#ffffff",

          accent: "#ffffff",

          neutral: "#000000",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#ffffff",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
};
