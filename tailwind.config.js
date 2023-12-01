/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#313338",
        dark: "#1e1f22",
        light: "#f2f3f5",
        text: "#b5bac1",
        primary: "#5865f2",
        primary_alt: "#4752c4",
        secondary: "#3e4047",
      },
    },
  },
  plugins: [],
};
