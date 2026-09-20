import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { HelixBand } from "../marks/HelixBand";
import styles from "./NotFoundPage.module.css";

const destinations = [
  { label: "Home", href: "/", note: "What UnivaBio is, and who it is for" },
  { label: "How to enter", href: "/compete/", note: "The four files, the dates, the scoring" },
  { label: "Prizes", href: "/prizes/", note: "All five categories and the sponsors" },
  { label: "Rules & FAQ", href: "/rules/", note: "Eligibility, teams, AI tools" },
];

export function NotFoundPage() {
  return (
    <PageShell current="/404">
      <PageHeader
        kicker="Error 404"
        title="Not here."
        lede="The link may be old, or the address may have a typo in it. Everything lives on one of these four pages."
      />

      <section className={`section ${styles.section}`}>
        <div className="page">
          <ul className={styles.list}>
            {destinations.map((item, i) => (
              <Reveal as="li" className={styles.item} key={item.href} delay={i * 80}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
                <span className={styles.note}>{item.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.bandWrap}>
          <HelixBand className={styles.band} />
        </div>
      </section>
    </PageShell>
  );
}
