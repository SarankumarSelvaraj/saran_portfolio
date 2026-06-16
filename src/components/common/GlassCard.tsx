import React, { ReactNode } from 'react';
import { Card, CardProps, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface GlassCardProps extends CardProps {
  children: ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = true,
  sx = {},
  ...props
}) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8 } : undefined}
      transition={{ duration: 0.2 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}
    >
      <Card
        {...props}
        sx={{
          background: theme.palette.glass?.background,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.palette.glass?.border}`,
          boxShadow: theme.palette.glass?.shadow,
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, transparent 100%)`,
            opacity: 0.5,
          },
          ...sx,
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
};
