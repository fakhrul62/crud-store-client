/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E3A8A", // Example: Blue
          "primary-focus": "#2563EB",
          "primary-content": "#FFFFFF",

          secondary: "#9333EA", // Example: Purple
          "secondary-focus": "#7E22CE",
          "secondary-content": "#FFFFFF",

          accent: "#10B981", // Example: Green
          "accent-focus": "#047857",
          "accent-content": "#FFFFFF",

          neutral: "#3D4451", // Example: Neutral Gray
          "neutral-focus": "#2A2E37",
          "neutral-content": "#FFFFFF",

          "base-100": "#FFFFFF", // Background color
          "base-200": "#F9FAFB",
          "base-300": "#E5E7EB",
          "base-content": "#151617", // Text color

          info: "#2094F3", // Info alert color
          success: "#22C55E", // Success alert color
          warning: "#FACC15", // Warning alert color
          error: "#EF4444", // Error alert color
        },
        dark: {
          primary: "#1D4ED8", // Example: Dark Blue
          "primary-focus": "#2563EB",
          "primary-content": "#E0F2FE",

          secondary: "#7C3AED", // Example: Deep Purple
          "secondary-focus": "#6B21A8",
          "secondary-content": "#F5F3FF",

          accent: "#22C55E", // Example: Bright Green
          "accent-focus": "#166534",
          "accent-content": "#ECFDF5",

          neutral: "#374151", // Dark Neutral Gray
          "neutral-focus": "#1F2937",
          "neutral-content": "#D1D5DB",

          "base-100": "#151617", // Dark background color
          "base-200": "#2b2b2e",
          "base-300": "#0F172A",
          "base-content": "#E5E7EB", // Light text color

          info: "#3B82F6", // Info alert color
          success: "#16A34A", // Success alert color
          warning: "#F59E0B", // Warning alert color
          error: "#DC2626", // Error alert color
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        mongo: "#3cad45",
        fireb: "#f26120",
      },
      fontFamily: {
        logo: "Anta, sans-serif",
        body: "Oswald, serif",
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
