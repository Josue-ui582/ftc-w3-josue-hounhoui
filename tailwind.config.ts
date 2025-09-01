import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { // les styles globals
        darkBlue: "var(--dark-blue)",
        monYellow: "var(--mon-yellow)",
        pinkRed: "var(--pink-red)",
        greenLight: "var(--gree-light)",
        orangeShine: "var(--orange-shine)",
        blueSea: "var(--blue-sea)",
        neutral100: "var(--neutral-color-100)",
        neutral80: "var(--neutral-color-80)",
        neutral60: "var(--neutral-color-60)",
        neutral40: "var(--neutral-color-40)",
        neutral20: "var(--neutral-color-20)",
        neutral10: "var(--neutral-color-10)",
        neutral0: "var(--neutral-color-0)",
      },
      fontFamily: { // la police d'écriture globale
        nunito: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;