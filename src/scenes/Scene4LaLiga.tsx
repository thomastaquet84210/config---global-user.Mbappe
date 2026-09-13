import React from "react";
import { AbsoluteFill, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";
import { palette } from "../palette";
import { bodyFont } from "../fonts";
import { Medallion } from "../components/Medallion";
import { RankChip } from "../components/RankChip";
import { BootIcon } from "../components/Icons";

// La Liga beat: personal top-scorer trophy vs. the team's league position —
// two rank chips make the contrast visual instead of restating it in words.
// The photo now lives inside the recurring medallion motif.
export const Scene4LaLiga: React.FC = () => {
  const frame = useCurrentFrame();

  const kickerOpacity = interpolate(frame, [26, 46], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 40 }}
    >
      <Medallion
        src={staticFile("images/mbappe-pichichi.webp")}
        size={320}
        appearAt={0}
        objectPosition="center 18%"
        accentIcon={<BootIcon />}
      />
      <Interactive.Div
        name="Pichichi kicker"
        style={{
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: 5,
          color: palette.gold,
          opacity: kickerOpacity,
        }}
      >
        PICHICHI · LIGA
      </Interactive.Div>
      <div style={{ display: "flex", gap: 50 }}>
        <RankChip rank="#1" label="BUTEUR DE LA LIGA" appearAt={60} />
        <RankChip
          rank="#2"
          label="DERRIÈRE LE FC BARCELONE"
          appearAt={110}
          dimmed
        />
      </div>
    </AbsoluteFill>
  );
};
