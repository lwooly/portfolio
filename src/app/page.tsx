"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Box, useTheme } from "@mui/material";


export default function Home() {
  const theme = useTheme()
  return (
    <main className={styles.main}>
      <Box sx={{ margin:10, border:"2px solid black", borderRadius:"2em", background: theme.palette.secondary.main, display: 'inline-block' }}>
        <Typography component="h1" variant="h1" fontWeight="bold" margin={5}>
          Hi I&apos;m Lloyd
        </Typography>
      </Box>
    </main>
  );
}
