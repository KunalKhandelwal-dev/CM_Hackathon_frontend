import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const checkpoints = [
  {
    num: '01',
    timing: 'T-30',
    title: 'Registration Opens',
    date: '05 Jun · 2026',
    desc: 'Crew applications go live. Selection is ruthless.',
    active: true,
  },
  {
    num: '02',
    timing: 'T-15',
    title: 'Briefing Night',
    date: '20 Jun · 2026',
    desc: 'Sealed dossiers transmitted to approved operatives.',
    active: false,
  },
  {
    num: '03',
    timing: 'T-00',
    title: 'Execution Begins',
    date: '28 Jun · 2026',
    desc: '48-hour operational window. No sleep. No mercy.',
    active: false,
  },
  {
    num: '04',
    timing: 'T-46',
    title: 'Exfiltration',
    date: '30 Jun · 2026',
    desc: 'Submit, pitch, extract. The vault closes at 10:00 IST.',
    active: false,
  },
  {
    num: '05',
    timing: 'T-48',
    title: 'The Finale',
    date: '01 Jul · 2026',
    desc: 'Judges deliberate. Assets released on stage.',
    active: false,
  },
];

export default function OperationRoute() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" ref={ref} className="py-24 bg-heist-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, #c9a84c 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Section // 03 — Heist Route</p>
            <h2 className="section-title text-[clamp(3rem,6vw,5rem)]">
              <span className="text-white">Operation </span>
              <span className="metallic-text">Route</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-cream/50 text-sm max-w-xs text-right leading-relaxed"
          >
            Five checkpoints. No shortcuts. Each node unlocks at its scheduled moment — miss one and the operation terminates.
          </motion.p>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-heist"
          style={{ background: '#0e0c0a' }}
        >
          {/* Horizontal connector line */}
          <div className="hidden lg:block relative px-16 pt-12">
            <div className="absolute left-16 right-16 top-[calc(3rem+1.5rem)] h-px bg-gold/20" style={{ top: '4.5rem' }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 bg-gold/40 origin-left"
                style={{ width: '20%' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 p-8 lg:p-12 gap-8 lg:gap-4">
            {checkpoints.map((cp, i) => (
              <motion.div
                key={cp.num}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Diamond node */}
                <div className="relative">
                  <div
                    className={`w-14 h-14 rotate-45 border-2 flex items-center justify-center ${
                      cp.active
                        ? 'bg-heist-red border-heist-red glow-red'
                        : 'border-gold/40 bg-heist-card'
                    }`}
                  >
                    <span className={`-rotate-45 font-bebas text-lg leading-none ${cp.active ? 'text-white' : 'text-gold'}`}>
                      {cp.num}
                    </span>
                  </div>
                  {cp.active && (
                    <div className="absolute inset-0 rotate-45 border-2 border-heist-red/30 scale-125" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="font-mono text-gold-dim text-[0.55rem] tracking-widest uppercase">{cp.timing}</div>
                  <h3 className={`font-bebas text-base leading-tight tracking-wide ${cp.active ? 'text-gold' : 'text-cream'}`}>
                    {cp.title}
                  </h3>
                  <div className="font-mono text-cream/50 text-[0.6rem] tracking-wider">{cp.date}</div>
                  <p className="font-mono text-cream/40 text-[0.65rem] leading-relaxed mt-2">{cp.desc}</p>
                </div>

                {/* Mobile connector */}
                {i < checkpoints.length - 1 && (
                  <div className="lg:hidden w-px h-8 bg-gold/20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
