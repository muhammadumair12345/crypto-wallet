/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      primary: "#399aff",
      secondary: "#b436e9",
      dark: "#222222",
      light: "#F9FAFB",
      gradient:
        "linear-gradient(90deg, rgba(140,65,192,1) 25%, rgba(180,54,233,1) 76%, rgba(75,149,227,1) 100%);",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
