import { useEffect, useRef, useState } from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'UTC' }) + ' UTC');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    const drawMap = () => {
      ctx.fillStyle = '#0a0806';
      ctx.fillRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = 'rgba(201,168,76,0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Road-like curves (representing Delhi roads)
      const roads = [
        { start: [0.1, 0.3], end: [0.9, 0.5], ctrl: [0.5, 0.2] },
        { start: [0.2, 0.8], end: [0.8, 0.2], ctrl: [0.5, 0.6] },
        { start: [0.0, 0.5], end: [1.0, 0.55], ctrl: [0.5, 0.5] },
        { start: [0.5, 0.0], end: [0.45, 1.0], ctrl: [0.48, 0.5] },
        { start: [0.15, 0.15], end: [0.7, 0.85], ctrl: [0.3, 0.5] },
      ];

      roads.forEach((road) => {
        ctx.beginPath();
        ctx.moveTo(road.start[0] * W, road.start[1] * H);
        ctx.quadraticCurveTo(road.ctrl[0] * W, road.ctrl[1] * H, road.end[0] * W, road.end[1] * H);
        ctx.strokeStyle = 'rgba(201,168,76,0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Landmark dots
      const landmarks = [
        { x: 0.5, y: 0.5, label: 'HQ · Connaught Place', main: true },
        { x: 0.3, y: 0.3, label: 'India Gate', main: false },
        { x: 0.7, y: 0.35, label: 'Lajpat Nagar', main: false },
        { x: 0.25, y: 0.65, label: 'Sadar Bazar', main: false },
        { x: 0.75, y: 0.7, label: 'Lodi Garden', main: false },
        { x: 0.6, y: 0.75, label: 'Lotus Temple', main: false },
      ];

      landmarks.forEach((lm) => {
        if (lm.main) {
          // Main HQ marker
          ctx.beginPath();
          ctx.arc(lm.x * W, lm.y * H, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#cc1a1a';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(lm.x * W, lm.y * H, 12, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(204,26,26,0.4)';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(lm.x * W, lm.y * H, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201,168,76,0.7)';
          ctx.fill();
        }
        // Label
        ctx.fillStyle = lm.main ? '#cc1a1a' : 'rgba(201,168,76,0.6)';
        ctx.font = `${lm.main ? 'bold ' : ''}9px monospace`;
        ctx.fillText(lm.label, lm.x * W + (lm.main ? 14 : 8), lm.y * H + (lm.main ? 4 : 4));
      });

      // Compass
      ctx.beginPath();
      ctx.arc(0.1 * W, 0.15 * H, 16, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(201,168,76,0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = 'rgba(201,168,76,0.7)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('N', 0.1 * W, 0.15 * H - 8);
      ctx.textAlign = 'left';

      // Coordinates
      ctx.fillStyle = 'rgba(201,168,76,0.5)';
      ctx.font = '9px monospace';
      ctx.fillText('LAT 28.6119° N · LON 77.2090° E', 10, H - 10);
    };

    drawMap();
  }, []);

  return (
    <footer className="bg-heist-black border-t border-heist relative overflow-hidden">
      {/* Map section */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: Info */}
        <div className="px-8 lg:px-14 py-16 space-y-6 border-b lg:border-b-0 lg:border-r border-heist">
          <div>
            <p className="font-mono text-gold-dim text-[0.6rem] tracking-widest uppercase mb-3">End Transmission</p>
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] leading-none">
              <span className="text-white">The Plan</span><br />
              <span className="text-white">Is </span>
              <span className="text-heist-red">Yours</span>
              <span className="text-white"> Now.</span>
            </h2>
          </div>

          <p className="font-playfair italic text-gold/60 text-base">"Precision is a habit. Come prepared."</p>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Mail size={13} className="text-gold flex-shrink-0" />
              <span className="font-mono text-cream/60 text-xs tracking-wide">ops@operationcodex.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" />
              <span className="font-mono text-cream/60 text-xs tracking-wide">#Q — Connaught Place, New Delhi — 110001</span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <span className="font-mono text-gold-dim text-[0.6rem] tracking-widest uppercase">System Time //</span>
              <span className="font-mono text-cream/50 text-[0.6rem] tracking-wide">
                <LiveClock />
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Youtube, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 border border-heist hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:bg-gold/10"
              >
                <Icon size={14} className="text-gold-dim hover:text-gold" />
              </a>
            ))}
          </div>

          {/* Final CTA */}
          <div className="pt-2">
            <a href="#contact" className="btn-gold inline-flex items-center gap-2">
              Join the Operation
            </a>
          </div>
        </div>

        {/* Right: Map */}
        <div className="relative">
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="font-mono text-gold text-[0.6rem] tracking-widest">SURVEILLANCE GRID · NEW DELHI</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-heist-red rounded-full red-dot" />
              <span className="font-mono text-heist-red text-[0.6rem] tracking-widest">ACTIVE</span>
            </div>
          </div>
          <div className="absolute top-10 right-4 z-10">
            <span className="font-mono text-gold-dim text-[0.55rem] tracking-widest">GRID // CP-07</span>
          </div>
          <canvas
            ref={canvasRef}
            className="w-full"
            style={{ height: '380px' }}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-heist px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-gold-dim text-[0.6rem] tracking-wider">
          © 2026 · Operation Codex · All Signals Reserved
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
          <span className="font-mono text-gold-dim text-[0.6rem] tracking-wider">Transmission Terminated. Stand By.</span>
        </div>
      </div>
    </footer>
  );
}
