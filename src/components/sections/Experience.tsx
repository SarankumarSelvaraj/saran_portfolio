import React, { useState } from 'react';
import {
  Box, Container, Typography, useTheme, Collapse, Button,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { experiences } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

/* Tech tag color map */
const TECH_COLOR: Record<string, string> = {
  'react.js': '#61DAFB',
  'react native': '#61DAFB',
  'typescript': '#3178C6',
  'redux toolkit': '#764ABC',
  'rtk query': '#764ABC',
  'firebase': '#FFCA28',
  'aws s3': '#FF9900',
  'mongodb': '#47A248',
  'node.js': '#68A063',
  'express.js': '#68A063',
  'websockets': '#8B5CF6',
  'recharts': '#38BDF8',
  'fcm': '#FF6D00',
};

const getTechColor = (t: string) => TECH_COLOR[t.toLowerCase()] ?? '#71717A';

const EXP_TECH_TAGS: Record<string, string[]> = {
  exp1: [
    'React.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB',
    'RTK Query', 'Redux Toolkit', 'WebSockets', 'AWS S3', 'Firebase',
    'FCM', 'Recharts', 'Express.js',
  ],
};

/* Gradient colours for highlight rows */
const HIGHLIGHT_COLORS = [
  '#8B5CF6', '#38BDF8', '#34D399', '#FBBF24', '#FB7185', '#A78BFA', '#6EE7B7',
];

export const Experience: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [expandedId, setExpandedId] = useState<string>(experiences[0]?.id ?? '');

  return (
    <Box id="experience" sx={{ py: { xs: 10, md: 16 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="02"
          eyebrow="Work Experience"
          title="Professional Experience"
          subtitle="Building production systems across healthcare, AI, IoT, and enterprise platforms."
        />

        {/* ── Timeline ── */}
        <Box sx={{ maxWidth: 860, mx: 'auto', position: 'relative' }}>

          {/* Vertical line */}
          <Box sx={{
            position: 'absolute',
            top: 24,
            left: { xs: 14, md: 20 },
            bottom: 24,
            width: 1,
            background: isDark
              ? 'linear-gradient(180deg, rgba(139,92,246,0.5) 0%, rgba(56,189,248,0.3) 100%)'
              : 'linear-gradient(180deg, rgba(124,58,237,0.4) 0%, rgba(2,132,199,0.25) 100%)',
          }} />

          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const techTags = EXP_TECH_TAGS[exp.id] ?? [];

            return (
              <Box
                key={exp.id}
                sx={{
                  position: 'relative',
                  pl: { xs: 6, md: 8 },
                  mb: index < experiences.length - 1 ? 6 : 0,
                }}
              >
                {/* Timeline dot */}
                <Box
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 }}
                  sx={{
                    position: 'absolute',
                    left: { xs: 5, md: 11 },
                    top: 24,
                    width: { xs: 20, md: 20 },
                    height: { xs: 20, md: 20 },
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                    boxShadow: isDark
                      ? '0 0 0 3px #0A0A0F, 0 0 0 5px rgba(139,92,246,0.3), 0 0 16px rgba(139,92,246,0.4)'
                      : '0 0 0 3px #FAFAFA, 0 0 0 5px rgba(124,58,237,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <Box sx={{
                    width: 6, height: 6, borderRadius: '2px',
                    background: 'rgba(255,255,255,0.9)',
                  }} />
                </Box>

                <ScrollReveal direction="up" delay={index * 0.1}>
                  <Box
                    sx={{
                      borderRadius: '16px',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                      background: isDark ? '#16161F' : '#FFFFFF',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease',
                      '&:hover': {
                        borderColor: isDark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.15)',
                      },
                    }}
                  >
                    {/* Top accent */}
                    <Box sx={{
                      height: 2,
                      background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)',
                    }} />

                    <Box sx={{ p: { xs: 3, md: 4 } }}>
                      {/* ── Header ── */}
                      <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'flex-start' },
                        gap: 2,
                        mb: 2.5,
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          {/* Company logo */}
                          <Box sx={{
                            width: 48, height: 48, borderRadius: '12px', flexShrink: 0,
                            background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 14px rgba(139,92,246,0.35)',
                          }}>
                            <Typography sx={{
                              fontFamily: '"Outfit", sans-serif',
                              fontWeight: 800,
                              fontSize: '1.1rem',
                              color: '#fff',
                            }}>
                              S
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              variant="h4"
                              sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                lineHeight: 1.2,
                                color: 'text.primary',
                                mb: 0.4,
                              }}
                            >
                              {exp.role}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1.5 }}>
                              <Typography sx={{
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                color: isDark ? '#A78BFA' : '#7C3AED',
                              }}>
                                {exp.company}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                                <LocationOnIcon sx={{ fontSize: '0.8rem', color: 'text.disabled' }} />
                                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                                  {exp.location}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>

                        {/* Date badge */}
                        <Box sx={{
                          display: 'inline-flex', alignItems: 'center', gap: 1,
                          px: 2, py: 0.75, borderRadius: '8px', flexShrink: 0,
                          background: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)',
                          border: `1px solid ${isDark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.15)'}`,
                        }}>
                          <CalendarTodayIcon sx={{ fontSize: '0.75rem', color: isDark ? '#A78BFA' : '#7C3AED' }} />
                          <Typography sx={{
                            fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap',
                            color: isDark ? '#A78BFA' : '#7C3AED',
                          }}>
                            {exp.startDate} – {exp.endDate}
                          </Typography>
                          {exp.endDate === 'Present' && (
                            <Box sx={{
                              width: 6, height: 6, borderRadius: '50%',
                              background: '#34D399',
                              boxShadow: '0 0 6px #34D399',
                              animation: 'statusPulse 2.5s ease infinite',
                            }} />
                          )}
                        </Box>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.75,
                          mb: 3,
                          fontSize: '0.9rem',
                        }}
                      >
                        {exp.description}
                      </Typography>

                      {/* Tech stack */}
                      {techTags.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                          <Typography sx={{
                            fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em',
                            textTransform: 'uppercase', color: 'text.disabled', mb: 1.5,
                          }}>
                            Tech Stack
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                            {techTags.map(tech => (
                              <Box
                                key={tech}
                                component={motion.div}
                                whileHover={{ y: -1, scale: 1.04 }}
                                transition={{ duration: 0.12 }}
                                sx={{
                                  px: 1.25, py: 0.45, borderRadius: '6px',
                                  fontSize: '0.72rem', fontWeight: 600,
                                  background: isDark
                                    ? `${getTechColor(tech)}12`
                                    : `${getTechColor(tech)}0D`,
                                  border: `1px solid ${getTechColor(tech)}30`,
                                  color: getTechColor(tech),
                                  transition: 'all 0.15s ease',
                                  '&:hover': {
                                    background: `${getTechColor(tech)}22`,
                                    borderColor: `${getTechColor(tech)}55`,
                                  },
                                }}
                              >
                                {tech}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}

                      {/* Key contributions toggle */}
                      <Box
                        sx={{
                          borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                          pt: 2.5,
                        }}
                      >
                        <Button
                          onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                          endIcon={
                            <ExpandMoreIcon
                              sx={{
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.3s ease',
                                fontSize: '1rem !important',
                              }}
                            />
                          }
                          sx={{
                            px: 2, py: 0.75, mb: 1,
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: isDark ? '#A78BFA' : '#7C3AED',
                            background: isDark
                              ? 'rgba(139,92,246,0.07)'
                              : 'rgba(124,58,237,0.05)',
                            border: `1px solid ${isDark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.12)'}`,
                            '&:hover': {
                              background: isDark
                                ? 'rgba(139,92,246,0.12)'
                                : 'rgba(124,58,237,0.09)',
                              borderColor: isDark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)',
                            },
                          }}
                        >
                          Key Projects & Contributions
                        </Button>

                        <Collapse in={isExpanded} timeout={350}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
                            {exp.highlights.map((highlight, hi) => {
                              const colonIdx = highlight.indexOf(':');
                              const title = colonIdx !== -1 ? highlight.slice(0, colonIdx) : highlight;
                              const details = colonIdx !== -1 ? highlight.slice(colonIdx + 1) : '';
                              const color = HIGHLIGHT_COLORS[hi % HIGHLIGHT_COLORS.length];

                              return (
                                <Box
                                  key={hi}
                                  component={motion.div}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: hi * 0.04, duration: 0.25 }}
                                  sx={{
                                    display: 'flex',
                                    gap: 2,
                                    p: 2,
                                    borderRadius: '10px',
                                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}`,
                                    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                                    transition: 'all 0.15s ease',
                                    '&:hover': {
                                      background: isDark ? `${color}08` : `${color}05`,
                                      borderColor: `${color}25`,
                                    },
                                  }}
                                >
                                  {/* Accent dot */}
                                  <Box sx={{
                                    width: 4, flexShrink: 0, borderRadius: 2,
                                    background: color,
                                    minHeight: '100%',
                                    alignSelf: 'stretch',
                                    mt: 0.1,
                                    opacity: 0.8,
                                  }} />
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'text.secondary',
                                      lineHeight: 1.7,
                                      fontSize: '0.845rem',
                                    }}
                                  >
                                    <Box
                                      component="span"
                                      sx={{
                                        fontWeight: 600,
                                        color: 'text.primary',
                                        mr: 0.5,
                                      }}
                                    >
                                      {title}:
                                    </Box>
                                    {details}
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Box>
                        </Collapse>
                      </Box>
                    </Box>
                  </Box>
                </ScrollReveal>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
