import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FA45B",
        "primary-text": "#393939",
        "secondary-text": "#7E7E7E",
        icon: "#868686",
        "primary-bg": "#E8F0F5",
        "secondary-bg": "#F7F8FA",
      },
      screens: {
        xs: "425px",
        "2xl": "1440px",
        "3xl": "1640px",
      },
    },
  },
  plugins: [],
};
export default config;
