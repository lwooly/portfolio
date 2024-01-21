"use client";

import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Josefin_Sans, Poppins, Roboto } from "next/font/google";
import { text } from "stream/consumers";

const font = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const textColors = {
  primary: "#3c3c3c",
  secondary: "#555;",
  tertiary: "#818181",
  headingHighlight: "hsl(143.9deg 75.46% 31.96%)"//red
  // secondary: "hsl(228deg 85.29% 50.31%);",
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 12,
    h1: {
      fontWeight: 700,
      color: textColors.primary,
    },
    h2: {
      fontWeight: 700,
      color: textColors.primary,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: textColors.headingHighlight,
      marginTop: "1.2rem"
    },
    h4: {
      fontWeight: 700,
      color: textColors.primary,
      marginTop: "1rem"
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: textColors.secondary,
      marginTop: "1.2rem"
    },
    h6: {
      fontWeight: 500,
color: textColors.tertiary,
    },
    body1: {
      fontSize: "1.2rem",
      color: textColors.secondary,
    },
    body2: {
      fontSize: "1.2rem",
      color: textColors.tertiary,
      marginTop: "0.5rem" 
    },
  },
  palette: {
    primary: {
      main: "#FFF",
    },
    // secondary: {
    //   main: '#000',
    // },
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

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
