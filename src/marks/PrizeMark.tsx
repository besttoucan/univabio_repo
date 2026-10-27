import type { PrizeAward } from "../content/types";

const PLACE: Partial<Record<PrizeAward, string>> = { first: "1", second: "2", third: "3" };

/**
 * One glyph per award, drawn in currentColor. The placings are medals whose
 * disc is a cell membrane; the specials say what they reward: a no-code flow
 * of linked blocks, and a hundred cells for a hundred winners.
 */
export function PrizeMark({ award, className }: { award: PrizeAward; className?: string }) {
  const place = PLACE[award];

  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {place ? (
        <>
          <path d="M28 6l6 22M52 6l-6 22" strokeWidth={5} opacity={0.55} />
          <circle cx="40" cy="48" r="24" strokeWidth={2.5} />
          <circle cx="40" cy="48" r="18" strokeWidth={1.2} opacity={0.6} />
          <circle cx="40" cy="48" r="18" fill="currentColor" stroke="none" opacity={0.12} />
          <text
            x="40"
            y="49"
            fill="currentColor"
            stroke="none"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-mono)"
            fontSize="20"
            fontWeight={500}
          >
            {place}
          </text>
        </>
      ) : award === "build" ? (
        <g strokeWidth={2.2}>
          <rect x="8" y="12" width="22" height="16" rx="3" />
          <rect x="50" y="32" width="22" height="16" rx="3" />
          <rect x="8" y="52" width="22" height="16" rx="3" />
          <path d="M30 20h8a4 4 0 0 1 4 4v12a4 4 0 0 0 4 4h4M30 60h8a4 4 0 0 0 4-4V44a4 4 0 0 1 4-4" />
          <circle cx="61" cy="40" r="3" fill="currentColor" stroke="none" />
        </g>
      ) : (
        <g fill="currentColor" stroke="none">
          {Array.from({ length: 100 }, (_, i) => (
            <circle key={i} cx={8 + (i % 10) * 7.1} cy={8 + Math.floor(i / 10) * 7.1} r={1.9} opacity={0.35 + ((i * 37) % 11) / 16} />
          ))}
        </g>
      )}
    </svg>
  );
}
