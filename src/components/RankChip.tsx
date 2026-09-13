import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { palette } from "../palette";
import { bodyFont, headlineFont } from "../fonts";

type RankChipProps = {
  rank: string;
  label: string;
  appearAt: number;
  dimmed?: boolean;
};

// A big rank numeral in a ring, with a small label underneath. Used to
// contrast Mbappé's individual ranking against his team's — reused by the
// La Liga and Champions League scenes so the "ranking" visual language
// stays consistent.
export const RankChip: React.FC<RankChipProps> = ({
  rank,
  label,
  appearAt,
  dimmed = false,
}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;
  const scale = interpolate(local, [0, 18], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.6)),
  });
  const opacity = interpolate(local, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const accent = dimmed ? palette.paperDim : palette.gold;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        opacity,
        scale,
      }}
    >
      <div
        style={{
          width: 132,
          height: 132,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `3px solid ${accent}`,
          background: dimmed
            ? "rgba(201,196,182,0.06)"
            : "rgba(217,167,66,0.12)",
          boxShadow: dimmed ? "none" : `0 0 30px rgba(217,167,66,0.35)`,
        }}
      >
        <span
          style={{
            fontFamily: headlineFont,
            fontSize: 64,
            color: accent,
          }}
        >
          {rank}
        </span>
      </div>
      <span
        style={{
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 24,
          color: dimmed ? palette.paperDim : palette.paper,
          textAlign: "center",
          maxWidth: 220,
        }}
      >
        {label}
      </span>
    </div>
  );
};
