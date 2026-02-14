"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

function FloatingHeart({ delay, left, size }: { delay: number; left: number; size: number }) {
  return (
    <div
      className="pointer-events-none fixed text-valentine-pink opacity-60 animate-float-up"
      style={{
        left: `${left}%`,
        bottom: "-20px",
        animationDuration: `${6 + Math.random() * 6}s`,
        animationDelay: `${delay}s`,
        fontSize: `${size}px`,
      }}
    >
      ♥
    </div>
  );
}

export default function Home() {
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Play audio in loop on site load
  useEffect(() => {
    const audio = new Audio("/audios/my_baby.mp3");
    audio.loop = true;
    audio.volume = 0.5;

    const tryPlay = () => {
      audio.play().catch(() => {
        // Autoplay blocked — play on first user interaction
        const unlock = () => {
          audio.play();
          document.removeEventListener("click", unlock);
          document.removeEventListener("touchstart", unlock);
        };
        document.addEventListener("click", unlock);
        document.addEventListener("touchstart", unlock);
      });
    };

    tryPlay();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Background floating hearts
  useEffect(() => {
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: 16 + Math.random() * 24,
    }));
    setHearts(initialHearts);
  }, []);

  const noMessages = [
    "Wsh t'es sérieux ? 🤨",
    "Tu forces là... 💀",
    "Cringe de ouf 😬",
    "Mais wesh ?! 😤",
    "Flop total... 📉",
    "Je suis choquebar 😱",
    "C'est la hess... 🫠",
    "Dernière chance le S 🙏",
    "Allez fais pas genre 👀",
    "Je vais câbler... 🤯",
  ];

  const handleNo = useCallback(() => {
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => prev + 0.25);
  }, []);

  const handleYes = useCallback(() => {
    setAnswered(true);
    setShowConfetti(true);
  }, []);

  if (answered) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-valentine-cream via-valentine-blush to-[#fce4ec]">
        {/* Burst of hearts */}
        {showConfetti &&
          Array.from({ length: 30 }).map((_, i) => (
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
              {["♥", "💕", "💖", "💗", "🌹", "✨"][Math.floor(Math.random() * 6)]}
            </div>
          ))}

        <Card className="animate-fade-in-up z-10 mx-4 border-valentine-pink/30 bg-white/80 shadow-2xl shadow-valentine-pink/20 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center gap-6 p-10 md:p-16">
            <div className="animate-pulse-heart text-7xl md:text-9xl">💖</div>
            <h1 className="font-cursive text-center text-4xl font-bold text-valentine-hot md:text-6xl">
              LETS GOOO !!! 🚀
            </h1>
            <p className="max-w-md text-center text-xl leading-relaxed text-valentine-deep md:text-2xl">
              J&apos;le savais, t&apos;es mon date sûr ! 🥰
              <br />
              <span className="font-cursive text-2xl md:text-3xl">
                C&apos;est carré dans l&apos;axe 🤙💝
              </span>
            </p>
            <div className="mt-4 flex gap-2 text-4xl">
              <span className="animate-wiggle inline-block" style={{ animationDelay: "0s" }}>🌹</span>
              <span className="animate-wiggle inline-block" style={{ animationDelay: "0.2s" }}>💌</span>
              <span className="animate-wiggle inline-block" style={{ animationDelay: "0.4s" }}>🧸</span>
              <span className="animate-wiggle inline-block" style={{ animationDelay: "0.6s" }}>🍫</span>
              <span className="animate-wiggle inline-block" style={{ animationDelay: "0.8s" }}>💐</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-valentine-cream via-valentine-blush to-[#fce4ec]">
      {/* Floating background hearts */}
      {hearts.map((h) => (
        <FloatingHeart key={h.id} left={h.left} delay={h.delay} size={h.size} />
      ))}

      {/* Sparkle decorations */}
      <Sparkles className="absolute left-[10%] top-[15%] h-8 w-8 text-valentine-pink/40 animate-pulse" />
      <Sparkles className="absolute right-[15%] top-[20%] h-6 w-6 text-valentine-hot/30 animate-pulse" style={{ animationDelay: "1s" }} />
      <Sparkles className="absolute left-[20%] bottom-[25%] h-5 w-5 text-valentine-rose/40 animate-pulse" style={{ animationDelay: "2s" }} />

      <Card className="animate-fade-in-up z-10 mx-4 border-valentine-pink/30 bg-white/80 shadow-2xl shadow-valentine-pink/20 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center gap-8 p-8 md:p-14">
          {/* Cute bear / heart emoji */}
          <div className="animate-pulse-heart text-6xl md:text-8xl">
            🐻✨
          </div>

          {/* Title */}
          <h1 className="font-cursive text-center text-3xl font-bold leading-snug text-valentine-hot md:text-5xl">
            POV : Tu veux être
            <br />
            ma Valentine ? 🥺
          </h1>

          <p className="max-w-sm text-center text-lg text-valentine-deep/80">
            <Heart className="mr-1 inline-block h-4 w-4 text-valentine-pink" />
            J&apos;ai une dinguerie à te demander...
            <Heart className="ml-1 inline-block h-4 w-4 text-valentine-pink" />
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleYes}
              className="cursor-pointer rounded-full bg-gradient-to-r from-valentine-pink to-valentine-hot px-8 py-6 font-cursive text-xl text-white shadow-lg shadow-valentine-pink/40 transition-all duration-300 hover:shadow-xl hover:shadow-valentine-hot/50 hover:brightness-110 md:text-2xl"
              style={{
                transform: `scale(${yesScale})`,
                transition: "transform 0.3s ease",
              }}
            >
              Ouiii ! (c&apos;est réel) 💕
            </Button>

            <Button
              onClick={handleNo}
              variant="outline"
              className="cursor-pointer rounded-full border-valentine-pink/50 px-6 py-4 text-sm text-valentine-deep transition-all duration-300 hover:bg-valentine-pink/10 md:text-base"
              style={{
                fontSize: `${Math.max(14 - noCount * 1.5, 6)}px`,
                opacity: Math.max(1 - noCount * 0.08, 0.3),
              }}
            >
              {noMessages[Math.min(noCount, noMessages.length - 1)]}
            </Button>
          </div>

          {noCount > 0 && (
            <p className="animate-fade-in-up text-sm text-valentine-deep/60 italic">
              {noCount === 1 && "Le bouton oui prend la confiance... 👀"}
              {noCount === 2 && "Il flex de ouf là..."}
              {noCount === 3 && "C'est un signe frérot... 😏"}
              {noCount >= 4 && noCount < 7 && "Le non est en PLS... coïncidence ? 🤭"}
              {noCount >= 7 && "Mektoub, cherche pas 💫"}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Bottom decoration */}
      <p className="font-cursive z-10 mt-8 text-center text-sm text-valentine-deep/50">
        Fait avec le ❤️ (et beaucoup de café)
      </p>
    </div>
  );
}
