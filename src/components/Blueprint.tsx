import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Shield, Users, Cpu, Brain, Heart } from 'lucide-react';

const tracks = [
  {
    id: 'OBJ-ALPHA',
    tier: 'Tier I',
    title: 'Financial Disruption',
    desc: 'Engineer a payment primitive, lending market, or risk model that rewires a mint. Break the old banking layer.',
    tag: '#FINTECH',
    icon: DollarSign,
  },
  {
    id: 'OBJ-BRAVO',
    tier: 'Tier II',
    title: 'Cybersecurity Breakthrough',
    desc: 'Ship a novel defense, red-team toolkit, or cryptographic protocol. Our vaults are only as strong as you build.',
    tag: '#SECURITY',
    icon: Shield,
  },
  {
    id: 'OBJ-CHARLIE',
    tier: 'Tier III',
    title: 'Community Impact',
    desc: 'Turn attention into action. Civic tech, education, climate, public health — design a system that moves millions.',
    tag: '#SOCIAL',
    icon: Users,
  },
  {
    id: 'OBJ-DELTA',
    tier: 'Tier III',
    title: 'Future Tech',
    desc: 'AR, spatial, robotics, quantum, neural. Prototype something that shouldn\'t exist yet — and make us want it.',
    tag: '#MOONSHOT',
    icon: Cpu,
  },
  {
    id: 'OBJ-ECHO',
    tier: 'Tier I',
    title: 'AI Espionage',
    desc: 'Autonomous agents, multimodal exploits, adversarial models. Give machines a mission and hold them to it.',
    tag: '#AGENTS',
    icon: Brain,
  },
  {
    id: 'OBJ-FOXTROT',
    tier: 'Tier III',
    title: 'Biotech Vault',
    desc: 'Diagnostics, longevity, bioinformatics, genomic tooling. Open the vault of the human body — carefully.',
    tag: '#BIO',
    icon: Heart,
  },
];

export default function Blueprint() {
  const [selected, setSelected] = useState(tracks[0]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blueprint" ref={ref} className="py-24 bg-heist-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom left, #c9a84c10 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Section // 02 — Operational Objectives</p>
            <h2 className="section-title text-[clamp(3rem,7vw,6rem)]">
              <span className="text-white">The </span>
              <span className="metallic-text">Blueprint</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-cream/50 text-sm max-w-xs text-right leading-relaxed"
          >
            Six sealed objectives. Each operative commits to one track at briefing night. Choose the vault you intend to crack.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Track grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {tracks.map((track, i) => {
              const Icon = track.icon;
              const isSelected = selected.id === track.id;
              return (
                <motion.div
                  key={track.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
                  onClick={() => setSelected(track)}
                  className={`panel border p-4 cursor-pointer transition-all duration-300 group ${
                    isSelected
                      ? 'border-gold/60 glow-gold'
                      : 'border-heist hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-gold-dim text-[0.58rem] tracking-widest uppercase">{track.id}</span>
                    <div className="flex items-center gap-2">
                      <span className="tag">{track.tier}</span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-heist-red red-dot' : 'bg-heist-red/30'}`} />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isSelected ? 'border-gold/60 bg-gold/10' : 'border-heist-border'}`}>
                      <Icon size={14} className="text-gold" />
                    </div>
                    <h3 className={`font-bebas text-lg leading-tight tracking-wide transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-cream group-hover:text-gold'}`}>
                      {track.title}
                    </h3>
                  </div>

                  <p className="font-mono text-cream/50 text-[0.7rem] leading-relaxed">{track.desc}</p>
                  <div className="mt-3">
                    <span className="tag">{track.tag}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            key={selected.id}
          >
            <div className="dossier-paper p-6 relative h-full">
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-800/30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-800/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-800/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-800/30" />

              {/* Tier badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-gray-500 text-[0.6rem] tracking-widest">EVIDENCE SLIP // {selected.id}</span>
                <div className="border border-amber-800/40 px-2 py-0.5">
                  <span className="font-mono text-amber-800 text-[0.6rem] tracking-widest">{selected.tier}</span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 border border-amber-800/30 flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.05)' }}>
                {(() => { const Icon = selected.icon; return <Icon size={24} className="text-amber-800" />; })()}
              </div>

              <p className="font-mono text-amber-700 text-[0.6rem] tracking-widest uppercase mb-2">Track 01</p>

              <h3 className="font-bebas text-3xl text-gray-900 mb-4 leading-tight">{selected.title}</h3>

              <div className="border-t border-amber-800/20 pt-4 mb-6">
                <p className="font-playfair italic text-gray-700 text-sm leading-relaxed">{selected.desc}</p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-gray-400 text-[0.55rem] tracking-widest uppercase mb-1">Tag</p>
                  <span className="font-bebas text-gray-800 text-lg tracking-wide">{selected.tag}</span>
                </div>
                <div className="w-10 h-10 bg-heist-red rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-mono text-white text-[0.6rem] font-bold">01</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
