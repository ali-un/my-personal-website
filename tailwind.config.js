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
        background: "#1a1a1a",
        dark: "#2e2e2e",
        light: "#fdfdfd",
      },
    },
  },
  plugins: [],
};
