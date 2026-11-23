import type { CSSProperties, ReactNode } from "react";

/*
  Cartoon biology stickers, all in one hand: 3px ink outline, round caps,
  pastel fills from the page tokens. Each is drawn on a 100x100 grid.
*/

const INK = "#17131f";

const art: Record<string, ReactNode> = {
  dna: (
    <>
      <path d="M36 18h28M30 28h40M36 39h28M36 61h28M30 72h40M36 83h28" stroke="#e0367a" />
      <path d="M50 6c30 10 30 34 0 44S20 84 50 94" stroke="#7048e8" strokeWidth="6" />
      <path d="M50 6C20 16 20 40 50 50s30 34 0 44" stroke="#10a36b" strokeWidth="6" />
    </>
  ),
  cell: (
    <>
      <path d="M50 8c22 0 40 16 40 40 0 26-18 44-42 44S8 76 10 50C12 26 28 8 50 8Z" fill="#c9f2dc" />
      <circle cx="44" cy="50" r="15" fill="#e2d8ff" />
      <circle cx="40" cy="46" r="4" fill="#7048e8" />
      <ellipse cx="72" cy="36" rx="7" ry="4" fill="#ffdcc4" transform="rotate(-30 72 36)" />
      <ellipse cx="70" cy="68" rx="6" ry="4" fill="#ffd3e4" transform="rotate(20 70 68)" />
      <circle cx="28" cy="74" r="2.5" fill={INK} />
      <circle cx="58" cy="24" r="2.5" fill={INK} />
    </>
  ),
  phage: (
    <>
      <path d="M50 6 66 15v18L50 42 34 33V15Z" fill="#cfe8ff" />
      <path d="M34 15 50 24 66 15M50 24v18" strokeWidth="2" />
      <rect x="45" y="42" width="10" height="26" rx="2" fill="#fff1b0" />
      <path d="M45 50h10M45 58h10" strokeWidth="2" />
      <path d="M36 70h28M40 70 28 82l4 12M60 70l12 12-4 12M46 70l-4 22M54 70l4 22" />
    </>
  ),
  mito: (
    <>
      <path d="M12 52c0-20 20-30 40-30s36 8 36 26-16 32-40 32S12 72 12 52Z" fill="#ffdcc4" />
      <path d="M22 52c4-14 8 14 12 0s8 14 12 0 8 14 12 0 8 14 12 0 6 10 8 2" stroke="#e0367a" />
    </>
  ),
  flask: (
    <>
      <path d="M30 60h40l11 22c3 6-1 12-8 12H27c-7 0-11-6-8-12Z" fill="#c9f2dc" stroke="none" />
      <path d="M38 8h24M44 8v26L20 82c-3 6 1 12 8 12h44c7 0 11-6 8-12L56 34V8" />
      <path d="M30 62c8-4 14 4 22 0s12-2 18 0" strokeWidth="2" />
      <circle cx="44" cy="78" r="4" fill="#fff" strokeWidth="2" />
      <circle cx="58" cy="72" r="3" fill="#fff" strokeWidth="2" />
      <circle cx="52" cy="48" r="3" fill="#fff" strokeWidth="2" />
    </>
  ),
  virus: (
    <>
      <path d="M76 52h10M68 70l7 7M50 78v10M32 70l-7 7M24 52H14M32 34l-7-7M50 26V16M68 34l7-7" />
      {[
        [88, 52], [77, 79], [50, 90], [23, 79], [12, 52], [23, 25], [50, 14], [77, 25],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#ffdcc4" strokeWidth="2.5" />
      ))}
      <circle cx="50" cy="52" r="26" fill="#ffd3e4" />
      <circle cx="42" cy="49" r="3.5" fill={INK} stroke="none" />
      <circle cx="58" cy="49" r="3.5" fill={INK} stroke="none" />
      <path d="M44 59q6 6 12 0" />
    </>
  ),
  petri: (
    <>
      <ellipse cx="50" cy="56" rx="44" ry="30" fill="#fffdf8" />
      <ellipse cx="50" cy="54" rx="36" ry="22" fill="#e2d8ff" strokeWidth="2" />
      <circle cx="36" cy="50" r="6" fill="#10a36b" strokeWidth="2" />
      <circle cx="58" cy="44" r="4" fill="#f0650f" strokeWidth="2" />
      <circle cx="62" cy="62" r="7" fill="#e0367a" strokeWidth="2" />
      <circle cx="44" cy="66" r="3" fill="#7048e8" strokeWidth="2" />
      <circle cx="74" cy="52" r="2.5" fill="#10a36b" strokeWidth="2" />
      <path d="M12 40c6-14 22-22 38-22s32 8 38 22" strokeDasharray="4 6" strokeWidth="2" />
    </>
  ),
  molecule: (
    <>
      <path d="M28 30 58 24 74 54 46 72 24 60Z M58 24 46 72" />
      <circle cx="28" cy="30" r="9" fill="#cfe8ff" />
      <circle cx="58" cy="24" r="11" fill="#ffd3e4" />
      <circle cx="74" cy="54" r="9" fill="#fff1b0" />
      <circle cx="46" cy="72" r="12" fill="#c9f2dc" />
      <circle cx="24" cy="60" r="7" fill="#e2d8ff" />
    </>
  ),
};

type BioKind = keyof typeof art;
const kinds = Object.keys(art) as BioKind[];

interface BioStickerProps {
  /** A sticker by name, or a number that cycles through the set. */
  kind: BioKind | number;
  className?: string;
  style?: CSSProperties;
}

export function BioSticker({ kind, className, style }: BioStickerProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      fill="none"
      stroke={INK}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {art[typeof kind === "number" ? kinds[kind % kinds.length] : kind]}
    </svg>
  );
}
