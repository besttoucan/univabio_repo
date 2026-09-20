import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { Judging } from "../components/Judging";
import { Schedule } from "../components/Schedule";
import { Submit } from "../components/Submit";

/** Everything someone needs in order to enter: what to hand in, when, and how it is marked. */
export function CompetePage() {
  return (
    <PageShell current="/compete/">
      <PageHeader
        kicker="Submissions close Oct 6, 2026"
        title="How to enter"
        lede="Four files, two months to build them, twenty-five points on the scorecard."
      />
      <Submit index="01" />
      <Schedule index="02" />
      <Judging index="03" />
    </PageShell>
  );
}
