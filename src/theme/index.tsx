import React from "react";
import {
  MantineProvider,
  createEmotionCache,
  MantineThemeOverride,
} from "@mantine/core";
import { GlobalStyle } from "./GlobalStyle";
import _default from "react-redux/es/components/connect";

const myCache = createEmotionCache({ key: "mantine" });

const myTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    brand: ["#FAFAFA", "#D3D3D3", "#F19906", "#00154D"],
  },
  primaryColor: "orange",

  radius: {
    xs: 8,
    sm: 12,
    md: 16,
  },
  defaultRadius: "xs",

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  loader: "bars",

  fontFamily: "Montserrat",
  headings: {
    fontWeight: 400,
    fontFamily: "Montserrat",
    sizes: {
      h1: { fontWeight: 600, fontSize: 42, lineHeight: 1.4 },
      h2: { fontWeight: 600, fontSize: 35, lineHeight: 1.4 },
      h3: { fontWeight: 600, fontSize: 30, lineHeight: 1.4 },
      h4: { fontWeight: 600, fontSize: 28, lineHeight: 1.4 },
      h5: { fontWeight: 600, fontSize: 24, lineHeight: 1.4 },
      h6: { fontWeight: 600, fontSize: 20, lineHeight: 1.4 },
    },
  },

  //   components: Components
};

type props = {
  children: React.ReactNode;
};
export default function Index({ children }: props) {
  return (
    <>
      <GlobalStyle />
      <MantineProvider
        emotionCache={myCache}
        withNormalizeCSS
        withGlobalStyles
        theme={myTheme}
      >
        {children}
      </MantineProvider>
    </>
  );
}
