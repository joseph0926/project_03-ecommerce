/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loadingText: "loadingText 3s ease-in-out infinite",
        ring: "ring 2s linear infinite",
      },
      keyframes: {
        loadingText: {
          "50%": { color: "black" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)", boxShadow: "1px 5px 2px #e68200" },
          "50%": { transform: "rotate(180deg)", boxShadow: "1px 5px 2px #e64500" },
          "100%": { transform: "rotate(360deg)", boxShadow: "1px 5px 2px #e60000" },
        },
      },
    },
    plugins: [require("./plugins/openVariant.cjs")],
  },
};
