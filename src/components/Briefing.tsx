import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const specs = [
  { label: 'Operation', value: 'Codex' },
  { label: 'Location', value: 'New Delhi, IN' },
  { label: 'Window', value: '48 Hours' },
  { label: 'Operatives', value: '25,000+' },
  { label: 'Signal', value: 'Encrypted' },
];

const objectives = [
  { label: 'Objective', text: 'Ship a functional prototype that answers a sealed track.' },
  { label: 'Rules', text: 'Teams of 1 to 4 operatives. No pre-built work after T-00.' },
  { label: 'Infiltration', text: 'Final demo + 3-minute pitch before the vault seals.' },
  { label: 'Verification', text: 'Six expert judges score each submission in silence.' },
];

export default function Briefing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="briefing" ref={ref} className="py-24 bg-heist-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, #c9a84c 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label + title */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="section-label">File // CMX-BRF-01</p>
              <h2 className="section-title text-[clamp(3rem,6vw,5rem)] text-white">The<br /><span className="metallic-text">Briefing</span></h2>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </div>

            <div>
              <div className="font-mono text-[0.6rem] tracking-widest text-gold-dim uppercase mb-1">Classification</div>
              <div className="font-mono text-heist-red text-xs tracking-wider uppercase">Top Secret</div>
              <div className="font-mono text-cream/50 text-xs tracking-wider">• Internal Crew Only</div>
            </div>

            {/* Specs table */}
            <div className="space-y-0 border border-heist">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex justify-between px-4 py-2.5 ${i < specs.length - 1 ? 'border-b border-heist' : ''}`} style={{ background: i % 2 === 0 ? '#0f0d0b' : '#111' }}>
                  <span className="font-mono text-gold-dim text-xs tracking-wider capitalize">{s.label}</span>
                  <span className="font-mono text-cream text-xs font-bold">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Map fragment */}
            <div className="border border-gold/20 p-3 relative" style={{ background: '#0e0c0a' }}>
              <div className="font-mono text-gold-dim text-[0.55rem] tracking-widest mb-2">ROUTE MAP // CLASSIFIED</div>
              <svg viewBox="0 0 200 100" className="w-full opacity-60">
                <line x1="20" y1="60" x2="80" y2="45" stroke="#c9a84c" strokeWidth="1" strokeDasharray="4,3" />
                <line x1="80" y1="45" x2="120" y2="55" stroke="#c9a84c" strokeWidth="1" strokeDasharray="4,3" />
                <line x1="120" y1="55" x2="170" y2="40" stroke="#c9a84c" strokeWidth="1" strokeDasharray="4,3" />
                <circle cx="80" cy="45" r="4" fill="#cc1a1a" />
                <circle cx="20" cy="60" r="2" fill="#c9a84c" />
                <circle cx="120" cy="55" r="2" fill="#c9a84c" />
                <circle cx="170" cy="40" r="2" fill="#c9a84c" />
                <text x="75" y="38" fill="#c9a84c" fontSize="6" fontFamily="monospace">HQ</text>
                <text x="75" y="62" fill="#8a6f2e" fontSize="5" fontFamily="monospace">New Delhi</text>
              </svg>
            </div>
          </motion.div>

          {/* CENTER: Dossier paper */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="dossier-paper p-8 relative shadow-2xl" style={{ transform: 'rotate(-0.5deg)' }}>
              {/* Classified stamp */}
              <div className="absolute top-5 right-6 border-2 border-heist-red px-3 py-1 rotate-3">
                <span className="font-bebas text-heist-red text-sm tracking-widest">Classified</span>
              </div>

              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-heist-red/40" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-heist-red/40" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-heist-red/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-heist-red/40" />

              <p className="font-mono text-gray-500 text-[0.6rem] tracking-wider mb-6">SEND // 28.06.2026 // 00:14 IST</p>

              <div className="space-y-4 font-playfair text-gray-800 text-[0.92rem] leading-relaxed">
                <p>
                  <span className="italic text-lg">T</span>he plan is already in motion. Twenty-five thousand builders have been selected to enter a single window of operational execution. For forty-eight hours, a global crew will infiltrate the hardest problems in finance, security, community, and frontier technology — and extract working prototypes before the vault closes.
                </p>
                <p>
                  This is not a competition for participants. It is a coordinated heist against the ordinary. Every track is a sealed objective. Every submission is a piece of evidence. Every operative carries a codename.
                </p>
                <p className="italic">
                  If you are reading this, the briefing has already begun. <em>The Professor expects precision.</em>
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="font-playfair italic text-gray-700 text-lg">— The Professor</p>
                  <p className="font-mono text-gray-400 text-[0.6rem] tracking-widest uppercase">ZERO</p>
                </div>
                <div className="w-12 h-12 bg-heist-red rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-bebas text-white text-sm tracking-wider">CMX</span>
                </div>
              </div>

              {/* Paper lines */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute left-0 right-0 border-b border-amber-900/5" style={{ top: `${(i + 1) * 12}%` }} />
              ))}
            </div>

            {/* Small corner card */}
            <div className="absolute -bottom-6 -left-4 dossier-paper p-3 shadow-xl" style={{ transform: 'rotate(2deg)', width: '130px' }}>
              <svg viewBox="0 0 120 70" className="w-full opacity-70">
                <line x1="10" y1="40" x2="50" y2="30" stroke="#8b0000" strokeWidth="1.5" strokeDasharray="3,2" />
                <line x1="50" y1="30" x2="90" y2="35" stroke="#8b0000" strokeWidth="1.5" strokeDasharray="3,2" />
                <circle cx="50" cy="30" r="4" fill="#8b0000" />
                <circle cx="10" cy="40" r="2" fill="#8a6f2e" />
                <circle cx="90" cy="35" r="2" fill="#8a6f2e" />
                <text x="48" y="22" fill="#8b0000" fontSize="6" fontFamily="monospace">VAULT</text>
              </svg>
            </div>
          </motion.div>

          {/* RIGHT: Objective panels */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3"
          >
            {objectives.map((obj) => (
              <div key={obj.label} className="panel border border-heist p-4 space-y-2 hover:border-gold/30 transition-colors duration-300">
                <div className="section-label">{obj.label}</div>
                <p className="font-mono text-cream/70 text-xs leading-relaxed">{obj.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
