import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { palette } from "../palette";

// Small deterministic PRNG (mulberry32) so the particle field is stable
// across re-renders and reproducible — the same "seed" always produces the
// same drifting dust field.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Particle = {
  x: number;
  y0: number;
  r: number;
  speed: number;
  phase: number;
  drift: number;
};

const PARTICLE_COUNT = 46;
const SEED = 8821;

function makeParticles(): Particle[] {
  const rand = mulberry32(SEED);
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: rand() * 100,
      y0: rand() * 100,
      r: 1.4 + rand() * 3.2,
      speed: 0.15 + rand() * 0.35,
      phase: rand() * Math.PI * 2,
      drift: 6 + rand() * 14,
    });
  }
  return particles;
}

// Ambient background shared by every scene: a dark navy-to-plum gradient,
// a slow-moving soft gold spotlight, and a field of drifting gold dust.
// Reads the GLOBAL frame (it is not wrapped in its own <Sequence>) so the
// motion stays continuous underneath scene cuts.
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { height, durationInFrames } = useVideoConfig();
  const particles = useMemo(() => makeParticles(), []);

  const t = frame / durationInFrames;
  const spotX = 50 + Math.sin(t * Math.PI * 2 + 0.6) * 22;
  const spotY = 32 + Math.cos(t * Math.PI * 1.4) * 14;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${palette.bgTop} 0%, ${palette.bgBottom} 100%)`,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${spotX}% ${spotY}%, rgba(217,167,66,0.16) 0%, rgba(217,167,66,0.05) 32%, rgba(0,0,0,0) 60%)`,
        }}
      />
      {particles.map((p, i) => {
        const travel = ((frame * p.speed) / 30) * (100 / (height / 400));
        const y = ((p.y0 - travel) % 110 + 110) % 110;
        const x = p.x + Math.sin(frame / 60 + p.phase) * (p.drift / 20);
        const twinkle = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(frame / 20 + p.phase * 3));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: p.r * 2,
              height: p.r * 2,
              borderRadius: "50%",
              background: palette.goldLight,
              opacity: twinkle,
              filter: "blur(0.5px)",
              boxShadow: `0 0 ${p.r * 4}px rgba(245,216,145,0.55)`,
            }}
          />
        );
      })}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
