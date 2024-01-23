import ScrollPageContainer from "./components/ScrollPageContainer";
import HomePagePanel from "./components/HomePagePanel";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import TypographyTest from "./components/TypographyTest";
import ContactMe from "./components/ContactMe";
import PortfolioSlides from "./components/PortfolioSlides";
import ScrollableBox from "./components/Scrolltest";

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
        {/* <ScrollableBox /> */}
      </ScrollPageContainer>
    </main>
  );
}
