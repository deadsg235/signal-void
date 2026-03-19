import TokenMarketChart from "./TokenMarketChart";

const TIERS = [
  {
    score: "7500+",
    label: "Diamond Hand",
    perks: ["Airdrop eligibility", "Fee rebates", "Governance access"],
    color: "signal",
  },
  {
    score: "4000+",
    label: "Signal Maxi",
    perks: ["Alpha group access", "Premium signals", "Score boost staking"],
    color: "signal",
  },
  {
    score: "1000+",
    label: "Believer",
    perks: ["Leaderboard visibility", "Basic rewards"],
    color: "gray",
  },
  {
    score: "< 0",
    label: "Voided",
    perks: ["Excluded from rewards", "Permanent penalty", "Public shame mark"],
    color: "void",
  },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-32 px-6 max-w-6xl mx-auto">
      <p className="tag text-signal mb-4 inline-block">Token Utility</p>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Tokenomics
      </h2>
      <p className="text-gray-400 max-w-xl mb-16 text-lg">
        Fair launch. Fixed supply. 100% public. The token fuels the reputation
        system — not the other way around.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Supply info */}
        <div className="panel p-8 space-y-6">
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Supply</p>
            <p className="text-3xl font-bold text-white">Fixed · Meme-Compatible</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Launch</p>
            <p className="text-white">Fair launch on pump.fun · No presale</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Distribution</p>
            <p className="text-white">100% Public · Liquidity Locked</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Tax (Post-Migration)</p>
            <p className="text-white">Small % → High Signal Score reward pool</p>
          </div>
        </div>

        {/* Utility */}
        <div className="panel p-8">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-6">Utility Layers</p>
          <div className="space-y-5">
            <div>
              <p className="text-signal text-sm font-bold mb-1">Score Boosting</p>
              <p className="text-gray-400 text-sm">Stake tokens to amplify Signal Score gains.</p>
            </div>
            <div>
              <p className="text-signal text-sm font-bold mb-1">Redemption System</p>
              <p className="text-gray-400 text-sm">High scores unlock airdrops, fee rebates, exclusive pools.</p>
            </div>
            <div>
              <p className="text-signal text-sm font-bold mb-1">Access Control</p>
              <p className="text-gray-400 text-sm">Alpha groups, premium signals, governance — gated by score.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Token Market Chart */}
      <div className="mb-12">
        <TokenMarketChart />
      </div>

      {/* Score tiers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`panel p-5 border-${tier.color === "signal" ? "signal" : tier.color === "void" ? "void" : "[#1a1a2e]"}/40`}
          >
            <p
              className={`text-xs tracking-widest uppercase mb-1 ${
                tier.color === "signal"
                  ? "text-signal"
                  : tier.color === "void"
                  ? "text-void"
                  : "text-gray-500"
              }`}
            >
              {tier.score}
            </p>
            <p className="text-white font-bold text-sm mb-3">{tier.label}</p>
            <ul className="space-y-1">
              {tier.perks.map((p) => (
                <li key={p} className="text-gray-500 text-xs">
                  {tier.color === "void" ? "✗" : "✓"} {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
