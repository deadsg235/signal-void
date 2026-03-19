export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a2e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-signal text-sm tracking-widest animate-flicker">
          SIGNAL//PROTOCOL
        </span>
        <p className="text-gray-600 text-xs tracking-widest text-center">
          NOT FINANCIAL ADVICE · DYOR · FAIR LAUNCH · NO PRESALE
        </p>
        <div className="flex gap-6 text-xs text-gray-600 tracking-widest uppercase">
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
            pump.fun
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
            Twitter/X
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
