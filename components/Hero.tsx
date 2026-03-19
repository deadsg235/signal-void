"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const target = 847;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setScore(current);
      if (current >= target) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative z-20 max-w-4xl mx-auto">
        <p className="tag text-signal mb-6 inline-block">
          Signal Protocol — v1.0
        </p>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 leading-none glitch" data-text="Signal//Void">
          Signal//Void
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
          Your wallet has a reputation now. On-chain conviction is tracked,
          scored, and made public. The weak get voided. The strong get rewarded.
        </p>

        {/* Live score display */}
        <div className="panel inline-block px-8 py-4 mb-10">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">
            Your Signal Score
          </p>
          <p className="text-5xl font-bold text-signal glow-signal tabular-nums">
            {score}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pump.fun/coin/AjGg5A77KNHZo3ADkFr4qFSWXnCHPndDCzpm7dqGpump"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal"
          >
            Launch on pump.fun
          </a>
          <a href="#signal-score" className="btn-void">
            Read the Protocol
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs tracking-widest">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
