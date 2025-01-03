import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {
            background: "#E4E4E7",
            foreground: "#11181C",
          },
        },
      },
    }),
  ],
} satisfies Config;
