module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: "var(--font-family-quantico)",
        raleway: "var(--font-family-raleway)",
      },
      boxShadow: {
        md: "0 0 24px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
