import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const judges = [
  {
    id: 'JD-J01',
    alias: 'The Architect',
    name: 'Aarav Malhotra',
    specialty: 'Infra / Systems',
    bio: 'Former principal engineer. Designed three exchanges you\'ve used today.',
    photo: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'JD-J02',
    alias: 'The Safecracker',
    name: 'Nadia Fernandes',
    specialty: 'Security / Crypto',
    bio: 'Ethical hacker. Has opened more vaults than she\'s allowed to name.',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'JD-J03',
    alias: 'The Strategist',
    name: 'Rohan Iyer',
    specialty: 'Product / GTM',
    bio: 'Shipped four venture-backed products. Judges on clarity, not cleverness.',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'JD-J04',
    alias: 'The Analyst',
    name: 'Isabel Cruz',
    specialty: 'AI / Research',
    bio: 'Published in NeurIPS. Reads your loss curve before your pitch.',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'JD-J05',
    alias: 'The Guardian',
    name: 'Kabir Sethi',
    specialty: 'Capital / Venture',
    bio: 'Writes the first cheque. Expects the last word to be earned.',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'JD-J06',
    alias: 'The Signal',
    name: 'Mei Tanaka',
    specialty: 'Design / Brand',
    bio: 'Every pixel is a choice. Every choice is a stance. Earn both.',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Judges() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="judges" ref={ref} className="py-24 bg-heist-black relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, #c9a84c 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Section // 05 — The Panel</p>
            <h2 className="section-title text-[clamp(3rem,6vw,5rem)]">
              <span className="text-white">The </span>
              <span className="metallic-text">Judges</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-cream/50 text-sm max-w-xs text-right leading-relaxed"
          >
            Six specialists. One deliberation chamber. They scored the last great operations — they will score yours with the same silent precision.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {judges.map((judge, i) => (
            <motion.div
              key={judge.id}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 + 0.3 }}
              className="group relative border border-heist overflow-hidden cursor-default hover:border-gold/30 transition-all duration-500"
              style={{ background: '#0f0d0b' }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={judge.photo}
                  alt={judge.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                {/* ID badge */}
                <div className="absolute top-3 left-3 border border-gold/40 px-2 py-0.5 bg-black/60">
                  <span className="font-mono text-gold text-[0.55rem] tracking-widest">{judge.id}</span>
                </div>
                {/* Red dot */}
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-heist-red rounded-full red-dot border border-heist-red/50" />
                {/* Corner marks */}
                <div className="absolute bottom-2 left-2 w-4 h-0.5 bg-gold/40" />
                <div className="absolute bottom-2 left-2 w-0.5 h-4 bg-gold/40" />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="font-playfair italic text-gold/70 text-xs mb-0.5">{judge.alias}</p>
                <h3 className="font-bebas text-xl text-cream tracking-wider mb-1">{judge.name}</h3>
                <p className="font-mono text-gold-dim text-[0.6rem] tracking-wider uppercase mb-2">{judge.specialty}</p>
                <p className="font-mono text-cream/50 text-[0.65rem] leading-relaxed">{judge.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
