"use client";
import { useEffect, useState } from "react";

const LINKS = ["Signal Score", "VOID", "Leaderboard", "Tokenomics", "Roadmap"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050508]/90 backdrop-blur border-b border-[#1a1a2e]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-signal glow-signal font-bold tracking-widest text-sm animate-flicker">
          SIGNAL//PROTOCOL
        </span>
        <div className="hidden md:flex gap-8">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-signal transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-signal text-xs"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
}
