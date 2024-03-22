import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-pink":
          "linear-gradient(90deg, rgba(198,35,104,1) 0%, rgba(250,114,104,1) 100%)",
        wave: "background: url(../public/layered-waves-haikei.svg); background-repeat: no-repeat; background-size: cover; background-position: 75% 0;",
      },
      colors: {
        "black-100": "#18181B",
        purple: "#5E1D76",
        "purple-500": "#471557",
        "purple-200": "#7D3796",
        "white-100": "#fafafa",
        lavender: "#D8D8F6",
        night: "#151414",
        mediumslateblue: "#685CFE",
        salmon: "#fa7268",
        indianred: "#EF5F67",
      },
      boxShadow: {
        md: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      animation: {
        "fade-in-to-left": "fade-in-to-left 1s ease-in-out",
      },
      keyframes: {
        "fade-in-to-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
