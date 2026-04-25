import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const mentors = [
  {
    code: 'VB',
    name: 'Vikram Bose',
    role: 'Advisor',
    specialty: 'Distributed Systems',
    desc: 'Reach out via sealed channel for strategic guidance during your operation window.',
    slot: '01',
    status: 'On Signal',
  },
  {
    code: 'PR',
    name: 'Priya Rao',
    role: 'Advisor',
    specialty: 'ML Research',
    desc: 'Reach out via sealed channel for strategic guidance during your operation window.',
    slot: '02',
    status: 'On Signal',
  },
  {
    code: 'LM',
    name: 'Leo Moreau',
    role: 'Support',
    specialty: 'Product Storytelling',
    desc: 'Reach out via sealed channel for strategic guidance during your operation window.',
    slot: '03',
    status: 'On Signal',
  },
  {
    code: 'SK',
    name: 'Sana Kapoor',
    role: 'Support',
    specialty: 'Fundraising',
    desc: 'Reach out via sealed channel for strategic guidance during your operation window.',
    slot: '04',
    status: 'On Signal',
  },
];

export default function Mentors() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mentors" ref={ref} className="py-24 bg-heist-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="section-label">Section // 06 — Advisory Signal</p>
          <h2 className="section-title text-[clamp(3rem,6vw,5rem)]">
            <span className="text-white">The </span>
            <span className="metallic-text">Mentors</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-cream/50 text-sm max-w-lg mb-14 leading-relaxed"
        >
          Quiet advisors. They sit behind the glass during execution — available on an encrypted channel for crews who need a second mind.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-4">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
              className="group panel border border-heist hover:border-gold/25 transition-all duration-400 p-5"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 border border-gold/30 flex items-center justify-center" style={{ background: '#0a0908' }}>
                  <span className="font-bebas text-gold text-xl tracking-wider">{mentor.code}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="tag">{mentor.role}</span>
                    <span className="font-mono text-gold-dim text-[0.55rem] tracking-widest">Status · {mentor.status}</span>
                  </div>
                  <h3 className="font-bebas text-xl text-cream tracking-wider group-hover:text-gold transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="font-playfair italic text-gold/70 text-sm mb-2">{mentor.specialty}</p>
                  <p className="font-mono text-cream/40 text-[0.65rem] leading-relaxed">{mentor.desc}</p>

                  {/* Scan lines */}
                  <div className="mt-3 flex gap-1">
                    {[...Array(8)].map((_, j) => (
                      <div key={j} className="flex-1 h-px bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300" />
                    ))}
                  </div>
                </div>

                {/* Slot number */}
                <div className="flex-shrink-0 text-right">
                  <div className="font-mono text-gold-dim text-[0.55rem] tracking-widest mb-1">Slot</div>
                  <div className="font-bebas text-gold text-2xl leading-none">{mentor.slot}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
