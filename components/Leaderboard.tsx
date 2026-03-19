"use client";
import { useState, useEffect } from "react";

const MOCK_WALLETS = [
  { rank: 1, address: "0x3f...a91c", tag: "Diamond Hand", score: 9847, status: "signal" },
  { rank: 2, address: "0x7b...22ff", tag: "Signal Maxi", score: 8203, status: "signal" },
  { rank: 3, address: "0xc1...d44a", tag: "Conviction King", score: 7651, status: "signal" },
  { rank: 4, address: "0x09...b3e1", tag: "Early Believer", score: 6490, status: "signal" },
  { rank: 5, address: "0x55...9f02", tag: "Voidwalker", score: 1203, status: "void" },
  { rank: 6, address: "0x2a...c77d", tag: "Shadow Banned", score: 0, status: "banned" },
];

const STATUS_STYLES: Record<string, string> = {
  signal: "text-signal border-signal",
  void: "text-void border-void",
  banned: "text-gray-600 border-gray-700",
};

export default function Leaderboard() {
  const [leaderboardEntries, setLeaderboardEntries] = useState(MOCK_WALLETS);
  const [connectedWalletAddress, setConnectedWalletAddress] = useState<string | null>(null); // Placeholder for connected wallet

  // Simulate wallet connection for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectedWalletAddress("0xYourConnectedWalletAddressHere");
    }, 5000); // Simulate connection after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLeaderboardEntries((prevEntries) => {
        const updatedEntries = prevEntries.map((entry) => {
          if (entry.status === "signal") {
            // Simulate score increase for "signal" wallets
            return { ...entry, score: entry.score + Math.floor(Math.random() * 5) };
          }
          return entry;
        });

        // If a wallet is connected, ensure it's in the list and update its score
        if (connectedWalletAddress) {
          let found = false;
          const updatedWithConnected = updatedEntries.map((entry) => {
            if (entry.address === connectedWalletAddress) {
              found = true;
              // Simulate score increase for connected wallet
              return { ...entry, score: entry.score + Math.floor(Math.random() * 10), status: "signal", tag: "You" };
            }
            return entry;
          });

          if (!found) {
            // Add connected wallet if not present
            updatedWithConnected.push({
              rank: updatedWithConnected.length + 1,
              address: connectedWalletAddress,
              tag: "You",
              score: Math.floor(Math.random() * 5000) + 1000, // Initial score for new connected wallet
              status: "signal",
            });
          }
          return updatedWithConnected.sort((a, b) => b.score - a.score).map((entry, index) => ({ ...entry, rank: index + 1 }));
        }

        return updatedEntries.sort((a, b) => b.score - a.score).map((entry, index) => ({ ...entry, rank: index + 1 }));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [connectedWalletAddress]);

  const yourEntry = leaderboardEntries.find(entry => entry.address === connectedWalletAddress);

  return (
    <section id="leaderboard" className="py-32 px-6 max-w-6xl mx-auto">
      <p className="tag text-signal mb-4 inline-block">Viral Engine</p>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Leaderboard
      </h2>
      <p className="text-gray-400 max-w-xl mb-16 text-lg">
        You're not just trading. You're performing intelligence. Top wallets
        ranked globally, in real time.
      </p>

      {connectedWalletAddress && yourEntry && (
        <div className="panel mb-8 p-6 border-2 border-signal">
          <h3 className="text-xl font-bold text-signal mb-2">Your Signal Score</h3>
          <p className="text-3xl font-bold text-signal tabular-nums">{yourEntry.score.toLocaleString()}</p>
          <p className="text-gray-400 text-sm mt-2">Rank: {yourEntry.rank} | Address: {yourEntry.address.substring(0, 6)}...{yourEntry.address.substring(yourEntry.address.length - 4)}</p>
        </div>
      )}

      <div className="panel overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 px-6 py-3 border-b border-[#1a1a2e] text-xs text-gray-600 tracking-widest uppercase">
          <span className="col-span-1">#</span>
          <span className="col-span-4">Wallet</span>
          <span className="col-span-3">Tag</span>
          <span className="col-span-2 text-right">Score</span>
          <span className="col-span-2 text-right">Status</span>
        </div>

        {leaderboardEntries.map((wallet) => (
          <div
            key={wallet.address}
            className={`grid grid-cols-12 px-6 py-4 border-b border-[#1a1a2e] last:border-0 items-center transition-all ${
              wallet.status === "banned" ? "opacity-30" : ""
            } ${wallet.address === connectedWalletAddress ? "bg-signal/10" : ""}`}
          >
            <span className="col-span-1 text-gray-500 text-sm">{wallet.rank}</span>
            <span className="col-span-4 text-white text-sm font-mono">
              {wallet.address.substring(0, 6)}...{wallet.address.substring(wallet.address.length - 4)}
            </span>
            <span className="col-span-3">
              <span className={`tag ${STATUS_STYLES[wallet.status]} text-xs`}>
                {wallet.tag}
              </span>
            </span>
            <span
              className={`col-span-2 text-right font-bold tabular-nums text-sm ${
                wallet.status === "signal" ? "text-signal" : "text-void"
              }`}
            >
              {wallet.score.toLocaleString()}
            </span>
            <span className="col-span-2 text-right">
              {wallet.status === "signal" && (
                <span className="text-signal text-xs">● LIVE</span>
              )}
              {wallet.status === "void" && (
                <span className="text-void text-xs">⊘ VOID</span>
              )}
              {wallet.status === "banned" && (
                <span className="text-gray-600 text-xs">◌ SHADOW</span>
              )}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 text-xs mt-6 tracking-widest">
        SCORES UPDATE IN REAL TIME · SHADOW BANNED WALLETS HIDDEN FROM PUBLIC VIEW
      </p>
    </section>
  );
}
