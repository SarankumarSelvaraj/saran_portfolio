import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Stack, useTheme, Chip, Button, Tooltip,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { certifications, awards } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Issuer brand config ── */
interface IssuerConfig {
  colorLight: string;  // color on light background
  colorDark: string;   // color on dark background
  bg: string;
  gradientLight: string;
  gradientDark: string;
  neon: string;
  logo: string;
  hours?: string;
}

const ISSUER_CONFIG: Record<string, IssuerConfig> = {
  freeCodeCamp: {
    // fCC navy on light, flame orange on dark
    colorLight: '#0A0A23',
    colorDark: '#F03000',
    bg: 'rgba(240,48,0,0.1)',
    gradientLight: 'linear-gradient(135deg, #0A0A23 0%, #1B1B4B 100%)',
    gradientDark: 'linear-gradient(135deg, #C42600 0%, #F03000 100%)',
    neon: 'rgba(240,48,0,0.45)',
    logo: '{ }',
    hours: '300 hrs',
  },
  Anthropic: {
    colorLight: '#B45309',
    colorDark: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    gradientLight: 'linear-gradient(135deg, #92400E 0%, #D97706 100%)',
    gradientDark: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    neon: 'rgba(245,158,11,0.45)',
    logo: 'A',
    hours: undefined,
  },
  'Cisco Networking Academy': {
    colorLight: '#0369A1',
    colorDark: '#38BDF8',
    bg: 'rgba(56,189,248,0.1)',
    gradientLight: 'linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)',
    gradientDark: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
    neon: 'rgba(14,165,233,0.45)',
    logo: '⌘',
    hours: undefined,
  },
};

const DEFAULT_CONFIG: IssuerConfig = {
  colorLight: '#4F46E5', colorDark: '#818CF8',
  bg: 'rgba(99,102,241,0.1)',
  gradientLight: 'linear-gradient(135deg,#4F46E5,#6366F1)',
  gradientDark: 'linear-gradient(135deg,#6366F1,#818CF8)',
  neon: 'rgba(99,102,241,0.4)', logo: '✦',
};

const getIssuerConfig = (issuer: string): IssuerConfig => {
  for (const [k, v] of Object.entries(ISSUER_CONFIG)) {
    if (issuer.toLowerCase().includes(k.toLowerCase())) return v;
  }
  return DEFAULT_CONFIG;
};

