const PHASES = [
  {
    phase: "01",
    label: "Launch",
    status: "active",
    items: ["Token deploy on pump.fun", "Basic Signal Score tracking", "Static leaderboard"],
  },
  {
    phase: "02",
    label: "Virality",
    status: "upcoming",
    items: ["Shareable wallet profiles", "VOID visual system", "Influencer onboarding"],
  },
  {
    phase: "03",
    label: "Intelligence Layer",
    status: "upcoming",
    items: ["AI scoring enhancements", "Smart wallet tagging", "Predictive analytics"],
  },
  {
    phase: "04",
    label: "Expansion",
    status: "upcoming",
    items: ["Multi-token Signal tracking", "Cross-chain reputation", "Signal Protocol as infrastructure"],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 px-6 max-w-6xl mx-auto">
      <p className="tag text-signal mb-4 inline-block">Protocol Evolution</p>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Roadmap
      </h2>
      <p className="text-gray-400 max-w-xl mb-16 text-lg">
        From meme to infrastructure. This doesn't stay a token — it becomes
        the on-chain reputation layer for all of crypto.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-[#1a1a2e] hidden md:block" />

        <div className="space-y-8">
          {PHASES.map((phase) => (
            <div key={phase.phase} className="flex gap-8 items-start">
              {/* Phase number */}
              <div
                className={`flex-shrink-0 w-18 h-18 panel flex items-center justify-center text-xs font-bold tracking-widest z-10 px-3 py-2 ${
                  phase.status === "active"
                    ? "border-signal text-signal"
                    : "border-[#1a1a2e] text-gray-600"
                }`}
              >
                {phase.phase}
              </div>

              <div className="panel p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white font-bold text-lg">{phase.label}</h3>
                  {phase.status === "active" && (
                    <span className="tag text-signal text-xs">Active</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex gap-2">
                      <span
                        className={
                          phase.status === "active" ? "text-signal" : "text-gray-600"
                        }
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
