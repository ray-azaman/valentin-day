export interface Palette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  text: string;
  textMuted: string;
  cardBg: string;
  cardBorder: string;
  glow: string;
}

export const palettes: Palette[] = [
  {
    name: "candy-pink",
    primary: "#ff6b9d",
    secondary: "#e91e8c",
    accent: "#ff85b3",
    bgFrom: "#fff5f8",
    bgVia: "#fff0f5",
    bgTo: "#fce4ec",
    text: "#c2185b",
    textMuted: "#c2185b99",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(255,107,157,0.3)",
    glow: "rgba(255,107,157,0.2)",
  },
  {
    name: "galaxy-purple",
    primary: "#a78bfa",
    secondary: "#7c3aed",
    accent: "#c4b5fd",
    bgFrom: "#0f0a1f",
    bgVia: "#1e1545",
    bgTo: "#2d1b69",
    text: "#e9d5ff",
    textMuted: "#c4b5fda0",
    cardBg: "rgba(30,21,69,0.7)",
    cardBorder: "rgba(167,139,250,0.3)",
    glow: "rgba(124,58,237,0.35)",
  },
  {
    name: "ocean-blue",
    primary: "#38bdf8",
    secondary: "#0ea5e9",
    accent: "#7dd3fc",
    bgFrom: "#f0f9ff",
    bgVia: "#e0f2fe",
    bgTo: "#bae6fd",
    text: "#0c4a6e",
    textMuted: "#0c4a6ea0",
    cardBg: "rgba(255,255,255,0.75)",
    cardBorder: "rgba(56,189,248,0.3)",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    name: "golden-warm",
    primary: "#f59e0b",
    secondary: "#d97706",
    accent: "#fbbf24",
    bgFrom: "#fffbeb",
    bgVia: "#fef3c7",
    bgTo: "#fde68a",
    text: "#92400e",
    textMuted: "#92400ea0",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(245,158,11,0.3)",
    glow: "rgba(217,119,6,0.2)",
  },
  {
    name: "forest-green",
    primary: "#34d399",
    secondary: "#10b981",
    accent: "#6ee7b7",
    bgFrom: "#ecfdf5",
    bgVia: "#d1fae5",
    bgTo: "#a7f3d0",
    text: "#065f46",
    textMuted: "#065f46a0",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(52,211,153,0.3)",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    name: "dark-moody",
    primary: "#f472b6",
    secondary: "#ec4899",
    accent: "#fb7185",
    bgFrom: "#0f172a",
    bgVia: "#1e1b4b",
    bgTo: "#312e81",
    text: "#fce7f3",
    textMuted: "#fce7f3a0",
    cardBg: "rgba(15,23,42,0.7)",
    cardBorder: "rgba(244,114,182,0.3)",
    glow: "rgba(236,72,153,0.35)",
  },
  {
    name: "sunset-orange",
    primary: "#fb923c",
    secondary: "#f97316",
    accent: "#fdba74",
    bgFrom: "#fff7ed",
    bgVia: "#ffedd5",
    bgTo: "#fed7aa",
    text: "#9a3412",
    textMuted: "#9a3412a0",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(251,146,60,0.3)",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    name: "cherry-red",
    primary: "#f87171",
    secondary: "#ef4444",
    accent: "#fca5a5",
    bgFrom: "#fef2f2",
    bgVia: "#fee2e2",
    bgTo: "#fecaca",
    text: "#991b1b",
    textMuted: "#991b1ba0",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(248,113,113,0.3)",
    glow: "rgba(239,68,68,0.2)",
  },
];
