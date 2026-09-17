import { Faq } from "./components/Faq";
import { FinalCta, Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Judges } from "./components/Judges";
import { Judging } from "./components/Judging";
import { Nav } from "./components/Nav";
import { Prizes } from "./components/Prizes";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Sponsors } from "./components/Sponsors";
import { StatsBand } from "./components/StatsBand";
import { ThemeSection } from "./components/ThemeSection";
import { WhySection } from "./components/WhySection";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <StatsBand />
        <ThemeSection />
        <Requirements />
        <Schedule />
        <Prizes />
        <Judging />
        <Sponsors />
        <Judges />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
