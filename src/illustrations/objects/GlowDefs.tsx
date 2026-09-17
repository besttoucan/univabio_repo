import { GLOW_STD_DEVIATION } from "./objectStyles";

/** The one glow-rim filter recipe every cast object uses — include once per SVG, reference via `filter={`url(#${id})`}`. */
export function GlowDefs({ id }: { id: string }) {
  return (
    <filter id={id} x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation={GLOW_STD_DEVIATION} result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
}
