/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        secondary: "#767676",
      },
      spacing: {
        "30px": "30px",
        "200px": "200px",
        "263px": "263px",
        "305px": "305px",
        "360px": "360px",
        "370px": "370px",
        "420px": "420px",
        "601px": "601px",
      },
      fontSize: {
        "40px": "40px",
        "17px": "17px",
        "10px": "10px",
      },
      boxShadow: {
        outerShadow: " 0px 0px 5px 0px rgba(255,255,255,1)",
        outerShadow2: "  2px 2px 5px 0px rgba(216,216,216,1)",
      },
    },
  },
  plugins: [],
};
