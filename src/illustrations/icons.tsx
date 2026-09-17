import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconDna(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3c0 4 10 4 10 8s-10 4-10 8" />
      <path d="M17 3c0 4-10 4-10 8s10 4 10 8" />
      <path d="M8.3 7h7.4M8.3 17h7.4M7 12h10" />
    </svg>
  );
}

export function IconPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12h4l2 7 4-14 2 7h4l2-4 2 4h2" />
    </svg>
  );
}

export function IconChip(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function IconSeedling(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V11" />
      <path d="M12 12C12 7 8 6 4 6c0 5 2 8 8 8Z" />
      <path d="M12 10c0-4 3-6 8-6 0 5-2 8-8 8" />
    </svg>
  );
}

export function IconGradCap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9l10-4 10 4-10 4-10-4Z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2Z" />
      <path d="M19 15l.8 2.4L22 18l-2.2.6L19 21l-.8-2.4L16 18l2.2-.6L19 15Z" />
    </svg>
  );
}

export function IconRibbon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5L7 22l5-3 5 3-2-9.5" />
    </svg>
  );
}

export function IconCapsule(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
      <path d="M9.5 7.8L14.5 16.2" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12l5-4 4 2 3-2 5 4" />
      <path d="M7 8l5 6 3-2" />
      <path d="M2 12l3 6 3-2" />
      <path d="M22 12l-3 6-3-2" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}
