import React from "react";

// Generic line-icon set (not any club/competition's official logo) used
// throughout the video's badges. Plain stroke-based silhouettes only.
const base: React.SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: "100%",
  height: "100%",
};

export const TrophyIcon: React.FC = () => (
  <svg {...base}>
    <path d="M7 4h10v3.2c0 3.1-2.2 5.6-5 5.6s-5-2.5-5-5.6V4Z" />
    <path d="M7 5H4.6C4.6 7.4 5.8 9 7.6 9" />
    <path d="M17 5h2.4c0 2.4-1.2 4-3 4" />
    <path d="M12 12.8V16" />
    <path d="M8.6 20h6.8" />
    <path d="M9.6 16h4.8l.6 4H9l.6-4Z" />
  </svg>
);

export const BootIcon: React.FC = () => (
  <svg {...base}>
    <path d="M5 20h15l-1-3.3-4.4-2.1c-1-.5-1.6-1.5-1.6-2.6V6.2l-2.6 1.3a3 3 0 0 0-1.65 2.2L7.9 14.5 5 16.2V20Z" />
    <path d="M8 20v-3" />
    <path d="M11.4 20v-3.4" />
  </svg>
);

export const StarBallIcon: React.FC = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 6.6 13.2 10h3.4l-2.8 2.1 1.1 3.4-2.9-2-2.9 2 1.1-3.4-2.8-2.1h3.4L12 6.6Z" />
  </svg>
);

export const ShieldIcon: React.FC = () => (
  <svg {...base}>
    <path d="M12 3.4 19 6v5.4c0 4.4-3 7.7-7 9.2-4-1.5-7-4.8-7-9.2V6l7-2.6Z" />
    <path d="M9 12.1 11.1 14.2 15.4 9.8" />
  </svg>
);

export const LaurelStarIcon: React.FC = () => (
  <svg {...base}>
    <path d="M12 3 13.4 7.6 18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
    <path d="M6.5 15c-1 1.6-1.6 3.4-1.8 5.2 1.8-.5 3.5-1.4 4.8-2.7" />
    <path d="M17.5 15c1 1.6 1.6 3.4 1.8 5.2-1.8-.5-3.5-1.4-4.8-2.7" />
  </svg>
);

export const MedalIcon: React.FC = () => (
  <svg {...base}>
    <circle cx="12" cy="14.6" r="5.6" />
    <path d="M12 11.4v6.4" />
    <path d="M9.4 14.6h5.2" />
    <path d="M9 4 7 9.4l3.4.6" />
    <path d="M15 4l2 5.4-3.4.6" />
  </svg>
);
