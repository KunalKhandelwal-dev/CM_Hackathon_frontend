import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    tag: 'Protocol',
    file: 'Q-01',
    question: 'Who can apply to Operation Codex?',
    answer: 'Any builder, student, or professional above 16. Teams of 1–4. Applications are reviewed by The Professor\'s selection panel.',
  },
  {
    tag: 'Access',
    file: 'Q-02',
    question: 'Is there an application fee?',
    answer: 'No entry fee. Operation Codex is fully funded. Selected operatives receive full access, meals, and operational resources at no cost.',
  },
  {
    tag: 'Verification',
    file: 'Q-03',
    question: 'How are submissions judged?',
    answer: 'Six expert judges score on four dimensions: technical depth, product clarity, originality, and presentation. Scores are sealed until the finale.',
  },
  {
    tag: 'Safety',
    file: 'Q-04',
    question: 'Is the event in-person or online?',
    answer: 'Operation Codex is a hybrid event. The primary execution window is in-person at HQ — Connaught Place, New Delhi. Remote participation available for international operatives.',
  },
  {
    tag: 'Clarification',
    file: 'Q-05',
    question: 'Can I change tracks mid-operation?',
    answer: 'No. Each operative commits to one sealed objective at briefing night. Track switches are not permitted once the execution window opens.',
  },
  {
    tag: 'Exfiltration',
    file: 'Q-06',
    question: 'What are the IP rights?',
    answer: 'All IP belongs to the operatives. Operation Codex claims no ownership over your work. What you build is yours to extract.',
  },
];

export default function SealedQuestions() {
  const [open, setOpen] = useState<string | null>('Q-01');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" ref={ref} className="py-24 bg-heist-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, #c9a84c06 0%, transparent 60%)' }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="section-label">Section // 08 — Interrogation Room</p>
          <h2 className="section-title text-[clamp(2.5rem,6vw,5rem)] text-center">
            <span className="text-white">Sealed </span>
            <span className="metallic-text">Questions</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-cream/50 text-sm text-center max-w-md mx-auto mb-14 leading-relaxed"
        >
          Six question files. Break the seal to read the clarifications. Every operative deserves protocol — not mystery.
        </motion.p>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === faq.file;
            return (
              <motion.div
                key={faq.file}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                className={`border transition-all duration-300 ${isOpen ? 'border-gold/40' : 'border-heist hover:border-gold/20'}`}
                style={{ background: isOpen ? '#161210' : '#111' }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : faq.file)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="tag">{faq.tag}</span>
                    <span className="font-mono text-gold-dim text-[0.58rem] tracking-widest hidden sm:block">
                      FILE // {faq.file}
                    </span>
                  </div>
                  <h3 className={`font-bebas text-sm sm:text-base flex-1 tracking-wide transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-cream'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-gold/60 bg-gold/10' : 'border-heist-border'}`}>
                    {isOpen
                      ? <Minus size={12} className="text-gold" />
                      : <Plus size={12} className="text-gold-dim" />
                    }
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-5 sm:pl-[calc(1.25rem+80px+1rem)]">
                        <div className="border-l-2 border-gold/30 pl-4">
                          <p className="font-playfair italic text-cream/70 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
