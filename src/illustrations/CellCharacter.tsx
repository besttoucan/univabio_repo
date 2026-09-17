export interface CellCharacterProps {
  className?: string;
  color: string;
  flip?: boolean;
  expression?: "smile" | "wink";
}

/**
 * The site's recurring mascot — a friendly rounded "cell" character, playing the
 * same role Cal Hacks' cloud characters do: a warm, illustrated presence that
 * shows up (at different sizes) across several sections rather than a one-off
 * hero graphic.
 */
export function CellCharacter({ className, color, flip = false, expression = "smile" }: CellCharacterProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 130"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* wispy little legs, cloud-character style */}
      <path d="M40 106 C 36 116, 30 120, 22 122" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 110 C 60 118, 60 122, 60 128" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M80 106 C 84 116, 90 120, 98 122" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />

      <path
        fill={color}
        d="M60,8 C85,8 105,28 108,53 C111,80 92,106 62,108 C34,110 12,88 12,60 C12,32 33,8 60,8 Z"
      />

      {/* nucleus fleck for a bit of cell-like texture */}
      <circle cx="80" cy="40" r="5" fill="white" opacity="0.35" />
      <circle cx="40" cy="70" r="7" fill="white" opacity="0.25" />

      {/* face */}
      <circle cx="46" cy="56" r="5" fill="#1c1440" />
      <circle cx="76" cy="56" r="5" fill="#1c1440" />
      {expression === "smile" ? (
        <path d="M44 72 Q 61 86 78 72" fill="none" stroke="#1c1440" strokeWidth="4" strokeLinecap="round" />
      ) : (
        <>
          <path d="M44 72 Q 61 86 78 72" fill="none" stroke="#1c1440" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 54 L 80 54" stroke="#1c1440" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
