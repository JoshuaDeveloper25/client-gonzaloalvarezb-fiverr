/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D7282F",
        "secondary-color": "#76777A",
        "tertiary-color": "#F1F1F1"
      },
    },
  },
  plugins: [],
};
