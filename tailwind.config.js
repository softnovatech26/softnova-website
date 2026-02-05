/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",   //  This enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },

      keyframes: {
        scrollRightToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollRightToLeft: "scrollRightToLeft 20s linear infinite",
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],

        futura: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
