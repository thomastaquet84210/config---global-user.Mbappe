import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { PhotoReveal } from "../components/PhotoReveal";
import { Badge } from "../components/Badge";
import { RankChip } from "../components/RankChip";
import { BootIcon } from "../components/Icons";

// La Liga beat: personal top-scorer trophy vs. the team's league position —
// two rank chips make the contrast visual instead of restating it in words.
export const Scene4LaLiga: React.FC = () => {
  return (
    <AbsoluteFill>
      <PhotoReveal
        src={staticFile("images/mbappe-pichichi.webp")}
        appearAt={0}
        holdFrames={210}
        objectPosition="center 20%"
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          paddingTop: 150,
        }}
      >
        <Badge icon={<BootIcon />} label="PICHICHI · LIGA" appearAt={14} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 190,
        }}
      >
        <div style={{ display: "flex", gap: 56 }}>
          <RankChip rank="#1" label="BUTEUR DE LA LIGA" appearAt={60} />
          <RankChip
            rank="#2"
            label="DERRIÈRE LE FC BARCELONE"
            appearAt={110}
            dimmed
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
