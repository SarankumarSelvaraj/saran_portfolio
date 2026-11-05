import React, { useState } from 'react';
import {
  Box, Container, Typography, useTheme, Chip, Stack, Collapse, Button,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { experiences } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';

const TECH_TAGS: Record<string, string[]> = {
  exp1: [
    'React.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB',
    'RTK Query', 'Redux Toolkit', 'WebSockets', 'AWS S3', 'Firebase',
    'FCM', 'Recharts', 'Express.js',
  ],
};

const TECH_COLOR: Record<string, string> = {
  'react.js': '#61DAFB', 'react native': '#61DAFB', 'typescript': '#3178C6',
  'redux toolkit': '#764ABC', 'rtk query': '#764ABC', 'firebase': '#FFCA28',
  'aws s3': '#FF9900', 'mongodb': '#47A248', 'node.js': '#339933',
  'express.js': '#339933', 'websockets': '#6366F1', 'recharts': '#8884D8',
  'fcm': '#FF6D00',
};

const getTechColor = (t: string) => TECH_COLOR[t.toLowerCase()] ?? '#6B7280';

const HIGHLIGHTS_META = [
  { gradient: 'linear-gradient(135deg,#6366F1,#8B5CF6)', neon: 'rgba(99,102,241,0.35)' },
  { gradient: 'linear-gradient(135deg,#06B6D4,#3B82F6)', neon: 'rgba(6,182,212,0.35)' },
  { gradient: 'linear-gradient(135deg,#10B981,#34D399)', neon: 'rgba(16,185,129,0.35)' },
  { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', neon: 'rgba(245,158,11,0.35)' },
  { gradient: 'linear-gradient(135deg,#EC4899,#F43F5E)', neon: 'rgba(236,72,153,0.35)' },
  { gradient: 'linear-gradient(135deg,#8B5CF6,#6366F1)', neon: 'rgba(139,92,246,0.35)' },
  { gradient: 'linear-gradient(135deg,#F97316,#EF4444)', neon: 'rgba(249,115,22,0.35)' },
];

export const Experience: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [expandedId, setExpandedId] = useState<string>(experiences[0]?.id ?? '');

  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 14 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="04"
          eyebrow="Career Path"
          title="Work Experience"
          subtitle="Building production-grade systems across healthcare, AI, IoT, and enterprise platforms."
        />

        {/* Timeline wrapper */}
        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto', pl: { xs: 5, md: 8 } }}>

          {/* Animated vertical connector */}
          <Box sx={{
            position: 'absolute',
            top: 0, left: { xs: 14, md: 24 },
            bottom: 0, width: 3,
            borderRadius: 2,
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, rgba(245,158,11,0.6) 100%)`,
            '&::after': {
              content: '""', position: 'absolute', inset: 0, borderRadius: 2,
              background: 'inherit', filter: 'blur(6px)', opacity: 0.6,
            },
          }} />

          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const techTags = TECH_TAGS[exp.id] ?? [];

            return (
              <Box key={exp.id} sx={{ position: 'relative', mb: index < experiences.length - 1 ? 7 : 0 }}>

                {/* Timeline node */}
                <Box
                  component={motion.div}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.1 }}
                  sx={{
                    position: 'absolute',
                    left: { xs: -38, md: -52 },
                    top: 24,
                    width: { xs: 30, md: 38 },
                    height: { xs: 30, md: 38 },
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    boxShadow: `0 0 0 4px ${isDark ? '#060912' : '#F0F4FF'}, 0 0 0 6px rgba(99,102,241,0.4), 0 0 24px rgba(99,102,241,0.5)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
                    '&::after': {
                      content: '""', position: 'absolute', inset: 0, borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                    },
                  }}
                >
                  <WorkspacePremiumIcon sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, color: '#fff', zIndex: 1 }} />
                </Box>

                <ScrollReveal direction="up" delay={index * 0.12}>
                  <GlassCard hoverEffect={false} accentColor="violet" spotlightColor="rgba(99,102,241,0.08)">
                    <Box sx={{ p: { xs: 3, md: 5 } }}>

                      {/* ── Company banner ── */}
                      <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        gap: 2, mb: 3,
                        pb: 3,
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                          {/* Company logo block */}
                          <Box sx={{
                            width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
                            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
                            '&::after': {
                              content: '""', position: 'absolute', inset: 0, borderRadius: '14px',
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)',
                            },
                            position: 'relative',
                          }}>
                            <Typography sx={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff', fontFamily: '"Outfit", sans-serif' }}>
                              S
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.65rem' }, mb: 0.3, lineHeight: 1.1 }}>
                              {exp.role}
                            </Typography>
                            <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Box sx={{
                                  width: 6, height: 6, borderRadius: '50%',
                                  background: theme.palette.primary.main,
                                  boxShadow: `0 0 6px ${theme.palette.primary.main}`,
                                }} />
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.88rem' }}>
                                  {exp.company}
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.4, fontSize: '0.82rem' }}>
                                <RoomIcon sx={{ fontSize: '0.85rem' }} />{exp.location}
                              </Typography>
                            </Stack>
                          </Box>
                        </Box>

                        {/* Date pill */}
                        <Box sx={{
                          display: 'inline-flex', alignItems: 'center', gap: 1,
                          px: 2.5, py: 1, borderRadius: '30px', flexShrink: 0,
                          background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(79,70,229,0.08)',
                          border: `1px solid ${isDark ? 'rgba(129,140,248,0.25)' : 'rgba(79,70,229,0.2)'}`,
                        }}>
                          <CalendarTodayIcon sx={{ fontSize: '0.82rem', color: 'primary.main' }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                            {exp.startDate} – {exp.endDate}
                          </Typography>
                          {exp.endDate === 'Present' && (
                            <Box sx={{
                              width: 7, height: 7, borderRadius: '50%',
                              background: theme.palette.secondary.main,
                              boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
                              animation: 'expPulse 2s ease infinite',
                              '@keyframes expPulse': {
                                '0%,100%': { boxShadow: `0 0 8px ${theme.palette.secondary.main}` },
                                '50%': { boxShadow: `0 0 16px ${theme.palette.secondary.main}, 0 0 24px ${theme.palette.secondary.main}66` },
                              },
                            }} />
                          )}
                        </Box>
                      </Box>

                      {/* Description */}
                      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.9 }}>
                        {exp.description}
                      </Typography>

                      {/* Tech tags */}
                      {techTags.length > 0 && (
                        <Box sx={{ mb: 3.5 }}>
                          <Typography variant="caption" sx={{
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                            color: 'text.secondary', display: 'block', mb: 1.5, fontSize: '0.7rem',
                          }}>
                            Tech Stack
                          </Typography>
                          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                            {techTags.map(tech => (
                              <motion.div key={tech} whileHover={{ y: -2, scale: 1.05 }} transition={{ duration: 0.15 }}>
                                <Chip label={tech} size="small" sx={{
                                  fontSize: '0.72rem', fontWeight: 700, height: 26,
                                  background: isDark ? `${getTechColor(tech)}18` : `${getTechColor(tech)}12`,
                                  border: `1px solid ${getTechColor(tech)}55`,
                                  color: getTechColor(tech),
                                  '&:hover': {
                                    background: `${getTechColor(tech)}25`,
                                    boxShadow: `0 4px 14px ${getTechColor(tech)}44`,
                                  },
                                }} />
                              </motion.div>
                            ))}
                          </Stack>
                        </Box>
                      )}

                      {/* Highlights toggle */}
                      <Button
                        onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                        endIcon={
                          <ExpandMoreIcon sx={{
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.35s ease',
                            fontSize: '1.1rem !important',
                          }} />
                        }
                        sx={{
                          px: 1.5, py: 0.8, mb: 1.5, borderRadius: '10px',
                          fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase',
                          letterSpacing: '0.08em', color: 'text.primary',
                          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                          '&:hover': {
                            background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(79,70,229,0.07)',
                            color: 'primary.main', borderColor: 'primary.main',
                          },
                        }}
                      >
                        Key Projects & Contributions
                      </Button>

                      <Collapse in={isExpanded} timeout={400}>
                        <Stack spacing={2} sx={{ mt: 1 }}>
                          {exp.highlights.map((highlight, hi) => {
                            const colonIdx = highlight.indexOf(':');
                            const title = colonIdx !== -1 ? highlight.slice(0, colonIdx) : highlight;
                            const details = colonIdx !== -1 ? highlight.slice(colonIdx + 1) : '';
                            const meta = HIGHLIGHTS_META[hi % HIGHLIGHTS_META.length];

                            return (
                              <Box
                                key={hi}
                                component={motion.div}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hi * 0.05, duration: 0.3 }}
                                sx={{
                                  display: 'flex', gap: 2, alignItems: 'flex-start',
                                  p: 2, borderRadius: '14px',
                                  background: isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.02)',
                                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'}`,
                                  transition: 'all 0.2s',
                                  '&:hover': {
                                    background: isDark ? 'rgba(99,102,241,0.07)' : 'rgba(79,70,229,0.04)',
                                    borderColor: isDark ? 'rgba(99,102,241,0.2)' : 'rgba(79,70,229,0.15)',
                                  },
                                }}
                              >
                                <Box sx={{
                                  width: 28, height: 28, borderRadius: '8px', flexShrink: 0,
                                  background: meta.gradient,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  boxShadow: `0 4px 12px ${meta.neon}`,
                                  mt: 0.1,
                                }}>
                                  <CheckCircleOutlinedIcon sx={{ fontSize: '0.85rem', color: '#fff' }} />
                                </Box>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.87rem' }}>
                                  <Box component="span" sx={{
                                    fontWeight: 700, color: 'text.primary',
                                    background: meta.gradient,
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                  }}>
                                    {title}:
                                  </Box>
                                  {details}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Stack>
                      </Collapse>

                    </Box>
                  </GlassCard>
                </ScrollReveal>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
