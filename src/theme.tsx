"use client";

import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import {
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
  secondary: "#000000",
  tertiary: '#555',
  headingHighlight: '#1976d2'
  // headingHighlight: "hsl(143.9deg 75.46% 31.96%)",
  // secondary: "hsl(228deg 85.29% 50.31%);",
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 12,
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      color: textColors.primary,
    },
    h2: {
      fontSize: "46px",
      fontWeight: 700,
      color: textColors.primary,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: textColors.headingHighlight,
      textAlign: "center",
      marginBottom:'2em'
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
      color: textColors.tertiary,
      marginBottom: "0.7rem",
      // marginTop: "1.2rem"
    },
    h6: {
      fontWeight: 500,
      color: textColors.primary,
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
      main: '#0073e7',
  light: 'hsl(210.13deg 100% 45.29% / 40%)',
  dark: '#1565c0',
  contrastText: '#fff',
    },
    secondary: {
      main: "hsl(143.9deg 75.46% 31.96%)",
      light: "hsl(143.9deg 75.46% 31.96%)",
      dark: "hsl(143.9deg 75.46% 31.96%)",
    },
    background: {
      default: "white",
    },
    text: {
      primary: textColors.primary,
      secondary: textColors.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1.5em",
          gap: "3px",
          boxShadow: "none",
          fontSize: "16px",
          textTransform: "none",
          color: "white",
          padding: "6px 6px 6px 12px",
          minHeight:'30px',
        },
      },
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
