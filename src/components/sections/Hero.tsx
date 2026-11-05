import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Button, Container, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { profileInfo } from '../../configs/portfolioData';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* ── Typewriter — no change needed, setTimeout-based is fine ── */
function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 45, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  // Stable ref so the words array doesn't trigger re-effect
  const wordsRef = useRef(words);
  useEffect(() => { wordsRef.current = words; }, [words]);

  useEffect(() => {
    const word = wordsRef.current[wordIndex % wordsRef.current.length];
    if (phase === 'typing') {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('pausing'), pauseMs);
      return () => clearTimeout(t);
    }
    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 300);
      return () => clearTimeout(t);
    }
    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
        return () => clearTimeout(t);
      }
      setWordIndex(i => i + 1);
      setPhase('typing');
    }
  }, [displayed, phase, wordIndex, typingSpeed, deletingSpeed, pauseMs]);
  return displayed;
}

const ROLES = [
  'React Native Developer',
  'MERN Stack Engineer',
  'Full-Stack Developer',
  'Mobile App Architect',
  'TypeScript Specialist',
];

// Static positions computed once — no rAF loop
const ORBIT_RADIUS = 175;
const TECH_BADGES = [
  { label: 'React', color: '#61DAFB', angle: 0 },
  { label: 'TS', color: '#3178C6', angle: 51 },
  { label: 'Node', color: '#339933', angle: 102 },
  { label: 'RN', color: '#61DAFB', angle: 153 },
  { label: 'MUI', color: '#007FFF', angle: 204 },
  { label: 'AWS', color: '#FF9900', angle: 255 },
  { label: 'Mongo', color: '#47A248', angle: 306 },
];

const STAT_CARDS = [
  { value: '3+', label: 'Years Exp.', color: '#818CF8', pos: { top: '-5%', right: '-8%' } },
  { value: '7+', label: 'Products', color: '#34D399', pos: { bottom: '8%', right: '-14%' } },
  { value: '50+', label: 'Components', color: '#F59E0B', pos: { bottom: '-4%', left: '4%' } },
];

