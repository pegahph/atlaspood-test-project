/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primary: {
          main: "#49443E",
        },
        gray: {
          DEFAULT: "#D3D3D3",
          50: "#FFFFFF",
          100: "#FEFEFE",
          200: "#FBFBFB",
          300: "#F7F7F7",
          400: "#F0F0F0",
          500: "#D3D3D3", // Main color
          600: "#898581",
          700: "#616161",
          800: "#282828",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
