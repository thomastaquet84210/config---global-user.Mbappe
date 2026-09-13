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
import { bodyFont, headlineFont } from "../fonts";
import { Medallion } from "../components/Medallion";
import { LaurelStarIcon, TrophyIcon } from "../components/Icons";

// World Cup beat — brief (3s) but now reads as a glory stamp: sunburst rays,
// a medallion, and a two-tier title flanked by small laurels.
export const Scene3WorldCup: React.FC = () => {
  const frame = useCurrentFrame();

  const rayOpacity = interpolate(frame, [0, 16], [0, 0.65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [18, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [18, 34], [22, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const laurelScale = interpolate(frame, [38, 54], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2)),
  });
  const laurelOpacity = interpolate(frame, [38, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 46 }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "38%",
          translate: "-50% -50%",
          width: 680,
          height: 680,
          opacity: rayOpacity,
          background:
            "repeating-conic-gradient(from 0deg, rgba(245,216,145,0.22) 0deg 3deg, rgba(0,0,0,0) 3deg 15deg)",
          borderRadius: "50%",
        }}
      />
      <Medallion
        src={staticFile("images/mbappe-world-cup.jpg")}
        size={440}
        appearAt={0}
        objectPosition="center 30%"
        accentIcon={<TrophyIcon />}
        accentAppearAt={12}
        style={{ marginTop: -40 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Interactive.Div
          name="World Cup title"
          style={{
            fontFamily: headlineFont,
            fontSize: 62,
            letterSpacing: 3,
            color: palette.paper,
            opacity: titleOpacity,
            translate: `0px ${titleY}px`,
          }}
        >
          COUPE DU MONDE
        </Interactive.Div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: laurelOpacity,
            scale: laurelScale,
          }}
        >
          <div style={{ width: 28, height: 28, color: palette.gold, rotate: "-18deg" }}>
            <LaurelStarIcon />
          </div>
          <span
            style={{
              fontFamily: bodyFont,
              fontWeight: 800,
              fontSize: 36,
              letterSpacing: 6,
              color: palette.gold,
            }}
          >
            2018
          </span>
          <div style={{ width: 28, height: 28, color: palette.gold, rotate: "18deg", scale: "-1 1" }}>
            <LaurelStarIcon />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
