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
        background: "#151515",
        light: "#ffffff",
        text: "#9c9c9c",
        gray: "#202022",
      },
    },
  },
  plugins: [],
};
