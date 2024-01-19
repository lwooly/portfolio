"use client";

import { createTheme, responsiveFontSizes, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets:["latin"]
})

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 12,
},
  palette:{
    primary: {
      main: '#FFF',
    },
    // secondary: {
    //   main: '#000',
    // },
    background: {
      default: 'hsl(45deg 0% 97.65%)',
    },
    text: {
      primary: 'hsl(228deg 5.26% 18.63%)',
      secondary: 'hsl(45deg 0% 0%)',
    },
  },
};


let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme)

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
