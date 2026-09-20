import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { LavaLamp } from "./LavaLamp";
import { Nav } from "./Nav";

interface PageShellProps {
  /** Path of this page, so the nav can mark it current. */
  current: string;
  children: ReactNode;
}

/** Lamp, nav, content, footer. Every page in the site is one of these. */
export function PageShell({ current, children }: PageShellProps) {
  return (
    <>
      <LavaLamp />
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Nav current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
