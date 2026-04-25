import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Send } from 'lucide-react';

type Mode = 'participant' | 'sponsor';

export default function SecureTransmission() {
  const [mode, setMode] = useState<Mode>('participant');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', team: '', message: '' });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', team: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-heist-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #c9a84c07 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label">Section // 09 — Encrypted Channel</p>
          <h2 className="section-title text-[clamp(2.5rem,6vw,5rem)] text-center">
            <span className="text-white">Secure </span>
            <span className="metallic-text">Transmission</span>
          </h2>
          <p className="font-mono text-cream/50 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            Two paths. Two ciphers. Choose your signal below — operative application, or sponsor handshake.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left panel: channel selector */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Channel status */}
            <div className="panel border border-heist p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-heist-red rounded-full red-dot" />
                  <span className="font-mono text-gold text-xs tracking-widest">CHANNEL · LIVE</span>
                </div>
                <span className="font-mono text-gold-dim text-[0.58rem] tracking-wider">AES-256</span>
              </div>
              <div className="font-mono text-cream/40 text-[0.65rem] space-y-1 pl-4">
                <p>» Handshake established.</p>
                <p>» Identity pending.</p>
                <p>» Transmit your packet.</p>
              </div>
            </div>

            {/* Path selector */}
            {([
              { id: 'participant' as Mode, icon: Users, label: 'Participant Inquiry', desc: 'Apply for crew status. Ask event questions.' },
              { id: 'sponsor' as Mode, icon: Briefcase, label: 'Sponsor Handshake', desc: 'Partnerships, branding, collaboration.' },
            ] as const).map((path) => {
              const Icon = path.icon;
              const isActive = mode === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => setMode(path.id)}
                  className={`w-full text-left p-4 border transition-all duration-300 ${
                    isActive
                      ? 'border-gold/60 bg-gold/5'
                      : 'border-heist hover:border-gold/25 bg-transparent'
                  }`}
                >
                  <div className="font-mono text-[0.58rem] tracking-widest text-gold-dim mb-1 uppercase">
                    Path {path.id === 'participant' ? '01' : '02'}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={13} className={isActive ? 'text-gold' : 'text-gold-dim'} />
                    <span className={`font-bebas text-base tracking-wide ${isActive ? 'text-gold' : 'text-cream'}`}>
                      {path.label}
                    </span>
                  </div>
                  <p className="font-mono text-cream/40 text-[0.65rem]">{path.desc}</p>
                </button>
              );
            })}
          </motion.div>

          {/* Right panel: form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <div className="panel border border-heist p-6 h-full" style={{ background: '#0e0c0a' }}>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-gold text-xs tracking-widest uppercase">
                  » {mode === 'participant' ? 'Operative Packet' : 'Sponsor Dossier'}
                </span>
                <span className="font-mono text-gold-dim text-[0.58rem] tracking-wider">TX - {mode === 'participant' ? '7026' : '7027'}</span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center h-64 gap-4"
                  >
                    <div className="w-16 h-16 border-2 border-gold/60 flex items-center justify-center">
                      <Send size={24} className="text-gold" />
                    </div>
                    <p className="font-bebas text-gold text-xl tracking-widest">Transmission Received</p>
                    <p className="font-mono text-cream/50 text-xs tracking-wider text-center">
                      The Professor's team will make contact within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key={mode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-[0.6rem] tracking-widest text-gold-dim uppercase block mb-1.5">
                          {mode === 'participant' ? 'Codename / Full Name' : 'Organization Name'}
                        </label>
                        <input
                          type="text"
                          placeholder={mode === 'participant' ? 'e.g. The Safecracker' : 'e.g. Acme Corp'}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-heist-border bg-heist-black px-3 py-2.5 font-mono text-cream text-xs placeholder-gold-dim/40 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[0.6rem] tracking-widest text-gold-dim uppercase block mb-1.5">
                          Encrypted Email
                        </label>
                        <input
                          type="email"
                          placeholder="you@secure.net"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-heist-border bg-heist-black px-3 py-2.5 font-mono text-cream text-xs placeholder-gold-dim/40 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] tracking-widest text-gold-dim uppercase block mb-1.5">
                        {mode === 'participant' ? 'Team Designation (optional)' : 'Partnership Type (optional)'}
                      </label>
                      <input
                        type="text"
                        placeholder={mode === 'participant' ? 'Team size / crew name' : 'Title sponsor / track sponsor / mentor'}
                        value={form.team}
                        onChange={(e) => setForm({ ...form, team: e.target.value })}
                        className="w-full border border-heist-border bg-heist-black px-3 py-2.5 font-mono text-cream text-xs placeholder-gold-dim/40 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] tracking-widest text-gold-dim uppercase block mb-1.5">
                        {mode === 'participant' ? 'Questions / Interest' : 'Sponsorship Brief'}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={mode === 'participant' ? 'Tell us about your crew and what you want to crack.' : 'Tell us about your brand and what you want to achieve.'}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-heist-border bg-heist-black px-3 py-2.5 font-mono text-cream text-xs placeholder-gold-dim/40 focus:border-gold/50 focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-heist">
                      <span className="font-mono text-gold-dim text-[0.58rem] tracking-wider">
                        » Packet encrypted · Awaiting transmission
                      </span>
                      <button type="submit" className="btn-red flex items-center gap-2">
                        <Send size={12} />
                        Transmit
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
