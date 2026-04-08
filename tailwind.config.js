module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },

  plugins: [],
};