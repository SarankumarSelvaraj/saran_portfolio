import React, { useRef, useEffect, useState, memo } from 'react';
import { Box, Container, Grid, Typography, useTheme, Chip, Stack } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion, useInView } from 'framer-motion';

/* Animated counter — runs once on scroll-in, then stays static */
const Counter: React.FC<{ target: number; suffix?: string }> = memo(({ target, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 40;                       // fewer steps = faster, lighter
    const interval = 1600 / steps;             // ~40ms per step
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.round((step / steps) * target));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
});
Counter.displayName = 'Counter';

// Stable chip data outside component — prevents re-creation every render
const HIGHLIGHT_CHIPS = [
  { label: 'MERN Stack', color: '#6366F1' },
  { label: 'React Native', color: '#61DAFB' },
  { label: 'TypeScript', color: '#3178C6' },
  { label: 'AWS S3', color: '#FF9900' },
  { label: 'RTK Query', color: '#764ABC' },
  { label: 'Firebase Auth', color: '#FFCA28' },
  { label: 'WebSockets', color: '#34D399' },
  { label: 'MongoDB', color: '#47A248' },
];

const BENTO_ITEMS = [
  { gradient: 'linear-gradient(135deg,#6366F1,#8B5CF6)', neon: 'rgba(99,102,241,0.4)', icon: <BusinessCenterIcon sx={{ fontSize: 28, color: '#fff' }} />, value: 3, suffix: '+', label: 'Years Experience', sub: 'at SRM Tech', accentColor: 'violet' as const },
  { gradient: 'linear-gradient(135deg,#10B981,#06B6D4)', neon: 'rgba(16,185,129,0.4)', icon: <DevicesIcon sx={{ fontSize: 28, color: '#fff' }} />, value: 7, suffix: '+', label: 'Products Shipped', sub: 'at enterprise scale', accentColor: 'secondary' as const },
  { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', neon: 'rgba(245,158,11,0.4)', icon: <CodeIcon sx={{ fontSize: 28, color: '#fff' }} />, value: 50, suffix: '+', label: 'Components Built', sub: 'reusable & production-ready', accentColor: 'amber' as const },
];

export const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 14 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading index="01" eyebrow="Get To Know Me" title="About Me" subtitle="Full-Stack & Mobile Engineer who bridges clean user experiences with robust backend systems." />

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {/* Bio */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left">
              <GlassCard hoverEffect={false} accentColor="primary" sx={{ height: '100%' }}>
                <Box sx={{ p: { xs: 3, md: 4.5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
                    <Box sx={{ p: 1.5, borderRadius: '14px', background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', display: 'flex', boxShadow: '0 8px 20px rgba(99,102,241,0.35)' }}>
                      <AutoAwesomeIcon sx={{ fontSize: 22, color: '#fff' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.35rem' } }}>Software Engineer @ SRM Tech</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.83rem' }}>Full-Stack · React Native · MERN · TypeScript</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.9 }}>
                    For over <strong style={{ color: isDark ? '#A5B4FC' : '#4F46E5' }}>3 years</strong> at SRM Tech, I've designed and shipped production-grade web and mobile applications across healthcare, AI meeting intelligence, smart classrooms, and chatbot platforms.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.9 }}>
                    I've architected a <strong style={{ color: isDark ? '#6EE7B7' : '#059669' }}>5-app healthcare super-app</strong> (HealthMate), an <strong style={{ color: isDark ? '#A5B4FC' : '#4F46E5' }}>AI-powered meeting platform</strong> (SmartMeet) with real-time WebSocket transcription and IoT device integration, a no-code <strong>chatbot builder</strong>, and a backend recording-automation microservice — all in TypeScript.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                    I thrive in Agile teams building reusable component libraries, implementing complex auth systems (JWT, Firebase OTP, RBAC), and optimising performance with <strong style={{ color: isDark ? '#FCD34D' : '#D97706' }}>RTK Query</strong> and offline-resilient Redux architectures.
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', mb: 1.5 }}>
                      Core Technologies
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.9 }}>
                      {HIGHLIGHT_CHIPS.map(chip => (
                        <motion.div key={chip.label} whileHover={{ y: -2, scale: 1.04 }} transition={{ duration: 0.12 }}>
                          <Chip label={chip.label} size="small" sx={{
                            fontWeight: 700, fontSize: '0.75rem', height: 27,
                            background: isDark ? `${chip.color}18` : `${chip.color}12`,
                            border: `1px solid ${chip.color}55`,
                            color: chip.color,
                            '&:hover': { background: `${chip.color}22`, boxShadow: `0 3px 10px ${chip.color}38` },
                          }} />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </GlassCard>
            </ScrollReveal>
          </Grid>

          {/* Bento stats */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              {BENTO_ITEMS.map((item, i) => (
                <ScrollReveal key={item.label} direction="right" delay={i * 0.1}>
                  <GlassCard hoverEffect tilt={false} accentColor={item.accentColor} neonGlow spotlightColor={item.neon}>
                    <Box sx={{ p: 3.5, display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{
                        width: 56, height: 56, borderRadius: '16px', flexShrink: 0,
                        background: item.gradient,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 6px 20px ${item.neon}`,
                        position: 'relative',
                        '&::after': { content: '""', position: 'absolute', inset: 0, borderRadius: '16px', background: 'linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 60%)' },
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontFamily: '"Outfit",sans-serif', fontWeight: 900, fontSize: '2.1rem', lineHeight: 1, background: item.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 0.3 }}>
                          <Counter target={item.value} suffix={item.suffix} />
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.88rem' }}>{item.label}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.76rem' }}>{item.sub}</Typography>
                      </Box>
                    </Box>
                  </GlassCard>
                </ScrollReveal>
              ))}

              <ScrollReveal direction="right" delay={0.35}>
                <GlassCard hoverEffect accentColor="rose">
                  <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ p: 1.2, borderRadius: '12px', background: 'linear-gradient(135deg,#F43F5E,#EC4899)', display: 'flex', boxShadow: '0 5px 16px rgba(244,63,94,0.35)' }}>
                      <RocketLaunchIcon sx={{ fontSize: 20, color: '#fff' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>Available for Opportunities</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Engineering roles &amp; consulting</Typography>
                    </Box>
                    <Box sx={{ ml: 'auto', width: 9, height: 9, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981', animation: 'expPulse 2s ease infinite' }} />
                  </Box>
                </GlassCard>
              </ScrollReveal>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
