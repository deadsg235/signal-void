"use client";

import React from "react";

export default function WalletConnectButton() {
  const handleConnect = () => {
    console.log("Attempting to connect wallet...");
    // Placeholder for actual Solana wallet connection logic
    // In a real application, this would trigger the wallet adapter's connect method
  };

  return (
    <button
      onClick={handleConnect}
      className="btn-signal text-base px-4 py-2"
    >
      Connect Wallet
    </button>
  );
}
