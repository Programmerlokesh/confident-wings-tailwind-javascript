/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
      fontFamily: {
        work: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
