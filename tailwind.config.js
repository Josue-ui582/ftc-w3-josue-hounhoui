/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        monYellow: "#f7dba7",
        darkBlue: "#003459",
        pinkRed: "#ff564f",
        greenLight: "#34c759",
        orangeShine: "#ff912c",
        blueSea: "#00a7e7",
        neutral100: "#00171f",
        neutral80: "#242b33",
        neutral60: "#667479",
        neutral40: "#99a2a5",
        neutral20: "#ccd1d2",
        neutral10: "#ebeeef",
        neutral0: "#fdfdfd",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};
