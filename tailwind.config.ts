import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "3.5rem",
        md: "4rem",
        xl: "6rem",
        "2xl": "11rem",
      },
    },
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
    }),
    require("@midudev/tailwind-animations") satisfies Config,
  ],
};
export default config;

