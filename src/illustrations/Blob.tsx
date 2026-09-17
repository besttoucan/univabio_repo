export interface BlobProps {
  className?: string;
  colorA: string;
  colorB: string;
  rotate?: number;
  id: string;
}

/**
 * A reusable organic blob shape (gradient-filled) — the site's stand-in for Cal
 * Hacks' recurring cloud shape, recolored per section so it reads as one system
 * rather than one-off decoration.
 */
export function Blob({ className, colorA, colorB, rotate = 0, id }: BlobProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorA} />
          <stop offset="100%" stopColor={colorB} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M100,20 C130,22 165,40 172,75 C179,110 165,145 132,165 C99,185 55,182 30,155 C5,128 8,85 30,55 C52,25 70,18 100,20 Z"
      />
    </svg>
  );
}
