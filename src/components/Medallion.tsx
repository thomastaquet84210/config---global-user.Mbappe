import React from "react";
import { Easing, Img, interpolate, useCurrentFrame } from "remotion";
import { palette } from "../palette";

type MedallionProps = {
  src: string;
  size: number;
  appearAt: number;
  objectPosition?: string;
  accentIcon?: React.ReactNode;
  accentAppearAt?: number;
  style?: React.CSSProperties;
};

// A circular portrait with a slow rotating dashed ring and an accent-icon
// chip pinned to its edge. This is the recurring "trophy medallion" motif —
// photos sit inside it as supporting texture rather than as full-bleed
// hero shots, and the same shape repeats across scenes to tie the video
// together visually.
export const Medallion: React.FC<MedallionProps> = ({
  src,
  size,
  appearAt,
  objectPosition = "center",
  accentIcon,
  accentAppearAt,
  style,
}) => {
  const frame = useCurrentFrame();
  const local = frame - appearAt;

  const scale = interpolate(local, [0, 22], [0.72, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.6)),
  });
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glow = interpolate(local, [0, 30], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringRotate = frame * 0.4;

  const accentAt = accentAppearAt ?? appearAt + 18;
  const accentLocal = frame - accentAt;
  const accentScale = interpolate(accentLocal, [0, 16], [0.4, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2.2)),
  });
  const accentOpacity = interpolate(accentLocal, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ringSize = size + 56;
  const accentSize = Math.max(64, size * 0.3);

  return (
    <div
      style={{
        position: "relative",
        width: ringSize,
        height: ringSize,
        opacity,
        scale,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: `1.5px dashed rgba(217,167,66,0.4)`,
          rotate: `${ringRotate}deg`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          border: `4px solid ${palette.gold}`,
          boxShadow: `0 0 ${44 * glow}px rgba(217,167,66,0.55)`,
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            filter: "saturate(1.08) contrast(1.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(150deg, rgba(11,15,28,0.28) 0%, rgba(11,15,28,0) 45%, rgba(217,167,66,0.16) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>
      {accentIcon ? (
        <div
          style={{
            position: "absolute",
            right: 4,
            bottom: 4,
            width: accentSize,
            height: accentSize,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: palette.bgTop,
            border: `2.5px solid ${palette.gold}`,
            color: palette.gold,
            padding: accentSize * 0.24,
            boxSizing: "border-box",
            scale: accentScale,
            opacity: accentOpacity,
            boxShadow: "0 0 20px rgba(217,167,66,0.5)",
          }}
        >
          {accentIcon}
        </div>
      ) : null}
    </div>
  );
};
