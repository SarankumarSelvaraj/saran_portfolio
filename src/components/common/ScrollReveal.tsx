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
  duration = 0.6,
  distance = 50,
}) => {
  const getVariants = () => {
    const hidden = {
      opacity: 0,
      x: 0,
      y: 0,
    };

    switch (direction) {
      case 'up':
        hidden.y = distance;
        break;
      case 'down':
        hidden.y = -distance;
        break;
      case 'left':
        hidden.x = distance;
        break;
      case 'right':
        hidden.x = -distance;
        break;
      case 'none':
        break;
    }

    return {
      hidden,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0] as any, // cubic-bezier smooth easing
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px 0px' }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};
