/**
 * The house mark: a chip with a wave running through it.
 *
 * Square by construction, which the old wide wave-into-chip lockup was not, so
 * it survives being an avatar, an app icon and a favicon. It also compresses
 * the whole idea of the page's big drawing into one glyph: the signal from a
 * living thing, running through silicon.
 */
export function ChipMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="21" y="21" width="58" height="58" rx="9" />
      <g strokeWidth={6}>
        <path d="M38 21V11" />
        <path d="M62 21V11" />
        <path d="M38 79V89" />
        <path d="M62 79V89" />
        <path d="M21 38H11" />
        <path d="M21 62H11" />
        <path d="M79 38H89" />
        <path d="M79 62H89" />
      </g>
      <path
        d="M33 50C39 35.5 45 35.5 50 50C55 64.5 61 64.5 67 50"
        stroke="var(--magenta)"
        strokeWidth={7.5}
      />
    </svg>
  );
}
