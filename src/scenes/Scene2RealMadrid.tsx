import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { palette } from "../palette";
import { headlineFont } from "../fonts";
import { Medallion } from "../components/Medallion";
import { ShieldIcon } from "../components/Icons";

// Real Madrid beat: the photo is now supporting texture inside a medallion,
// not the whole frame — a bold typographic stamp carries the moment instead.
export const Scene2RealMadrid: React.FC = () => {
  const frame = useCurrentFrame();

  const rayOpacity = interpolate(frame, [0, 24], [0, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [30, 54], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [30, 54], [26, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const ruleWidth = interpolate(frame, [54, 74], [0, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 54 }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "38%",
          translate: "-50% -50%",
          width: 620,
          height: 620,
          opacity: rayOpacity,
          background:
            "repeating-conic-gradient(from 0deg, rgba(217,167,66,0.16) 0deg 4deg, rgba(0,0,0,0) 4deg 18deg)",
          borderRadius: "50%",
          rotate: `${frame * 0.15}deg`,
        }}
      />
      <Medallion
        src={staticFile("images/mbappe-real-madrid.jpg")}
        size={440}
        appearAt={0}
        objectPosition="center 22%"
        accentIcon={<ShieldIcon />}
        style={{ marginTop: -40 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Interactive.Div
          name="Club title"
          style={{
            fontFamily: headlineFont,
            fontSize: 78,
            letterSpacing: 4,
            color: palette.paper,
            opacity: titleOpacity,
            translate: `0px ${titleY}px`,
          }}
        >
          REAL MADRID
        </Interactive.Div>
        <div
          style={{
            width: ruleWidth,
            height: 4,
            background: palette.gold,
            boxShadow: "0 0 14px rgba(217,167,66,0.75)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
