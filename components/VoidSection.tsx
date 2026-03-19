export default function VoidSection() {
  return (
    <section id="void" className="py-32 px-6 relative overflow-hidden">
      {/* Red glow bg */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, #ff003c 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="tag text-void mb-4 inline-block">Anti-Dump Weapon</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-void glow-void">THE VOID</span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-16 text-lg">
          VOID isn't just a penalty — it's public shame baked on-chain.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="panel border-void/30 p-6">
            <p className="text-void text-xs tracking-widest uppercase mb-4">
              Trigger Conditions
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-void">▸</span> Sell within early phase window
              </li>
              <li className="flex gap-2">
                <span className="text-void">▸</span> Dump &gt;X% in short timeframe
              </li>
              <li className="flex gap-2">
                <span className="text-void">▸</span> Coordinated exit behavior
              </li>
            </ul>
          </div>

          <div className="panel border-void/30 p-6">
            <p className="text-void text-xs tracking-widest uppercase mb-4">
              Consequences
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-void">▸</span> Signal Score collapse
              </li>
              <li className="flex gap-2">
                <span className="text-void">▸</span> Permanent penalty multiplier
              </li>
              <li className="flex gap-2">
                <span className="text-void">▸</span> VOID mark on leaderboard
              </li>
            </ul>
          </div>

          <div className="panel border-void/30 p-6 flex flex-col justify-center items-center text-center">
            <div className="text-6xl font-black text-void glow-void mb-3 animate-pulse">
              ⊘
            </div>
            <p className="text-void text-sm tracking-widest uppercase font-bold">
              Void the Weak
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Once voided, recovery is slow and public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
