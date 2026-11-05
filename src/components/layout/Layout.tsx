import React, { ReactNode } from 'react';
import { Box, useTheme, GlobalStyles } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

// Static CSS-only aurora blobs — no JS animation, GPU-composited via CSS
// Using CSS animations instead of Framer Motion repeat:Infinity eliminates
// the JS thread involvement entirely after the first paint.
const GLOBAL_KEYFRAMES = (
  <GlobalStyles styles={{
    '@keyframes auroraBlob1': {
      '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: 0.5 },
      '33%': { transform: 'translate(30px,-25px) scale(1.12)', opacity: 0.65 },
      '66%': { transform: 'translate(-20px,20px) scale(0.95)', opacity: 0.55 },
    },
    '@keyframes auroraBlob2': {
      '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: 0.45 },
      '40%': { transform: 'translate(-25px,-20px) scale(1.1)', opacity: 0.6 },
      '70%': { transform: 'translate(20px,15px) scale(0.96)', opacity: 0.5 },
    },
    '@keyframes auroraBlob3': {
      '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: 0.4 },
      '50%': { transform: 'translate(15px,-15px) scale(1.08)', opacity: 0.55 },
    },
    '@keyframes auroraBlob4': {
      '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: 0.35 },
      '45%': { transform: 'translate(-10px,12px) scale(1.06)', opacity: 0.48 },
    },
    // Global reusable keyframes used across many components via sx
    '@keyframes heroPulse': {
      '0%,100%': { boxShadow: '0 0 8px currentColor' },
      '50%': { boxShadow: '0 0 18px currentColor, 0 0 30px currentColor' },
    },
    '@keyframes spinSlow': {
      to: { transform: 'rotate(360deg)' },
    },
    '@keyframes spinSlowReverse': {
      to: { transform: 'rotate(-360deg)' },
    },
    '@keyframes auroraShift': {
      '0%,100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
    '@keyframes livePulse': {
      '0%,100%': { opacity: 1 },
      '50%': { opacity: 0.3 },
    },
    '@keyframes expPulse': {
      '0%,100%': { opacity: 1 },
      '50%': { opacity: 0.4 },
    },
    '@keyframes btnShift': {
      '0%,100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  }} />
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <>
      {GLOBAL_KEYFRAMES}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: isDark ? '#060912' : '#F0F4FF',
          color: theme.palette.text.primary,
          transition: 'background 0.4s ease, color 0.4s ease',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* ── Aurora blobs: pure CSS animation, no JS thread ── */}
        <Box sx={{
          position: 'fixed', top: -150, right: -200, width: 700, height: 700,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: isDark
            ? 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.07) 50%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auroraBlob1 18s ease-in-out infinite',
          willChange: 'transform',
        }} />
        <Box sx={{
          position: 'fixed', top: '30%', left: -200, width: 600, height: 600,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: isDark
            ? 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(52,211,153,0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(16,185,129,0.06) 50%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auroraBlob2 22s ease-in-out infinite',
          willChange: 'transform',
        }} />
        <Box sx={{
          position: 'fixed', bottom: '5%', right: -100, width: 500, height: 500,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: isDark
            ? 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, rgba(236,72,153,0.07) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auroraBlob3 16s ease-in-out infinite',
          willChange: 'transform',
        }} />
        <Box sx={{
          position: 'fixed', top: '60%', left: '40%', width: 400, height: 400,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: isDark
            ? 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auroraBlob4 25s ease-in-out infinite',
          willChange: 'transform',
        }} />

        {/* ── Dot grid — static, no animation ── */}
        <Box sx={{
          position: 'fixed', inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none', zIndex: 0,
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />

        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, pt: { xs: 10, md: 12 }, zIndex: 1, position: 'relative' }}>
          {children}
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
