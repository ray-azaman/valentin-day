"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import {
  generateRandomTheme,
  paletteToCSS,
  fontPairToCSS,
  backgroundCSS,
  cardClasses,
  cardInlineStyle,
  yesButtonClasses,
  yesButtonStyle,
  animationEntryClass,
  type ThemeConfig,
  type LayoutVariant,
} from "@/lib/theme-generator";
import { getSubText } from "@/lib/text-sets";

// ─────────────────────── Floating Particle ───────────────────────

function FloatingParticle({
  delay,
  left,
  size,
  symbol,
  direction,
}: {
  delay: number;
  left: number;
  size: number;
  symbol: string;
  direction: "up" | "down" | "mixed";
}) {
  const animClass =
    direction === "up"
      ? "animate-float-up"
      : direction === "down"
        ? "animate-float-down"
        : "animate-float-mixed";

  return (
    <div
      className={`pointer-events-none fixed opacity-60 ${animClass}`}
      style={{
        left: `${left}%`,
        bottom: direction === "down" ? "auto" : "-20px",
        top: direction === "down" ? "-20px" : "auto",
        animationDuration: `${6 + Math.random() * 6}s`,
        animationDelay: `${delay}s`,
        fontSize: `${size}px`,
      }}
    >
      {symbol}
    </div>
  );
}

// ─────────────────────── Layout Wrappers ───────────────────────

function LayoutWrapper({
  layout,
  bgStyle,
  children,
  theme,
}: {
  layout: LayoutVariant;
  bgStyle: React.CSSProperties;
  children: React.ReactNode;
  theme: ThemeConfig;
}) {
  const base = "relative min-h-screen overflow-hidden";

  switch (layout) {
    case "center":
      return (
        <div className={`${base} flex flex-col items-center justify-center`} style={bgStyle}>
          {children}
        </div>
      );
    case "split":
      return (
        <div className={`${base} flex flex-col md:flex-row`} style={bgStyle}>
          {/* Left: big emoji / decoration */}
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="animate-subtle-float text-[120px] md:text-[180px]">
              {theme.textSet.headerEmoji}
            </div>
          </div>
          {/* Right: content */}
          <div className="flex flex-1 flex-col items-center justify-center p-4">{children}</div>
        </div>
      );
    case "fullscreen":
      return (
        <div className={`${base} flex flex-col items-center justify-center px-6`} style={bgStyle}>
          {children}
        </div>
      );
    case "offset":
      return (
        <div className={`${base} flex flex-col items-end justify-end p-6 md:p-16`} style={bgStyle}>
          <div
            className="pointer-events-none absolute left-8 top-8 text-[100px] opacity-30 md:left-16 md:top-16 md:text-[200px]"
            style={{ color: theme.palette.primary }}
          >
            ♥
          </div>
          {children}
        </div>
      );
    case "minimal":
      return (
        <div className={`${base} flex flex-col items-center justify-center`} style={bgStyle}>
          {children}
        </div>
      );
  }
}

// ─────────────────────── Main Content ───────────────────────

function ValentineContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; size: number; symbol: string }[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [theme, setTheme] = useState<ThemeConfig | null>(null);

  // Generate theme ONCE on client mount — avoids hydration mismatch
  useEffect(() => {
    setTheme(generateRandomTheme());
  }, []);

  // Play audio immediately on page load
  useEffect(() => {
    if (!theme) return;
    const audio = new Audio(theme.audioTrack);
    audio.loop = true;
    audio.volume = 0.5;

    // Try playing immediately — browsers may block autoplay
    audio.play().catch(() => {
      // If blocked, play on first user interaction
      const unlock = () => {
        audio.play();
        document.removeEventListener("click", unlock);
        document.removeEventListener("touchstart", unlock);
      };
      document.addEventListener("click", unlock);
      document.addEventListener("touchstart", unlock);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [theme]);

  // Background floating particles
  useEffect(() => {
    if (!theme) return;
    const syms = theme.particles.symbols;
    const initial = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: 16 + Math.random() * 24,
      symbol: syms[Math.floor(Math.random() * syms.length)],
    }));
    setParticles(initial);
  }, [theme]);

  // Show nothing until theme is generated client-side
  if (!theme) {
    return <div className="min-h-screen" />;
  }

  const handleNo = useCallback(() => {
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => prev + 0.25);
  }, []);

  const handleYes = useCallback(() => {
    setAnswered(true);
    setShowConfetti(true);
  }, []);

  // ── Computed styles ──
  const palCSS = paletteToCSS(theme.palette);
  const fontCSS = fontPairToCSS(theme.fontPair);
  const bgCSS = backgroundCSS(theme.backgroundStyle, theme.palette);
  const containerStyle: React.CSSProperties = { ...palCSS, ...fontCSS, ...bgCSS };

  const entryAnim = animationEntryClass(theme.animationStyle);

  const cClasses = cardClasses(theme.cardStyle);
  const cStyle = cardInlineStyle(theme.cardStyle, theme.palette);

  const ybClasses = yesButtonClasses(theme.buttonStyle);
  const ybStyle = yesButtonStyle(theme.buttonStyle, theme.palette, yesScale);

  const ts = theme.textSet;
  const p = theme.palette;

  // ── Sparkle accents (some layouts skip them) ──
  const showSparkles = theme.layout !== "minimal" && theme.layout !== "fullscreen";

  // ═══════════════════ SUCCESS SCREEN ═══════════════════
  if (answered) {
    return (
      <LayoutWrapper layout={theme.layout} bgStyle={containerStyle} theme={theme}>
        {/* Burst particles */}
        {showConfetti &&
          Array.from({ length: 30 }).map((_, i) => {
            const burstSyms = theme.particles.burstSymbols;
            return (
              <div
                key={i}
                className="pointer-events-none fixed animate-float-up"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 40}%`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: `${20 + Math.random() * 30}px`,
                }}
              >
                {burstSyms[Math.floor(Math.random() * burstSyms.length)]}
              </div>
            );
          })}

        {theme.layout === "fullscreen" || theme.layout === "minimal" ? (
          // No card — direct content
          <div className={`${entryAnim} z-10 flex flex-col items-center gap-6 px-6 text-center`}>
            <div className="animate-pulse-heart text-7xl md:text-9xl">{ts.successEmoji}</div>
            <h1
              className="font-active-cursive text-4xl font-bold md:text-6xl"
              style={{ color: p.secondary }}
            >
              {ts.successTitle}
            </h1>
            <p className="max-w-md text-xl leading-relaxed md:text-2xl" style={{ color: p.text }}>
              {ts.successBody}
              <br />
              <span className="font-active-cursive text-2xl md:text-3xl">{ts.successBody2}</span>
            </p>
            <div className="mt-4 flex gap-2 text-4xl">
              {ts.successEmojis.map((e, i) => (
                <span
                  key={i}
                  className="animate-wiggle inline-block"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <Card className={`${entryAnim} z-10 mx-4 ${cClasses}`} style={cStyle}>
            <CardContent className="flex flex-col items-center gap-6 p-10 md:p-16">
              <div className="animate-pulse-heart text-7xl md:text-9xl">{ts.successEmoji}</div>
              <h1
                className="font-active-cursive text-center text-4xl font-bold md:text-6xl"
                style={{ color: p.secondary }}
              >
                {ts.successTitle}
              </h1>
              <p className="max-w-md text-center text-xl leading-relaxed md:text-2xl" style={{ color: p.text }}>
                {ts.successBody}
                <br />
                <span className="font-active-cursive text-2xl md:text-3xl">{ts.successBody2}</span>
              </p>
              <div className="mt-4 flex gap-2 text-4xl">
                {ts.successEmojis.map((e, i) => (
                  <span
                    key={i}
                    className="animate-wiggle inline-block"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </LayoutWrapper>
    );
  }

  // ═══════════════════ QUESTION SCREEN ═══════════════════
  return (
    <LayoutWrapper layout={theme.layout} bgStyle={containerStyle} theme={theme}>
      {/* Floating background particles */}
      {particles.map((h) => (
        <FloatingParticle
          key={h.id}
          left={h.left}
          delay={h.delay}
          size={h.size}
          symbol={h.symbol}
          direction={theme.particles.direction}
        />
      ))}

      {/* Sparkle decorations */}
      {showSparkles && (
        <>
          <Sparkles
            className="absolute left-[10%] top-[15%] h-8 w-8 animate-pulse"
            style={{ color: `${p.primary}66` }}
          />
          <Sparkles
            className="absolute right-[15%] top-[20%] h-6 w-6 animate-pulse"
            style={{ color: `${p.secondary}4d`, animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute left-[20%] bottom-[25%] h-5 w-5 animate-pulse"
            style={{ color: `${p.accent}66`, animationDelay: "2s" }}
          />
        </>
      )}

      {theme.layout === "fullscreen" || theme.layout === "minimal" ? (
        // No card — direct content
        <div className={`${entryAnim} z-10 flex max-w-lg flex-col items-center gap-8 px-6 text-center`}>
          {/* Header emoji */}
          <div className="animate-pulse-heart text-6xl md:text-8xl">{ts.headerEmoji}</div>

          {/* Title */}
          <h1
            className={`font-active-cursive text-3xl font-bold leading-snug md:text-5xl ${theme.animationStyle === "typewriter" ? "typewriter-text" : ""}`}
            style={{ color: p.secondary }}
          >
            {name ? ts.titleWithName(name) : ts.title}
          </h1>

          <p className="max-w-sm text-lg" style={{ color: p.textMuted }}>
            <Heart className="mr-1 inline-block h-4 w-4" style={{ color: p.primary }} />
            {ts.subtitle}
            <Heart className="ml-1 inline-block h-4 w-4" style={{ color: p.primary }} />
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleYes} className={ybClasses} style={ybStyle}>
              <span className="font-active-cursive">{ts.yesButton}</span>
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="cursor-pointer rounded-full border px-6 py-4 text-sm transition-all duration-300 md:text-base"
              style={{
                borderColor: `${p.primary}80`,
                color: p.text,
                fontSize: `${Math.max(14 - noCount * 1.5, 6)}px`,
                opacity: Math.max(1 - noCount * 0.08, 0.3),
              }}
            >
              {ts.noMessages[Math.min(noCount, ts.noMessages.length - 1)]}
            </Button>
          </div>

          {noCount > 0 && (
            <p className="animate-fade-in-up text-sm italic" style={{ color: p.textMuted }}>
              {getSubText(ts, noCount)}
            </p>
          )}
        </div>
      ) : (
        <>
          <Card className={`${entryAnim} z-10 mx-4 ${cClasses}`} style={cStyle}>
            <CardContent className="flex flex-col items-center gap-8 p-8 md:p-14">
              {/* Header emoji */}
              <div className="animate-pulse-heart text-6xl md:text-8xl">{ts.headerEmoji}</div>

              {/* Title */}
              <h1
                className={`font-active-cursive text-center text-3xl font-bold leading-snug md:text-5xl ${theme.animationStyle === "typewriter" ? "typewriter-text" : ""}`}
                style={{ color: p.secondary }}
              >
                {name ? ts.titleWithName(name) : ts.title}
              </h1>

              <p className="max-w-sm text-center text-lg" style={{ color: p.textMuted }}>
                <Heart className="mr-1 inline-block h-4 w-4" style={{ color: p.primary }} />
                {ts.subtitle}
                <Heart className="ml-1 inline-block h-4 w-4" style={{ color: p.primary }} />
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button onClick={handleYes} className={ybClasses} style={ybStyle}>
                  <span className="font-active-cursive">{ts.yesButton}</span>
                </Button>
                <Button
                  onClick={handleNo}
                  variant="outline"
                  className="cursor-pointer rounded-full border px-6 py-4 text-sm transition-all duration-300 md:text-base"
                  style={{
                    borderColor: `${p.primary}80`,
                    color: p.text,
                    fontSize: `${Math.max(14 - noCount * 1.5, 6)}px`,
                    opacity: Math.max(1 - noCount * 0.08, 0.3),
                  }}
                >
                  {ts.noMessages[Math.min(noCount, ts.noMessages.length - 1)]}
                </Button>
              </div>

              {noCount > 0 && (
                <p className="animate-fade-in-up text-sm italic" style={{ color: p.textMuted }}>
                  {getSubText(ts, noCount)}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="font-active-cursive z-10 mt-8 text-center text-sm" style={{ color: p.textMuted }}>
            {ts.footer}
          </p>
        </>
      )}
    </LayoutWrapper>
  );
}

export default function Home() {
  return (
    <Suspense>
      <ValentineContent />
    </Suspense>
  );
}
