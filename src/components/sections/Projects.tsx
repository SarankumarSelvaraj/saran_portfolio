import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Button, useTheme,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import { projects } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Category config ── */
interface CatMeta {
  label: string;
  color: string;
  dimColor: string;
  borderColor: string;
  headerBg: string;
}

const CAT_META: Record<string, CatMeta> = {
  'Mobile Development': {
    label: 'Mobile',
    color: '#34D399',
    dimColor: 'rgba(52,211,153,0.1)',
    borderColor: 'rgba(52,211,153,0.2)',
    headerBg: 'linear-gradient(135deg, rgba(52,211,153,0.15) 0%, rgba(56,189,248,0.1) 100%)',
  },
  'Web & Mobile Application': {
    label: 'Web + Mobile',
    color: '#8B5CF6',
    dimColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
    headerBg: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.08) 100%)',
  },
  'Mobile & IoT Systems': {
    label: 'IoT + Mobile',
    color: '#38BDF8',
    dimColor: 'rgba(56,189,248,0.1)',
    borderColor: 'rgba(56,189,248,0.2)',
    headerBg: 'linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(99,102,241,0.08) 100%)',
  },
  'Web Application': {
    label: 'Web App',
    color: '#FBBF24',
    dimColor: 'rgba(251,191,36,0.1)',
    borderColor: 'rgba(251,191,36,0.2)',
    headerBg: 'linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(239,68,68,0.08) 100%)',
  },
};

const getMeta = (cat: string): CatMeta =>
  CAT_META[cat] ?? {
    label: cat,
    color: '#8B5CF6',
    dimColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
    headerBg: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(56,189,248,0.08) 100%)',
  };

/* Tech color map */
const TECH_COLOR: Record<string, string> = {
  'react native': '#61DAFB', 'react.js': '#61DAFB',
  'typescript': '#3178C6', 'redux toolkit': '#764ABC',
  'rtk query': '#764ABC', 'firebase': '#FFCA28',
  'aws s3': '#FF9900', 'mongodb': '#47A248',
  'node.js': '#68A063', 'express.js': '#68A063',
  'websockets': '#8B5CF6', 'redis': '#DC382D',
  'recharts': '#38BDF8',
};
const getTechColor = (t: string) => {
  const low = t.toLowerCase();
  for (const [k, v] of Object.entries(TECH_COLOR)) if (low.includes(k)) return v;
  return '#71717A';
};

const ALL_CATS = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

/* Project numbers as words for visual flair */
const INDEX_LABELS = ['01', '02', '03', '04', '05'];

