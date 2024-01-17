import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerAppBar from "@/components/mui/muiComponents/Navigation";

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
      <AppRouterCacheProvider options={{ enableCssLayer: true}}>
        <CssBaseline /> 
          <body className={inter.className}>
            <DrawerAppBar />
            {children}
          </body>
      </AppRouterCacheProvider>
    </html>
  );
}
