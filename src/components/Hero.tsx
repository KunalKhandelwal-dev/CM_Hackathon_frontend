import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lock } from 'lucide-react';

const TARGET_DATE = new Date('2026-06-28T09:00:00');

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

const stats = [
  { label: 'Stat // 01', value: '25,000+', desc: 'Operatives expected' },
  { label: 'Stat // 02', value: '₹1.75 Cr', desc: 'Total unlocked assets' },
  { label: 'Stat // 03', value: '48 HRS', desc: 'Operation window' },
  { label: 'Stat // 04', value: '06', desc: 'Mission tracks' },
];

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" className="relative min-h-screen bg-heist-black overflow-hidden flex flex-col">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #080808 90%)' }} />

      {/* Main content */}
      <div ref={containerRef} className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-24 pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Vault control panel */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="panel border border-gold/20 p-0 relative scanline-overlay" style={{ background: '#0e0c0a' }}>
              {/* Panel header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-heist" style={{ background: '#0a0908' }}>
                <span className="w-2.5 h-2.5 bg-heist-red rounded-full red-dot" />
                <span className="font-mono text-gold text-xs tracking-widest">MAINFRAME // CMX / 07</span>
              </div>

              <div className="p-5 space-y-5">
                {/* Countdown */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="font-mono text-gold-dim text-xs tracking-widest uppercase">Countdown to Execution</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { val: days, label: 'DAYS' },
                      { val: hours, label: 'HRS' },
                      { val: minutes, label: 'MIN' },
                      { val: seconds, label: 'SEC' },
                    ].map(({ val, label }) => (
                      <div key={label} className="border border-gold/30 text-center py-3" style={{ background: '#080808' }}>
                        <div className="font-bebas text-gold text-3xl leading-none">
                          {String(val).padStart(2, '0')}
                        </div>
                        <div className="font-mono text-gold-dim text-[0.55rem] tracking-widest mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vault schematic */}
                <div>
                  <div className="font-mono text-gold-dim text-[0.6rem] tracking-widest uppercase mb-2">Vault Schematic // Royal Mint</div>
                  <div className="border border-gold/20 p-3 relative" style={{ background: '#090807', aspectRatio: '16/9' }}>
                    {/* Blueprint lines */}
                    <div className="absolute inset-3 border border-gold/15" />
                    <div className="absolute" style={{ inset: '18px', border: '1px dashed rgba(201,168,76,0.2)' }} />
                    <div className="absolute" style={{ left: '28%', top: '25%', right: '15%', bottom: '20%', border: '1px dashed rgba(204,26,26,0.4)' }} />
                    <div className="absolute w-3 h-3 bg-gold rounded-full border-2 border-gold/50" style={{ left: '38%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                    {/* Corner marks */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-gold/40" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-gold/40" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-gold/40" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-gold/40" />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="font-mono text-gold-dim text-[0.55rem] tracking-wider">SECTOR 7G // BANK OF SPAIN / PARITY: 0.78</span>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex justify-between items-center pt-1 border-t border-heist">
                  <span className="font-mono text-gold-dim text-[0.55rem] tracking-wider">ENCRYPTED CHANNEL — AES-256</span>
                  <span className="font-mono text-heist-red text-[0.55rem] tracking-wider red-dot">SIGNAL LIVE</span>
                </div>
              </div>

              {/* Floating mask silhouette */}
              <div className="absolute -top-8 right-6 lg:-right-8 pointer-events-none">
                <svg width="80" height="110" viewBox="0 0 80 110" className="animate-float opacity-90">
                  <ellipse cx="40" cy="45" rx="30" ry="38" fill="url(#maskGrad)" />
                  <ellipse cx="40" cy="48" rx="8" ry="5" fill="#1a1208" opacity="0.6" />
                  <circle cx="40" cy="62" r="3" fill="#1a1208" opacity="0.5" />
                  <ellipse cx="40" cy="80" rx="4" ry="12" fill="url(#drip)" />
                  <defs>
                    <radialGradient id="maskGrad" cx="40%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#d4af37" />
                      <stop offset="40%" stopColor="#c9a84c" />
                      <stop offset="100%" stopColor="#5c4a1e" />
                    </radialGradient>
                    <linearGradient id="drip" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9a84c" />
                      <stop offset="100%" stopColor="#5c4a1e" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Headline */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-heist-red rounded-full red-dot" />
              <span className="font-mono text-gold text-xs tracking-widest uppercase">Transmission // 28.06.26 // New Delhi</span>
            </div>

            <h1 className="font-bebas leading-none tracking-wide">
              <span className="block text-white text-[clamp(3.5rem,7vw,6rem)]">The Professor's</span>
              <span className="block metallic-text text-[clamp(3.5rem,7vw,6rem)]">Master Plan</span>
              <span className="block text-[clamp(3.5rem,7vw,6rem)]">
                <span className="text-white">Is </span>
                <span className="text-heist-red">Active</span>
                <span className="text-white">.</span>
              </span>
            </h1>

            <p className="font-playfair italic text-gold/80 text-xl">Are you in the crew?</p>

            <p className="font-mono text-cream/60 text-sm leading-relaxed max-w-md">
              A 48-hour cinematic hackathon for <strong className="text-cream">25,000+ operatives</strong>. Countdown to operational execution. Limited slot opening. Selection is ruthless.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-gold flex items-center gap-2">
                <Lock size={12} />
                Apply for Crew Status
              </a>
              <a href="#blueprint" className="btn-outline flex items-center gap-2">
                Explore the Target →
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <MapPin size={12} className="text-gold" />
              <span className="font-mono text-gold-dim text-xs tracking-wider">HQ — Connaught Place, New Delhi</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 mt-12 border-t border-gold/20"
        style={{ background: '#0a0908' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-6 ${i < stats.length - 1 ? 'border-r border-heist' : ''}`}
            >
              <div className="section-label">{s.label}</div>
              <div className="font-bebas text-gold text-3xl lg:text-4xl tracking-wide">{s.value}</div>
              <div className="font-mono text-cream/50 text-xs tracking-wider mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
