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
