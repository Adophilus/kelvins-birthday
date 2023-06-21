import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        bungee: ["Bungee", "cursive"],
        robotoMono: ["Roboto Mono", "monospace"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
