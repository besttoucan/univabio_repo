import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { Prizes } from "../components/Prizes";
import { Sponsors } from "../components/Sponsors";

export function PrizesPage() {
  return (
    <PageShell current="/prizes/">
      <PageHeader
        kicker="Five categories, 104 winners"
        title="Prizes"
        lede="Roughly $40,000 in sponsor prizes. None of it is cash: every prize is credit, a subscription, a license, or a domain."
      />
      <Prizes index="01" />
      <Sponsors index="02" />
    </PageShell>
  );
}
