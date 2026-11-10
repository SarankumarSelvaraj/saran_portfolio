import React, { useRef, useEffect, useState, memo } from 'react';
import {
  Box, Container, Typography, useTheme, Grid,
} from '@mui/material';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion, useInView } from 'framer-motion';

/* ── Animated counter ── */
const Counter: React.FC<{ target: number; suffix?: string }> = memo(({ target, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 36;
    const interval = 1200 / steps;
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

const STATS = [
  {
    value: 3, suffix: '+',
    label: 'Years Experience',
    sub: 'at SRM Tech',
    color: '#8B5CF6',
    dimColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
  },
  {
    value: 7, suffix: '+',
    label: 'Products Shipped',
    sub: 'enterprise scale',
    color: '#38BDF8',
    dimColor: 'rgba(56,189,248,0.1)',
    borderColor: 'rgba(56,189,248,0.2)',
  },
  {
    value: 50, suffix: '+',
    label: 'Shared Components',
    sub: 'reusable & tested',
    color: '#34D399',
    dimColor: 'rgba(52,211,153,0.1)',
    borderColor: 'rgba(52,211,153,0.2)',
  },
  {
    value: 5, suffix: '',
    label: 'App Ecosystem',
    sub: 'HealthMate super-app',
    color: '#FBBF24',
    dimColor: 'rgba(251,191,36,0.1)',
    borderColor: 'rgba(251,191,36,0.2)',
  },
];

const PHILOSOPHY_POINTS = [
  {
    title: 'Scalable by Design',
    body: 'Every architecture decision is made with scale in mind — reusable component libraries, shared auth utilities, and centralised upload pipelines that work across 6+ products without duplication.',
    icon: '◎',
    color: '#8B5CF6',
  },
  {
    title: 'Performance First',
    body: 'RTK Query lazy hooks, useMemo/useCallback optimisations, shimmer loaders, and offline-resilient Redux architectures ensure smooth 60fps on mid-range Android devices.',
    icon: '◈',
    color: '#38BDF8',
  },
  {
    title: 'Full-Stack Ownership',
    body: 'From React Native UI to Node.js microservices, MongoDB schemas and AWS S3 pipelines — I take end-to-end ownership of features, not just the front-end slice.',
    icon: '◇',
    color: '#34D399',
  },
  {
    title: 'Real-World Delivery',
    body: 'Production matters most. I focus on clean, maintainable code with proper error handling, JWT auth flows, offline resilience, and comprehensive FCM notification systems.',
    icon: '◆',
    color: '#FBBF24',
  },
];

const CORE_SKILLS = [
  'React.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB',
  'Redux Toolkit', 'RTK Query', 'WebSockets', 'AWS S3', 'Firebase Auth',
  'JWT / RBAC', 'Express.js',
];

export const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box id="about" sx={{ py: { xs: 10, md: 16 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="Engineer. Builder. Problem Solver."
          subtitle="I architect full-stack products that balance engineering quality with real-world delivery."
        />

        <Grid container spacing={5} sx={{ alignItems: 'flex-start' }}>
          {/* ── Left — bio + philosophy ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left">
              {/* Intro paragraphs */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.85,
                    mb: 2.5,
                    fontSize: { xs: '0.95rem', md: '1.025rem' },
                  }}
                >
                  For over{' '}
                  <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>3 years</Box>{' '}
                  at SRM Tech, I've designed and shipped production-grade web and mobile applications
                  across healthcare, AI meeting intelligence, smart classrooms, IoT devices, and
                  chatbot platforms — all in TypeScript.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.85,
                    mb: 2.5,
                    fontSize: { xs: '0.95rem', md: '1.025rem' },
                  }}
                >
                  I architected a{' '}
                  <Box component="span" sx={{ color: isDark ? '#A78BFA' : '#7C3AED', fontWeight: 600 }}>
                    5-app healthcare super-app
                  </Box>{' '}
                  (HealthMate), an{' '}
                  <Box component="span" sx={{ color: isDark ? '#38BDF8' : '#0284C7', fontWeight: 600 }}>
                    AI-powered meeting platform
                  </Box>{' '}
                  (SmartMeet) with real-time WebSocket transcription and IoT device integration,
                  a no-code{' '}
                  <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    chatbot builder
                  </Box>{' '}
                  on a React Flow canvas, and a backend recording-automation microservice.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.85,
                    fontSize: { xs: '0.95rem', md: '1.025rem' },
                  }}
                >
                  I thrive building reusable component libraries, implementing complex auth systems
                  (JWT, Firebase OTP, RBAC), and optimising performance with RTK Query and
                  offline-resilient Redux architectures in Agile team environments.
                </Typography>
              </Box>

              {/* Core skills pills */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'text.disabled',
                    mb: 2,
                  }}
                >
                  Core Technologies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {CORE_SKILLS.map(skill => (
                    <Box
                      key={skill}
                      sx={{
                        px: 1.5,
                        py: 0.6,
                        borderRadius: '7px',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                        color: 'text.secondary',
                        transition: 'all 0.15s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.07)',
                          borderColor: isDark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)',
                          color: isDark ? '#A78BFA' : '#7C3AED',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Engineering philosophy */}
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'text.disabled',
                    mb: 2.5,
                  }}
                >
                  Engineering Philosophy
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {PHILOSOPHY_POINTS.map((point, i) => (
                    <ScrollReveal key={i} direction="left" delay={i * 0.08}>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2.5,
                          p: 2.5,
                          borderRadius: '12px',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                          background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                            borderColor: isDark ? `${point.color}30` : `${point.color}25`,
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        {/* Icon */}
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '9px',
                            flexShrink: 0,
                            background: isDark ? `${point.color}15` : `${point.color}10`,
                            border: `1px solid ${point.color}30`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: point.color,
                            fontSize: '1rem',
                            fontWeight: 700,
                          }}
                        >
                          {point.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              color: 'text.primary',
                              mb: 0.5,
                              lineHeight: 1.3,
                            }}
                          >
                            {point.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '0.84rem',
                              color: 'text.secondary',
                              lineHeight: 1.7,
                            }}
                          >
                            {point.body}
                          </Typography>
                        </Box>
                      </Box>
                    </ScrollReveal>
                  ))}
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>

          {/* ── Right — stats ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right">
              {/* Stat cards */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: '14px',
                        border: `1px solid ${stat.borderColor}`,
                        background: isDark
                          ? stat.dimColor
                          : stat.dimColor.replace('0.1', '0.07'),
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: `0 8px 24px ${stat.dimColor.replace('0.1', '0.2')}`,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 800,
                          fontSize: '2.2rem',
                          lineHeight: 1,
                          color: stat.color,
                          mb: 0.5,
                        }}
                      >
                        <Counter target={stat.value} suffix={stat.suffix} />
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          color: 'text.primary',
                          lineHeight: 1.3,
                          mb: 0.25,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.72rem', color: 'text.secondary' }}
                      >
                        {stat.sub}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Current role card */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: '14px',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  background: isDark ? 'rgba(17,17,24,0.6)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(12px)',
                  mb: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{
                    width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                    background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(139,92,246,0.35)',
                  }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff', fontFamily: '"Outfit", sans-serif' }}>
                      S
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'text.primary', lineHeight: 1.2 }}>
                      Software Engineer
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <Typography sx={{ fontSize: '0.78rem', color: isDark ? '#A78BFA' : '#7C3AED', fontWeight: 500 }}>
                        SRM Tech
                      </Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                        · Chennai, India
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Box sx={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: '#34D399',
                      boxShadow: '0 0 6px #34D399',
                      animation: 'statusPulse 2.5s ease infinite',
                    }} />
                    <Typography sx={{ fontSize: '0.7rem', color: isDark ? '#34D399' : '#059669', fontWeight: 500 }}>
                      Current
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', lineHeight: 1.65 }}>
                  Full-stack engineer delivering web, mobile and backend products across SmartMeet AI platform, HealthMate healthcare ecosystem, TDIP smart classrooms, and SRM Global chatbot builder.
                </Typography>
                <Box sx={{
                  mt: 2, pt: 2,
                  borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                    June 2023 – Present
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.6 }}>
                    {['React', 'RN', 'Node', 'TS'].map(t => (
                      <Box key={t} sx={{
                        px: 0.9, py: 0.3, borderRadius: '5px',
                        fontSize: '0.65rem', fontWeight: 600,
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                        color: 'text.secondary',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
                      }}>
                        {t}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Location card */}
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: '14px',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Typography sx={{ fontSize: '1.4rem' }}>📍</Typography>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: 'text.primary' }}>
                    Chennai, Tamil Nadu
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                    India · UTC+5:30 · Open to remote
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
