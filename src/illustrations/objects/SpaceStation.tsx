import { useEffect, useRef } from "react";
import { colorCircuit, colorFusion, colorHighlight, hexToRgb } from "../theme";
import { usePrefersReducedMotion } from "../usePrefersReducedMotion";
import { stationParticles } from "./stationParticles";
import styles from "./SpaceStation.module.css";

const CYAN = hexToRgb(colorFusion);
const BLUE = hexToRgb(colorCircuit);
const AMBER = hexToRgb(colorHighlight);

export interface SpaceStationProps {
  className?: string;
}

/**
 * The hero centerpiece (build spec v26/v27, section 0): UnivaBio's "space
 * station," rendered as a particle-silhouette instead of a placed image —
 * see stationParticles.ts for how the point cloud was derived. Drawn once
 * on a canvas (not scroll-linked) with the same gentle per-point twinkle
 * the site's starfield uses, so it reads as part of the same particle
 * language rather than a foreign asset.
 */
export function SpaceStation({ className }: SpaceStationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(canvas);
    window.addEventListener("resize", measure);

    let rafId = 0;

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw);
      if (width === 0 || height === 0) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const t = reducedMotion ? 0 : now;

      for (let i = 0; i < stationParticles.length; i++) {
        const [nx, ny, w] = stationParticles[i];
        const twinkle = reducedMotion ? 1 : 0.82 + 0.18 * Math.sin(t / 1000 / (1.4 + (i % 7) * 0.3) + i);
        const alpha = Math.min(1, (0.55 + w * 0.45) * twinkle);
        const radius = 1.3 + w * 2.6;
        const palette = w > 0.82 ? AMBER : i % 3 === 0 ? CYAN : BLUE;
        const [r, g, b] = palette;
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(nx * width, ny * height, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className ?? ""}`} aria-hidden="true" />;
}