export const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 16 },
        background: isDark ? 'rgba(10,10,15,0.4)' : 'rgba(249,249,252,0.8)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          index="04"
          eyebrow="Featured Projects"
          title="What I've Built"
          subtitle="Production-grade systems spanning healthcare, AI meeting intelligence, IoT, chatbots, and automation."
        />

        {/* ── Filter tabs ── */}
        <ScrollReveal direction="up" delay={0.05}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 0.75, mb: 7 }}>
            {ALL_CATS.map(cat => {
              const meta = getMeta(cat);
              const isActive = filter === cat;
              return (
                <Box
                  key={cat}
                  onClick={() => setFilter(cat)}
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  sx={{
                    px: 2, py: 0.75, borderRadius: '8px',
                    fontSize: '0.825rem', fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    border: isActive
                      ? `1px solid ${meta.borderColor}`
                      : `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    background: isActive
                      ? isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.07')
                      : 'transparent',
                    color: isActive ? meta.color : 'text.secondary',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      background: isDark
                        ? isActive ? meta.dimColor : 'rgba(255,255,255,0.04)'
                        : isActive ? meta.dimColor.replace('0.1', '0.07') : 'rgba(0,0,0,0.03)',
                      color: isActive ? meta.color : 'text.primary',
                    },
                  }}
                >
                  {cat === 'All' ? 'All Projects' : meta.label}
                </Box>
              );
            })}
          </Box>
        </ScrollReveal>

        {/* ── Project grid ── */}
        <Grid container spacing={3} component={motion.div} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const meta = getMeta(project.category);
              const isExpanded = expandedId === project.id;
              const visibleFeatures = isExpanded ? project.features : project.features.slice(0, 4);

              return (
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  key={project.id}
                  component={motion.div}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  layout
                >
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      background: isDark ? '#16161F' : '#FFFFFF',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: meta.borderColor,
                        transform: 'translateY(-4px)',
                        boxShadow: isDark
                          ? `0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px ${meta.borderColor}`
                          : `0 16px 40px rgba(0,0,0,0.08), 0 0 0 1px ${meta.borderColor}`,
                      },
                    }}
                  >
                    {/* ── Card header ── */}
                    <Box
                      sx={{
                        p: 3,
                        background: isDark ? meta.headerBg : meta.headerBg.replace(/0\.1[5]?/g, '0.08').replace(/0\.0[5-9]/g, '0.04'),
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Large index number — decorative */}
                      <Typography
                        sx={{
                          position: 'absolute',
                          right: 12,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 900,
                          fontSize: '4rem',
                          lineHeight: 1,
                          color: meta.color,
                          opacity: 0.08,
                          userSelect: 'none',
                          letterSpacing: '-0.05em',
                        }}
                      >
                        {INDEX_LABELS[i] ?? '00'}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
                        <Box>
                          {/* Category badge */}
                          <Box
                            sx={{
                              display: 'inline-flex', alignItems: 'center',
                              px: 1.25, py: 0.35, borderRadius: '5px', mb: 1.5,
                              background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.08'),
                              border: `1px solid ${meta.borderColor}`,
                            }}
                          >
                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: meta.color, letterSpacing: '0.08em' }}>
                              {meta.label.toUpperCase()}
                            </Typography>
                          </Box>

                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: '"Outfit", sans-serif',
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: 'text.primary',
                              lineHeight: 1.25,
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {project.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* ── Card body ── */}
                    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.75,
                          mb: 2.5,
                          fontSize: '0.845rem',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Key features */}
                      <Box sx={{ mb: 2.5, flexGrow: 1 }}>
                        <Typography sx={{
                          fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em',
                          textTransform: 'uppercase', color: 'text.disabled', mb: 1.5,
                        }}>
                          Key Features
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                          {visibleFeatures.map((f, fi) => {
                            const colonIdx = f.indexOf(':');
                            const title = colonIdx !== -1 ? f.slice(0, colonIdx) : f;
                            const detail = colonIdx !== -1 ? f.slice(colonIdx + 1).trim() : '';
                            return (
                              <Box key={fi} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                                <Box sx={{
                                  width: 16, height: 16, borderRadius: '5px', flexShrink: 0, mt: 0.1,
                                  background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.08'),
                                  border: `1px solid ${meta.borderColor}`,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                  <CheckIcon sx={{ fontSize: '0.6rem', color: meta.color }} />
                                </Box>
                                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', lineHeight: 1.6 }}>
                                  <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                    {title}
                                  </Box>
                                  {detail ? `: ${detail}` : ''}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Box>

                        {project.features.length > 4 && (
                          <Button
                            size="small"
                            onClick={() => setExpandedId(isExpanded ? null : project.id)}
                            sx={{
                              mt: 1, px: 0, fontSize: '0.76rem', fontWeight: 600,
                              color: meta.color,
                              '&:hover': { background: 'transparent', textDecoration: 'underline' },
                            }}
                          >
                            {isExpanded
                              ? '↑ Show less'
                              : `+ ${project.features.length - 4} more features`
                            }
                          </Button>
                        )}
                      </Box>

                      {/* Tech stack */}
                      <Box sx={{ mb: 2.5 }}>
                        <Typography sx={{
                          fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em',
                          textTransform: 'uppercase', color: 'text.disabled', mb: 1.25,
                        }}>
                          Stack
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                          {project.techStack.map(tech => (
                            <Box
                              key={tech}
                              sx={{
                                px: 1, py: 0.3, borderRadius: '5px',
                                fontSize: '0.7rem', fontWeight: 600,
                                background: isDark
                                  ? `${getTechColor(tech)}10`
                                  : `${getTechColor(tech)}0C`,
                                border: `1px solid ${getTechColor(tech)}28`,
                                color: getTechColor(tech),
                                transition: 'all 0.15s ease',
                                '&:hover': {
                                  background: `${getTechColor(tech)}20`,
                                  transform: 'translateY(-1px)',
                                },
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Actions */}
                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                        {project.liveUrl ? (
                          <Button
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="contained"
                            endIcon={<OpenInNewIcon sx={{ fontSize: '0.8rem !important' }} />}
                            sx={{
                              flex: 1, py: 1, fontSize: '0.78rem', fontWeight: 600,
                              borderRadius: '8px',
                              background: `linear-gradient(135deg, ${meta.color}CC, ${meta.color})`,
                              boxShadow: `0 4px 14px ${meta.dimColor.replace('0.1', '0.35')}`,
                              color: '#fff',
                              border: '1px solid rgba(255,255,255,0.1)',
                              '&:hover': {
                                background: `linear-gradient(135deg, ${meta.color}, ${meta.color}CC)`,
                                boxShadow: `0 6px 20px ${meta.dimColor.replace('0.1', '0.45')}`,
                                transform: 'translateY(-2px)',
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon sx={{ fontSize: '0.9rem !important' }} />}
                            sx={{
                              flex: 1, py: 1, fontSize: '0.78rem', fontWeight: 600,
                              borderRadius: '8px',
                              borderColor: meta.borderColor,
                              color: meta.color,
                              background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.07'),
                              '&:hover': {
                                borderColor: meta.color,
                                background: isDark
                                  ? meta.dimColor.replace('0.1', '0.18')
                                  : meta.dimColor.replace('0.1', '0.12'),
                                transform: 'translateY(-2px)',
                              },
                            }}
                          >
                            View Details
                          </Button>
                        )}

                        {project.githubUrl && (
                          <Button
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="outlined"
                            aria-label="View on GitHub"
                            sx={{
                              py: 1, px: 1.5, minWidth: 42, borderRadius: '8px',
                              borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                              color: 'text.secondary',
                              '&:hover': {
                                borderColor: 'text.primary',
                                color: 'text.primary',
                                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                transform: 'translateY(-2px)',
                              },
                            }}
                          >
                            <GitHubIcon sx={{ fontSize: '1rem' }} />
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};
