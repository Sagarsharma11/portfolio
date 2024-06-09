import styles from "./page.module.css";
import Navbar from "./HomeComponents/Navbar/Navbar";
import LandingContainer from "./HomeComponents/LandingContainer/LandingContainer";
import Skills from "./HomeComponents/Skills/Skills";
import Contributions from "./HomeComponents/Contributions/Contributions";
import Portfolio from "./HomeComponents/Portfolio/Portfolio";
import RecentExplore from "./HomeComponents/RecentExplore/RecentExplore";
import AskMe from "./HomeComponents/AskMe/AskMe";
import MostAsked from "./HomeComponents/MostAsked/MostAsked";
import Footer from "./HomeComponents/Footer/Footer"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
        <Navbar/>
        <LandingContainer/>
        <Skills/>
        <Contributions/>
        <Portfolio/>
        <RecentExplore/>
        <AskMe/>
        <MostAsked/>
        <Footer/>
    </main>
  );
}
