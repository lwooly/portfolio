"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
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
    palette: {
        mode: "light",
        secondary: {
            main: "hsla(225, 7%, 79%, 1)",
        }
    }
};

const theme = createTheme(themeOptions);

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
