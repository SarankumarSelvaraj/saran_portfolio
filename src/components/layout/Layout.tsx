import React, { ReactNode } from 'react';
import { Box, useTheme, GlobalStyles } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const GLOBAL_KEYFRAMES = (
  <GlobalStyles styles={{
    // Gradient text animation
    '@keyframes gradientShift': {
      '0%,100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
    // Subtle pulse for status indicators
    '@keyframes statusPulse': {
      '0%,100%': { opacity: 1, transform: 'scale(1)' },
      '50%': { opacity: 0.6, transform: 'scale(0.9)' },
    },
    // Scroll bob
    '@keyframes scrollBob': {
      '0%,100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(6px)' },
    },
    // Cursor blink
    '@keyframes cursorBlink': {
      '0%,100%': { opacity: 1 },
      '50%': { opacity: 0 },
    },
    // Ambient orb drift
    '@keyframes orbDrift1': {
      '0%,100%': { transform: 'translate(0,0) scale(1)' },
      '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
      '66%': { transform: 'translate(-25px,20px) scale(0.95)' },
    },
    '@keyframes orbDrift2': {
      '0%,100%': { transform: 'translate(0,0) scale(1)' },
      '40%': { transform: 'translate(-35px,-25px) scale(1.08)' },
      '70%': { transform: 'translate(20px,18px) scale(0.97)' },
    },
    '@keyframes orbDrift3': {
      '0%,100%': { transform: 'translate(0,0) scale(1)' },
      '50%': { transform: 'translate(18px,-18px) scale(1.06)' },
    },
    // Orbit rotation
    '@keyframes orbitSpin': { to: { transform: 'rotate(360deg)' } },
    '@keyframes orbitSpinReverse': { to: { transform: 'rotate(-360deg)' } },
    // Live dot pulse
    '@keyframes livePulse': {
      '0%,100%': { opacity: 1 },
      '50%': { opacity: 0.3 },
    },
    // Button gradient shift
    '@keyframes btnGradient': {
      '0%,100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
    // Float for stat cards
    '@keyframes float0': {
      '0%,100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-8px)' },
    },
    '@keyframes float1': {
      '0%,100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    '@keyframes float2': {
      '0%,100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-7px)' },
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
          background: isDark ? '#0A0A0F' : '#FAFAFA',
          color: theme.palette.text.primary,
          transition: 'background 0.3s ease, color 0.3s ease',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* Ambient background orbs — pure CSS, GPU composited */}
        <Box sx={{
          position: 'fixed',
          top: '-10%', right: '-10%',
          width: 600, height: 600,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orbDrift1 20s ease-in-out infinite',
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <Box sx={{
          position: 'fixed',
          top: '40%', left: '-10%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(56,189,248,0.03) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(2,132,199,0.07) 0%, rgba(2,132,199,0.02) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orbDrift2 25s ease-in-out infinite',
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <Box sx={{
          position: 'fixed',
          bottom: '5%', right: '15%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orbDrift3 18s ease-in-out infinite',
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Subtle dot grid pattern */}
        <Box sx={{
          position: 'fixed', inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
        }} />

        <Navbar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: { xs: 9, md: 11 },
            zIndex: 1,
            position: 'relative',
          }}
        >
          {children}
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
