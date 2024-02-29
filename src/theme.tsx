"use client";

import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Josefin_Sans,
  Poppins,
  Roboto,
  Jost,
  Epilogue,
  Inter,
} from "next/font/google";
import { text } from "stream/consumers";

const font = Inter({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const textColors = {
  primary: "#121619",
  secondary: "#000000;",
  tertiary: "#121619",
  headingHighlight: "hsl(143.9deg 75.46% 31.96%)",
  // secondary: "hsl(228deg 85.29% 50.31%);",
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 12,
    h1: {
      fontSize: '56px',
      fontWeight: 700,
      color: textColors.primary,
    },
    h2: {
      fontSize: '46px',
      fontWeight: 700,
      color: textColors.primary,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: textColors.headingHighlight,
      textAlign:'center',
      // marginTop: "1.2rem",
    },
    h4: {
      fontWeight: 700,
      color: textColors.primary,
      marginTop: "0.7rem",  
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.57rem",
      fontWeight: 700,
      color: textColors.primary,
      marginBottom: "0.7rem",
      // marginTop: "1.2rem"
    },
    h6: {
      fontWeight: 500,
      color: textColors.tertiary,
    },
    body1: {
      fontSize: "1rem",
      color: textColors.secondary,
    },
    body2: {
      fontSize: "1rem",
      color: textColors.tertiary,
      textAlign: "justify",
    },
    subtitle1: {
      fontSize: "1.2rem",
      color: textColors.primary,
      textAlign: "justify",
    },
  },
  palette: {
    // mode: "dark",
    primary: {
      main: "#FFF",
      light: "#FFF",
      dark: "#000",
    },
    secondary: {
      main: "hsl(143.9deg 75.46% 31.96%)",
      light: "hsl(143.9deg 75.46% 31.96%)",
      dark: "hsl(143.9deg 75.46% 31.96%)",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: textColors.primary,
      secondary: textColors.secondary,
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
