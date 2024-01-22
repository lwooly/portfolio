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
import TypographyTest from "./components/TypographyTest";
import ContactMe from "./components/ContactMe";
import PortfolioSlides from "./components/PortfolioSlides";

export default function Home() {
  return (
    <main>
      <ScrollPageContainer id={"scrollContainer"}>
        <HomePagePanel id={"home"}>
          <HeroMain />
          <StackIconSection />
        </HomePagePanel>
        <HomePagePanel id={"about"}>
          <AboutMe />
        </HomePagePanel>
        <HomePagePanel id={"projects"}>
          <PortfolioSlides />
        </HomePagePanel>
        <HomePagePanel id={"contact"}>
          <ContactMe />
        </HomePagePanel>
        {/* <HomePagePanel>
          <TypographyTest />
        </HomePagePanel> */}
      </ScrollPageContainer>
    </main>
  );
}
