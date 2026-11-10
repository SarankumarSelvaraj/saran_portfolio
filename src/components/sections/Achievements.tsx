import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { engineeringAchievements } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

/* Icon map — using text symbols to avoid extra MUI icon imports */
const ICON_MAP: Record<string, string> = {
  Security: '🔐',
  CloudUpload: '☁',
  OfflineBolt: '⚡',
  Language: '🌐',
  PictureAsPdf: '📄',
  Widgets: '◈',
  Lock: '🔒',
  Speed: '◎',
  Navigation: '◇',
};

const CARD_COLORS = [
  { color: '#8B5CF6', dimColor: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.2)' },
  { color: '#38BDF8', dimColor: 'rgba(56,189,248,0.1)', borderColor: 'rgba(56,189,248,0.2)' },
  { color: '#34D399', dimColor: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.2)' },
  { color: '#FBBF24', dimColor: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.2)' },
  { color: '#FB7185', dimColor: 'rgba(251,113,133,0.1)', borderColor: 'rgba(251,113,133,0.2)' },
  { color: '#A78BFA', dimColor: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.2)' },
  { color: '#6EE7B7', dimColor: 'rgba(110,231,183,0.1)', borderColor: 'rgba(110,231,183,0.2)' },
  { color: '#FCD34D', dimColor: 'rgba(252,211,77,0.1)', borderColor: 'rgba(252,211,77,0.2)' },
];

export const Achievements: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box id="achievements" sx={{ py: { xs: 10, md: 16 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="05"
          eyebrow="Engineering Highlights"
          title="What I've Engineered"
          subtitle="Real architectural wins with measurable business impact — not just features, but systems."
        />

        <Grid container spacing={3}>
          {engineeringAchievements.map((ach, i) => {
            const { color, dimColor, borderColor } = CARD_COLORS[i % CARD_COLORS.length];
            const icon = ICON_MAP[ach.iconName] ?? '◇';

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <ScrollReveal direction="up" delay={i * 0.07}>
                  <Box
                    component={motion.div}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      background: isDark ? '#16161F' : '#FFFFFF',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor,
                        boxShadow: isDark
                          ? `0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px ${borderColor}`
                          : `0 12px 32px rgba(0,0,0,0.07), 0 0 0 1px ${borderColor}`,
                      },
                    }}
                  >
                    {/* Top accent */}
                    <Box sx={{ height: 2, background: `linear-gradient(90deg, ${color}, ${color}66)` }} />

                    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Header row */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
                        {/* Card number */}
                        <Typography sx={{
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 900, fontSize: '2.2rem', lineHeight: 1,
                          color,
                          opacity: 0.2,
                          letterSpacing: '-0.05em',
                          userSelect: 'none',
                        }}>
                          {String(i + 1).padStart(2, '0')}
                        </Typography>

                        {/* Icon box */}
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          sx={{
                            width: 44, height: 44, borderRadius: '11px',
                            background: isDark ? dimColor : dimColor.replace('0.1', '0.08'),
                            border: `1px solid ${borderColor}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.2rem',
                            flexShrink: 0,
                          }}
                        >
                          {icon}
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          lineHeight: 1.35,
                          color: 'text.primary',
                          mb: 1.25,
                        }}
                      >
                        {ach.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.75,
                          fontSize: '0.835rem',
                          mb: 2.5,
                          flexGrow: 1,
                        }}
                      >
                        {ach.description}
                      </Typography>

                      {/* Impact block */}
                      {ach.impact && (
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: '10px',
                            background: isDark
                              ? dimColor.replace('0.1', '0.07')
                              : dimColor.replace('0.1', '0.05'),
                            border: `1px solid ${borderColor.replace('0.2', '0.15')}`,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <ArrowRightAltIcon sx={{ fontSize: '0.9rem', color, flexShrink: 0 }} />
                            <Typography sx={{
                              fontSize: '0.62rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              color,
                            }}>
                              Impact
                            </Typography>
                          </Box>
                          <Typography sx={{
                            fontSize: '0.8rem',
                            color: 'text.primary',
                            fontWeight: 500,
                            lineHeight: 1.6,
                          }}>
                            {ach.impact}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </ScrollReveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
