import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Organism } from "./Organism";
import { PlanktonField } from "./PlanktonField";

interface PageShellProps {
  /** Path of this page, so the nav can mark it current. */
  current: string;
  children: ReactNode;
}

/** The living background, nav, content, footer. Every page in the site is one of these. */
export function PageShell({ current, children }: PageShellProps) {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Organism />
      <PlanktonField />
      <Nav current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
