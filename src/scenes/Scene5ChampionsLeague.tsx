import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { palette } from "../palette";
import { bodyFont } from "../fonts";
import { Badge } from "../components/Badge";
import { StarBallIcon } from "../components/Icons";

const ROUNDS = [
  { label: "8ÈMES", x: 6 },
  { label: "1/4", x: 34 },
  { label: "1/2", x: 62 },
  { label: "FINALE", x: 90 },
] as const;

// Champions League beat, told as a bracket: the team's run stops at the
// quarter-finals (gold progress bar halts at node 2 and greys out after),
// while the personal top-scorer badge below stays lit regardless.
export const Scene5ChampionsLeague: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [8, 46], [0, 34], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 90 }}
    >
      <div style={{ width: 760, height: 90, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 18,
            left: "6%",
            width: "84%",
            height: 4,
            background: "rgba(201,196,182,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            left: "6%",
            width: `${progress}%`,
            height: 4,
            background: palette.gold,
            boxShadow: `0 0 12px rgba(217,167,66,0.7)`,
          }}
        />
        {ROUNDS.map((round, i) => {
          const reached = round.x <= 34;
          const appearAt = i * 10;
          const scale = interpolate(frame, [appearAt, appearAt + 14], [0.5, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.8)),
          });
          return (
            <div
              key={round.label}
              style={{
                position: "absolute",
                left: `${round.x}%`,
                top: 0,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                scale,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: reached ? palette.gold : "rgba(201,196,182,0.14)",
                  boxShadow: reached
                    ? `0 0 18px rgba(217,167,66,0.7)`
                    : "none",
                }}
              />
              <span
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: 1,
                  color: reached ? palette.paper : palette.paperDim,
                }}
              >
                {round.label}
              </span>
            </div>
          );
        })}
      </div>

      <Badge
        icon={<StarBallIcon />}
        label="MEILLEUR BUTEUR C1"
        appearAt={70}
      />
    </AbsoluteFill>
  );
};
