import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1140px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1640px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
