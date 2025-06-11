import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
        sub_font: ["var(--font-corinthia)", ...fontFamily.serif],
      },
      colors: {
        dark: "#1b1b1b", //blackish
        light: "#f5f5f5", //whitish
        primary: "#9370DB", // purple
        primaryDark: "#58E6D9", // 80,230,217 //sky blueish
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      ".5xl": { max: "1100px" },
      // => @media (max-width: 1150px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [
    // plugin for scrollbar hiding
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* WebKit */
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0",
            height: "0",
          },
        },
      };
      addUtilities(newUtilities);
    },  ],
} satisfies Config;
