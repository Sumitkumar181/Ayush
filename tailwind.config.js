module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["barlow"],
      },
      colors: {
        "light-white": "#FEF2F2",
        "dark-red": "#DC2626",
        "heading Color": "#030712",
        "Dark-grayish-blue": "#9CA3AF",
        "borderGray": "#E5E7EB",
      },
    },
  },
  plugins: [],
};
