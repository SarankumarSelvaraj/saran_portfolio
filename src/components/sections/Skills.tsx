import React, { useState, useRef } from 'react'; import { Box, Container, Typography, Chip, Stack, Button, useTheme, Tooltip, Grid } from '@mui/material';
import { skillsData } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence, useInView } from 'framer-motion';

/* Animated radial progress ring — proper ref forwarding */
const RadialRing: React.FC<{ level: number; size?: number; color: string; strokeWidth?: number }> = ({
  level, size = 52, color, strokeWidth = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-40px 0px' });
  const r = (size - strokeWidth * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (level / 100) * circ;

  return (
    <Box ref={containerRef} sx={{ flexShrink: 0, width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(128,128,128,0.1)" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color}
          strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circ }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ filter: `drop-shadow(0 0 3px ${color}77)` }}
        />
      </svg>
    </Box>
  );
};

const CATEGORY_CONFIG: Record<string, {
  gradient: string; bg: string; accent: 'primary' | 'secondary' | 'rose' | 'amber' | 'cyan' | 'violet';
  neon: string; emoji: string;
}> = {
  'Languages': { gradient: 'linear-gradient(135deg,#6366F1,#818CF8)', bg: 'rgba(99,102,241,0.1)', accent: 'violet', neon: 'rgba(99,102,241,0.35)', emoji: '{ }' },
  'Frontend': { gradient: 'linear-gradient(135deg,#3B82F6,#60A5FA)', bg: 'rgba(59,130,246,0.1)', accent: 'cyan', neon: 'rgba(59,130,246,0.35)', emoji: '⚛' },
  'Mobile Development': { gradient: 'linear-gradient(135deg,#10B981,#34D399)', bg: 'rgba(16,185,129,0.1)', accent: 'secondary', neon: 'rgba(16,185,129,0.35)', emoji: '📱' },
  'Backend': { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', bg: 'rgba(245,158,11,0.1)', accent: 'amber', neon: 'rgba(245,158,11,0.35)', emoji: '⚙️' },
  'Database': { gradient: 'linear-gradient(135deg,#EF4444,#F87171)', bg: 'rgba(239,68,68,0.1)', accent: 'rose', neon: 'rgba(239,68,68,0.35)', emoji: '🗄' },
  'Cloud & Auth': { gradient: 'linear-gradient(135deg,#8B5CF6,#A78BFA)', bg: 'rgba(139,92,246,0.1)', accent: 'violet', neon: 'rgba(139,92,246,0.35)', emoji: '☁️' },
  'Tools & Methodologies': { gradient: 'linear-gradient(135deg,#EC4899,#F472B6)', bg: 'rgba(236,72,153,0.1)', accent: 'rose', neon: 'rgba(236,72,153,0.35)', emoji: '🛠' },
};

const getCfg = (cat: string) =>
  CATEGORY_CONFIG[cat] ?? CATEGORY_CONFIG['Languages'];

export const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [active, setActive] = useState('All');
  const categories = ['All', ...skillsData.map(s => s.category)];
  const filtered = active === 'All' ? skillsData : skillsData.filter(s => s.category === active);

  return (
    <Box id="skills" sx={{
      py: { xs: 8, md: 14 },
      background: isDark ? 'rgba(6,9,18,0.4)' : 'rgba(240,244,255,0.6)',
      position: 'relative',
    }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="03"
          eyebrow="My Toolkit"
          title="Skills & Expertise"
          subtitle="Technologies I use to build robust, scalable, and beautiful products."
        />

        {/* Filter pills */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.2, mb: 7 }}>
          {categories.map((cat, i) => {
            const isActive = active === cat;
            const cfg = getCfg(cat);
            return (
              <ScrollReveal key={cat} direction="none" delay={i * 0.03}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setActive(cat)}
                    sx={{
                      borderRadius: '30px', px: 2.5, py: 0.9,
                      fontSize: '0.82rem', fontWeight: 700, textTransform: 'none',
                      border: `1px solid ${isActive ? 'transparent' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`,
                      color: isActive ? '#fff' : 'text.secondary',
                      background: isActive ? cfg.gradient : 'transparent',
                      boxShadow: isActive ? `0 6px 20px ${cfg.neon}` : 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: isActive ? cfg.gradient : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'),
                        color: isActive ? '#fff' : 'text.primary',
                        borderColor: isActive ? 'transparent' : 'primary.main',
                      },
                    }}
                  >
                    {cat !== 'All' ? `${getCfg(cat).emoji} ${cat.split(' ')[0]}` : '✦ All'}
                  </Button>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </Box>

        {/* Cards grid */}
        <Grid container spacing={3} component={motion.div} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((catData, gi) => {
              const cfg = getCfg(catData.category);
              return (
                <Grid
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  key={catData.category}
                  component={motion.div}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: gi * 0.06 }}
                  layout
                >
                  <GlassCard hoverEffect accentColor={cfg.accent} spotlightColor={cfg.neon}>
                    <Box sx={{ p: 3.5 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
                        <Box sx={{
                          width: 44, height: 44, borderRadius: '12px',
                          background: cfg.gradient, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: `0 6px 20px ${cfg.neon}`,
                          fontSize: '1.2rem',
                        }}>
                          {cfg.emoji}
                        </Box>
                        <Typography variant="h6" sx={{
                          fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: '1rem',
                          background: cfg.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                          {catData.category}
                        </Typography>
                      </Box>

                      {/* Skill rows with radial rings */}
                      <Stack spacing={2.5}>
                        {catData.skills.map(skill => (
                          <Box key={skill.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <RadialRing level={skill.level} size={52} color={cfg.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? '#6366F1'} strokeWidth={4} />
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.3 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.86rem' }}>
                                  {skill.name}
                                </Typography>
                                <Typography variant="caption" sx={{
                                  fontWeight: 700, px: 1, py: 0.15, borderRadius: '6px',
                                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                  color: 'text.secondary', fontSize: '0.7rem',
                                }}>
                                  {skill.level}%
                                </Typography>
                              </Box>
                              {/* thin bar */}
                              <Box sx={{ height: 4, borderRadius: 2, background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true, margin: '-40px 0px' }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                  style={{ height: '100%', borderRadius: 2, background: cfg.gradient }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Stack>

                      {/* Chip tags */}
                      <Box sx={{ mt: 3.5, pt: 3, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
                        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                          {catData.skills.map(skill => (
                            <Tooltip key={skill.name} title={`${skill.level}% proficiency`} arrow placement="top">
                              <Chip
                                label={skill.name}
                                size="small"
                                sx={{
                                  fontSize: '0.72rem', fontWeight: 600,
                                  background: isDark ? cfg.bg : `${cfg.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? '#6366F1'}10`,
                                  border: `1px solid ${cfg.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? '#6366F1'}44`,
                                  color: isDark ? cfg.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] : cfg.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0],
                                  height: 24, cursor: 'default',
                                  transition: 'all 0.2s',
                                  '&:hover': {
                                    background: cfg.gradient,
                                    color: '#fff', borderColor: 'transparent',
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 4px 12px ${cfg.neon}`,
                                  },
                                }}
                              />
                            </Tooltip>
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  </GlassCard>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};
