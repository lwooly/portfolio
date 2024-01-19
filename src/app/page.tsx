"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Box, useTheme, Slide } from "@mui/material";
import ScrollPageContainer from "../components/ScrollPageContainer";
import HomePagePanel from "../components/HomePagePanel";
import AnimatedArrowHead from "../components/animation/AnimatedArrowHead";
import Test from "../components/animation/Test";
import ProfileImage from "../components/ProfileImage";
import HeroMain from "../components/HeroMain";
import StackIconSection from "../components/StackIconSection";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const theme = useTheme();
  return (
    <main className={styles.main}>
      <ScrollPageContainer id={"scrollContainer"}>
        <HomePagePanel color="white">
          <HeroMain />
          <StackIconSection />
        </HomePagePanel>
        <HomePagePanel color="grey">
          <AboutMe />
        </HomePagePanel>
      </ScrollPageContainer>
    </main>
  );
}
