import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { palette } from "../palette";
import { bodyFont, headlineFont } from "../fonts";
import { LaurelStarIcon } from "../components/Icons";

const RADIUS = 148;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Opening scene: no claims are stated out loud here — a gold excellence
// gauge fills up on its own, then settles into a season kicker. Sets up
// the "trophy case" framing that the rest of the video pays off.
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();

  const fill = interpolate(frame, [12, 132], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const glow = interpolate(frame, [110, 150, 180], [0.35, 1, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const iconScale = interpolate(frame, [0, 20], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.8)),
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 64,
      }}
    >
      <div
        style={{
          position: "relative",
          width: RADIUS * 2 + 40,
          height: RADIUS * 2 + 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: (RADIUS + 20) * 2 + 180,
            height: (RADIUS + 20) * 2 + 180,
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            borderRadius: "50%",
            background:
              "repeating-conic-gradient(from 0deg, rgba(217,167,66,0.14) 0deg 3deg, rgba(0,0,0,0) 3deg 16deg)",
            opacity: interpolate(frame, [0, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            rotate: `${-frame * 0.2}deg`,
          }}
        />
        <svg
          width={RADIUS * 2 + 40}
          height={RADIUS * 2 + 40}
          style={{ position: "absolute", inset: 0, rotate: "-90deg" }}
        >
          <circle
            cx={RADIUS + 20}
            cy={RADIUS + 20}
            r={RADIUS}
            fill="none"
            stroke="rgba(217,167,66,0.16)"
            strokeWidth={10}
          />
          <circle
            cx={RADIUS + 20}
            cy={RADIUS + 20}
            r={RADIUS}
            fill="none"
            stroke={palette.gold}
            strokeWidth={10}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - fill)}
            style={{
              filter: `drop-shadow(0 0 ${14 * glow}px rgba(217,167,66,0.8))`,
            }}
          />
        </svg>
        <div
          style={{
            width: 118,
            height: 118,
            color: palette.gold,
            scale: iconScale,
            filter: `drop-shadow(0 0 ${18 * glow}px rgba(245,216,145,0.6))`,
          }}
        >
          <LaurelStarIcon />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Interactive.Div
          name="Kicker"
          style={{
            fontFamily: headlineFont,
            fontSize: 88,
            letterSpacing: 6,
            color: palette.paper,
            opacity: interpolate(frame, [95, 125], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: `0px ${interpolate(frame, [95, 125], [24, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })}px`,
          }}
        >
          PALMARÈS
        </Interactive.Div>
        <Interactive.Div
          name="Season subtitle"
          style={{
            fontFamily: bodyFont,
            fontWeight: 600,
            fontSize: 34,
            letterSpacing: 8,
            color: palette.gold,
            opacity: interpolate(frame, [122, 150], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          2024 — 2025
        </Interactive.Div>
      </div>
    </AbsoluteFill>
  );
};
