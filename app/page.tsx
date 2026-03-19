import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SignalScore from "@/components/SignalScore";
import VoidSection from "@/components/VoidSection";
import Leaderboard from "@/components/Leaderboard";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import NoiseCanvas from "@/components/NoiseCanvas";

import InteractiveStars from "@/components/InteractiveStars";

export default function Home() {
  return (
    <>
      <InteractiveStars />

      <Nav />
      <main>
        <Hero />
        <SignalScore />
        <VoidSection />
        <Leaderboard />
        <Tokenomics />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
