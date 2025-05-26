import type { Config } from "tailwindcss";
import * as rtl from "tailwindcss-rtl";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          60: "#A0A3A9",
          80: "#626262",
          100: "#2C3131",
        },
        primary: {
          20: "#F5F8FE",
          40: "#F2F4FF",
          100: "#2752E7",
        },
      },
    },
  },
  plugins: [rtl.default || rtl], // اگر default داشت ازش استفاده کن
};

export default config;
