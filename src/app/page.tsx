import HomePagePanel from "./components/HomePagePanel";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import UpdatedAboutMe from "./components/UpdatedAboutMe";
// import TypographyTest from "./components/TypographyTest";

export default function Home() {
  return (
    <main>
      <HomePagePanel id={"home"}>
        <HeroMain />
        <StackIconSection />
      </HomePagePanel>
      <HomePagePanel id={"about"}>
        <UpdatedAboutMe />
      </HomePagePanel>
      <HomePagePanel id={"projects"}>
        <Projects />
      </HomePagePanel>
      <HomePagePanel id={"contact"}>
        <ContactMe />
      </HomePagePanel>

      {/* <HomePagePanel>
          <TypographyTest />
        </HomePagePanel> */}
    </main>
  );
}
