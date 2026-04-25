import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const crew = [
  {
    code: 'CR1',
    name: 'Ishaan Mehra',
    role: 'Operations Lead',
    badge: 'HQ',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    code: 'CR2',
    name: 'Aanya Desai',
    role: 'Design Command',
    badge: 'HQ',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    code: 'CR3',
    name: 'Dev Sharma',
    role: 'Tech Engineer',
    badge: 'FIELD',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    code: 'CR4',
    name: 'Reyna Kapoor',
    role: 'Partnerships',
    badge: 'PABLO',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    code: 'CR5',
    name: 'Omar Farooq',
    role: 'Community',
    badge: 'FIELD',
    photo: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    code: 'CR6',
    name: 'Tara Basu',
    role: 'Comms',
    badge: 'SIGNAL',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const badgeColors: Record<string, string> = {
  HQ: '#cc1a1a',
  FIELD: '#cc1a1a',
  PABLO: '#cc1a1a',
  SIGNAL: '#cc1a1a',
};

export default function TheCrew() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="crew" ref={ref} className="py-24 bg-heist-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Section // 07 — Personnel Board</p>
            <h2 className="section-title text-[clamp(3rem,6vw,5rem)]">
              <span className="text-white">The </span>
              <span className="metallic-text">Crew</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-cream/50 text-sm max-w-xs text-right leading-relaxed"
          >
            The command roster behind Operation Codex. Six operatives, one HQ, zero mistakes.
          </motion.p>
        </div>

        {/* Crew board */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-2 border-gold/20 p-6 lg:p-8 relative"
          style={{ background: '#0e0a06' }}
        >
          {/* Corner rivets */}
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos) => (
            <div key={pos} className={`absolute ${pos} w-3 h-3 bg-heist-red rounded-full border border-heist-red/50`} />
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {crew.map((member, i) => (
              <motion.div
                key={member.code}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.4 }}
                className="group relative"
              >
                {/* Polaroid frame */}
                <div className="relative border-4 border-heist-cream/90 shadow-2xl overflow-hidden" style={{ aspectRatio: '3/4', background: '#111' }}>
                  {/* Badge */}
                  <div
                    className="absolute top-2 left-2 z-10 px-2 py-0.5"
                    style={{ background: badgeColors[member.badge] || '#cc1a1a' }}
                  >
                    <span className="font-mono text-white text-[0.5rem] tracking-widest">{member.badge}</span>
                  </div>

                  {/* Photo */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Caption (polaroid bottom) */}
                <div className="p-2 text-center" style={{ background: '#f0e6c8' }}>
                  <div className="font-mono text-gray-400 text-[0.5rem] tracking-wider">{member.code}</div>
                  <div className="font-bebas text-gray-900 text-sm leading-tight">{member.name}</div>
                  <div className="font-playfair italic text-gray-600 text-[0.6rem]">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
