/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
  fontFamily: {
      manrope: ["var(--font-manrope)"],
      "space-grotesk": ["var(--font-space-grotesk)"],
},
};