/* Magnetic button — spring-based, no setState */
const MagneticBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.8 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  }, [x, y]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const displayed = useTypewriter(ROLES);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  }, []);

  return (
    <Box id="hero" sx={{ minHeight: { xs: '95vh', md: '100vh' }, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', py: { xs: 6, md: 0 } }}>
      {/* Static ambient glow — no animation */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '55%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 900, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 8, md: 6 }, alignItems: 'center' }}>

          {/* ── LEFT ── */}
          <Box>
            {/* Available badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.9, mb: 3, borderRadius: '30px',
                background: isDark ? 'rgba(52,211,153,0.08)' : 'rgba(5,150,105,0.06)',
                border: `1px solid ${isDark ? 'rgba(52,211,153,0.25)' : 'rgba(5,150,105,0.2)'}`,
              }}>
                {/* CSS pulse — no JS */}
                <Box sx={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: theme.palette.secondary.main,
                  animation: 'expPulse 2s ease infinite',
                  boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
                }} />
                <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.72rem', color: theme.palette.secondary.main }}>
                  Open to Opportunities
                </Typography>
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5.2rem' }, lineHeight: 1.0, mb: 0.5 }}>
                Hi, I'm
              </Typography>
              <Typography variant="h1" sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5.2rem' }, lineHeight: 1.05, mb: 2,
                background: theme.palette.gradient?.aurora,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                backgroundSize: '300% 300%',
                animation: 'auroraShift 6s ease infinite',
                filter: isDark ? 'drop-shadow(0 0 24px rgba(129,140,248,0.35))' : undefined,
              }}>
                {profileInfo.name}
              </Typography>
            </motion.div>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 3, minHeight: '2.4rem' }}>
                <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.6rem' }, fontWeight: 600, color: 'text.secondary', fontFamily: '"Outfit", sans-serif' }}>
                  {displayed}
                </Typography>
                {/* CSS blink — no Framer Motion repeat:Infinity */}
                <Box sx={{
                  display: 'inline-block', width: 3, height: '1.6rem', flexShrink: 0,
                  background: theme.palette.primary.main, borderRadius: 2, ml: '3px',
                  boxShadow: `0 0 8px ${theme.palette.primary.main}`,
                  animation: 'cursorBlink 0.9s step-end infinite',
                  '@keyframes cursorBlink': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
                }} />
              </Box>
            </motion.div>

            {/* Summary */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4.5, maxWidth: 520, lineHeight: 1.85, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                Results-driven engineer with <strong style={{ color: isDark ? '#A5B4FC' : '#4F46E5' }}>3+ years</strong> crafting
                production-grade web &amp; mobile apps at SRM Tech. Specialising in{' '}
                <strong style={{ color: isDark ? '#6EE7B7' : '#059669' }}>MERN stack</strong> and{' '}
                <strong style={{ color: isDark ? '#A5B4FC' : '#4F46E5' }}>React Native</strong>.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <MagneticBox>
                  <Button variant="contained" size="large" onClick={() => scrollTo('contact')} endIcon={<SendIcon />}
                    sx={{
                      px: 4, py: 1.8, fontSize: '1rem',
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)',
                      backgroundSize: '200% 200%',
                      boxShadow: '0 8px 28px rgba(99,102,241,0.4)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      animation: 'btnShift 4s ease infinite',
                      '&:hover': { boxShadow: '0 12px 36px rgba(99,102,241,0.6)', transform: 'translateY(-3px) scale(1.02)' },
                    }}>
                    Get In Touch
                  </Button>
                </MagneticBox>
                <MagneticBox>
                  <Button variant="outlined" size="large" href={profileInfo.resumeUrl} download startIcon={<FileDownloadIcon />}
                    sx={{
                      px: 4, py: 1.8, fontSize: '1rem', borderWidth: '2px',
                      borderColor: isDark ? 'rgba(129,140,248,0.5)' : 'rgba(79,70,229,0.5)',
                      color: isDark ? '#A5B4FC' : '#4F46E5',
                      background: isDark ? 'rgba(99,102,241,0.06)' : 'rgba(79,70,229,0.04)',
                      '&:hover': { borderWidth: '2px', borderColor: isDark ? '#818CF8' : '#4F46E5', background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(79,70,229,0.08)', transform: 'translateY(-3px) scale(1.02)' },
                    }}>
                    Resume
                  </Button>
                </MagneticBox>
              </Stack>
            </motion.div>

            {/* Social */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.5 }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Connect
                </Typography>
                <Box sx={{ width: 32, height: 1, background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' }} />
                {profileInfo.socialLinks.filter(s => s.platform !== 'Email').map(social => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    style={{ display: 'flex', textDecoration: 'none' }}
                  >
                    <Box sx={{
                      width: 40, height: 40, borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': { background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(79,70,229,0.08)', color: 'primary.main', borderColor: 'primary.main' },
                    }}>
                      {social.platform === 'GitHub' ? <GitHubIcon fontSize="small" /> : <LinkedInIcon fontSize="small" />}
                    </Box>
                  </motion.a>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* ── RIGHT — Avatar + CSS orbit + Stats ── */}
          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                style={{ position: 'relative', width: 420, height: 420 }}
              >
                {/* CSS-animated orbit rings — no JS */}
                <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px dashed ${isDark ? 'rgba(129,140,248,0.18)' : 'rgba(79,70,229,0.14)'}`, animation: 'spinSlow 40s linear infinite' }} />
                <Box sx={{ position: 'absolute', inset: 28, borderRadius: '50%', border: `1px dashed ${isDark ? 'rgba(52,211,153,0.12)' : 'rgba(5,150,105,0.1)'}`, animation: 'spinSlowReverse 60s linear infinite' }} />

                {/* Tech orbit badges — CSS animation, NOT rAF setState */}
                {TECH_BADGES.map(({ label, color, angle }) => {
                  // Positions computed once from static angles
                  const rad = (angle * Math.PI) / 180;
                  const lx = Math.cos(rad) * ORBIT_RADIUS + 210;
                  const ly = Math.sin(rad) * ORBIT_RADIUS + 210;
                  return (
                    <Box
                      key={label}
                      sx={{
                        position: 'absolute',
                        left: lx - 22, top: ly - 22,
                        width: 44, height: 44,
                        borderRadius: '12px',
                        background: isDark ? 'rgba(13,17,23,0.88)' : 'rgba(255,255,255,0.88)',
                        border: `1px solid ${color}55`,
                        backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 4px 12px ${color}28`,
                        zIndex: 3,
                        // Rotate badge with the orbit ring via CSS
                        transformOrigin: `${210 - (lx - 22)}px ${210 - (ly - 22)}px`,
                        animation: 'spinSlow 40s linear infinite',
                      }}
                    >
                      {/* Counter-rotate text so it stays upright */}
                      <Box sx={{ animation: 'spinSlowReverse 40s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '0.62rem', fontWeight: 800, color, lineHeight: 1, textAlign: 'center' }}>
                          {label}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}

                {/* Central avatar */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.04 }}
                  sx={{
                    position: 'absolute', inset: 60, borderRadius: '50%',
                    background: isDark ? 'linear-gradient(145deg, #0D1117, #1E293B)' : 'linear-gradient(145deg, #FFFFFF, #EEF2FF)',
                    border: `3px solid ${isDark ? 'rgba(129,140,248,0.35)' : 'rgba(79,70,229,0.3)'}`,
                    boxShadow: isDark
                      ? '0 0 0 8px rgba(99,102,241,0.06), 0 0 50px rgba(99,102,241,0.22), 0 20px 60px rgba(0,0,0,0.55)'
                      : '0 0 0 8px rgba(79,70,229,0.05), 0 0 50px rgba(79,70,229,0.12), 0 20px 60px rgba(79,70,229,0.1)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, zIndex: 4,
                    overflow: 'hidden',
                    '&::before': { content: '""', position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle at 38% 28%, rgba(255,255,255,0.07) 0%, transparent 55%)' },
                  }}
                >
                  <Typography sx={{
                    fontSize: '3.8rem', lineHeight: 1, fontWeight: 900,
                    fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.06em',
                    background: theme.palette.gradient?.aurora,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundSize: '300%', animation: 'auroraShift 6s ease infinite',
                  }}>
                    SS
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.58rem' }}>
                    Full-Stack Dev
                  </Typography>
                </Box>

                {/* Floating stat cards — CSS float animation */}
                {STAT_CARDS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.4, type: 'spring' }}
                    style={{ position: 'absolute', ...s.pos as any, zIndex: 5 }}
                  >
                    <Box sx={{
                      px: 2, py: 1.2, borderRadius: '16px',
                      background: isDark ? 'rgba(13,17,23,0.92)' : 'rgba(255,255,255,0.95)',
                      border: `1px solid ${s.color}44`,
                      backdropFilter: 'blur(12px)',
                      boxShadow: `0 6px 24px rgba(0,0,0,0.25), 0 0 12px ${s.color}18`,
                      textAlign: 'center', minWidth: 80,
                      // CSS float — no repeat:Infinity Framer animate
                      animation: `statFloat${i} ${2.8 + i * 0.5}s ease-in-out ${i * 0.4}s infinite alternate`,
                      [`@keyframes statFloat${i}`]: {
                        from: { transform: 'translateY(0px)' },
                        to: { transform: 'translateY(-8px)' },
                      },
                    }}>
                      <Typography sx={{ fontWeight: 900, fontSize: '1.25rem', color: s.color, lineHeight: 1.1, fontFamily: '"Outfit", sans-serif' }}>
                        {s.value}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.62rem', color: 'text.secondary', lineHeight: 1.2 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          )}
        </Box>

        {/* Scroll indicator — CSS animation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <Box
              onClick={() => scrollTo('about')}
              sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5,
                color: 'text.secondary', opacity: 0.45, cursor: 'pointer',
                transition: 'opacity 0.2s',
                animation: 'scrollBob 2s ease-in-out infinite',
                '@keyframes scrollBob': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
                '&:hover': { opacity: 0.9 },
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.65rem' }}>
                Scroll
              </Typography>
              <ArrowDownwardIcon sx={{ fontSize: '1.1rem' }} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};
