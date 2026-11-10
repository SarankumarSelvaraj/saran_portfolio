import React, { ReactNode, useRef, useCallback, useState } from 'react';
import { Box, Card, CardProps, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface GlassCardProps extends CardProps {
  children: ReactNode;
  hoverEffect?: boolean;
  tilt?: boolean;
  accentColor?: 'primary' | 'secondary' | 'rose' | 'amber' | 'cyan' | 'violet' | 'none';
  spotlightColor?: string;
  neonGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = true,
  tilt = false,
  accentColor = 'primary',
  spotlightColor,
  neonGlow = false,
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const [pointer, setPointer] = useState({ x: 50, y: 50, opacity: 0, rx: 0, ry: 0 });

  /* ── Accent gradient map ── */
  const accentMap: Record<string, string> = {
    primary: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    secondary: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    rose: 'linear-gradient(90deg, #F43F5E, #EC4899)',
    amber: 'linear-gradient(90deg, #F59E0B, #F97316)',
    cyan: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    violet: 'linear-gradient(90deg, #8B5CF6, #6366F1)',
    none: 'transparent',
  };

  const neonMap: Record<string, string> = {
    primary: isDark ? 'rgba(139,92,246,0.35)' : 'rgba(124,58,237,0.25)',
    secondary: isDark ? 'rgba(56,189,248,0.3)' : 'rgba(2,132,199,0.2)',
    rose: 'rgba(244,63,94,0.35)',
    amber: 'rgba(245,158,11,0.35)',
    cyan: 'rgba(6,182,212,0.35)',
    violet: 'rgba(139,92,246,0.35)',
    none: 'transparent',
  };

  const accentGrad = accentMap[accentColor] ?? accentMap.primary;
  const neonColor = neonMap[accentColor] ?? neonMap.primary;
  const spotColor = spotlightColor ?? (isDark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.05)');

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (tilt) {
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        setPointer({ x, y, opacity: 1, rx: cy * 7, ry: -cx * 7 });
      } else {
        setPointer(p => ({ ...p, x, y, opacity: 1 }));
      }
    });
  }, [tilt]);

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null; }
    setPointer(p => ({ ...p, opacity: 0, rx: 0, ry: 0 }));
  }, []);

  return (
    <motion.div
      whileHover={hoverEffect && !tilt ? { y: -4 } : undefined}
      animate={tilt ? { rotateX: pointer.rx, rotateY: pointer.ry } : undefined}
      transition={tilt
        ? { type: 'spring', stiffness: 260, damping: 26 }
        : { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <Card
        ref={cardRef}
        {...props}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          background: isDark
            ? 'rgba(22, 22, 31, 0.9)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px) saturate(160%)',
          border: neonGlow
            ? `1px solid ${neonColor}`
            : `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
          boxShadow: neonGlow
            ? `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${neonColor}`
            : isDark
              ? '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
              : '0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
          '&:hover': hoverEffect ? {
            boxShadow: isDark
              ? '0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 16px 40px rgba(0,0,0,0.08)',
            borderColor: isDark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.15)',
          } : {},
          /* Top accent line */
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: accentGrad,
            opacity: accentColor === 'none' ? 0 : 0.7,
            transition: 'opacity 0.25s ease',
            zIndex: 2,
          },
          '&:hover::before': hoverEffect ? { opacity: accentColor === 'none' ? 0 : 1 } : {},
          ...sx,
        }}
      >
        {/* Mouse-follow spotlight */}
        <Box
          component="div"
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '16px',
            background: `radial-gradient(260px circle at ${pointer.x}% ${pointer.y}%, ${spotColor}, transparent 70%)`,
            opacity: pointer.opacity,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {children}
      </Card>
    </motion.div>
  );
};
