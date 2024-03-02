import HomePagePanel from "./components/HomePagePanel";
import HeroMain from "./components/HeroMain";
import StackIconSection from "./components/StackIconSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import UpdatedAboutMe from "./components/AboutMe";
// import TypographyTest from "./components/TypographyTest";

export default function Home() {
  return (
    <main>
      <HomePagePanel id={"Home"}>
        <HeroMain />
        <StackIconSection />
      </HomePagePanel>
      <HomePagePanel id={"About"}>
        <UpdatedAboutMe />
      </HomePagePanel>
      <HomePagePanel id={"Projects"}>
        <Projects />
      </HomePagePanel>
      <HomePagePanel id={"Contact me"}>
        <ContactMe />
      </HomePagePanel>

      {/* <HomePagePanel>
          <TypographyTest />
        </HomePagePanel> */}
    </main>
  );
}
