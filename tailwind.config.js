module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/HeroImagemd.png')",
      }),
      zIndex: {
        "-1": "-1",
      },
      height: (theme) => ({
        100: "30rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
