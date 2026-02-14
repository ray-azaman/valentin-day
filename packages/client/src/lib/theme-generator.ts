import { palettes, type Palette } from "./palettes";
import { textSets, type TextSet } from "./text-sets";
import { particleConfigs, type ParticleConfig } from "./particles";

// ────────────────────────── Types ──────────────────────────

export type LayoutVariant = "center" | "split" | "fullscreen" | "offset" | "minimal";
export type CardStyle = "glass" | "solid" | "neon" | "paper" | "gradient";
export type AnimationStyle = "bouncy" | "smooth" | "glitch" | "elastic" | "typewriter";
export type ButtonStyle = "pill-gradient" | "outline-fill" | "threed" | "flat" | "retro";
export type BackgroundStyle = "gradient" | "animated-gradient" | "pattern" | "radial" | "mesh";
export type FontPair = "quicksand-dancing" | "poppins-pacifico" | "inter-caveat" | "nunito-sacramento" | "space-satisfy" | "gabarito-vibes";

export interface ThemeConfig {
  palette: Palette;
  textSet: TextSet;
  particles: ParticleConfig;
  layout: LayoutVariant;
  cardStyle: CardStyle;
  animationStyle: AnimationStyle;
  buttonStyle: ButtonStyle;
  backgroundStyle: BackgroundStyle;
  fontPair: FontPair;
  audioTrack: string;
}

// ────────────────────────── Random helpers ──────────────────────────

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ────────────────────────── Generator ──────────────────────────

const layouts: LayoutVariant[] = ["center", "split", "fullscreen", "offset", "minimal"];
const cardStyles: CardStyle[] = ["glass", "solid", "neon", "paper", "gradient"];
const animationStyles: AnimationStyle[] = ["bouncy", "smooth", "glitch", "elastic", "typewriter"];
const buttonStyles: ButtonStyle[] = ["pill-gradient", "outline-fill", "threed", "flat", "retro"];
const backgroundStyles: BackgroundStyle[] = ["gradient", "animated-gradient", "pattern", "radial", "mesh"];
const fontPairs: FontPair[] = ["quicksand-dancing", "poppins-pacifico", "inter-caveat", "nunito-sacramento", "space-satisfy", "gabarito-vibes"];

const audioTracks = [
  "/audios/my_baby.mp3",
  "/audios/sm.mp3",
  "/audios/ts.mp3",
];

export function generateRandomTheme(): ThemeConfig {
  return {
    palette: pick(palettes),
    textSet: pick(textSets),
    particles: pick(particleConfigs),
    layout: pick(layouts),
    cardStyle: pick(cardStyles),
    animationStyle: pick(animationStyles),
    buttonStyle: pick(buttonStyles),
    backgroundStyle: pick(backgroundStyles),
    fontPair: pick(fontPairs),
    audioTrack: pick(audioTracks),
  };
}

// ────────────────────────── Style helpers for consumption ──────────────────────────

/** CSS variables for the chosen palette, inject on root container via style={{}} */
export function paletteToCSS(p: Palette): React.CSSProperties {
  return {
    "--t-primary": p.primary,
    "--t-secondary": p.secondary,
    "--t-accent": p.accent,
    "--t-bg-from": p.bgFrom,
    "--t-bg-via": p.bgVia,
    "--t-bg-to": p.bgTo,
    "--t-text": p.text,
    "--t-text-muted": p.textMuted,
    "--t-card-bg": p.cardBg,
    "--t-card-border": p.cardBorder,
    "--t-glow": p.glow,
  } as React.CSSProperties;
}

/** Font family variables based on chosen pair */
export function fontPairToCSS(fp: FontPair): React.CSSProperties {
  const map: Record<FontPair, { sans: string; cursive: string }> = {
    "quicksand-dancing": { sans: "var(--font-quicksand)", cursive: "var(--font-dancing)" },
    "poppins-pacifico": { sans: "var(--font-poppins)", cursive: "var(--font-pacifico)" },
    "inter-caveat": { sans: "var(--font-inter)", cursive: "var(--font-caveat)" },
    "nunito-sacramento": { sans: "var(--font-nunito)", cursive: "var(--font-sacramento)" },
    "space-satisfy": { sans: "var(--font-space)", cursive: "var(--font-satisfy)" },
    "gabarito-vibes": { sans: "var(--font-gabarito)", cursive: "var(--font-vibes)" },
  };
  const f = map[fp];
  return {
    "--font-sans-active": f.sans,
    "--font-cursive-active": f.cursive,
    fontFamily: f.sans,
  } as React.CSSProperties;
}

