import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Analytics } from "@vercel/analytics/react"
import DrawerAppBar from "@/src/app/components/mui/muiComponents/Navigation";
import ThemeRegistry from "@/src/theme";
import Footer from "./components/Footer";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/src/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lloyd Woolacott Portfolio",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ overscrollBehavior: "none", scrollBehavior: "smooth" }}
      >
        <Analytics/>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexDirection: "column", display: "flex" }}>
              <DrawerAppBar />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
