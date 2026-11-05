import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import LanguageIcon from '@mui/icons-material/Language';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NavigationIcon from '@mui/icons-material/Navigation';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { engineeringAchievements } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';

const CARD_GRADIENTS = [
  { gradient: 'linear-gradient(135deg,#6366F1,#8B5CF6)', neon: 'rgba(99,102,241,.4)', accent: 'violet' as const },
  { gradient: 'linear-gradient(135deg,#10B981,#06B6D4)', neon: 'rgba(16,185,129,.4)', accent: 'secondary' as const },
  { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', neon: 'rgba(245,158,11,.4)', accent: 'amber' as const },
  { gradient: 'linear-gradient(135deg,#EC4899,#F43F5E)', neon: 'rgba(236,72,153,.4)', accent: 'rose' as const },
  { gradient: 'linear-gradient(135deg,#06B6D4,#3B82F6)', neon: 'rgba(6,182,212,.4)', accent: 'cyan' as const },
  { gradient: 'linear-gradient(135deg,#8B5CF6,#6366F1)', neon: 'rgba(139,92,246,.4)', accent: 'violet' as const },
  { gradient: 'linear-gradient(135deg,#F97316,#EF4444)', neon: 'rgba(249,115,22,.4)', accent: 'amber' as const },
];

const ICON_MAP: Record<string, React.ReactNode> = {
  Security: <SecurityIcon sx={{ fontSize: 28, color: '#fff' }} />,
  CloudUpload: <CloudUploadIcon sx={{ fontSize: 28, color: '#fff' }} />,
  OfflineBolt: <OfflineBoltIcon sx={{ fontSize: 28, color: '#fff' }} />,
  Language: <LanguageIcon sx={{ fontSize: 28, color: '#fff' }} />,
  PictureAsPdf: <PictureAsPdfIcon sx={{ fontSize: 28, color: '#fff' }} />,
  Widgets: <WidgetsIcon sx={{ fontSize: 28, color: '#fff' }} />,
  Navigation: <NavigationIcon sx={{ fontSize: 28, color: '#fff' }} />,
};

export const Achievements: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box id="achievements" sx={{ py: { xs: 8, md: 14 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="06"
          eyebrow="Architectural Design"
          title="Engineering Achievements"
          subtitle="Real-world technical wins with measurable business impact."
        />

        <Grid container spacing={3.5}>
          {engineeringAchievements.map((ach, i) => {
            const meta = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
            const icon = ICON_MAP[ach.iconName] ?? <WidgetsIcon sx={{ fontSize: 28, color: '#fff' }} />;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <ScrollReveal direction="up" delay={i * 0.08}>
                  <GlassCard hoverEffect tilt accentColor={meta.accent} spotlightColor={meta.neon} sx={{ height: '100%' }}>
                    <Box sx={{ p: { xs: 3, md: 4 } }}>

                      {/* Number + icon row */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                        {/* Card number */}
                        <Typography sx={{
                          fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                          fontSize: '3rem', lineHeight: 1, letterSpacing: '-0.05em',
                          background: meta.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                          opacity: 0.25,
                          userSelect: 'none',
                        }}>
                          {String(i + 1).padStart(2, '0')}
                        </Typography>

                        {/* Icon box with glow */}
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.12 }}
                          transition={{ duration: 0.2 }}
                          sx={{
                            width: 54, height: 54, borderRadius: '16px', flexShrink: 0,
                            background: meta.gradient,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: `0 8px 24px ${meta.neon}`,
                            position: 'relative',
                            '&::after': {
                              content: '""', position: 'absolute', inset: 0, borderRadius: '16px',
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                            },
                          }}
                        >
                          {icon}
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.35, mb: 1.5 }}>
                        {ach.title}
                      </Typography>

                      {/* Description */}
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2.5, fontSize: '0.87rem' }}>
                        {ach.description}
                      </Typography>

                      {/* Impact banner */}
                      {ach.impact && (
                        <Box sx={{
                          px: 2, py: 1.5, borderRadius: '12px',
                          background: isDark ? `${meta.neon.replace('0.4', '0.08')}` : `${meta.neon.replace('0.4', '0.06')}`,
                          border: `1px solid ${meta.neon.replace('0.4', '0.25')}`,
                          display: 'flex', alignItems: 'flex-start', gap: 1.5,
                        }}>
                          <TrendingUpIcon sx={{ fontSize: '1rem', mt: 0.2, flexShrink: 0, color: meta.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? 'secondary.main' }} />
                          <Box>
                            <Typography variant="caption" sx={{
                              fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
                              display: 'block', mb: 0.3, fontSize: '0.62rem',
                              color: meta.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0],
                            }}>
                              Impact
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.83rem', lineHeight: 1.5 }}>
                              {ach.impact}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </GlassCard>
                </ScrollReveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
