import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box, Button, Container, Typography, Stack, useTheme, useMediaQuery,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profileInfo } from '../../configs/portfolioData';
import { motion } from 'framer-motion';

/* ── Typewriter ── */
function useTypewriter(words: string[], typingSpeed = 70, deletingSpeed = 40, pauseMs = 2200) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
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

const TECH_STACK = [
  { label: 'React', color: '#61DAFB' },
  { label: 'TypeScript', color: '#3178C6' },
  { label: 'Node.js', color: '#68A063' },
  { label: 'React Native', color: '#61DAFB' },
  { label: 'MongoDB', color: '#47A248' },
  { label: 'AWS S3', color: '#FF9900' },
  { label: 'Redux', color: '#764ABC' },
  { label: 'Firebase', color: '#FFCA28' },
];

const STATS = [
  { value: '3+', label: 'Years at SRM Tech' },
  { value: '7+', label: 'Products Shipped' },
  { value: '50+', label: 'Shared Components' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as any },
});

export const Hero: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const displayed = useTypewriter(ROLES);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 7, md: 5, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* ── Left column ── */}
          <Box>
            {/* Availability badge */}
            <motion.div {...fadeUp(0.05)}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.75,
                  py: 0.75,
                  mb: 4,
                  borderRadius: '30px',
                  background: isDark
                    ? 'rgba(52,211,153,0.07)'
                    : 'rgba(5,150,105,0.06)',
                  border: `1px solid ${isDark ? 'rgba(52,211,153,0.2)' : 'rgba(5,150,105,0.18)'}`,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 6px #34D399',
                    animation: 'statusPulse 2.5s ease infinite',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isDark ? '#34D399' : '#059669',
                  }}
                >
                  Open to Opportunities
                </Typography>
              </Box>
            </motion.div>

            {/* Main heading */}
            <motion.div {...fadeUp(0.12)}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem', lg: '4.6rem' },
                  lineHeight: 1.0,
                  mb: 1.5,
                  color: 'text.primary',
                }}
              >
                Building Scalable
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem', lg: '4.6rem' },
                  lineHeight: 1.0,
                  mb: 2,
                  background: isDark
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 40%, #38BDF8 100%)'
                    : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 40%, #0284C7 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 5s ease infinite',
                }}
              >
                Digital Experiences.
              </Typography>
            </motion.div>

            {/* Name + Typewriter */}
            <motion.div {...fadeUp(0.2)}>
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 500,
                    color: 'text.secondary',
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {profileInfo.name}
                  </Box>
                  {' '}—{' '}
                  <Box
                    component="span"
                    sx={{
                      color: isDark ? '#A78BFA' : '#7C3AED',
                      fontWeight: 600,
                    }}
                  >
                    {displayed}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: '2px',
                      height: '1.1em',
                      background: isDark ? '#8B5CF6' : '#7C3AED',
                      ml: '2px',
                      verticalAlign: 'text-bottom',
                      animation: 'cursorBlink 0.85s step-end infinite',
                    }}
                  />
                </Typography>
              </Box>
            </motion.div>

            {/* Supporting text */}
            <motion.div {...fadeUp(0.26)}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4.5,
                  maxWidth: 500,
                  lineHeight: 1.75,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                Software Engineer focused on building reliable, scalable, and
                user-centric applications. 3+ years shipping production-grade
                web &amp; mobile products at{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  SRM Tech
                </Box>
                , specialising in{' '}
                <Box component="span" sx={{ color: isDark ? '#A78BFA' : '#7C3AED', fontWeight: 500 }}>
                  MERN Stack
                </Box>{' '}
                and{' '}
                <Box component="span" sx={{ color: isDark ? '#38BDF8' : '#0284C7', fontWeight: 500 }}>
                  React Native
                </Box>.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.32)}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ mb: 4.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollTo('projects')}
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    background: isDark
                      ? 'linear-gradient(135deg, #7C3AED, #8B5CF6)'
                      : 'linear-gradient(135deg, #6D28D9, #7C3AED)',
                    boxShadow: isDark
                      ? '0 4px 20px rgba(139,92,246,0.4)'
                      : '0 4px 20px rgba(124,58,237,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    '&:hover': {
                      background: isDark
                        ? 'linear-gradient(135deg, #6D28D9, #7C3AED)'
                        : 'linear-gradient(135deg, #5B21B6, #6D28D9)',
                      boxShadow: isDark
                        ? '0 8px 28px rgba(139,92,246,0.5)'
                        : '0 8px 28px rgba(124,58,237,0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href={profileInfo.resumeUrl}
                  download
                  startIcon={<FileDownloadOutlinedIcon />}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                    color: 'text.primary',
                    borderWidth: '1px',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                    '&:hover': {
                      borderColor: isDark ? 'rgba(139,92,246,0.5)' : 'rgba(124,58,237,0.5)',
                      color: isDark ? '#A78BFA' : '#7C3AED',
                      background: isDark ? 'rgba(139,92,246,0.07)' : 'rgba(124,58,237,0.05)',
                      borderWidth: '1px',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.38)}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'text.disabled',
                  }}
                >
                  Connect
                </Typography>
                <Box sx={{ width: 24, height: 1, background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
                {profileInfo.socialLinks
                  .filter(s => s.platform === 'GitHub' || s.platform === 'LinkedIn')
                  .map(social => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.93 }}
                      style={{ display: 'flex', textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '9px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)'}`,
                          color: 'text.secondary',
                          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            background: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)',
                          },
                        }}
                      >
                        {social.platform === 'GitHub'
                          ? <GitHubIcon sx={{ fontSize: '1rem' }} />
                          : <LinkedInIcon sx={{ fontSize: '1rem' }} />
                        }
                      </Box>
                    </motion.a>
                  ))}
              </Stack>
            </motion.div>
          </Box>

          {/* ── Right column ── */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                /* Give the column its own stacking context so the absolute
                   floating chips are clipped to this column, never the viewport */
                position: 'relative',
                /* Extra horizontal padding absorbs the chip overflow without
                   the chips ever touching the viewport edge */
                px: 2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ width: '100%', maxWidth: 400, position: 'relative' }}
              >
                {/* Main card — overflow visible so chips can peek out */}
                <Box
                  sx={{
                    borderRadius: '20px',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    background: isDark ? 'rgba(17,17,24,0.85)' : 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(20px)',
                    p: { md: 3, lg: 3.5 },
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: isDark
                      ? '0 20px 56px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                      : '0 20px 56px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)',
                  }}
                >
                  {/* Gradient top accent */}
                  <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                    background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)',
                    borderRadius: '20px 20px 0 0',
                  }} />

                  {/* Identity row */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '15px',
                        background: isDark
                          ? 'linear-gradient(135deg, #1C1C2E, #2D2D44)'
                          : 'linear-gradient(135deg, #EDE9FE, #DBEAFE)',
                        border: `1.5px solid ${isDark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.2)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: isDark
                          ? '0 0 0 5px rgba(139,92,246,0.06), 0 6px 20px rgba(139,92,246,0.2)'
                          : '0 0 0 5px rgba(124,58,237,0.04), 0 6px 20px rgba(124,58,237,0.1)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 800,
                          fontSize: '1.3rem',
                          letterSpacing: '-0.04em',
                          lineHeight: 1,
                          background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        SS
                      </Typography>
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 700,
                          fontSize: '1rem',
                          letterSpacing: '-0.02em',
                          color: 'text.primary',
                          lineHeight: 1.2,
                          mb: 0.2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {profileInfo.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.74rem',
                          fontWeight: 500,
                          color: isDark ? '#A78BFA' : '#7C3AED',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Software Engineer @ SRM Tech
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.4 }}>
                        <Box sx={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: '#34D399',
                          boxShadow: '0 0 5px #34D399',
                          animation: 'statusPulse 2.5s ease infinite',
                          flexShrink: 0,
                        }} />
                        <Typography sx={{ fontSize: '0.68rem', color: isDark ? '#34D399' : '#059669', fontWeight: 500 }}>
                          Available
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Stats row */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 1,
                      mb: 3,
                      p: 2,
                      borderRadius: '12px',
                      background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.025)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    {STATS.map((stat, i) => (
                      <Box key={i} sx={{ textAlign: 'center' }}>
                        <Typography
                          sx={{
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 800,
                            fontSize: '1.25rem',
                            lineHeight: 1,
                            mb: 0.3,
                            background: i === 0
                              ? 'linear-gradient(135deg, #8B5CF6, #A78BFA)'
                              : i === 1
                                ? 'linear-gradient(135deg, #38BDF8, #7DD3FC)'
                                : 'linear-gradient(135deg, #34D399, #6EE7B7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.6rem',
                            fontWeight: 500,
                            color: 'text.secondary',
                            lineHeight: 1.3,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Tech stack */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.disabled',
                        mb: 1.25,
                      }}
                    >
                      Tech Stack
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.65 }}>
                      {TECH_STACK.map(tech => (
                        <Box
                          key={tech.label}
                          sx={{
                            px: 1.1,
                            py: 0.4,
                            borderRadius: '6px',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            background: isDark ? `${tech.color}12` : `${tech.color}0D`,
                            border: `1px solid ${tech.color}30`,
                            color: tech.color,
                            transition: 'all 0.15s ease',
                            '&:hover': {
                              background: `${tech.color}20`,
                              transform: 'translateY(-1px)',
                            },
                          }}
                        >
                          {tech.label}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* ── Floating chips — INSIDE the card's position:relative wrapper ── */}
                  {/* Top-right chip */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -14,
                      right: -14,
                      zIndex: 3,
                      animation: 'float0 3.5s ease-in-out infinite',
                      px: 1.5, py: 1,
                      borderRadius: '10px',
                      background: isDark ? 'rgba(17,17,24,0.97)' : 'rgba(255,255,255,0.98)',
                      border: `1px solid ${isDark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.2)'}`,
                      backdropFilter: 'blur(12px)',
                      boxShadow: isDark
                        ? '0 6px 20px rgba(0,0,0,0.45)'
                        : '0 6px 20px rgba(0,0,0,0.08)',
                      display: 'flex', alignItems: 'center', gap: 0.75,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>⚡</Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', color: 'text.primary', lineHeight: 1 }}>
                        Real-time Apps
                      </Typography>
                      <Typography sx={{ fontSize: '0.58rem', color: 'text.secondary', lineHeight: 1.3 }}>
                        WebSocket · FCM
                      </Typography>
                    </Box>
                  </Box>

                  {/* Bottom-left chip */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -14,
                      left: -14,
                      zIndex: 3,
                      animation: 'float1 4s ease-in-out 0.6s infinite',
                      px: 1.5, py: 1,
                      borderRadius: '10px',
                      background: isDark ? 'rgba(17,17,24,0.97)' : 'rgba(255,255,255,0.98)',
                      border: `1px solid ${isDark ? 'rgba(56,189,248,0.3)' : 'rgba(2,132,199,0.2)'}`,
                      backdropFilter: 'blur(12px)',
                      boxShadow: isDark
                        ? '0 6px 20px rgba(0,0,0,0.45)'
                        : '0 6px 20px rgba(0,0,0,0.07)',
                      display: 'flex', alignItems: 'center', gap: 0.75,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>🏗</Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', color: 'text.primary', lineHeight: 1 }}>
                        5-App Ecosystem
                      </Typography>
                      <Typography sx={{ fontSize: '0.58rem', color: 'text.secondary', lineHeight: 1.3 }}>
                        HealthMate Super-App
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          )}
        </Box>

        {/* Scroll indicator */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { md: 8, lg: 10 },
              animation: 'scrollBob 2.5s ease-in-out infinite',
            }}
          >
            <Box
              onClick={() => scrollTo('about')}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
                cursor: 'pointer',
                opacity: 0.3,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.7 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                }}
              >
                Scroll
              </Typography>
              {/* Animated scroll line */}
              <Box sx={{
                width: 1, height: 36,
                background: isDark
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.3), transparent)'
                  : 'linear-gradient(180deg, rgba(0,0,0,0.2), transparent)',
              }} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};
