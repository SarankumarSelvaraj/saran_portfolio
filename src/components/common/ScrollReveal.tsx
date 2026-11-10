import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 32,
}) => {
  const hidden: { opacity: number; x: number; y: number } = { opacity: 0, x: 0, y: 0 };

  switch (direction) {
    case 'up': hidden.y = distance; break;
    case 'down': hidden.y = -distance; break;
    case 'left': hidden.x = distance; break;
    case 'right': hidden.x = -distance; break;
    default: break;
  }

  const variants = {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
