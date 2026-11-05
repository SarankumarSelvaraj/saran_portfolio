import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, CardContent, CardActions,
  Button, Chip, Stack, useTheme, Tooltip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { projects } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORY_META: Record<string, { gradient: string; mesh: string; label: string; accent: 'primary' | 'secondary' | 'rose' | 'amber' | 'cyan' | 'violet'; neon: string; live?: boolean }> = {
  'Mobile Development': { gradient: 'linear-gradient(135deg,#10B981,#3B82F6)', mesh: 'radial-gradient(ellipse at 20% 50%,rgba(16,185,129,.4) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(59,130,246,.4) 0%,transparent 60%)', label: 'Mobile Super App', accent: 'secondary', neon: 'rgba(16,185,129,.35)', live: true },
  'Web & Mobile Application': { gradient: 'linear-gradient(135deg,#8B5CF6,#EC4899)', mesh: 'radial-gradient(ellipse at 20% 50%,rgba(139,92,246,.4) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(236,72,153,.4) 0%,transparent 60%)', label: 'AI Intelligence', accent: 'violet', neon: 'rgba(139,92,246,.35)', live: true },
  'Mobile & IoT Systems': { gradient: 'linear-gradient(135deg,#4F46E5,#06B6D4)', mesh: 'radial-gradient(ellipse at 20% 50%,rgba(79,70,229,.4) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(6,182,212,.4) 0%,transparent 60%)', label: 'IoT & Mobile', accent: 'cyan', neon: 'rgba(6,182,212,.35)' },
  'Web Application': { gradient: 'linear-gradient(135deg,#F59E0B,#EF4444)', mesh: 'radial-gradient(ellipse at 20% 50%,rgba(245,158,11,.4) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(239,68,68,.4) 0%,transparent 60%)', label: 'Web Platform', accent: 'amber', neon: 'rgba(245,158,11,.35)' },
  'Backend Microservice': { gradient: 'linear-gradient(135deg,#0EA5E9,#6366F1)', mesh: 'radial-gradient(ellipse at 20% 50%,rgba(14,165,233,.4) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(99,102,241,.4) 0%,transparent 60%)', label: 'Microservice', accent: 'primary', neon: 'rgba(14,165,233,.35)' },
};
const getMeta = (cat: string) => CATEGORY_META[cat] ?? CATEGORY_META['Web Application'];

const TECH_COLOR: Record<string, string> = {
  'react native': '#61DAFB', 'react.js': '#61DAFB', 'typescript': '#3178C6',
  'redux toolkit': '#764ABC', 'rtk query': '#764ABC', 'firebase': '#FFCA28',
  'aws s3': '#FF9900', 'mongodb': '#47A248', 'node.js': '#339933',
  'express.js': '#339933', 'websockets': '#6366F1', 'redis': '#DC382D',
};
const getTechColor = (t: string) => {
  const low = t.toLowerCase();
  for (const [k, v] of Object.entries(TECH_COLOR)) if (low.includes(k)) return v;
  return '#6B7280';
};

