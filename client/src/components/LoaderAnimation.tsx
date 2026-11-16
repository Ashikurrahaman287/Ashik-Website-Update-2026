import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
}

interface Link {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

function BlockchainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(dpr, dpr);

    // Generate nodes spread across canvas
    const count = Math.min(22, Math.floor((W * H) / 28000));
    const nodes: Node[] = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 3 + Math.random() * 3,
      opacity: 0,
    }));

    // Build links between close nodes
    const links: Link[] = [];
    const MAX_DIST = Math.min(W, H) * 0.35;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
          links.push({ from: i, to: j, progress: 0, speed: 0.006 + Math.random() * 0.008 });
        }
      }
    }

    const draw = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = (ts - startTimeRef.current) / 1000; // seconds

      ctx.clearRect(0, 0, W, H);

      // Fade-in nodes
      const nodeFadeIn = Math.min(1, elapsed / 0.8);

      // Update node positions + fade
      nodes.forEach((n) => {
        n.opacity = nodeFadeIn;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw links
      links.forEach((link) => {
        if (elapsed > 0.3) {
          link.progress = Math.min(1, link.progress + link.speed);
        }
        if (link.progress <= 0) return;

        const a = nodes[link.from];
        const b = nodes[link.to];
        const px = a.x + (b.x - a.x) * link.progress;
        const py = a.y + (b.y - a.y) * link.progress;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * nodeFadeIn})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Travelling dot
        if (link.progress < 1) {
          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${0.7 * nodeFadeIn})`;
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((n) => {
        // Glow
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${0.15 * n.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.6 * n.opacity})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

interface LoaderAnimationProps {
  onComplete: () => void;
}

export default function LoaderAnimation({ onComplete }: LoaderAnimationProps) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit after 2.2s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2200);

    // Fully remove after 2.2s + 600ms fade
    const doneTimer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0F1C]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <BlockchainCanvas />

          {/* Central content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Hex ring */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="w-16 h-16 rounded-2xl border border-[#00D4FF]/30 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-2xl bg-[#00D4FF]/5" />
                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-[-8px] rounded-[20px] border border-[#00D4FF]/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-[-16px] rounded-[28px] border border-[#6366F1]/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                {/* Block symbol */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M14 3L24 8.5V19.5L14 25L4 19.5V8.5L14 3Z"
                    stroke="#00D4FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="rgba(0,212,255,0.08)"
                  />
                  <path d="M14 3V14M4 8.5L14 14M24 8.5L14 14" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ashikur Rahaman
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-sm text-[#00D4FF] font-medium tracking-wider"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              Web3 Founder & Blockchain Executive
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-32 sm:w-48 h-[2px] bg-[#1F2937] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#6366F1] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.9, duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
