export interface ParticleConfig {
  name: string;
  /** Emoji/symbol set for floating particles */
  symbols: string[];
  /** Emoji/symbol set for the success burst */
  burstSymbols: string[];
  /** Direction of float: "up" | "down" | "mixed" */
  direction: "up" | "down" | "mixed";
}

export const particleConfigs: ParticleConfig[] = [
  {
    name: "hearts",
    symbols: ["♥", "💕", "💖", "💗"],
    burstSymbols: ["♥", "💕", "💖", "💗", "🌹", "✨"],
    direction: "up",
  },
  {
    name: "stars",
    symbols: ["⭐", "✨", "🌟", "💫"],
    burstSymbols: ["⭐", "✨", "🌟", "💫", "🎆", "🎇"],
    direction: "mixed",
  },
  {
    name: "flowers",
    symbols: ["🌸", "🌺", "🌷", "💐", "🌻"],
    burstSymbols: ["🌸", "🌺", "🌷", "💐", "🌻", "🌼"],
    direction: "down",
  },
  {
    name: "sparkles",
    symbols: ["✨", "💎", "⚡", "🔮"],
    burstSymbols: ["✨", "💎", "⚡", "🔮", "🌈", "🎆"],
    direction: "mixed",
  },
  {
    name: "cosmic",
    symbols: ["🌙", "⭐", "🪐", "☄️"],
    burstSymbols: ["🌙", "⭐", "🪐", "☄️", "🌌", "💫"],
    direction: "up",
  },
  {
    name: "confetti",
    symbols: ["🎊", "🎉", "🎀", "🎈"],
    burstSymbols: ["🎊", "🎉", "🎀", "🎈", "🎆", "🥳"],
    direction: "down",
  },
];
