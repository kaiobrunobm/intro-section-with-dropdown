/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    fontSize: {
      paragraph: ["17px"],
    },
    colors: {
      AlmostWhite: "hsl(0, 0%, 98%)",
      MediumGray: "hsl(0, 0%, 41%)",
      AlmostBlack: "hsl(0, 0%, 8%)",
      Purple: "#7372cb",
      Blue: "#43aed9",
      Yellow: "#efd74f",
      DarkPurple: "#824fba",
      LinkHover: "#00000010",
    },
  },
  plugins: [],
};
