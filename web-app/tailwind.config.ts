import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        '50': '12.5rem',
        '25': '6.25rem'
      },
      width: {
        '100': '22rem',
      },
      height: {
        '300': '45rem'
      },
      borderRadius: {
        '70': '44px'
      }
    },
  },
  plugins: [],
};
export default config;
