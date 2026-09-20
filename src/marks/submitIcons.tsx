import type { ReactElement } from "react";

/**
 * One icon per submission deliverable, drawn to the same rules as HelixMark:
 * 24px box, 1.6 stroke, round caps, ink outline with a single teal element
 * carrying the meaning. Each silhouette is deliberately different (a window, a
 * circle, a sheet, brackets) so the four stay apart at this size.
 */

function Frame({ children }: { children: ReactElement }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** A window with a pointer crossing its edge: something a person uses. */
export function ProjectIcon() {
  return (
    <Frame>
      <g>
        <rect x="2.2" y="3.6" width="17" height="13.6" />
        <path d="M2.2 7.4H19.2" />
        <path d="M11.6 11L21.4 16.2L17 17.4L18.9 21.8L16.6 22.8L14.7 18.4L11.4 21.5Z" stroke="var(--magenta)" />
      </g>
    </Frame>
  );
}

/** A play head in a circle. */
export function VideoIcon() {
  return (
    <Frame>
      <g>
        <circle cx="12" cy="12" r="9.2" />
        <path d="M9.9 7.9L16.4 12L9.9 16.1Z" stroke="var(--magenta)" />
      </g>
    </Frame>
  );
}

/** A single sheet with a folded corner. */
export function PageIcon() {
  return (
    <Frame>
      <g>
        <path d="M5.5 2.5H14.2L18.5 6.8V21.5H5.5Z" />
        <path d="M14.2 2.5V6.8H18.5" />
        <path d="M8.6 11.6H15.4M8.6 14.6H15.4M8.6 17.6H12.8" stroke="var(--magenta)" />
      </g>
    </Frame>
  );
}

/** Angle brackets with a slash. */
export function CodeIcon() {
  return (
    <Frame>
      <g>
        <path d="M8.4 6.8L2.8 12L8.4 17.2" />
        <path d="M15.6 6.8L21.2 12L15.6 17.2" />
        <path d="M13.4 5.4L10.6 18.6" stroke="var(--magenta)" />
      </g>
    </Frame>
  );
}
