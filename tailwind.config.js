/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E21E31",
        "secondary-color": "#76777A",
      },
    },
  },
  plugins: [],
};
