/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#09090b",
        surface: "#131316",
        border: "#232328",
        accent: {
          from: "#818cf8",
          to: "#c084fc",
        },
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