/** Background style as inline CSS */
export function backgroundCSS(bg: BackgroundStyle, p: Palette): React.CSSProperties {
  switch (bg) {
    case "gradient":
      return { background: `linear-gradient(to bottom, ${p.bgFrom}, ${p.bgVia}, ${p.bgTo})` };
    case "animated-gradient":
      return {
        background: `linear-gradient(135deg, ${p.bgFrom}, ${p.bgVia}, ${p.bgTo}, ${p.bgVia}, ${p.bgFrom})`,
        backgroundSize: "400% 400%",
        animation: "gradient-shift 8s ease infinite",
      };
    case "pattern":
      return {
        backgroundColor: p.bgFrom,
        backgroundImage: `radial-gradient(circle, ${p.primary}15 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      };
    case "radial":
      return { background: `radial-gradient(circle at 50% 40%, ${p.bgFrom}, ${p.bgVia}, ${p.bgTo})` };
    case "mesh":
      return {
        background: `
          linear-gradient(135deg, ${p.bgFrom} 0%, transparent 50%),
          linear-gradient(225deg, ${p.bgVia} 0%, transparent 50%),
          linear-gradient(315deg, ${p.bgTo} 0%, transparent 50%),
          linear-gradient(45deg, ${p.bgVia} 0%, transparent 50%)
        `,
        backgroundColor: p.bgFrom,
      };
  }
}

/** Card classes based on style */
export function cardClasses(cs: CardStyle): string {
  switch (cs) {
    case "glass":
      return "backdrop-blur-xl border shadow-2xl";
    case "solid":
      return "border-0 shadow-2xl";
    case "neon":
      return "border-2 backdrop-blur-sm";
    case "paper":
      return "border shadow-md";
    case "gradient":
      return "border-0 shadow-2xl";
  }
}

export function cardInlineStyle(cs: CardStyle, p: Palette): React.CSSProperties {
  switch (cs) {
    case "glass":
      return { background: p.cardBg, borderColor: p.cardBorder, boxShadow: `0 25px 50px -12px ${p.glow}` };
    case "solid":
      return { background: p.bgFrom, boxShadow: `0 25px 50px -12px ${p.glow}, 0 0 0 1px ${p.cardBorder}` };
    case "neon":
      return { background: `${p.bgFrom}e6`, borderColor: p.primary, boxShadow: `0 0 30px ${p.glow}, 0 0 60px ${p.glow}, inset 0 0 30px ${p.glow}` };
    case "paper":
      return { background: "#fefcf3", borderColor: "#d4c5a9", boxShadow: `3px 3px 0px #d4c5a9` };
    case "gradient":
      return { background: `linear-gradient(135deg, ${p.bgFrom}, ${p.bgVia})`, boxShadow: `0 25px 50px -12px ${p.glow}` };
  }
}

/** Button classes based on style */
export function yesButtonClasses(bs: ButtonStyle): string {
  switch (bs) {
    case "pill-gradient":
      return "rounded-full px-8 py-6 text-xl md:text-2xl text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 cursor-pointer";
    case "outline-fill":
      return "rounded-full px-8 py-6 text-xl md:text-2xl border-2 bg-transparent transition-all duration-300 hover:text-white cursor-pointer";
    case "threed":
      return "rounded-xl px-8 py-6 text-xl md:text-2xl text-white transition-all duration-150 cursor-pointer";
    case "flat":
      return "rounded-none px-8 py-6 text-xl md:text-2xl text-white transition-all duration-200 hover:opacity-90 cursor-pointer";
    case "retro":
      return "rounded-none px-8 py-6 text-xl md:text-2xl border-4 transition-all duration-100 cursor-pointer";
  }
}

export function yesButtonStyle(bs: ButtonStyle, p: Palette, scale: number): React.CSSProperties {
  const baseTransform = `scale(${scale})`;
  switch (bs) {
    case "pill-gradient":
      return { background: `linear-gradient(to right, ${p.primary}, ${p.secondary})`, boxShadow: `0 10px 25px ${p.glow}`, transform: baseTransform, transition: "transform 0.3s ease" };
    case "outline-fill":
      return { borderColor: p.primary, color: p.primary, transform: baseTransform, transition: "transform 0.3s ease", "--hover-bg": p.primary } as React.CSSProperties;
    case "threed":
      return { background: p.primary, boxShadow: `0 6px 0 ${p.secondary}, 0 10px 20px ${p.glow}`, transform: `${baseTransform} translateY(-2px)`, transition: "transform 0.15s ease" };
    case "flat":
      return { background: p.primary, transform: baseTransform, transition: "transform 0.2s ease" };
    case "retro":
      return { background: p.bgFrom, borderColor: p.primary, color: p.text, boxShadow: `4px 4px 0px ${p.primary}`, transform: baseTransform, transition: "transform 0.1s ease" };
  }
}

/** Animation entry class for the card/content */
export function animationEntryClass(as: AnimationStyle): string {
  switch (as) {
    case "bouncy": return "animate-bounce-in";
    case "smooth": return "animate-fade-in-up";
    case "glitch": return "animate-glitch-in";
    case "elastic": return "animate-elastic-in";
    case "typewriter": return "animate-fade-in-up"; // text uses typewriter separately
  }
}
