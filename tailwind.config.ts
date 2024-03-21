import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear-purple":
          "linear-gradient(to right, #5e1d76, #7d3796, #9d51b8, #bf6cdb, #e188ff)",
      },
      colors: {
        "black-100": "#18181B",
        purple: "#5E1D76",
        white: "#fafafa",
        salmon: "#fa7268",
        indianred: "#ef5f67"
      },
      boxShadow: {
        md: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
