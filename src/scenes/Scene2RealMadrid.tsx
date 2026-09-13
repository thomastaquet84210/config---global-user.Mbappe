import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { PhotoReveal } from "../components/PhotoReveal";
import { Badge } from "../components/Badge";
import { ShieldIcon } from "../components/Icons";

// Real Madrid beat: the photo carries the moment, a single badge names
// the club. Nothing here repeats the narration sentence.
export const Scene2RealMadrid: React.FC = () => {
  return (
    <AbsoluteFill>
      <PhotoReveal
        src={staticFile("images/mbappe-real-madrid.jpg")}
        appearAt={0}
        holdFrames={150}
        objectPosition="center 22%"
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 220,
        }}
      >
        <Badge icon={<ShieldIcon />} label="REAL MADRID" appearAt={14} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
