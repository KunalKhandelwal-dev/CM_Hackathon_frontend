import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Briefcase, FileCheck } from 'lucide-react';

const prizes = [
  {
    tier: 'Gold',
    amount: '₹80,00,000',
    desc: 'Grand Prize',
    color: '#d4af37',
    glow: 'rgba(212,175,55,0.25)',
  },
  {
    tier: 'Silver',
    amount: '₹50,00,000',
    desc: 'Runner Up',
    color: '#aaaaaa',
    glow: 'rgba(170,170,170,0.15)',
  },
  {
    tier: 'Bronze',
    amount: '₹25,00,000',
    desc: 'Third Place',
    color: '#cd7f32',
    glow: 'rgba(205,127,50,0.2)',
  },
];

const extras = [
  { icon: Award, label: 'Bonus', title: 'Track Champion', desc: 'Top of each objective', amount: '₹5,00,000 × 6' },
  { icon: Star, label: 'Bonus', title: 'Special Mentions', desc: 'For elegance, impact, audacity', amount: '₹2,00,000 × 4' },
  { icon: Briefcase, label: 'Bonus', title: 'Internship Dossiers', desc: 'Sealed offers from partner firms', amount: '100+ Slots' },
  { icon: FileCheck, label: 'Bonus', title: 'Operative Certificates', desc: 'Signed by The Professor', amount: 'All Finalists' },
];

function KeyholeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 60 90" className="w-12 h-20">
      <circle cx="30" cy="22" r="18" fill="none" stroke={color} strokeWidth="2" opacity="0.8" />
      <circle cx="30" cy="22" r="8" fill={color} opacity="0.9" />
      <path d="M 22 38 L 20 75 Q 20 80 30 80 Q 40 80 40 75 L 38 38 Z" fill={color} opacity="0.7" />
      <path d="M 24 38 L 23 68 L 37 68 L 36 38 Z" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function TheScore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="score" ref={ref} className="py-24 bg-heist-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #c9a84c08 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero prize pool */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Section // 04 — The Score</p>
          <h2 className="font-bebas text-white text-2xl tracking-[0.3em] uppercase mb-2">Total Unlocked Assets</h2>
          <div
            className="font-bebas leading-none"
            style={{
              fontSize: 'clamp(5rem, 14vw, 11rem)',
              background: 'linear-gradient(180deg, #d4af37 0%, #c9a84c 40%, #8a6f2e 70%, #c9a84c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            ₹1.75 CR
          </div>
          <p className="font-playfair italic text-gold/50 text-sm mt-2">(with highlight on key prizes)</p>
        </motion.div>

        {/* Main prize plaques */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {prizes.map((p, i) => (
            <motion.div
              key={p.tier}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.3 }}
              className="relative border flex flex-col items-center py-10 px-6"
              style={{
                borderColor: `${p.color}30`,
                background: 'linear-gradient(180deg, #161210 0%, #0f0d0b 100%)',
                boxShadow: `0 0 40px ${p.glow}`,
              }}
            >
              {/* Corner rivets */}
              {[['top-2 left-2', 'tl'], ['top-2 right-2', 'tr'], ['bottom-2 left-2', 'bl'], ['bottom-2 right-2', 'br']].map(([pos, key]) => (
                <div key={key} className={`absolute ${pos} w-2 h-2 rounded-full border`} style={{ borderColor: `${p.color}50`, background: '#0a0a0a' }} />
              ))}

              <div className="mb-4">
                <KeyholeIcon color={p.color} />
              </div>

              <div className="font-mono tracking-[0.3em] uppercase text-xs mb-2" style={{ color: `${p.color}80` }}>
                {p.tier}
              </div>
              <div
                className="font-bebas text-3xl lg:text-4xl"
                style={{ color: p.color }}
              >
                {p.amount}
              </div>
              <p className="font-playfair italic text-cream/50 text-sm mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra prizes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {extras.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.7 }}
                className="panel border border-heist p-4 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 border border-gold/30 flex items-center justify-center">
                    <Icon size={12} className="text-gold" />
                  </div>
                  <span className="section-label mb-0">{e.label}</span>
                </div>
                <h4 className="font-bebas text-gold text-base tracking-wide mb-1">{e.title}</h4>
                <p className="font-mono text-cream/40 text-[0.65rem] leading-relaxed mb-2">{e.desc}</p>
                <div className="font-mono text-cream/70 text-xs font-bold">{e.amount}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
