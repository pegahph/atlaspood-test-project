/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#C4A484",
          50: "#F5ECE4",
          100: "#EEDBD2",
          200: "#E0C2A8",
          300: "#D3A87F",
          400: "#C68F55",
          500: "#C4A484", // Main color
          600: "#8C6743",
          700: "#634B2F",
          800: "#3A2F1B",
          900: "#110806",
        },
        darkbrown: {
          DEFAULT: "#5C4033",
          50: "#D9D2CE",
          100: "#CEC3BD",
          200: "#B8A69C",
          300: "#A3887C",
          400: "#8E6A5B",
          500: "#5C4033", // Main color
          600: "#3C2A21",
          700: "#1C130F",
          800: "#040404",
          900: "#000000",
        },
        lightbrown: {
          DEFAULT: "#A67B5B",
          50: "#F2EAE5",
          100: "#E6D4C8",
          200: "#D3B69F",
          300: "#C09877",
          400: "#AD7A4E",
          500: "#A67B5B", // Main color
          600: "#7C5232",
          700: "#563C25",
          800: "#312517",
          900: "#0C0E0A",
        },
        gray: {
          DEFAULT: "#D3D3D3",
          50: "#FFFFFF",
          100: "#FEFEFE",
          200: "#FBFBFB",
          300: "#F7F7F7",
          400: "#F0F0F0",
          500: "#D3D3D3", // Main color
          600: "#9A9A9A",
          700: "#616161",
          800: "#282828",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
