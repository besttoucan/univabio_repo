import { useEffect, useRef } from "react";
import { colorBio, colorCircuit, colorHighlight, colorInk, hexToRgb } from "../theme";
import { usePrefersReducedMotion } from "../usePrefersReducedMotion";
import styles from "./GalaxyScene.module.css";

const WHITE = hexToRgb(colorInk);
const BLUE = hexToRgb(colorCircuit);
const TEAL = hexToRgb(colorBio);
const AMBER = hexToRgb(colorHighlight);
const PALETTE = [WHITE, BLUE, TEAL];

const STAR_COUNT = 340;

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  life: number;
  maxLife: number;
}

function spawnShootingStar(width: number, height: number): ShootingStar {
  const angle = Math.PI * 0.22 + (Math.random() - 0.5) * 0.3;
  return {
    x: Math.random() * width * 0.7,
    y: Math.random() * height * 0.4,
    angle,
    speed: 900 + Math.random() * 500,
    length: 70 + Math.random() * 60,
    life: 0,
    maxLife: 0.9 + Math.random() * 0.4,
  };
}

interface Star {
  x: number;
  y: number;
  radius: number;
  brightness: number;
  twinkleFreq: number;
  twinklePhase: number;
  colorIndex: number;
}

function mulberry32(seed: number) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number): Star[] {
  const rand = mulberry32(20260918);
  return Array.from({ length: count }, (_, i) => ({
    x: rand(),
    y: rand(),
    radius: 0.6 + rand() * 1.4,
    brightness: 0.35 + rand() * 0.65,
    twinkleFreq: 2 + rand() * 4,
    twinklePhase: rand() * Math.PI * 2,
    colorIndex: i % PALETTE.length,
  }));
}

/**
 * The site's ambient background (build spec v22, section 2): a lightweight,
 * gently-twinkling starfield behind the flat-illustrated object cast — cheap
 * background texture, not a scene of its own.
 */
export function GalaxyScene() {
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
    const stars = generateStars(STAR_COUNT);
    const shootingStars: ShootingStar[] = [];
    let lastTime = 0;
    let nextShootAt = 3000 + Math.random() * 4000;

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

      for (const star of stars) {
        const twinkle = reducedMotion ? 1 : 0.75 + 0.25 * Math.sin(t / 1000 / star.twinkleFreq + star.twinklePhase);
        const alpha = Math.min(1, star.brightness * twinkle);
        const [r, g, b] = PALETTE[star.colorIndex];
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // occasional shooting stars — a rare, tasteful highlight, skipped for reduced motion
      if (!reducedMotion) {
        const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 0;
        lastTime = now;

        if (now > nextShootAt && shootingStars.length < 2) {
          shootingStars.push(spawnShootingStar(width, height));
          nextShootAt = now + 6000 + Math.random() * 7000;
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          s.life += dt;
          if (s.life > s.maxLife) {
            shootingStars.splice(i, 1);
            continue;
          }
          s.x += Math.cos(s.angle) * s.speed * dt;
          s.y += Math.sin(s.angle) * s.speed * dt;
          const fade = 1 - s.life / s.maxLife;
          const tailX = s.x - Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;
          const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          grad.addColorStop(0, `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${(0.9 * fade).toFixed(3)})`);
          grad.addColorStop(1, `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},0)`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
