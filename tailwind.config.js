const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#19142A",
        secondary: "#2A2344",
        redcake: "#D6223B",
        ghost: "#F8F8FF",
      },
      fontFamily: {
        nunitosans: ["Nunito Sans"],
        pops: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
