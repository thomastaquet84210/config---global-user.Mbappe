import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { palette } from "../palette";
import { bodyFont } from "../fonts";
import {
  BootIcon,
  ShieldIcon,
  StarBallIcon,
  TrophyIcon,
} from "../components/Icons";

const SATELLITES = [
  { icon: <ShieldIcon />, x: 50, y: 2, appearAt: 20 },
  { icon: <TrophyIcon />, x: 98, y: 50, appearAt: 80 },
  { icon: <BootIcon />, x: 50, y: 98, appearAt: 140 },
  { icon: <StarBallIcon />, x: 2, y: 50, appearAt: 200 },
] as const;

const ORBIT = 560;

// Convergence beat: the four accolades from the previous scenes recombine
// as plain icons (their labels already landed earlier) orbiting a portrait,
// visualising "most decorated across every competition" without a caption
// that restates the line.
export const Scene6Convergence: React.FC = () => {
  const frame = useCurrentFrame();

  const medallionScale = interpolate(frame, [0, 24], [0.75, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });
  const ringRotate = frame * 0.5;
  const finalGlow = interpolate(frame, [220, 260, 300], [0.5, 1, 0.75], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 56 }}>
      <Interactive.Div
        name="Convergence kicker"
        style={{
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: 6,
          color: palette.gold,
          opacity: interpolate(frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        TOUTES COMPÉTITIONS
      </Interactive.Div>

      <div
        style={{
          position: "relative",
          width: ORBIT,
          height: ORBIT,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: "50%",
            border: "1.5px dashed rgba(217,167,66,0.35)",
            rotate: `${ringRotate}deg`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            overflow: "hidden",
            border: `4px solid ${palette.gold}`,
            scale: medallionScale,
            boxShadow: `0 0 ${40 * finalGlow}px rgba(217,167,66,0.55)`,
          }}
        >
          <Img
            src={staticFile("images/mbappe-real-madrid.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 18%",
              filter: "saturate(1.05) contrast(1.05)",
            }}
          />
        </div>

        {SATELLITES.map((sat, i) => {
          const local = frame - sat.appearAt;
          const scale = interpolate(local, [0, 16], [0.4, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(2)),
          });
          const opacity = interpolate(local, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${sat.x}%`,
                top: `${sat.y}%`,
                translate: "-50% -50%",
                width: 108,
                height: 108,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(11,15,28,0.7)",
                border: `2.5px solid ${palette.gold}`,
                color: palette.gold,
                padding: 26,
                boxSizing: "border-box",
                scale,
                opacity,
                boxShadow: "0 0 24px rgba(217,167,66,0.45)",
              }}
            >
              {sat.icon}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
