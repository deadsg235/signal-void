import type { Metadata } from "next";
import "../app/globals.css";
// Placeholder for Solana Wallet Provider
function WalletProvider({ children }: { children: React.ReactNode }) {
  // In a real implementation, this would set up the Solana wallet context
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "SIGNAL//VOID— Tokenized Reputation for On-Chain Intelligence",
  description:
    "Your wallet has a reputation now. Signal Protocol rewards conviction, punishes extraction, and makes intelligence visible on-chain.",
  openGraph: {
    title: "SIGNAL//VOID",
    description: "Don't just trade. Signal.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
