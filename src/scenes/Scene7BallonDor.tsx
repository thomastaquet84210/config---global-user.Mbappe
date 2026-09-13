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
import { PhotoReveal } from "../components/PhotoReveal";

// Finale: a bright flash cuts to the payoff photo, then the title stamps in.
export const Scene7BallonDor: React.FC = () => {
  const frame = useCurrentFrame();

  const flash = interpolate(frame, [0, 3, 16], [0, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const stampScale = interpolate(frame, [34, 50], [0.55, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2.2)),
  });
  const stampOpacity = interpolate(frame, [34, 46], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ruleWidth = interpolate(frame, [50, 66], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill>
      <PhotoReveal
        src={staticFile("images/mbappe-ballon-dor.jpg")}
        appearAt={0}
        holdFrames={90}
        objectPosition="center 22%"
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 110,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            scale: stampScale,
            opacity: stampOpacity,
          }}
        >
          <Interactive.Div
            name="Trophy stamp"
            style={{
              fontFamily: headlineFont,
              fontSize: 96,
              letterSpacing: 4,
              color: palette.paper,
              textShadow: "0 0 40px rgba(217,167,66,0.85)",
            }}
          >
            BALLON D&apos;OR
          </Interactive.Div>
          <div
            style={{
              width: 340 * ruleWidth,
              height: 4,
              background: palette.gold,
              boxShadow: "0 0 16px rgba(217,167,66,0.8)",
            }}
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(245,216,145,${flash}) 0%, rgba(217,167,66,${flash * 0.6}) 40%, rgba(0,0,0,0) 75%)`,
        }}
      />
    </AbsoluteFill>
  );
};
