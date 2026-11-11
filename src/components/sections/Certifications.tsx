import React from 'react';
import {
  Box, Container, Typography, Grid, Stack, useTheme,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import { certifications, awards } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

/* Issuer config */
interface IssuerMeta {
  lightColor: string;
  darkColor: string;
  lightDimColor: string;
  darkDimColor: string;
  lightBorderColor: string;
  darkBorderColor: string;
  abbr: string;
}

const ISSUER_META: Record<string, IssuerMeta> = {
  // freeCodeCamp Style Guide: Success & Passed Tests
  // Light → #00471b (Dark Green), Dark → #acd157 (Light Green)
  freecodecamp: {
    lightColor: '#00471b',
    darkColor: '#acd157',
    lightDimColor: 'rgba(0,71,27,0.08)',
    darkDimColor: 'rgba(172,209,87,0.1)',
    lightBorderColor: 'rgba(0,71,27,0.18)',
    darkBorderColor: 'rgba(172,209,87,0.22)',
    abbr: '{ }',
  },
  // Anthropic: Editorial Highlights / Warm Clay brand
  // Light → #c6613f (Deep Clay), Dark → #d97757 (Terracotta)
  anthropic: {
    lightColor: '#c6613f',
    darkColor: '#d97757',
    lightDimColor: 'rgba(198,97,63,0.08)',
    darkDimColor: 'rgba(217,119,87,0.1)',
    lightBorderColor: 'rgba(198,97,63,0.18)',
    darkBorderColor: 'rgba(217,119,87,0.22)',
    abbr: 'A',
  },
  // Cisco: Primary Brand / Cisco Blue
  // Light → #049fd9 (Cisco Blue), Dark → #00bceb (Sky Blue)
  cisco: {
    lightColor: '#049fd9',
    darkColor: '#00bceb',
    lightDimColor: 'rgba(4,159,217,0.08)',
    darkDimColor: 'rgba(0,188,235,0.1)',
    lightBorderColor: 'rgba(4,159,217,0.18)',
    darkBorderColor: 'rgba(0,188,235,0.22)',
    abbr: '⌘',
  },
};

const DEFAULT_META: IssuerMeta = {
  lightColor: '#7C3AED',
  darkColor: '#8B5CF6',
  lightDimColor: 'rgba(124,58,237,0.08)',
  darkDimColor: 'rgba(139,92,246,0.1)',
  lightBorderColor: 'rgba(124,58,237,0.18)',
  darkBorderColor: 'rgba(139,92,246,0.2)',
  abbr: '✦',
};

const getIssuerMeta = (issuer: string): IssuerMeta => {
  const low = issuer.toLowerCase();
  for (const [k, v] of Object.entries(ISSUER_META)) {
    if (low.includes(k)) return v;
  }
  return DEFAULT_META;
};

export const Certifications: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="certifications"
      sx={{
        py: { xs: 10, md: 16 },
        background: isDark ? 'rgba(10,10,15,0.4)' : 'rgba(249,249,252,0.8)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          index="06"
          eyebrow="Credentials"
          title="Certifications & Awards"
          subtitle="Verified credentials from freeCodeCamp, Anthropic, and Cisco — plus recognition for engineering excellence."
        />

        <Grid container spacing={5}>
          {/* ── Certifications column ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left">
              {/* Column header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{
                  width: 36, height: 36, borderRadius: '9px',
                  background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(139,92,246,0.35)',
                }}>
                  <VerifiedIcon sx={{ color: '#fff', fontSize: '1rem' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', lineHeight: 1.2 }}>
                    Certifications
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                    {certifications.length} verified credentials
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>

            <Stack spacing={1.5}>
              {certifications.map((cert, i) => {
                const meta = getIssuerMeta(cert.issuer);
                const color = isDark ? meta.darkColor : meta.lightColor;
                const dimColor = isDark ? meta.darkDimColor : meta.lightDimColor;
                const borderColor = isDark ? meta.darkBorderColor : meta.lightBorderColor;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px 0px' }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: '12px',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                        background: isDark ? '#16161F' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor,
                          transform: 'translateX(4px)',
                          boxShadow: isDark
                            ? `0 4px 20px rgba(0,0,0,0.3)`
                            : `0 4px 20px rgba(0,0,0,0.06)`,
                        },
                      }}
                    >
                      {/* Issuer badge */}
                      <Box sx={{
                        width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                        background: dimColor,
                        border: `1px solid ${borderColor}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 800,
                        fontSize: meta.abbr.length > 2 ? '0.9rem' : '1rem',
                        color,
                      }}>
                        {meta.abbr}
                      </Box>

                      {/* Text */}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.3 }}>
                          <VerifiedIcon sx={{ fontSize: '0.8rem', color, flexShrink: 0 }} />
                          <Typography sx={{
                            fontWeight: 600, fontSize: '0.875rem',
                            color: 'text.primary', lineHeight: 1.3,
                            overflow: 'hidden', textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                          }}>
                            {cert.title}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                          <Box sx={{
                            width: 5, height: 5, borderRadius: '50%',
                            background: color, flexShrink: 0,
                          }} />
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 500 }}>
                            {cert.issuer}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Right side */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.75, flexShrink: 0 }}>
                        {cert.issueDate && (
                          <Box sx={{
                            display: 'flex', alignItems: 'center', gap: 0.5,
                            px: 1.25, py: 0.3, borderRadius: '6px',
                            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                          }}>
                            <CalendarTodayIcon sx={{ fontSize: '0.6rem', color: 'text.secondary' }} />
                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'text.secondary', whiteSpace: 'nowrap' }}>
                              {cert.issueDate}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>
          </Grid>

          {/* ── Awards column ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right">
              {/* Column header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{
                  width: 36, height: 36, borderRadius: '9px',
                  background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(251,191,36,0.4)',
                }}>
                  <EmojiEventsIcon sx={{ color: '#fff', fontSize: '1rem' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', lineHeight: 1.2 }}>
                    Awards & Recognition
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                    {awards.length} recognitions
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>

            <Stack spacing={2}>
              {awards.map((award, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 0.1}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: '14px',
                      border: `1px solid ${isDark ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.2)'}`,
                      background: isDark
                        ? 'rgba(251,191,36,0.05)'
                        : 'rgba(251,191,36,0.03)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: 'rgba(251,191,36,0.3)',
                        transform: 'translateY(-2px)',
                        boxShadow: isDark
                          ? '0 8px 24px rgba(0,0,0,0.3)'
                          : '0 8px 24px rgba(0,0,0,0.06)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <Box
                        component={motion.div}
                        animate={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                        sx={{
                          width: 34, height: 34, borderRadius: '9px', flexShrink: 0,
                          background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(251,191,36,0.4)',
                        }}
                      >
                        <StarIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'text.primary', lineHeight: 1.3, mb: 0.25 }}>
                          {award.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#FBBF24', fontWeight: 600 }}>
                            {award.organization}
                          </Typography>
                          <Box sx={{
                            px: 1, py: 0.2, borderRadius: '5px',
                            background: 'rgba(251,191,36,0.1)',
                            border: '1px solid rgba(251,191,36,0.2)',
                          }}>
                            <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, color: '#FBBF24' }}>
                              {award.date}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {award.description && (
                      <Typography sx={{
                        fontSize: '0.82rem',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        pl: 1.5,
                        borderLeft: `2px solid rgba(251,191,36,0.3)`,
                      }}>
                        {award.description}
                      </Typography>
                    )}
                  </Box>
                </ScrollReveal>
              ))}

              {/* Credential summary */}
              <ScrollReveal direction="right" delay={0.25}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: '14px',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 2,
                  }}
                >
                  {[
                    { value: `${certifications.length}`, label: 'Certifications', color: '#8B5CF6' },
                    { value: `${awards.length}`, label: 'Awards', color: '#FBBF24' },
                    { value: '900+', label: 'Learning Hours', color: '#34D399' },
                    { value: '3', label: 'Platforms', color: '#38BDF8' },
                  ].map((item, i) => (
                    <Box key={i} sx={{ textAlign: 'center', py: 0.5 }}>
                      <Typography sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        lineHeight: 1,
                        color: item.color,
                        mb: 0.25,
                      }}>
                        {item.value}
                      </Typography>
                      <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </ScrollReveal>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
