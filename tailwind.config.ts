import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        viking: {
          "50": "#edfdfe",
          "100": "#d2f8fb",
          "200": "#aaeff7",
          "300": "#70e1f0",
          "400": "#3bcde3",
          "500": "#13adc7",
          "600": "#138aa7",
          "700": "#166f88",
          "800": "#1b5b6f",
          "900": "#1b4c5e",
          "950": "#0c3140",
        },
      },
    },
  },
};