/* Flip card component */
const CertCard: React.FC<{
  cert: typeof certifications[0];
  index: number;
  isDark: boolean;
}> = ({ cert, index, isDark }) => {
  const [flipped, setFlipped] = useState(false);
  const cfg = getIssuerConfig(cert.issuer);

  // Resolved theme-aware values
  const color = isDark ? cfg.colorDark : cfg.colorLight;
  const gradient = isDark ? cfg.gradientDark : cfg.gradientLight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px 0px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ perspective: 1200, height: '100%' }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 130,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: 'pointer',
        }}
        onClick={() => setFlipped(f => !f)}
      >
        {/* ── FRONT ── */}
        <Box sx={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}>
          <GlassCard hoverEffect={false} accentColor="violet" spotlightColor={cfg.neon} sx={{ height: '100%' }}>
            <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2, height: '100%' }}>

              {/* Issuer logo block */}
              <Box sx={{
                width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
                background: gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 8px 20px ${cfg.neon}`,
                fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                fontSize: cfg.logo.length > 2 ? '1.1rem' : '1.3rem',
                color: '#fff',
                position: 'relative',
                '&::after': {
                  content: '""', position: 'absolute', inset: 0, borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 60%)',
                },
              }}>
                {cfg.logo}
              </Box>

              {/* Text info */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, mb: 0.5 }}>
                  <VerifiedIcon sx={{ fontSize: '0.85rem', color, flexShrink: 0 }} />
                  <Typography variant="subtitle2" sx={{
                    fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.3,
                    overflow: 'hidden', textOverflow: 'ellipsis',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  }}>
                    {cert.title}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{
                  color: 'text.secondary', fontWeight: 600, fontSize: '0.72rem',
                  display: 'flex', alignItems: 'center', gap: 0.5,
                }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, boxShadow: `0 0 5px ${color}` }} />
                  {cert.issuer}
                </Typography>
              </Box>

              {/* Right column: date + flip hint */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1, flexShrink: 0 }}>
                {cert.issueDate && (
                  <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 0.4,
                    px: 1.2, py: 0.35, borderRadius: '20px',
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  }}>
                    <CalendarTodayIcon sx={{ fontSize: '0.6rem', color: 'text.secondary' }} />
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '0.68rem', whiteSpace: 'nowrap' }}>
                      {cert.issueDate}
                    </Typography>
                  </Box>
                )}
                {cfg.hours && (
                  <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 0.4,
                    px: 1.2, py: 0.35, borderRadius: '20px',
                    background: isDark ? `${color}18` : `${color}10`,
                    border: `1px solid ${color}44`,
                  }}>
                    <AccessTimeIcon sx={{ fontSize: '0.6rem', color }} />
                    <Typography variant="caption" sx={{ fontWeight: 700, color, fontSize: '0.68rem' }}>
                      {cfg.hours}
                    </Typography>
                  </Box>
                )}
                <Typography variant="caption" sx={{
                  fontSize: '0.58rem', color: 'text.secondary', opacity: 0.5,
                  letterSpacing: '0.05em',
                }}>
                  tap to verify →
                </Typography>
              </Box>
            </Box>
          </GlassCard>
        </Box>

        {/* ── BACK ── */}
        <Box sx={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}>
          <Box sx={{
            height: '100%', borderRadius: '24px', overflow: 'hidden',
            background: gradient,
            border: `1px solid ${cfg.neon}`,
            boxShadow: `0 8px 32px ${cfg.neon}`,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 1.5, px: 3, textAlign: 'center',
            position: 'relative',
            '&::before': {
              content: '""', position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            },
          }}>
            <Box sx={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1,
            }}>
              <VerifiedIcon sx={{ color: '#fff', fontSize: '1.1rem' }} />
            </Box>
            <Box sx={{ zIndex: 1 }}>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', mb: 0.3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Issued by
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>
                {cert.issuer}
              </Typography>
            </Box>
            {cert.credentialUrl && cert.credentialUrl !== 'https://www.anthropic.com' && cert.credentialUrl !== 'https://www.netacad.com' ? (
              <Button
                component="a"
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                size="small"
                endIcon={<OpenInNewIcon sx={{ fontSize: '0.75rem !important' }} />}
                sx={{
                  zIndex: 2, px: 2.5, py: 0.7, borderRadius: '20px',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: '0.76rem', fontWeight: 700,
                  textTransform: 'none',
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.28)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                  },
                }}
              >
                Verify Certificate
              </Button>
            ) : (
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', zIndex: 1 }}>
                tap to flip back
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const fccCount = certifications.filter(c => c.issuer.toLowerCase().includes('freecodecamp')).length;
  const anthCount = certifications.filter(c => c.issuer.toLowerCase().includes('anthropic')).length;
  const otherCount = certifications.length - fccCount - anthCount;

  const SUMMARY = [
    { label: 'freeCodeCamp', count: fccCount, color: isDark ? '#F03000' : '#0A0A23', grad: isDark ? 'linear-gradient(135deg,#C42600,#F03000)' : 'linear-gradient(135deg,#0A0A23,#1B1B4B)' },
    { label: 'Anthropic', count: anthCount, color: isDark ? '#F59E0B' : '#B45309', grad: isDark ? 'linear-gradient(135deg,#D97706,#F59E0B)' : 'linear-gradient(135deg,#92400E,#D97706)' },
    { label: 'Other', count: otherCount, color: isDark ? '#38BDF8' : '#0369A1', grad: isDark ? 'linear-gradient(135deg,#0EA5E9,#38BDF8)' : 'linear-gradient(135deg,#0369A1,#0EA5E9)' },
  ].filter(s => s.count > 0);

  return (
    <Box id="certifications" sx={{
      py: { xs: 8, md: 14 },
      background: isDark ? 'rgba(6,9,18,0.4)' : 'rgba(240,244,255,0.6)',
      position: 'relative',
    }}>
      <Container maxWidth="lg">
        <SectionHeading
          index="07"
          eyebrow="Credentials"
          title="Certifications & Awards"
          subtitle="Verified credentials from freeCodeCamp, Anthropic & Cisco. Tap any certificate to flip and verify."
        />

        {/* Summary chips row */}
        <ScrollReveal direction="up" delay={0.1}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 7 }}>
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: 1,
              px: 2, py: 0.8, borderRadius: '30px',
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
            }}>
              <WorkspacePremiumIcon sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.8rem' }}>
                {certifications.length} Certifications
              </Typography>
            </Box>
            {SUMMARY.map(s => (
              <Box key={s.label} sx={{
                display: 'flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.8, borderRadius: '30px',
                background: isDark ? `${s.color}15` : `${s.color}10`,
                border: `1px solid ${s.color}33`,
              }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: s.grad, boxShadow: `0 0 6px ${s.color}` }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: s.color, fontSize: '0.78rem' }}>
                  {s.count} × {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </ScrollReveal>

        <Grid container spacing={5}>
          {/* ── Certifications column ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: '13px',
                  background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
                }}>
                  <WorkspacePremiumIcon sx={{ color: '#fff', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, lineHeight: 1.1 }}>
                    Certifications
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Tap a card to flip &amp; view verify link
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>

            <Stack spacing={2}>
              {certifications.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} isDark={isDark} />
              ))}
            </Stack>
          </Grid>

          {/* ── Awards column ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: '13px',
                  background: 'linear-gradient(135deg,#F59E0B,#F97316)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(245,158,11,0.45)',
                }}>
                  <EmojiEventsIcon sx={{ color: '#fff', fontSize: 20 }} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800 }}>
                  Awards & Honors
                </Typography>
              </Box>
            </ScrollReveal>

            <Stack spacing={2.5}>
              {awards.map((award, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 0.12}>
                  <GlassCard hoverEffect tilt accentColor="amber" spotlightColor="rgba(245,158,11,0.1)">
                    <Box sx={{ p: 3 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flex: 1 }}>
                          <Box
                            component={motion.div}
                            animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                            sx={{
                              width: 36, height: 36, borderRadius: '10px', flexShrink: 0,
                              background: 'linear-gradient(135deg,#F59E0B,#F97316)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              boxShadow: '0 6px 18px rgba(245,158,11,0.5)',
                            }}
                          >
                            <StarIcon sx={{ fontSize: '1rem', color: '#fff' }} />
                          </Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.3 }}>
                            {award.title}
                          </Typography>
                        </Box>
                        <Chip
                          label={award.date}
                          size="small"
                          sx={{
                            fontWeight: 700, fontSize: '0.68rem', height: 22, flexShrink: 0, ml: 1,
                            background: isDark ? 'rgba(245,158,11,0.12)' : 'rgba(245,158,11,0.1)',
                            border: '1px solid rgba(245,158,11,0.3)',
                            color: '#F59E0B',
                          }}
                        />
                      </Box>

                      {/* Organisation */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, mb: 1.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: theme.palette.primary.main, flexShrink: 0, boxShadow: `0 0 6px ${theme.palette.primary.main}` }} />
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.78rem' }}>
                          {award.organization}
                        </Typography>
                      </Box>

                      {/* Description with left border */}
                      {award.description && (
                        <Typography variant="body2" sx={{
                          color: 'text.secondary', lineHeight: 1.75, fontSize: '0.83rem',
                          pl: 1.5,
                          borderLeft: '2px solid rgba(245,158,11,0.35)',
                        }}>
                          {award.description}
                        </Typography>
                      )}
                    </Box>
                  </GlassCard>
                </ScrollReveal>
              ))}

              {/* Total hours card */}
              <ScrollReveal direction="right" delay={0.3}>
                <Box sx={{
                  p: 3, borderRadius: '20px',
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.07) 100%)',
                  border: `1px solid ${isDark ? 'rgba(99,102,241,0.2)' : 'rgba(79,70,229,0.15)'}`,
                  display: 'flex', alignItems: 'center', gap: 2.5,
                }}>
                  <Box sx={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(99,102,241,0.4)', flexShrink: 0,
                  }}>
                    <AccessTimeIcon sx={{ color: '#fff', fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontFamily: '"Outfit", sans-serif', fontWeight: 900, fontSize: '1.8rem',
                      lineHeight: 1,
                      background: 'linear-gradient(135deg,#818CF8,#34D399)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                      900+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.83rem' }}>
                      Hours of certified learning
                    </Typography>
                  </Box>
                </Box>
              </ScrollReveal>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
