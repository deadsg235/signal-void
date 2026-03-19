const positives = [
  { label: "Early Buy", desc: "Block proximity to launch", points: "+120" },
  { label: "Hold Duration", desc: "Time-weighted conviction", points: "+80" },
  { label: "Add Liquidity", desc: "Strengthen the pool", points: "+60" },
  { label: "Rebuy Dips", desc: "Conviction under pressure", points: "+40" },
];

const negatives = [
  { label: "Early Sell", desc: "Exit before key thresholds", points: "−150" },
  { label: "Full Dump", desc: ">X% exit in short window", points: "−200" },
  { label: "Bot Pattern", desc: "Snipe + immediate exit", points: "VOID" },
  { label: "Coordinated Exit", desc: "Cluster dump behavior", points: "VOID" },
];

export default function SignalScore() {
  return (
    <section id="signal-score" className="py-32 px-6 max-w-6xl mx-auto">
      <p className="tag text-signal mb-4 inline-block">Core Mechanic</p>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Signal Score
      </h2>
      <p className="text-gray-400 max-w-xl mb-16 text-lg">
        Every wallet gets a live-updating score. It's your public identity,
        your status symbol, and your reward multiplier.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Positive */}
        <div className="panel p-6">
          <p className="text-signal text-xs tracking-widest uppercase mb-6 border-b border-[#1a1a2e] pb-3">
            ↑ Positive Signals
          </p>
          <div className="space-y-4">
            {positives.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
                <span className="text-signal font-bold text-sm tabular-nums">
                  {item.points}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Negative */}
        <div className="panel p-6">
          <p className="text-void text-xs tracking-widest uppercase mb-6 border-b border-[#1a1a2e] pb-3">
            ↓ Negative Signals
          </p>
          <div className="space-y-4">
            {negatives.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
                <span className="text-void font-bold text-sm tabular-nums">
                  {item.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
