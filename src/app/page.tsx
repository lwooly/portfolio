import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Box, useTheme, Slide } from "@mui/material";
import ScrollPageContainer from "./components/ScrollPageContainer";
import HomePagePanel from "./components/HomePagePanel";
import AnimatedArrowHead from "./components/animation/AnimatedArrowHead";
import Test from "./components/animation/Test";
import ProfileImage from "./components/ProfileImage";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import TypographyTest from "./components/TypographyTest";

export default function Home() {
  return (
    <main>
      <ScrollPageContainer id={"scrollContainer"}>
        <HomePagePanel>
          <HeroMain />
          <StackIconSection />
        </HomePagePanel>
        <HomePagePanel>
          <AboutMe />
        </HomePagePanel>
        <HomePagePanel>
          <Portfolio />
          <TypographyTest />
        </HomePagePanel>
      </ScrollPageContainer>
    </main>
  );
}
