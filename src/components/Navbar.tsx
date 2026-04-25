import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';

const navLeft = [
  { label: 'The Mission', href: '#briefing' },
  { label: 'Operational Blueprint', href: '#blueprint' },
  { label: 'Timeline', href: '#timeline' },
];

const navRight = [
  { label: 'The Score', href: '#score' },
  { label: 'The Crew', href: '#crew' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-heist-black/95 border-b border-gold-dim backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLeft.map((item) => (
              <NavLink key={item.label} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Center Brand */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
            <div className="w-10 h-10 border border-gold/50 rounded-full flex items-center justify-center mb-0.5 group-hover:border-gold transition-colors duration-300" style={{ background: 'radial-gradient(circle, #1a1410 0%, #080808 100%)' }}>
              <Lock size={14} className="text-gold" />
            </div>
            <span className="font-mono text-gold text-[0.5rem] tracking-[0.25em] uppercase">Operation Codex</span>
          </a>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navRight.map((item) => (
              <NavLink key={item.label} href={item.href} label={item.label} />
            ))}
            <a href="#contact" className="btn-gold text-[0.65rem] px-5 py-2.5">
              Join The Operative
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden ml-auto text-gold border border-gold/30 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-heist-black scanline-overlay flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-heist">
              <span className="font-mono text-gold text-xs tracking-widest uppercase">Operation Codex</span>
              <button onClick={() => setMobileOpen(false)} className="text-gold">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {[...navLeft, ...navRight].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-bebas text-4xl text-cream hover:text-gold transition-colors duration-200 tracking-wider"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="btn-gold inline-block mt-4 text-center"
              >
                Join The Operative
              </motion.a>
            </div>
            <div className="px-8 py-6 border-t border-heist">
              <p className="font-mono text-gold-dim text-xs tracking-widest">CHANNEL // SECURE // AES-256</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="font-mono text-xs tracking-[0.15em] uppercase text-cream/70 hover:text-gold transition-colors duration-200 relative group"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
    </a>
  );
}
