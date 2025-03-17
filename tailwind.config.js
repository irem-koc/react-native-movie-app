/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#2A1A40",
        light: {
          100: "#F4F2FF",
          200: "#DCCFFF",
          300: "#B6A6FF",
        },
        dark: {
          100: "#1E0B33",
          200: "#150829",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
