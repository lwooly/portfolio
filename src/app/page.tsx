"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Box, useTheme, Slide } from "@mui/material";
import ScrollPageContainer from "../components/ScrollPageContainer";
import HomePageSlide from "../components/HomePageSlide";
import AnimatedArrowHead from "../components/animation/AnimatedArrowHead";

export default function Home() {
  const theme = useTheme();
  return (
    <main className={styles.main}>
      <ScrollPageContainer>
        <HomePageSlide>
          <Box
            sx={{
              margin: 10,
              border: "2px solid black",
              borderRadius: "2em",
              background: theme.palette.secondary.main,
              display: "inline-block",
              "&:hover": {
                margin: "calc(10 * 8px - 3px)",
                border: "5px solid black",
                background: theme.palette.secondary.dark,
              },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              fontWeight="bold"
              margin={5}
            >
              Hi I&apos;m Lloyd
            </Typography>
          </Box>
          
        </HomePageSlide>
        <HomePageSlide>
          <Box
            sx={{
              margin: 10,
              border: "2px solid black",
              borderRadius: "2em",
              background: theme.palette.secondary.main,
              display: "inline-block",
              "&:hover": {
                margin: "calc(10 * 8px - 3px)",
                border: "5px solid black",
                background: theme.palette.secondary.dark,
              },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              fontWeight="bold"
              margin={5}
            >
              Experience
            </Typography>
          </Box>
          <AnimatedArrowHead />
        </HomePageSlide>
        <HomePageSlide>
          <Box
            sx={{
              margin: 10,
              border: "2px solid black",
              borderRadius: "2em",
              background: theme.palette.secondary.main,
              display: "inline-block",
              "&:hover": {
                margin: "calc(10 * 8px - 3px)",
                border: "5px solid black",
                background: theme.palette.secondary.dark,
              },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              fontWeight="bold"
              margin={5}
            >
              Skills
            </Typography>
          </Box>
        </HomePageSlide>
      </ScrollPageContainer>
    </main>
  );
}
