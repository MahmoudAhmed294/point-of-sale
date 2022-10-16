import { Global } from "@mantine/core";

import regular from "../assets/fonts/Montserrat-Regular.ttf";
import font600 from "../assets/fonts/Montserrat-Bold.ttf";

export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        FontFamily: [
          {
            "@font-face": {
              fontFamily: "Montserrat",
              src: `url('${regular}') format("truetype")`,
              fontWeight: 400,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Montserrat",
              src: `url('${font600}') format("truetype")`,
              fontWeight: 600,
              fontStyle: "normal",
            },
          },
         
        ],

        body: {
          ...theme.fn.fontStyles(),
          backgroundImage: `#FAFAFA`,
          lineHeight: theme.lineHeight,
          fontFamily: "Montserrat",
          color:"#00154D",
          fontSize:16,
          overflowX: "hidden",
          fontWeight: 400,
        },
      })}
    />
  );
}