const ALL_CATS = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <Box id="projects" sx={{
      py: { xs: 8, md: 14 },
      background: isDark ? 'rgba(6,9,18,0.4)' : 'rgba(240,244,255,0.6)',
      position: 'relative',
    }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="05"
          eyebrow="Recent Work"
          title="Featured Projects"
          subtitle="Production-grade systems spanning healthcare, AI, IoT, chatbots, and backend microservices."
        />

        {/* Filter tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <Box sx={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 7,
            p: 0.75, borderRadius: '18px',
            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.025)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
            maxWidth: 'fit-content', mx: 'auto',
          }}>
            {ALL_CATS.map(cat => {
              const isActive = filter === cat;
              const meta = getMeta(cat);
              return (
                <motion.div key={cat} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    onClick={() => setFilter(cat)}
                    size="small"
                    sx={{
                      borderRadius: '12px', px: 2.2, py: 0.8, fontSize: '0.82rem',
                      fontWeight: 700, textTransform: 'none',
                      color: isActive ? '#fff' : 'text.secondary',
                      background: isActive ? meta.gradient : 'transparent',
                      boxShadow: isActive ? `0 4px 16px ${meta.neon}` : 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: isActive ? meta.gradient : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'),
                        color: isActive ? '#fff' : 'text.primary',
                      },
                    }}
                  >
                    {cat === 'All' ? '✦ All' : cat.split(' ')[0]}
                  </Button>
                </motion.div>
              );
            })}
          </Box>
        </ScrollReveal>

        {/* Grid */}
        <Grid container spacing={4} component={motion.div} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const meta = getMeta(project.category);
              const isExpanded = expandedId === project.id;
              return (
                <Grid
                  size={{ xs: 12, md: 4 }}
                  key={project.id}
                  component={motion.div}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  layout
                >
                  <GlassCard hoverEffect accentColor={meta.accent} spotlightColor={meta.neon} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                    {/* ── Rich gradient header ── */}
                    <Box sx={{
                      height: 180, background: meta.gradient,
                      position: 'relative', overflow: 'hidden',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      px: 3, textAlign: 'center',
                    }}>
                      {/* Mesh overlay */}
                      <Box sx={{ position: 'absolute', inset: 0, background: meta.mesh, mixBlendMode: 'overlay' }} />
                      {/* Grid lines */}
                      <Box sx={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                      }} />
                      {/* Glowing orb */}
                      <Box sx={{
                        position: 'absolute', width: 160, height: 160,
                        borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
                        filter: 'blur(32px)', top: '-30%', right: '-10%',
                      }} />
                      <Box sx={{
                        position: 'absolute', width: 100, height: 100,
                        borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                        filter: 'blur(20px)', bottom: '-20%', left: '10%',
                      }} />

                      {/* Live indicator */}
                      {meta.live && (
                        <Box sx={{
                          position: 'absolute', top: 12, left: 12,
                          display: 'flex', alignItems: 'center', gap: 0.6,
                          px: 1.4, py: 0.4, borderRadius: '20px',
                          background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}>
                          <FiberManualRecordIcon sx={{ fontSize: '0.55rem', color: '#10B981', animation: 'livePulse 2s ease infinite', '@keyframes livePulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
                          <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>LIVE</Typography>
                        </Box>
                      )}

                      {/* Category badge */}
                      <Box sx={{
                        position: 'absolute', top: 12, right: 12,
                        px: 1.4, py: 0.4, borderRadius: '20px',
                        background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}>
                        <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
                          {meta.label}
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography variant="h5" sx={{
                        fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                        letterSpacing: '-0.025em', color: '#fff', position: 'relative', zIndex: 1,
                        textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                        fontSize: { xs: '1.25rem', md: '1.4rem' },
                      }}>
                        {project.title}
                      </Typography>

                      {/* Index number */}
                      <Typography sx={{
                        position: 'absolute', bottom: 10, right: 14,
                        fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                        fontSize: '3.5rem', lineHeight: 1, color: 'rgba(255,255,255,0.08)',
                        letterSpacing: '-0.05em', userSelect: 'none',
                      }}>
                        0{i + 1}
                      </Typography>
                    </Box>

                    {/* Body */}
                    <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, fontSize: '0.87rem' }}>
                        {project.description}
                      </Typography>

                      {/* Features */}
                      <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', mb: 1.2, fontSize: '0.68rem' }}>
                        Key Features
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.9, mb: 3 }}>
                        {project.features.slice(0, isExpanded ? undefined : 4).map((f, fi) => {
                          const [title, ...rest] = f.split(':');
                          return (
                            <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                              <CheckCircleIcon sx={{ fontSize: '0.88rem', mt: 0.3, flexShrink: 0, color: meta.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? 'secondary.main' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.82rem' }}>
                                <strong>{title}:</strong>{rest.join(':')}
                              </Typography>
                            </Box>
                          );
                        })}
                        {project.features.length > 4 && (
                          <Button size="small" onClick={() => setExpandedId(isExpanded ? null : project.id)}
                            sx={{ alignSelf: 'flex-start', px: 0, fontSize: '0.76rem', fontWeight: 700, color: 'primary.main', '&:hover': { background: 'transparent', textDecoration: 'underline' } }}>
                            {isExpanded ? '↑ Less' : `+ ${project.features.length - 4} more`}
                          </Button>
                        )}
                      </Box>

                      {/* Tech stack */}
                      <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', mb: 1.2, fontSize: '0.68rem' }}>
                        Stack
                      </Typography>
                      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.7, mt: 'auto' }}>
                        {project.techStack.map(tech => (
                          <Tooltip key={tech} title={tech} arrow placement="top">
                            <Chip label={tech} size="small" sx={{
                              height: 22, fontSize: '0.7rem', fontWeight: 700,
                              background: isDark ? `${getTechColor(tech)}15` : `${getTechColor(tech)}10`,
                              border: `1px solid ${getTechColor(tech)}55`,
                              color: getTechColor(tech),
                              transition: 'all 0.2s',
                              '&:hover': { background: `${getTechColor(tech)}25`, boxShadow: `0 4px 12px ${getTechColor(tech)}44`, transform: 'translateY(-1px)' },
                            }} />
                          </Tooltip>
                        ))}
                      </Stack>
                    </CardContent>

                    {/* Actions */}
                    <CardActions sx={{ p: 3.5, pt: 0, gap: 1.5 }}>
                      <Button variant="contained" size="small" endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />} fullWidth
                        sx={{
                          py: 1.2, fontWeight: 700,
                          background: meta.gradient, backgroundSize: '200%',
                          boxShadow: `0 6px 20px ${meta.neon}`,
                          border: '1px solid rgba(255,255,255,0.12)',
                          '&:hover': { background: meta.gradient, filter: 'brightness(1.1)', boxShadow: `0 10px 28px ${meta.neon}`, transform: 'translateY(-3px) scale(1.02)' },
                        }}>
                        View Details
                      </Button>
                      <Button variant="outlined" size="small" startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                        sx={{
                          py: 1.2, minWidth: 52,
                          borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                          color: 'text.secondary',
                          '&:hover': { borderColor: 'text.primary', color: 'text.primary', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' },
                        }}
                        aria-label="GitHub" />
                    </CardActions>
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
