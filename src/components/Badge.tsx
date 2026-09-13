import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { palette } from "../palette";
import { bodyFont } from "../fonts";

type BadgeProps = {
  icon: React.ReactNode;
  label: string;
  appearAt: number;
  accent?: string;
  style?: React.CSSProperties;
};

// A small gold pill: icon + label. Reusable across scenes with different
// content, so it stays a plain (non-Interactive) structural component —
// the scene files decide what text/icon/timing to give it.
export const Badge: React.FC<BadgeProps> = ({
  icon,
  label,
  appearAt,
  accent = palette.gold,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - appearAt;

  const scale = interpolate(local, [0, 0.5 * fps], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.7)),
  });
  const opacity = interpolate(local, [0, 0.35 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(local, [0, 0.5 * fps], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 28px",
        borderRadius: 999,
        background: "rgba(11,15,28,0.55)",
        border: `1.5px solid ${accent}`,
        boxShadow: `0 0 24px rgba(217,167,66,0.25), inset 0 0 18px rgba(217,167,66,0.08)`,
        opacity,
        scale,
        translate: `0px ${translateY}px`,
        ...style,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accent,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: bodyFont,
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: 0.5,
          color: palette.paper,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
};
