import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((current) => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          duration: Math.random() * 3 + 4, // 4-7 seconds
        };
        // Keep array size manageable
        return [...current.slice(-15), newHeart];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0.6, scale: 0.5 }}
          animate={{ y: '-10vh', opacity: 0 }}
          transition={{ duration: heart.duration, ease: 'linear' }}
          className="absolute text-red-500/30 text-2xl"
          style={{ left: `${heart.left}%` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};
