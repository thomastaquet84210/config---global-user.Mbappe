import React from "react";
import { Img, interpolate, useCurrentFrame, Easing } from "remotion";

type PhotoRevealProps = {
  src: string;
  appearAt: number;
  objectPosition?: string;
  /** Total frames the photo stays mounted for — drives the slow Ken Burns zoom. */
  holdFrames: number;
  style?: React.CSSProperties;
};

// A full-bleed photo with a soft fade/scale entrance, a slow continuous
// Ken Burns zoom, and a gold-navy duotone + vignette treatment so text can
// sit on top of it. Reused by every scene that shows a Mbappé photo.
export const PhotoReveal: React.FC<PhotoRevealProps> = ({
  src,
  appearAt,
  objectPosition = "center",
  holdFrames,
  style,
}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;

  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const entranceScale = interpolate(local, [0, 26], [1.12, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const kenBurns = interpolate(local, [0, Math.max(holdFrames, 1)], [1.04, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        opacity,
        ...style,
      }}
    >
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          scale: entranceScale * kenBurns,
          filter: "saturate(1.05) contrast(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(11,15,28,0.35) 0%, rgba(11,15,28,0.05) 40%, rgba(217,167,66,0.12) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(11,15,28,0) 45%, rgba(11,15,28,0.85) 100%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
};
