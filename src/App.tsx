import { Challenge } from "./components/Challenge";
import { Hero } from "./components/Hero";
import { PageShell } from "./components/PageShell";
import { Stats } from "./components/Stats";
import { Who } from "./components/Who";

/** Home: what this is, who it is for, and the two ways out (register, or compete). */
export function App() {
  return (
    <PageShell current="/">
      <Hero />
      <Stats />
      <Challenge index="01" />
      <Who index="02" />
    </PageShell>
  );
}
