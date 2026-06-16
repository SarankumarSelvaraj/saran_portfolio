import React from 'react';
import { Box, Container, Typography, Grid, CardContent, Stack, useTheme } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VerifiedIcon from '@mui/icons-material/Verified';
import { certifications, awards } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const Certifications: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="certifications"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.3)' : 'rgba(241, 245, 249, 0.5)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Certifications Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left">
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.2,
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'primary.main',
                    display: 'flex',
                  }}
                >
                  <WorkspacePremiumIcon fontSize="large" />
                </Box>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, fontFamily: '"Outfit", sans-serif', fontWeight: 800 }}>
                  Certifications
                </Typography>
              </Box>
            </ScrollReveal>

            <Stack spacing={3}>
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                  <GlassCard hoverEffect sx={{ width: '100%' }}>
                    <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <VerifiedIcon color="primary" sx={{ fontSize: 28 }} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>
                            {cert.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {cert.issuer}
                          </Typography>
                        </Box>
                      </Box>
                      {cert.issueDate && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                          <CalendarTodayIcon sx={{ fontSize: '0.85rem' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {cert.issueDate}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </Stack>
          </Grid>

          {/* Awards Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="right">
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.2,
                    borderRadius: '10px',
                    background: 'rgba(20, 184, 166, 0.1)',
                    color: 'secondary.main',
                    display: 'flex',
                  }}
                >
                  <EmojiEventsIcon fontSize="large" />
                </Box>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, fontFamily: '"Outfit", sans-serif', fontWeight: 800 }}>
                  Awards & Honors
                </Typography>
              </Box>
            </ScrollReveal>

            <Stack spacing={3}>
              {awards.map((award, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 0.15}>
                  <GlassCard hoverEffect sx={{ width: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.1rem', color: 'text.primary' }}>
                          {award.title}
                        </Typography>
                        <Box
                          sx={{
                            py: 0.5,
                            px: 1.5,
                            borderRadius: '20px',
                            background: theme.palette.mode === 'dark' ? 'rgba(52, 211, 153, 0.12)' : 'rgba(5, 150, 105, 0.08)',
                            border: `1px solid ${theme.palette.secondary.light}33`,
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                            {award.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main', mb: 1.5 }}>
                        {award.organization}
                      </Typography>
                      {award.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {award.description}
                        </Typography>
                      )}
                    </CardContent>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
