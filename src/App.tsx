import { Challenge } from "./components/Challenge";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Judging } from "./components/Judging";
import { PageShell } from "./components/PageShell";
import { Prizes } from "./components/Prizes";
import { Results } from "./components/Results";
import { Schedule } from "./components/Schedule";
import { Sponsors } from "./components/Sponsors";
import { Stats } from "./components/Stats";
import { Who } from "./components/Who";

/** Home: one scroll from a single cell to a lit network, every section in order. */
export function App() {
  return (
    <PageShell current="/">
      <Hero />
      <Who index="01" />
      <Stats />
      <Challenge index="02" />
      <Results index="03" />
      <Prizes index="04" />
      <Judging index="05" />
      <Schedule index="06" />
      <Sponsors index="07" />
      <Faq index="08" />
    </PageShell>
  );
}
