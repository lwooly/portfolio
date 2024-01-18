import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import DrawerAppBar from "@/src/components/mui/muiComponents/Navigation";
import ThemeRegistry from "@/theme/ThemeRegistry";

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
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <DrawerAppBar />
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
