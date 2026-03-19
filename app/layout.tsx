import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
