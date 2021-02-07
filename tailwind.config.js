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
      backgroundSize: {
        100: "30rem",
        full: "100%",
      },
      colors: {
        text: "#291507",
        main: "#E3E1DC",
        highlight: "#DEC68B",
      },
      borderColor: {
        accent: "#4D270C",
      },
      fontFamily: {
        site: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus", "group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
