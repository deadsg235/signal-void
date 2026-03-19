export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at center, #00ff88 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="tag text-signal mb-6 inline-block">Only the strong hold signal</p>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
          YOUR WALLET HAS A{" "}
          <span className="text-signal glow-signal animate-flicker">
            REPUTATION
          </span>{" "}
          NOW.
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Intelligence is visible. Behavior has consequence. The leaderboard
          never lies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal text-base px-10 py-4"
          >
            Buy $SIGNAL
          </a>
          <a
            href="https://x.com/SVoid39442"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-void text-base px-10 py-4"
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
}
