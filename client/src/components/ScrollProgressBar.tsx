import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          background: 'linear-gradient(90deg, #00D4FF, #6366F1)',
          width: `${progress}%`,
          boxShadow: '0 0 8px rgba(0,212,255,0.6)',
        }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}
