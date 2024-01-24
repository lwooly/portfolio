import ScrollPageContainer from "./components/ScrollPageContainer";
import HomePagePanel from "./components/HomePagePanel";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import PortfolioSlides from "./components/PortfolioSlides";
import LargeBPMargin from "./components/LargeBPMargin";
// import TypographyTest from "./components/TypographyTest";

export default function Home() {
  return (
    <main>
      <ScrollPageContainer id={"scrollContainer"}>
        <HomePagePanel id={"home"}>
          <LargeBPMargin>
            <HeroMain />
            <StackIconSection />
          </LargeBPMargin>
        </HomePagePanel>
        <HomePagePanel id={"about"}>
          <LargeBPMargin>
            <AboutMe />
          </LargeBPMargin>
        </HomePagePanel>
        <HomePagePanel id={"projects"}>
          <PortfolioSlides />
        </HomePagePanel>
        <HomePagePanel id={"contact"}>
          <LargeBPMargin>
            <ContactMe />
          </LargeBPMargin>
        </HomePagePanel>

        {/* <HomePagePanel>
          <TypographyTest />
        </HomePagePanel> */}
      </ScrollPageContainer>
    </main>
  );
}
