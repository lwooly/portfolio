import HomePagePanel from "./components/HomePagePanel";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
// import TypographyTest from "./components/TypographyTest";

export default function Home() {
  return (
    <main>
      <HomePagePanel id={"home"}>
        <HeroMain />
        <StackIconSection />
      </HomePagePanel>
      <HomePagePanel id={"about"}>
        <AboutMe />
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
