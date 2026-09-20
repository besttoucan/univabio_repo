import { useCountUp } from "../hooks/useCountUp";

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

/**
 * A figure that counts up on first sight. Digits are tabular and the element
 * reserves its final width, so nothing around it shifts while it runs.
 */
export function Counter({ to, prefix = "", suffix = "", className, delay = 0 }: CounterProps) {
  const { ref, value } = useCountUp(to, { delay });
  const shown = Math.round(value).toLocaleString("en-US");
  const final = to.toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" style={{ fontVariantNumeric: "tabular-nums" }}>
        {prefix}
        {shown}
        {suffix}
      </span>
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        {prefix}
        {final}
        {suffix}
      </span>
    </span>
  );
}
