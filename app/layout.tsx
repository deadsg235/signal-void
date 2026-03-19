import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIGNAL PROTOCOL — Tokenized Reputation for On-Chain Intelligence",
  description:
    "Your wallet has a reputation now. Signal Protocol rewards conviction, punishes extraction, and makes intelligence visible on-chain.",
  openGraph: {
    title: "SIGNAL PROTOCOL",
    description: "Don't just trade. Signal.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
