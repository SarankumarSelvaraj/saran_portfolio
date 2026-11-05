import React, { ReactNode, useRef, useCallback, useState } from 'react';
import { Card, CardProps, useTheme } from '@mui/material';
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

  // Single state object — one setState call per mousemove instead of two
  const [pointer, setPointer] = useState({ x: 50, y: 50, opacity: 0, rx: 0, ry: 0 });

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
    primary: isDark ? 'rgba(129,140,248,0.35)' : 'rgba(79,70,229,0.25)',
    secondary: isDark ? 'rgba(52,211,153,0.35)' : 'rgba(5,150,105,0.25)',
    rose: 'rgba(244,63,94,0.35)',
    amber: 'rgba(245,158,11,0.35)',
    cyan: 'rgba(6,182,212,0.35)',
    violet: 'rgba(139,92,246,0.35)',
    none: 'transparent',
  };

  const accentGrad = accentMap[accentColor] ?? accentMap.primary;
  const neonColor = neonMap[accentColor] ?? neonMap.primary;
  const spotColor = spotlightColor ?? (isDark ? 'rgba(129,140,248,0.1)' : 'rgba(79,70,229,0.07)');

  // Throttle via rAF — avoids setState on every pixel during fast mouse moves
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (rafId.current) return; // already scheduled — skip this event
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (tilt) {
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        setPointer({ x, y, opacity: 1, rx: cy * 8, ry: -cx * 8 });
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
      whileHover={hoverEffect && !tilt ? { y: -6 } : undefined}
      animate={tilt ? { rotateX: pointer.rx, rotateY: pointer.ry } : undefined}
      transition={tilt
        ? { type: 'spring', stiffness: 280, damping: 28 }
        : { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex', flexDirection: 'column',
        height: '100%', width: '100%',
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
          background: isDark ? 'rgba(13,17,23,0.75)' : 'rgba(255,255,255,0.78)',
          // Reduced blur: 16px is visually identical but cheaper than 24px
          backdropFilter: 'blur(16px) saturate(160%)',
          border: neonGlow
            ? `1px solid ${neonColor}`
            : `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
          boxShadow: neonGlow
            ? `${isDark ? '0 4px 28px rgba(0,0,0,0.45)' : '0 4px 28px rgba(79,70,229,0.08)'}, 0 0 16px ${neonColor}`
            : isDark
              ? '0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)'
              : '0 4px 28px rgba(79,70,229,0.07), inset 0 1px 0 rgba(255,255,255,1)',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': hoverEffect ? {
            boxShadow: neonGlow
              ? `0 16px 48px rgba(0,0,0,0.45), 0 0 32px ${neonColor}, 0 0 0 1px ${neonColor}`
              : isDark
                ? '0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(129,140,248,0.25)'
                : '0 16px 48px rgba(79,70,229,0.15), 0 0 0 1px rgba(79,70,229,0.18)',
            borderColor: isDark ? 'rgba(129,140,248,0.22)' : 'rgba(79,70,229,0.18)',
          } : {},
          '&::before': {
            content: '""',
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '2px',
            background: accentGrad,
            opacity: accentColor === 'none' ? 0 : 0.75,
            transition: 'opacity 0.3s ease',
            zIndex: 2,
          },
          '&:hover::before': hoverEffect ? { opacity: accentColor === 'none' ? 0 : 1 } : {},
          ...sx,
        }}
      >
        {/* Spotlight overlay — CSS transition, no JS per frame */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(280px circle at ${pointer.x}% ${pointer.y}%, ${spotColor}, transparent 70%)`,
            opacity: pointer.opacity,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
            zIndex: 1,
            borderRadius: '20px',
          }}
        />
        {children}
      </Card>
    </motion.div>
  );
};
