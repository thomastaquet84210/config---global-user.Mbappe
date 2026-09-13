import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { PhotoReveal } from "../components/PhotoReveal";
import { Badge } from "../components/Badge";
import { TrophyIcon } from "../components/Icons";

// World Cup beat — brief on purpose (3s): the trophy photo plus one badge.
export const Scene3WorldCup: React.FC = () => {
  return (
    <AbsoluteFill>
      <PhotoReveal
        src={staticFile("images/mbappe-world-cup.jpg")}
        appearAt={0}
        holdFrames={90}
        objectPosition="center 35%"
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 220,
        }}
      >
        <Badge icon={<TrophyIcon />} label="COUPE DU MONDE 2018" appearAt={6} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
