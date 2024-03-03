"use client";

import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import { Inter } from "next/font/google";

const font = Inter({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

// Define color variables
const colorVariables = {
  primaryText: "#121619", // Charcoal
  secondaryText: "#000000", // Black
  tertiaryText: "#555", // Dark Grey
  headingHighlight: "#1976d2", // Bright Blue
  primaryMain: "#0073e7", // Vivid Blue
  primaryLight: "hsl(210.13deg 100% 45.29% / 40%)", // Light Blue (with transparency)
  primaryDark: "#1565c0", // Dark Blue
  secondaryMain: "hsl(143.9deg 75.46% 31.96%)", // Vivid Greenish-Blue
  secondaryLight: "hsl(143.9deg 75.46% 31.96% / 40%)", // Light Greenish-Blue (with transparency)
  secondaryDark: "hsl(143.9deg 75.46% 31.96%)", // Dark Greenish-Blue
  buttonBackground: "#1976d2", // Bright Blue (Same as headingHighlight)
  buttonHover: "black", // Black
  largeButtonBackground: "black", // Black
  largeButtonHoverBackground: "white", // White
  largeButtonHoverText: "black", // Black
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 12,
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      color: colorVariables.primaryText,
    },
    h2: {
      fontSize: "46px",
      fontWeight: 700,
      color: colorVariables.primaryText,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: colorVariables.headingHighlight,
      textAlign: "center",
      marginBottom: "2em",
    },
    h4: {
      fontWeight: 700,
      color: colorVariables.primaryText,
      marginTop: "0.7rem",
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.57rem",
      fontWeight: 700,
      color: colorVariables.tertiaryText,
      marginBottom: "0.7rem",
    },
    h6: {
      fontWeight: 500,
      color: colorVariables.primaryText,
    },
    body1: {
      fontSize: "1rem",
      color: colorVariables.secondaryText,
    },
    body2: {
      fontSize: "1rem",
      color: colorVariables.tertiaryText,
      textAlign: "justify",
    },
    subtitle1: {
      fontSize: "1.2rem",
      color: colorVariables.primaryText,
      textAlign: "justify",
    },
  },
  palette: {
    primary: {
      main: colorVariables.primaryMain,
      light: colorVariables.primaryLight,
      dark: colorVariables.primaryDark,
      contrastText: "#fff",
    },
    secondary: {
      main: colorVariables.secondaryMain,
      light: colorVariables.secondaryLight,
      dark: colorVariables.secondaryDark,
    },
    background: {
      default: "white",
    },
    text: {
      primary: colorVariables.primaryText,
      secondary: colorVariables.secondaryText,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Common button styles
          width: "fit-content",
          borderRadius: "1.5em",
          boxShadow: "none",
          textTransform: "none",
          color: "white",
          padding: "6px 6px 6px 12px",
          display: "flex",
          gap: "0.7em",
          minHeight: "2em",
          textDecoration: "none",
        },
        small: {
          backgroundColor: colorVariables.buttonBackground,
          "&:hover": {
            backgroundColor: colorVariables.buttonHover,
          },
        },
        large: {
          // Large button specific styles
          height: "5em",  
          padding: {xs: "1.2em 0.7em" , sm:"1.5em 0.8em"},
          marginX: "0.5rem",
          borderRadius: "6px",
          border: "1px solid black",
          backgroundColor: colorVariables.largeButtonBackground,
          fontSize: {xs: '0.8rem', sm: '1.2rem'},
          "&:hover": {
            backgroundColor: colorVariables.largeButtonHoverBackground,
            "& *": {
              color: colorVariables.largeButtonHoverText,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

console.log(theme);

export default theme;
