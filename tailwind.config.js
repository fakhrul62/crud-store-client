/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        'mongo': '#3cad45',
        'fireb': '#f26120',
      }
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
