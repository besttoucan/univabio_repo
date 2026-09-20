/**
 * The house mark, and a miniature of the hero drawing: a strand running into a
 * chip. Kept to four strokes so it stays readable at 20px in the nav, where an
 * accurate little double helix turns to mush.
 */
export function HelixMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1.4 12C3.2 6.3 5.9 6.3 7.6 12C9.3 17.7 12 17.7 13.8 12" />
      <rect x="14.6" y="8.4" width="7.6" height="7.6" />
      <rect x="16.9" y="10.7" width="3" height="3" fill="var(--magenta)" stroke="none" />
    </svg>
  );
}
